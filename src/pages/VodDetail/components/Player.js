import React from 'react'

const Player = ( { blue, red, gameMetadata, i, playerSelect, setPlayerSelect } ) =>
{
    return (
        <div className='row'>
            {
                ( parseInt( blue?.totalGold ) >= parseInt( red?.totalGold ) ) ? (
                    <div className='gap'>{ parseInt( blue?.totalGold ) - parseInt( red?.totalGold ) }</div>
                ) : (
                    <div className='gap red'>{ parseInt( red?.totalGold ) - parseInt( blue?.totalGold ) }</div>
                )
            }
            <div className={ `col left ${ playerSelect === ( i + 1 ) ? 'active' : '' }` } onClick={ () => setPlayerSelect( i + 1 ) }>
                <div className='name'>
                    { gameMetadata?.blueTeamMetadata?.participantMetadata[ i ]?.summonerName }
                </div>
                <div className='ingame'>
                    <div className='image'>
                        <img src={ `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${ gameMetadata?.blueTeamMetadata?.participantMetadata[ i ]?.championId }.png` } alt="" />
                        <div className='level'>9</div>
                    </div>
                    <div className='stats'>
                        <div className='stat'>
                            <div className='image'>
                                <svg className="icon" width="16px" height="16px" viewBox="0 0 16 16" xmlns="https://www.w3.org/2000/svg"><g className="shape" fill="#555d64" fillRule="evenodd"><polygon points="8 9.43 13 5.78 13 3 10.22 3 6.57 8 6.57 8 6.57 8 6.57 9.43 4.43 7.29 3.71 9.43 4.63 10.34 3 11.97 4.03 13 5.66 11.37 6.57 12.29 8.71 11.57 6.57 9.43 8 9.43 8 9.43"></polygon></g></svg>
                            </div>
                            <div className='text'>
                                { blue?.kills } / { blue?.deaths } / { blue?.assists }
                            </div>
                        </div>
                        <div className='stat'>
                            <div className='image'>
                                <svg className="icon" width="16px" height="16px" viewBox="0 0 16 16" xmlns="https://www.w3.org/2000/svg"><path className="shape" fill="#555d64" d="M8.5,2h-1L3,9l5,5,5-5ZM5,8,6,7,8,9l2-2,1,1L8,12.5Z"></path></svg>
                            </div>
                            <div className='text'>
                                { blue?.creepScore }
                            </div>
                        </div>
                        <div className='stat'>
                            <div className='image'>
                                <svg className="icon" width="16px" height="16px" viewBox="0 0 16 16" xmlns="https://www.w3.org/2000/svg"><g className="shape" fill="#555d64" fillRule="evenodd"><path d="M13,6.86C13,8,11.21,9,9,9S5,8,5,6.86V5.14C5,4 ,6.79,3,9,3s4,1,4,2.14Z"></path><path d="M7,7.71a4,4,0,0,1,2.4.64v1.3a4,4,0,0,1-2.4.64,4 ,4,0,0,1-2.4-.64V8.35A4,4,0,0,1,7,7.71M7,6C4.79,6,3,7,3 ,8.14V9.86C3,11,4.79,12,7,12s4-1,4-2.14V8.14C11,7,9.21,6,7,6Z"></path></g></svg>
                            </div>
                            <div className='text'>
                                { blue?.totalGold }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={ `col right ${ playerSelect === ( i + 1 ) ? 'active' : '' }` }  onClick={ () => setPlayerSelect( i + 1 ) }>
                <div className='name'>
                    { gameMetadata?.redTeamMetadata?.participantMetadata[ i ]?.summonerName }
                </div>
                <div className='ingame'>
                    <div className='image'>
                        <img src={ `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${ gameMetadata?.redTeamMetadata?.participantMetadata[ i ]?.championId }.png` } alt="" />
                        <div className='level'>9</div>
                    </div>
                    <div className='stats'>
                        <div className='stat'>
                            <div className='image'>
                                <svg className="icon" width="16px" height="16px" viewBox="0 0 16 16" xmlns="https://www.w3.org/2000/svg"><g className="shape" fill="#555d64" fillRule="evenodd"><polygon points="8 9.43 13 5.78 13 3 10.22 3 6.57 8 6.57 8 6.57 8 6.57 9.43 4.43 7.29 3.71 9.43 4.63 10.34 3 11.97 4.03 13 5.66 11.37 6.57 12.29 8.71 11.57 6.57 9.43 8 9.43 8 9.43"></polygon></g></svg>
                            </div>
                            <div className='text'>
                                { red?.kills } / { red?.deaths } / { red?.assists }
                            </div>
                        </div>
                        <div className='stat'>
                            <div className='image'>
                                <svg className="icon" width="16px" height="16px" viewBox="0 0 16 16" xmlns="https://www.w3.org/2000/svg"><path className="shape" fill="#555d64" d="M8.5,2h-1L3,9l5,5,5-5ZM5,8,6,7,8,9l2-2,1,1L8,12.5Z"></path></svg>
                            </div>
                            <div className='text'>
                                { red?.creepScore }
                            </div>
                        </div>
                        <div className='stat'>
                            <div className='image'>
                                <svg className="icon" width="16px" height="16px" viewBox="0 0 16 16" xmlns="https://www.w3.org/2000/svg"><g className="shape" fill="#555d64" fillRule="evenodd"><path d="M13,6.86C13,8,11.21,9,9,9S5,8,5,6.86V5.14C5,4 ,6.79,3,9,3s4,1,4,2.14Z"></path><path d="M7,7.71a4,4,0,0,1,2.4.64v1.3a4,4,0,0,1-2.4.64,4 ,4,0,0,1-2.4-.64V8.35A4,4,0,0,1,7,7.71M7,6C4.79,6,3,7,3 ,8.14V9.86C3,11,4.79,12,7,12s4-1,4-2.14V8.14C11,7,9.21,6,7,6Z"></path></g></svg>
                            </div>
                            <div className='text'>
                                { red?.totalGold }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player