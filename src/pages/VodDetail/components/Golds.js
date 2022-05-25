import React from 'react'

const Golds = ( { data } ) =>
{
    const kFormatter = ( num ) =>
    {
        return Math.abs( num ) > 999 ? Math.sign( num ) * ( ( Math.abs( num ) / 1000 ).toFixed( 1 ) ) + 'k' : Math.sign( num ) * Math.abs( num )
    }

    return (
        <div className='golds'>
            <div className='gold'>
            {kFormatter(data?.blueTeam?.totalGold)}
            </div>
            <div className='text'>
                GOLD
            </div>
            <div className='gold right'>
            {kFormatter(data?.redTeam?.totalGold)}
            </div>
        </div>
    )
}

export default Golds