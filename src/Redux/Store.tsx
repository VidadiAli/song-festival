import { configureStore } from '@reduxjs/toolkit'
import songFestival from '../Redux/SFSlice'

export const store = configureStore({
    reducer: {
        sf: songFestival
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch