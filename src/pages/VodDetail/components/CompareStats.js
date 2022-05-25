import React, { useState } from 'react'
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';

const CompareStats = ( { playerSelect, participants, gameMetadata } ) =>
{
    const [ tab, setTab ] = useState( 1 )

    if ( !participants )
    {
        return <></>
    }
    return (
        <div className='vs'>
            <div className='champions'>
                <div className='left'>
                    <div className='text'>
                        <div className='name'>
                            { gameMetadata?.blueTeamMetadata?.participantMetadata[ playerSelect ]?.summonerName }
                        </div>
                        <div className='champ'>
                            { gameMetadata?.blueTeamMetadata?.participantMetadata[ playerSelect ]?.championId }-{ gameMetadata?.blueTeamMetadata?.participantMetadata[ playerSelect ]?.role }
                        </div>
                    </div>
                    <div className='image'>
                        <img src={ `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${ gameMetadata?.blueTeamMetadata?.participantMetadata[ playerSelect ]?.championId }.png` } alt="" />
                        <div className='level'>{ participants[ playerSelect ]?.level }</div>
                    </div>
                </div>
                <div className='right'>
                    <div className='text'>
                        <div className='name'>
                            { gameMetadata?.redTeamMetadata?.participantMetadata[ playerSelect ]?.summonerName }
                        </div>
                        <div className='champ'>
                            { gameMetadata?.redTeamMetadata?.participantMetadata[ playerSelect ]?.championId }-{ gameMetadata?.redTeamMetadata?.participantMetadata[ playerSelect ]?.role }
                        </div>
                    </div>
                    <div className='image'>
                        <img src={ `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${ gameMetadata?.redTeamMetadata?.participantMetadata[ playerSelect ]?.championId }.png` } alt="" />
                        <div className='level'>{ participants[ playerSelect + 5 ]?.level }</div>
                    </div>
                </div>
            </div>
            <div className='tabs'>
                <div className='buttons'>
                    <div className={ `button ${ tab === 1 ? 'active' : '' }` } onClick={ () => setTab( 1 ) }>
                        <svg className="icon" width="32px" height="32px" viewBox="0 0 32 32" xmlns="https://www.w3.org/2000/svg"><path className="shape" fill="#555D64" d="M12.9999,18.0003 L18.9999,16.0003 L18.9999,29.0003 L12.9999,29.0003 L12.9999,18.0003 Z M3,13.9998 L9,11.9998 L9,28.9998 L3,28.9998 L3,13.9998 Z M29.0001,3 L29.0001,29 L23.0001,29 L23.0001,5 L29.0001,3 Z"></path></svg>
                    </div>
                    <div className={ `button ${ tab === 2 ? 'active' : '' }` } onClick={ () => setTab( 2 ) }>
                        <svg className="icon" width="32px" height="32px" viewBox="0 0 32 32" xmlns="https://www.w3.org/2000/svg"><path className="shape" fill="#555d64" d="M15.7223667,6.4997 L5.1999,6.4997 L10.6232523,15.6773717 L15.7223667,6.4997 Z M16.2776333,6.4997 L21.3773788,15.6785075 L26.8009,6.4997 L16.2776333,6.4997 Z M21.1874171,16 L10.8139026,16 L16.0009,24.7777 L21.1874171,16 Z M2.9999,3.9997 L28.9999,3.9997 L29.9999,6.0007 L16.9999,27.9997 L14.9999,27.9997 L1.9999,6.0007 L2.9999,3.9997 Z"></path></svg>
                    </div>
                    <div className={ `button ${ tab === 3 ? 'active' : '' }` } onClick={ () => setTab( 3 ) }>
                        <svg className="icon" width="32px" height="32px" viewBox="0 0 32 32" xmlns="https://www.w3.org/2000/svg"><path className="shape" fill="#555d64" d="M14,12 L18.001,6 L5,13 L2,20 L4,28 L12,30 L19,28 L26.001,14 L20,18 L30,2 L14,12 Z M7.001,20 L9.001,17 L20,12 L15,23 L12,25 L7.001,25 L7.001,20 Z"></path></svg>
                    </div>
                    <div className={ `button ${ tab === 4 ? 'active' : '' }` } onClick={ () => setTab( 4 ) }>
                        <svg className="icon" width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path className="shape" fill="#555d64" d="M15.9997,2.0001 L28.0007,9.0001 L28.0007,23.0001 L15.9997,30.0001 L3.9997,23.0001 L3.9997,9.0001 L15.9997,2.0001 Z M6.5007,21.5641 L15.9997,27.1051 L25.4997,21.5641 L25.4997,10.4361 L15.9997,4.8941 L6.5007,10.4361 L6.5007,21.5641 Z M21,19 L16,22 L11,19 L11,13 L16,10 L21,13 L21,19 Z"></path></svg>
                    </div>
                </div>
                <div className='tab-content'>
                    <div className={ `tab1 ${ tab === 1 ? 'active' : '' }` }>
                        <Tab1 participants={ participants } playerSelect={ playerSelect } />
                    </div>
                    <div className={ `tab2 ${ tab === 2 ? 'active' : '' }` }>
                        <Tab2 participants={ participants } playerSelect={ playerSelect } />
                    </div>
                    <div className={ `tab3 ${ tab === 3 ? 'active' : '' }` }>
                        <Tab3 participants={ participants } playerSelect={ playerSelect } blueChamp={ gameMetadata?.blueTeamMetadata?.participantMetadata[ playerSelect ]?.championId } redChamp={ gameMetadata?.redTeamMetadata?.participantMetadata[ playerSelect ]?.championId } />
                    </div>
                    <div className={ `tab4 ${ tab === 4 ? 'active' : '' }` }>
                        <Tab4 participants={ participants } playerSelect={ playerSelect } blueChamp={ gameMetadata?.blueTeamMetadata?.participantMetadata[ playerSelect ]?.championId } redChamp={ gameMetadata?.redTeamMetadata?.participantMetadata[ playerSelect ]?.championId } />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompareStats