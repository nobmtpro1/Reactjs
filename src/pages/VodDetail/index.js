import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Dragons from './components/Dragons';
import Games from './components/Games';
import Golds from './components/Golds';
import Option from './components/Option';
import Player from './components/Player';
import Teams from './components/Teams';
import moment from 'moment';
import Details from './components/Details';
import CompareStats from './components/CompareStats';
import { useDispatch, useSelector } from 'react-redux';
import { setCode, setStartingTime, setUrl } from '../../redux/iframeSlice';


const VodDetail = () =>
{
	const location = useLocation()
	const dispatch = useDispatch()
	const params = useParams()
	const [ vodData, setVodData ] = useState( null )
	const [ gameMetadata, setGameMetadata ] = useState( null )
	const [ frame, setFrame ] = useState( null )
	const [ livestat, setLiveStat ] = useState( null )
	const [ playerSelect, setPlayerSelect ] = useState( 1 )

	const { startingTime } = useSelector( state => state.iframeSlice )
	const itv = useRef( null )

	useEffect( () =>
	{
		axios.get( '/vod-detail' ).then( res =>
		{
			setVodData( res.data.event )

		} ).catch( error =>
		{
			console.log( error )
		} )

		axios.get( 'https://feed.lolesports.com/livestats/v1/window/' + params?.id + '' ).then( res =>
		{
			dispatch( setStartingTime( res?.data?.frames[ 0 ]?.rfc460Timestamp ) )
			setGameMetadata( res?.data?.gameMetadata )
		} ).catch( error =>
		{
			console.log( error )
		} )
	}, [ params, dispatch ] )

	useEffect( () =>
	{

		clearInterval( itv.current )
		fetchData( startingTime, window?.play?.getCurrentTime() || 0, params )

		itv.current = setInterval( () => fetchData( startingTime, window?.play?.getCurrentTime() || 0, params ), 1000 )

		return () => clearInterval( itv.current );

	}, [ startingTime, params ] )

	useEffect( () =>
	{
		if ( params.parameter )
		{
			dispatch( setCode( params.parameter ) )
			dispatch( setUrl( location.pathname ) )
		}
	}, [ params.parameter, dispatch, location.pathname ] )


	const fetchData = ( startingTime, currentTime, params ) =>
	{
		var time = moment( Math.round( ( moment( startingTime ).unix() * 1000 + parseInt( currentTime || 0 ) * 1000 - 1560000 ) / 10000 ) * 10000 ).toISOString()

		axios.get( 'https://feed.lolesports.com/livestats/v1/window/' + params?.id + '?startingTime=' + time ).then( res =>
		{
			setGameMetadata( res?.data?.gameMetadata )
			setFrame( res?.data?.frames[ 0 ] )
		} ).catch( error =>
		{
			console.log( error )
		} )

		axios.get( 'https://feed.lolesports.com/livestats/v1/details/' + params?.id + '?startingTime=' + time ).then( res =>
		{
			setLiveStat( res.data?.frames[ 0 ] )
		} ).catch( error =>
		{
			console.log( error )
		} )
	}

	return (
		<div className='page-vod-detail'>


			<div className='data'>
				<div className='left'>
					<Teams data={ vodData?.match?.games || [] } />
					<Games data={ vodData?.match?.games || [] } />
					<div className='teams-data'>
						<Dragons data={ frame } />
						<div className='lines'><div className='line'></div><div className='line'></div></div>
						<Golds data={ frame } />
						<Details data={ frame } />
						<div className='player-data'>
							{
								frame?.blueTeam?.participants?.map( ( e, i ) => (
									<Player key={ i } gameMetadata={ gameMetadata } blue={ e } red={ frame?.redTeam?.participants[ i ] } i={ i } playerSelect={ playerSelect } setPlayerSelect={ setPlayerSelect } />
								) )
							}
						</div>
					</div>
				</div>
				<div className='right'>
					<div className='options'>
						<Option />
					</div>
					<CompareStats playerSelect={ playerSelect - 1 } participants={ livestat?.participants } gameMetadata={ gameMetadata } />
				</div>
			</div>
		</div>
	)
}

export default VodDetail