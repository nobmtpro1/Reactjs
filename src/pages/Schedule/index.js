import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ScheduleComponent from './components/Schedule'
import LeagueComponent from './components/League'
import moment from 'moment'
import { isElementVisible } from '../../utils/Helpers'

const Schedule = () =>
{
	const [ leagues, setLeagues ] = useState( [] )
	const [ schedule, setSchedule ] = useState( [] )
	const [ scheduleFilter, setScheduleFilter ] = useState( [] )
	let [ searchParams, setSearchParams ] = useSearchParams();

	const ref = useRef( null )

	useEffect( () =>
	{
		axios.get( 'leagues' ).then( res =>
		{
			setLeagues( res?.data?.leagues )
		} ).catch( error =>
		{
			console.log( error )
		} )

		axios.get( 'schedule' ).then( res =>
		{
			setSchedule( res?.data?.schedule?.events )
		} ).catch( error =>
		{
			console.log( error )
		} )
	}, [] )

	useEffect( () =>
	{
		setScheduleFilter( prev => schedule.filter( e => searchParams?.get( 'leagues' )?.split( ',' )?.includes( e?.league?.slug ) ) )
	}, [ schedule, searchParams ] )

	const handleToday = () =>
	{
		var items = document.querySelectorAll( '.item' )
		var today = document.querySelector( '#a' + moment().format( 'DDMMYYYY' ) )
		if ( today )
		{
			today.scrollIntoView();
		} else
		{
			items[ items.length - 1 ].scrollIntoView();
		}

	}

	useEffect( () =>
	{
	

		ref.current.addEventListener( 'scroll', function ()
		{
			var items = document.querySelectorAll( '.item' )
			var todayButton = document.querySelector( '.today' )
			var today = document.querySelector( '#a' + moment().format( 'DDMMYYYY' ) )
			if ( !today )
			{
				today = items[ items.length - 1 ];
			}

			if ( isElementVisible( today ) )
			{
				todayButton.style.display = 'none'
			} else
			{
				todayButton.style.display = 'block'
			}
		} )
	}, [] )


	return (
		<div className='page-schedule'>

			<div className='left' ref={ ref }>
				<div className='today' onClick={ handleToday }>
					TODAY
				</div>
				{
					scheduleFilter?.map( ( e, i ) => <ScheduleComponent e={ e } key={ i } /> )
				}
			</div>
			<div className='right'>
				<div className='title'>FILTER</div>
				<div className='leagues'>
					{
						leagues?.sort( ( a, b ) =>
						{
							if ( a.priority > b.priority )
							{
								return 1;
							}
							if ( a.priority < b.priority )
							{
								return -1;
							}

							return 0;
						} ).map( ( e, i ) => <LeagueComponent e={ e } searchParams={ searchParams } setSearchParams={ setSearchParams } key={ i } /> )
					}
				</div>
			</div>
		</div>
	)
}

export default Schedule