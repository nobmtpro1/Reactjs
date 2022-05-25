import { configureStore } from '@reduxjs/toolkit'
import iframeSlice from './iframeSlice'
import scheduleSlice from './scheduleSlice'

export const store = configureStore( {
    reducer: {
        scheduleSlice: scheduleSlice,
        iframeSlice: iframeSlice,
    },
} )