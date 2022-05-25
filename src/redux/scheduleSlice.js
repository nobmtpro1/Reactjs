import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  leagues: localStorage.getItem( 'leagues' ) ? JSON.parse( localStorage.getItem( 'leagues' ) ) : [ 'lpl', 'lck' ]
}

export const scheduleSlice = createSlice( {
  name: 'scheduleSlice',
  initialState,
  reducers: {
    setLeagues: ( state, action ) =>
    {
        state.leagues =  action.payload 
        localStorage.setItem( 'leagues',JSON.stringify(action.payload ) )
    },
  },
} )

// Action creators are generated for each case reducer function
export const { setLeagues } = scheduleSlice.actions

export default scheduleSlice.reducer