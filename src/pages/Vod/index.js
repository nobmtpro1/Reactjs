import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import League from './components/League'
import VodComponent from './components/Vod'
import moment from 'moment'

const Vod = () =>
{
	const params = useParams()
	const [ leagues, setLeagues ] = useState( [] )
	const [ vods, setVods ] = useState( [] )
	const [ vodsFilter, setVodsFilter ] = useState( [] )

	// console.log( vodsFilter )

	useEffect( () =>
	{
		axios.get( '/vods/leagues' ).then( res =>
		{
			setLeagues( res.data?.leagues?.sort( ( a, b ) =>
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
			} ) )
		} ).catch( error =>
		{
			console.log( error )
		} )

		axios.get( '/vods/matches' ).then( res =>
		{
			var arr = [ ...res.data?.schedule?.events ]
			arr.forEach( e =>
			{
				e.startTimeFormat = moment( e.startTime ).format( 'dddd, MMMM DD' )
			} )
			arr.sort( ( a, b ) =>
			{

				if ( moment( a.startTime ) > moment( b.startTime ) )
				{
					return -1;
				}
				if ( moment( a.startTime ) < moment( b.startTime ) )
				{
					return 1;
				}

				return 0;
			} )
			setVods( arr )
		} ).catch( error =>
		{
			console.log( error )
		} )
	}, [] )

	useEffect( () =>
	{
		var arr = vods?.filter( e =>
		{
			if ( params?.league )
			{
				return params?.league.toLowerCase() === e?.league?.name.toLowerCase()
			} else
			{
				return e?.league?.name.toLowerCase() === leagues[ 0 ]?.slug.toLowerCase()
			}
		} )

		var result = arr.reduce( function ( r, a )
		{
			r[ a.startTimeFormat ] = r[ a.startTimeFormat ] || [];
			r[ a.startTimeFormat ].push( a );
			return r;
		}, Object.create( null ) );

		result = Object.values( result );
		setVodsFilter( result )
	}, [ params, vods, leagues ] )

	return (
		<div className='page-vod'>
			<div className='left'>
				<div className='title'>
					REGIONS & EVENTS
				</div>
				<div className='content'>
					{
						leagues.map( ( e, i ) => <League e={ e } key={ i } i={ i } params={ params } /> )
					}
				</div>
			</div>
			<div className='right'>
				{
					vodsFilter?.map( ( e, i ) => <VodComponent key={ i } e={ e } /> )
				}
			</div>
		</div>
	)
}

export default Vod