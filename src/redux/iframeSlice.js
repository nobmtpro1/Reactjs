import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    code: null,
    url: null,
    startingTime: null,
    currentTime: null,
}

export const scheduleSlice = createSlice( {
    name: 'iframeSlice',
    initialState,
    reducers: {
        setCode: ( state, action ) =>
        {
            state.code = action.payload
        },
        setUrl: ( state, action ) =>
        {
            state.url = action.payload
        },
        setStartingTime: ( state, action ) =>
        {
            state.startingTime = action.payload
        },

        setCurrentTime: ( state, action ) =>
        {
            state.currentTime = action.payload
        },
    },
} )

// Action creators are generated for each case reducer function
export const { setCode, setUrl, setStartingTime,setCurrentTime,setPlayer } = scheduleSlice.actions

export default scheduleSlice.reducer