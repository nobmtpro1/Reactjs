import React, { useState } from 'react'

const Option = () =>
{

    const [ active, setActive ] = useState( 0 )

    return (
        <div className='option'>
            <div className='text' onClick={ () => setActive( prev => prev > 0 ? 0 : 1 ) }>OPTIONS &gt;	</div>
            <div className='popup-wrap'>
                <div className={ `popup ${ active === 1 && 'active' }` } onClick={ () => setActive( prev => prev + 1 ) }>
                    <div className='text'>Theater &gt;	</div>
                </div>
                <div className={ `popup ${ active === 2 && 'active' }` } onClick={ () => setActive( prev => prev - 1 ) }>
                    <div className='text'>Sidebar	</div>
                    <div className='text'>Theater	</div>
                </div>
            </div>
        </div>
    )
}

export default Option