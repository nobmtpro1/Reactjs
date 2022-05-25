import React from 'react'

const Teams = ( { data } ) =>
{
    return (
        <div className='teams'>
            <div className='team'>
                <div className='name'>
                    { data && data[ 0 ]?.code }
                </div>
                <div className='image'>
                    <img src={ data[ 0 ]?.image } alt="" />
                </div>
            </div>
            <div className='vs'>
                VS
            </div>
            <div className='team right'>
                <div className='name'>
                    { data &&  data[ 1 ]?.code }
                </div>
                <div className='image'>
                    <img src={ data[ 1 ]?.image } alt="" />
                </div>
            </div>
        </div>
    )
}

export default Teams