import React from 'react'

const Dragons = ( { data } ) =>
{
    return (
        <div className='dragons'>
            <div className='images left'>
            {
                    data?.blueTeam?.dragons?.map( ( e, i ) => (
                        <div className='image' key={i}>
                        {
                            e === 'mountain' ? 
                            <svg className="icon" width="18px" height="18px" viewBox="0 0 14 18" xmlns="https://www.w3.org/2000/svg"><path className="shape" fill="#A8805D" d="M3,4.5 L6,16 L5,17 L1,12.0302388 L1,7.07612197 L3,4.5 Z M6.50012207,13 L4.5,3 L6,1 L8,1 L9.5,3 L7.5,13 L6.50012207,13 Z M11,4.5 L13,7.07612197 L13,12.0302388 L9,17 L8,16 L11,4.5 Z"></path></svg>
                            :
                            <svg className="icon" width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><path className="shape" fill="#81D9F5" d="M13.4142 3V5.78423L20 12.2808L13.4142 18.7773L11.0572 21V19.2414L4 12.2808L11.0572 5.32019L13.4142 3ZM15.1231 10.1346L17 11.9822L12 16.9041L7.00003 11.9822L8.87694 10.1346L12 13.2089L15.1231 10.1346ZM14.0624 9.09049L12 11.1207L9.9376 9.09055L12 7.06034L14.0624 9.09049Z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        }
                        </div>
                    ) )
                }
            </div>
            <div className='text'>
                DRAGONS
            </div>
            <div className='images'>
            {
                    data?.redTeam?.dragons?.map( ( e, i ) => (
                        <div className='image'>
                        {
                            e === 'mountain' ? 
                            <svg className="icon" width="18px" height="18px" viewBox="0 0 14 18" xmlns="https://www.w3.org/2000/svg"><path className="shape" fill="#A8805D" d="M3,4.5 L6,16 L5,17 L1,12.0302388 L1,7.07612197 L3,4.5 Z M6.50012207,13 L4.5,3 L6,1 L8,1 L9.5,3 L7.5,13 L6.50012207,13 Z M11,4.5 L13,7.07612197 L13,12.0302388 L9,17 L8,16 L11,4.5 Z"></path></svg>
                            :
                            <svg className="icon" width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><path className="shape" fill="#81D9F5" d="M13.4142 3V5.78423L20 12.2808L13.4142 18.7773L11.0572 21V19.2414L4 12.2808L11.0572 5.32019L13.4142 3ZM15.1231 10.1346L17 11.9822L12 16.9041L7.00003 11.9822L8.87694 10.1346L12 13.2089L15.1231 10.1346ZM14.0624 9.09049L12 11.1207L9.9376 9.09055L12 7.06034L14.0624 9.09049Z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        }
                        </div>
                    ) )
                }
            </div>
        </div>
    )
}

export default Dragons