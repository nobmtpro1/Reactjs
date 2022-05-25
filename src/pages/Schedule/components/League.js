import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLeagues } from '../../../redux/scheduleSlice'
import { useNavigate } from 'react-router-dom'

const League = ( { e, searchParams, setSearchParams } ) =>
{
    const dispatch = useDispatch()
    const history = useNavigate()

    const handleFilter = () =>
    {
        var arr = searchParams.get( 'leagues' ).split( ',' )
        if ( arr?.includes( e?.slug ) )
        {
            arr = arr?.filter( x => x !== e?.slug )
        } else
        {
            arr?.push( e?.slug )
        }
        dispatch( setLeagues( arr ) )
        console.log( arr.toString() )
        // history( '/schedule?league=' + searchParams.get('leagues').toString() )
        // setSearchParams( { leagues: arr.join(',') } );
        history( '/schedule?leagues=' + arr.join( ',' ) )
    }

    if ( e?.displayPriority.status !== 'hidden' )
    {
        return (
            <div onClick={ handleFilter } className={ `league ${ searchParams.get( 'leagues' )?.split( ',' )?.includes( e?.slug ) && 'active' }` } key={ e?.id }>
                <div className='image'>
                    <img src={ e?.image } alt="" />
                </div>
                <div className='text'>
                    <div className='name'>
                        { e?.name }
                    </div>
                    <div className='location'>
                        { e?.region }
                    </div>
                </div>
            </div>
        )
    }

}

export default League