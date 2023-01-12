import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FiltersState {
    subcategory: number[]
}

export const initialFilters: FiltersState = {
    subcategory: [],
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState: initialFilters,
    reducers: {
        setFilter(
            state,
            action: PayloadAction<{ name: keyof FiltersState; value: any }>,
        ) {
            state[action.payload.name] = action.payload.value
        },
        setFilters(state, action: PayloadAction<FiltersState>) {
            for (const key of Object.keys(action.payload)) {
                state[key as keyof FiltersState] =
                    action.payload[key as keyof FiltersState]
            }
        },
    },
})

export const filtersReducer = filtersSlice.reducer
export const { setFilter, setFilters } = filtersSlice.actions
