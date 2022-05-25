import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentTime } from '../redux/iframeSlice'
import moment from 'moment'

const Youtube = () =>
{
    const dispatch = useDispatch()
    const ref = useRef()

    const { code, url, startingTime, currentTime } = useSelector( state => state.iframeSlice )


    useEffect( () =>
    {
        if ( !window.play )
        {
            var tag = document.createElement( 'script' );

            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName( 'script' )[ 0 ];
            firstScriptTag.parentNode.insertBefore( tag, firstScriptTag );


            window.onYouTubeIframeAPIReady = () =>
            {
                window.play = new window.YT.Player( 'player', {
                    height: '100%',
                    width: '100%',
                    videoId: code,
                    playerVars: {
                        'playsinline': 1,
                        'autoplay': 0
                    },
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                    }
                } );
            }
        } else
        {
            window.play.loadVideoById( {
                height: '100%',
                width: '100%',
                videoId: code,
                playerVars: {
                    'playsinline': 1,
                    'autoplay': 0
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            } );
        }

    }, [ code ] )

    const onPlayerReady = () =>
    {
        // console.log( window.YT )
    }

    const onPlayerStateChange = ( e ) =>
    {
        var current = Math.round( e.target.getCurrentTime() )
        if ( current !== ref.current )
        {
            dispatch( setCurrentTime( current ) )
        }
        ref.current = current
    }


    // console.log(player)
    return (
        <div id="player"></div>
    )
}

export default Youtube