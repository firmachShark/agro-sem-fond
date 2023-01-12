import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AppState {
    search: string
}

const initialState: AppState = {
    search: '',
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload
        },
    },
})

export const { setSearch } = appSlice.actions
export const appReducer = appSlice.reducer
