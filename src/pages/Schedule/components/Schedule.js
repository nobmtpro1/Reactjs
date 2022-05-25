import React from 'react'
import moment from 'moment'

const Schedule = ( { e } ) =>
{

    const yesterday = moment().subtract( 1, 'day' ).format( 'dddd - MMMM DD' )
    const tomorrow = moment().add( 1, 'day' ).format( 'dddd - MMMM DD' )
    var startTime = moment( e?.startTime ).format( 'dddd - MMMM DD' )
    if ( yesterday === startTime )
    {
        startTime = 'Yesterday ' + moment( e?.startTime ).format( '- MMMM DD' )
    }
    if ( tomorrow === startTime )
    {
        startTime = 'Tomorrow ' + moment( e?.startTime ).format( '- MMMM DD' )
    }


    return (
        <div className={`item a${ moment( e?.startTime ).format( 'DDMMYYYY' )}`} id={ 'a' +moment( e?.startTime ).format( 'DDMMYYYY' )}>
            <div className='day'>
                { startTime }
            </div>
            <div className='match'>
                <div className='time'>
                    { moment( e?.startTime ).format( 'h' ) } <span>{ moment( e?.startTime ).format( 'mm A' ) }</span>
                </div>
                <div className='teams'>
                    <div className={ `team ${ e?.match?.teams[ 0 ]?.result.outcome === 'loss' && 'lose' }` }>
                        <div className='text'>
                            <div className='name'>{ e?.match?.teams[ 0 ]?.code }</div>
                            <div className='point'>{ e?.match?.teams[ 0 ]?.record?.wins }W - { e?.match?.teams[ 0 ]?.record?.losses }L</div>
                        </div>
                        <div className='logo'>
                            <img src={ e?.match?.teams[ 0 ]?.image || 'https://am-a.akamaihd.net/image?resize=140:&f=http%3A%2F%2Fassets.lolesports.com%2Fwatch%2Fteam-tbd.png' } alt="" />
                        </div>
                    </div>
                    <div className='result'>
                        { e?.state === 'completed' ? ( ( e?.match?.teams[ 0 ]?.result?.gameWins || 0 ) + ' - ' + ( e?.match?.teams[ 1 ]?.result?.gameWins || 0 ) ) : 'VS' }
                    </div>
                    <div className={ `team right ${ e?.match?.teams[ 0 ]?.result.outcome !== 'loss' && 'lose' }` }>
                        <div className='text'>
                            <div className='name'>{ e?.match?.teams[ 1 ]?.code }</div>
                            <div className='point'>{ e?.match?.teams[ 1 ]?.record?.wins }W - { e?.match?.teams[ 1 ]?.record?.losses }L</div>
                        </div>
                        <div className='logo'>
                            <img src={ e?.match?.teams[ 1 ]?.image || 'https://am-a.akamaihd.net/image?resize=140:&f=http%3A%2F%2Fassets.lolesports.com%2Fwatch%2Fteam-tbd.png' } alt="" />
                        </div>
                    </div>
                </div>
                <div className='league'>
                    <div>
                        { e?.league?.name }
                    </div>
                    <div>
                        { e?.blockName }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule