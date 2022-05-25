import React from 'react'

const Tab3 = ( { participants, playerSelect, blueChamp, redChamp } ) =>
{
    const player1 = participants[ playerSelect ]
    const player2 = participants[ playerSelect + 5 ]

    return (
        <>
            <div className='left'>
                <div className='table'>
                    <div className='row skills'>
                        <div className='cell skill'>
                            <img src={ `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/passive/${ blueChamp }P.png` } alt='' />
                        </div>
                        <div className='cell skill'>
                            <img src={ `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/spell/${ blueChamp }Q.png` } alt='' />
                        </div>
                        <div className='cell skill'>
                            <img src={ `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/spell/${ blueChamp }W.png` } alt='' />
                        </div>
                        <div className='cell skill'>
                            <img src={ `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/spell/${ blueChamp }E.png` } alt='' />
                        </div>
                        <div className='cell skill'>
                            <img src={ `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/spell/${ blueChamp }R.png` } alt='' />
                        </div>
                    </div>
                    {
                        [ ...Array( player1?.level ).keys() ].map( ( e, i ) => (
                            <div className='row ' key={ i }>
                                <div className='cell '>
                                    { i + 1 }
                                </div>
                                <div className={`cell ${player1?.abilities[i] === 'Q' && 'active'}`}>
                                {player1?.abilities[i] === 'Q' && 'Q'}
                                </div>
                                <div className={`cell ${player1?.abilities[i] === 'W' && 'active'}`}>
                                {player1?.abilities[i] === 'W' && 'W'}
                                </div>
                                <div className={`cell ${player1?.abilities[i] === 'E' && 'active'}`}>
                                {player1?.abilities[i] === 'E' && 'E'}
                                </div>
                                <div className={`cell ${player1?.abilities[i] === 'R' && 'active'}`}>
                                {player1?.abilities[i] === 'R' && 'R'}
                                </div>
                            </div>
                        ) )
                    }
                </div>
            </div>
            <div className='left'>
                <div className='table'>
                    <div className='row skills'>
                        <div className='cell skill'>
                            <img src={ `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/passive/${ redChamp }P.png` } alt='' />
                        </div>
                        <div className='cell skill'>
                            <img src={ `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/spell/${ redChamp }Q.png` } alt='' />
                        </div>
                        <div className='cell skill'>
                            <img src={ `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/spell/${ redChamp }W.png` } alt='' />
                        </div>
                        <div className='cell skill'>
                            <img src={ `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/spell/${ redChamp }E.png` } alt='' />
                        </div>
                        <div className='cell skill'>
                            <img src={ `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/spell/${ redChamp }R.png` } alt='' />
                        </div>
                    </div>
                    {
                        [ ...Array( player2?.level ).keys() ].map( ( e, i ) => (
                            <div className='row ' key={ i }>
                                <div className='cell '>
                                    { i + 1 }
                                </div>
                                <div className={`cell ${player2?.abilities[i] === 'Q' && 'active'}`}>
                                {player2?.abilities[i] === 'Q' && 'Q'}
                                </div>
                                <div className={`cell ${player2?.abilities[i] === 'W' && 'active'}`}>
                                {player2?.abilities[i] === 'W' && 'W'}
                                </div>
                                <div className={`cell ${player2?.abilities[i] === 'E' && 'active'}`}>
                                {player2?.abilities[i] === 'E' && 'E'}
                                </div>
                                <div className={`cell ${player2?.abilities[i] === 'R' && 'active'}`}>
                                {player2?.abilities[i] === 'R' && 'R'}
                                </div>
                            </div>
                        ) )
                    }
                </div>
            </div>
        </>
    )
}

export default Tab3