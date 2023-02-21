import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Addon {
    name: string
    value: string
}

export interface ModalOrderState {
    isOpen: boolean
    title: string
    text: string
    addons?: Addon[]
}

const initialState: ModalOrderState = {
    isOpen: false,
    title: 'Заказ',
    text: 'Какой-то текст',
}

const modalOrderSlice = createSlice({
    name: 'modalOrder',
    initialState,
    reducers: {
        openModalOrder(
            state,
            action: PayloadAction<
                { title: string; text: string; addons?: Addon[] } | undefined
            >,
        ) {
            state.isOpen = true
            state.title = action.payload?.title || 'Оставить заявку'
            state.text =
                action.payload?.text ||
                'Оставьте ваши данные и мы Вам перезвоним!'
            state.addons = action.payload?.addons
        },
        closeModalOrder(state) {
            state.isOpen = false
        },
    },
})

export const { openModalOrder, closeModalOrder } = modalOrderSlice.actions
export const modalOrderReducer = modalOrderSlice.reducer
