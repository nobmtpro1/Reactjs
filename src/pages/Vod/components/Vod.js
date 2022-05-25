import React from 'react'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'


const Vod = ( { e } ) =>
{

    const navigate = useNavigate()
    const yesterday = moment().subtract( 1, 'day' ).format( 'dddd, MMMM DD' )
    const tomorrow = moment().add( 1, 'day' ).format( 'dddd, MMMM DD' )
    var startTime = moment( e[ 0 ]?.startTime ).format( 'dddd, MMMM DD' )
    if ( yesterday === startTime )
    {
        startTime = 'Yesterday ' + moment( e[ 0 ]?.startTime ).format( ', MMMM DD' )
    }
    if ( tomorrow === startTime )
    {
        startTime = 'Tomorrow ' + moment( e[ 0 ]?.startTime ).format( ', MMMM DD' )
    }

    const handleView = ( event, id, game, parameter ) =>
    {
        if ( event.target.classList.contains( 'game' ) )
        {
            return false
        }
        navigate( `/vod/${ id }/${ game }/${ parameter }` )
    }


    const handleViewGame = ( id, game, parameter ) =>
    {
        if ( !parameter )
        {
            alert( "The match concluded before this game was played" )
            return false
        }
        navigate( `/vod/${ id }/${ game }/${ parameter }` )
    }

    return (
        <div className='item'>
            <div className='title'>
                { e[ 0 ]?.blockName }<span> - { startTime }</span>
            </div>
            <div className='content'>
                {
                    e?.map( ( x, k ) => (
                        <div className='row' key={ k } onClick={ ( event ) => handleView( event, x?.games[ 0 ]?.id, 1, x?.games[ 0 ]?.vods[ 0 ]?.parameter ) }>
                            <div className='left'>
                                <div className='team'>
                                    <div className='name'>
                                        { x?.match?.teams[ 0 ]?.code }
                                    </div>
                                    <div className='image'>
                                        <img src={ x?.match?.teams[ 0 ]?.image } alt="" />
                                    </div>
                                </div>
                                <div className='vs'>
                                    VS
                                </div>
                                <div className='team right'>
                                    <div className='name'>
                                        { x?.match?.teams[ 1 ]?.code }
                                    </div>
                                    <div className='image'>
                                        <img src={ x?.match?.teams[ 1 ]?.image } alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='right'>
                                <div className='title'>
                                    GAME
                                </div>
                                <div className='games'>
                                    {
                                        x?.games?.map( ( y, j ) => (
                                            <div className='game' key={ j } onClick={ () => handleViewGame( y?.id, j + 1, y?.vods[ 0 ]?.parameter || '' ) }>
                                                { j + 1 }
                                            </div>
                                        ) )
                                    }
                                </div>
                            </div>
                        </div>
                    ) )
                }
            </div>
        </div>
    )
}

export default Vod