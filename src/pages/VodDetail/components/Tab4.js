import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Tab4 = ( { participants, playerSelect, blueChamp, redChamp } ) =>
{

    const player1 = participants[ playerSelect ]
    const player2 = participants[ playerSelect + 5 ]
    const [ rune, setRune ] = useState( null )

    useEffect( () =>
    {
        axios.get( 'https://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/runesReforged.json' ).then( res =>
        {
            setRune( res.data )
            // console.log( res.data )
        } ).catch( error =>
        {
            console.log( error )
        } )
    }, [] )

    const findRune = ( styleId, runeId ) =>
    {
        var style = rune?.find( x => x?.id === styleId )
        var slots = style?.slots
        var result = null
        slots?.forEach( e =>
        {
            e?.runes?.forEach( x =>
            {
                if ( x?.id === runeId )
                {
                    result = x
                }
            } )
        } )

        return result
    }

    return (
        <>
            <div className='left'>
                <div className='item'>
                    <div className='type'>
                        <div className='text'>
                            { rune?.find( x => x?.id === player1?.perkMetadata?.styleId )?.name }
                        </div>
                        <div className='image'>
                            <img src={ `https://ddragon.leagueoflegends.com/cdn/img/` + rune?.find( x => x?.id === player1?.perkMetadata?.styleId )?.icon } alt="" />
                        </div>
                    </div>
                    <div className='content'>
                        <div className='row'>
                            <div className='text'>
                                <div className='name'>
                                    Unsealed Spellbook
                                </div>
                                <div className='description'>
                                    Swap Summoner Spells while out of combat. Swapping to unique Summoner Spells will increase the rate at which you can make future swaps.
                                </div>
                            </div>
                            <div className='image big'>
                                <img src={ `https://ddragon.leagueoflegends.com/cdn/img/` + findRune( player1?.perkMetadata?.styleId, player1?.perkMetadata?.perks[ 0 ] )?.icon } alt="" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='text'>
                                <div className='name'>
                                    Unsealed Spellbook
                                </div>
                                <div className='description'>
                                    Swap Summoner Spells while out of combat. Swapping to unique Summoner Spells will increase the rate at which you can make future swaps.
                                </div>
                            </div>
                            <div className='image'>
                                <img src={ `https://ddragon.leagueoflegends.com/cdn/img/` + findRune( player1?.perkMetadata?.styleId, player1?.perkMetadata?.perks[ 1 ] )?.icon } alt="" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='text'>
                                <div className='name'>
                                    Unsealed Spellbook
                                </div>
                                <div className='description'>
                                    Swap Summoner Spells while out of combat. Swapping to unique Summoner Spells will increase the rate at which you can make future swaps.
                                </div>
                            </div>
                            <div className='image'>
                                <img src={ `https://ddragon.leagueoflegends.com/cdn/img/` + findRune( player1?.perkMetadata?.styleId, player1?.perkMetadata?.perks[ 2 ] )?.icon } alt="" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='text'>
                                <div className='name'>
                                    Unsealed Spellbook
                                </div>
                                <div className='description'>
                                    Swap Summoner Spells while out of combat. Swapping to unique Summoner Spells will increase the rate at which you can make future swaps.
                                </div>
                            </div>
                            <div className='image'>
                                <img src={ `https://ddragon.leagueoflegends.com/cdn/img/` + findRune( player1?.perkMetadata?.styleId, player1?.perkMetadata?.perks[ 3 ] )?.icon } alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className='type'>
                        <div className='text'>
                            Inspiration
                        </div>
                        <div className='image'>
                            <img src={ `https://ddragon.leagueoflegends.com/cdn/img/` + rune?.find( x => x?.id === player1?.perkMetadata?.subStyleId )?.icon } alt="" />
                        </div>
                    </div>
                    <div className='content'>
                        <div className='row'>
                            <div className='text'>
                                <div className='name'>
                                    Unsealed Spellbook
                                </div>
                                <div className='description'>
                                    Swap Summoner Spells while out of combat. Swapping to unique Summoner Spells will increase the rate at which you can make future swaps.
                                </div>
                            </div>
                            <div className='image'>
                                <img src={ `https://ddragon.leagueoflegends.com/cdn/img/` + findRune( player1?.perkMetadata?.subStyleId, player1?.perkMetadata?.perks[ 4 ] )?.icon } alt="" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='text'>
                                <div className='name'>
                                    Unsealed Spellbook
                                </div>
                                <div className='description'>
                                    Swap Summoner Spells while out of combat. Swapping to unique Summoner Spells will increase the rate at which you can make future swaps.
                                </div>
                            </div>
                            <div className='image'>
                                <img src={ `https://ddragon.leagueoflegends.com/cdn/img/` + findRune( player1?.perkMetadata?.subStyleId, player1?.perkMetadata?.perks[ 5 ] )?.icon } alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='item'>
                    <div className='type'>
                        <div className='text'>
                            { rune?.find( x => x?.id === player2?.perkMetadata?.styleId )?.name }
                        </div>
                        <div className='image'>
                            <img src={ `https://ddragon.leagueoflegends.com/cdn/img/` + rune?.find( x => x?.id === player2?.perkMetadata?.styleId )?.icon } alt="" />
                        </div>
                    </div>
                    <div className='content'>
                        <div className='row'>
                            <div className='text'>
                                <div className='name'>
                                    Unsealed Spellbook
                                </div>
                                <div className='description'>
                                    Swap Summoner Spells while out of combat. Swapping to unique Summoner Spells will increase the rate at which you can make future swaps.
                                </div>
                            </div>
                            <div className='image big'>
                                <img src={ `https://ddragon.leagueoflegends.com/cdn/img/` + findRune( player2?.perkMetadata?.styleId, player2?.perkMetadata?.perks[ 0 ] )?.icon } alt="" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='text'>
                                <div className='name'>
                                    Unsealed Spellbook
                                </div>
                                <div className='description'>
                                    Swap Summoner Spells while out of combat. Swapping to unique Summoner Spells will increase the rate at which you can make future swaps.
                                </div>
                            </div>
                            <div className='image'>
                                <img src={ `https://ddragon.leagueoflegends.com/cdn/img/` + findRune( player2?.perkMetadata?.styleId, player2?.perkMetadata?.perks[ 1 ] )?.icon } alt="" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='text'>
                                <div className='name'>
                                    Unsealed Spellbook
                                </div>
                                <div className='description'>
                                    Swap Summoner Spells while out of combat. Swapping to unique Summoner Spells will increase the rate at which you can make future swaps.
                                </div>
                            </div>
                            <div className='image'>
                                <img src={ `https://ddragon.leagueoflegends.com/cdn/img/` + findRune( player2?.perkMetadata?.styleId, player2?.perkMetadata?.perks[ 2 ] )?.icon } alt="" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='text'>
                                <div className='name'>
                                    Unsealed Spellbook
                                </div>
                                <div className='description'>
                                    Swap Summoner Spells while out of combat. Swapping to unique Summoner Spells will increase the rate at which you can make future swaps.
                                </div>
                            </div>
                            <div className='image'>
                                <img src={ `https://ddragon.leagueoflegends.com/cdn/img/` + findRune( player2?.perkMetadata?.styleId, player2?.perkMetadata?.perks[ 3 ] )?.icon } alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className='type'>
                        <div className='text'>
                            Inspiration
                        </div>
                        <div className='image'>
                            <img src={ `https://ddragon.leagueoflegends.com/cdn/img/` + rune?.find( x => x?.id === player2?.perkMetadata?.subStyleId )?.icon } alt="" />
                        </div>
                    </div>
                    <div className='content'>
                        <div className='row'>
                            <div className='text'>
                                <div className='name'>
                                    Unsealed Spellbook
                                </div>
                                <div className='description'>
                                    Swap Summoner Spells while out of combat. Swapping to unique Summoner Spells will increase the rate at which you can make future swaps.
                                </div>
                            </div>
                            <div className='image'>
                                <img src={ `https://ddragon.leagueoflegends.com/cdn/img/` + findRune( player2?.perkMetadata?.subStyleId, player2?.perkMetadata?.perks[ 4 ] )?.icon } alt="" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='text'>
                                <div className='name'>
                                    Unsealed Spellbook
                                </div>
                                <div className='description'>
                                    Swap Summoner Spells while out of combat. Swapping to unique Summoner Spells will increase the rate at which you can make future swaps.
                                </div>
                            </div>
                            <div className='image'>
                                <img src={ `https://ddragon.leagueoflegends.com/cdn/img/` + findRune( player2?.perkMetadata?.subStyleId, player2?.perkMetadata?.perks[ 5 ] )?.icon } alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tab4