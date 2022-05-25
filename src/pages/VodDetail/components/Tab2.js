import React from 'react'

const Tab2 = ( { participants, playerSelect } ) =>
{
    const player1 = participants[ playerSelect ]
    const player2 = participants[ playerSelect + 5 ]

    return (
        <>
            <div className='left'>
                {
                    player1?.items?.map( ( e, i ) =>
                    {
                        return (
                            <div className='item' key={ i }>
                                <div className='text'>
                                    <div className='name'>

                                    </div>
                                    <div className='gold'>

                                    </div>
                                </div>
                                <div className='image'>
                                    <img src={ `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/item/${ e }.png` } alt='' />
                                </div>
                            </div>
                        )

                    } )
                }
            </div>
            <div className='right'>
                {
                    player2?.items?.map( ( e, i ) =>
                    {
                            return (
                                <div className='item' key={ i }>
                                    <div className='text'>
                                        <div className='name'>

                                        </div>
                                        <div className='gold'>

                                        </div>
                                    </div>
                                    <div className='image'>
                                        <img src={ `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/item/${ e }.png` } alt='' />
                                    </div>
                                </div>
                            )
                    } )
                }
            </div>
        </>
    )
}

export default Tab2