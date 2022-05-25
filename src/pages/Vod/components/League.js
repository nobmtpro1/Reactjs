import React from 'react'
import { useNavigate} from 'react-router-dom'

const League = ( { e, params, i } ) =>
{

    const navigate = useNavigate()
    const handleRedirect = () => {
        navigate('/vods/' + e?.slug)
    }

    return (
        <div className={ `item ${ ( params?.league === e?.slug || ( !params?.league && i === 0 ) ) && 'active' }` } onClick={handleRedirect}>
            <div className='image'>
                <img src={ e?.image } alt="" />
            </div>
            <div className='text'>
                <div className='name'>
                    { e?.name }
                </div>
                <div className='region'>
                    { e?.region }
                </div>
            </div>
        </div>
    )
}

export default League