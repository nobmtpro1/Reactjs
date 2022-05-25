import React, { useEffect } from 'react'
import {  useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { isElementVisible } from '../utils/Helpers';
import queryString from 'query-string'
import Youtube from './Youtube';

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

const Iframe = () =>
{
    const location = useLocation()
    const navigate = useNavigate()

    const { code, url} = useSelector( state => state.iframeSlice )

    useEffect( () =>
    {
        if ( location?.pathname?.includes( '/vod/' ) && code )
        {
            var player = document.querySelector( '.video' )
            var iframe = player.querySelector( '.iframe' )
            const onScroll = () =>
            {

                if ( isElementVisible( player ) )
                {
                    iframe.classList.remove( 'small' )
                    iframe.classList.remove( 'hide' )
                    setTimeout( () =>
                    {
                        iframe.classList.remove( 'active' )
                    }, 100 );

                } else
                {
                    iframe.classList.add( 'small' )
                    setTimeout( () =>
                    {
                        iframe.classList.add( 'active' )
                    }, 100 );
                }
            };
            // clean up code
            window.removeEventListener( 'scroll', onScroll );
            window.addEventListener( 'scroll', onScroll, { passive: true } );

            return () => window.removeEventListener( 'scroll', onScroll );
        }

    }, [ location, code ] );


    const handlePlay = () =>
    {

        var element = document.querySelector( "#SamplePlayerDivID iframe" )
        var src = element.getAttribute( 'src' )
        var srcArr = src?.split( "?" )
        var query = queryString?.parse( srcArr[ 1 ] )

        if ( src.includes( 'autoplay=1' ) )
        {
            query.autoplay = 0
            element.setAttribute( 'src', srcArr[ 0 ] + '?' + queryString.stringify( query ) );
        } else
        {
            query.autoplay = 1
            element.setAttribute( 'src', srcArr[ 0 ] + '?' + queryString.stringify( query ) );
        }
    }

    const handleClose = () =>
    {
        window.play.stopVideo()
        var iframe = document.querySelector( '#SamplePlayerDivID' )
        iframe.classList.add( 'hide' )
    }

    const handleZoom = () =>
    {
        if ( !location?.pathname?.includes( '/vod/' ) )
        {
            navigate( url )
        } else
        {
            window.scroll( 0, 0 )
        }
    }

    if ( !code )
    {
        return <></>
    }

    return (
        <div className={ `video component-iframe ${ !location?.pathname?.includes( '/vod/' ) ? 'small' : '' }` }>
            <div className={ `iframe ${ !location?.pathname?.includes( '/vod/' ) ? 'small active' : '' }` } id="SamplePlayerDivID">
                <div className='restore' onClick={ handleZoom }>
                    <svg class="icon" xmlns="https://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 36 36"><g class="shape" fill="#FFFFFF" fill-rule="evenodd"><path d="M4,29 L32,29 L32,7 L4,7 L4,29 Z M6,27 L30,27 L30,9 L6,9 L6,27 Z"></path><polygon points="21.5244 19.4756 19.0004 16.9866 19.0004 22.9996 17.0004 22.9996 17.0004 16.9866 14.4754 19.4756 13.0004 17.9996 18.0004 12.9996 23.0004 17.9996"></polygon></g></svg>
                </div>
                <div className='play' onClick={ handlePlay }>
                    <svg class="icon" xmlns="https://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 36 36"><g class="shape" fill="#FFFFFF" fill-rule="evenodd"><polygon points="10 8 10 28 28 18"></polygon></g></svg>
                </div>
                <div className='close' onClick={ handleClose }>
                    <svg class="icon" width="100%" height="100%" viewBox="0 0 36 36" xmlns="https://www.w3.org/2000/svg"><g class="shape" fill="#FFFFFF"><polygon points="26 8 18 16 10 8 8 10 16 18 8 26 10 28 18 20 26 28 28 26 20 18 28 10"></polygon></g></svg>
                </div>
                <Youtube/>
                {/* {
                    isNaN( code ) &&
                    <iframe width="100%" height="100%" src={ `https://www.youtube.com/embed/${ code }` } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                } */}
            </div>

        </div>
    )
}

export default Iframe