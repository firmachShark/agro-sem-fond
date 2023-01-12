import { configureStore } from '@reduxjs/toolkit'
import { modalOrderReducer } from './slices'
import { appReducer } from './slices/app.slice'
import { filtersReducer } from './slices/filters.slice'

export const store = configureStore({
    reducer: {
        modalOrder: modalOrderReducer,
        app: appReducer,
        filters: filtersReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
