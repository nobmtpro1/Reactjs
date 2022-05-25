import React from 'react'
import { useNavigate } from 'react-router-dom'

const Games = ( { data } ) =>
{
    const navigate = useNavigate()
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
        <div className='games'>
            <div className='title'>
                GAME
            </div>
            <div className='numbers'>
                {
                    data?.map( ( e, i ) => (
                        <div className='number' key={ i } onClick={ () => handleViewGame( e?.id, i + 1, e?.vods[ 0 ]?.parameter || '' ) }>
                            { i + 1 }
                        </div>
                    ) )
                }
            </div>
        </div>
    )
}

export default Games