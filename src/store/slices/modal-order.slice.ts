import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ModalOrderState {
    isOpen: boolean
    title: string
    text: string
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
            action: PayloadAction<{ title: string; text: string } | undefined>,
        ) {
            state.isOpen = true
            state.title = action.payload?.title || 'Оставить заявку'
            state.text =
                action.payload?.text ||
                'Оставьте ваши данные и мы Вам перезвоним!'
        },
        closeModalOrder(state) {
            state.isOpen = false
        },
    },
})

export const { openModalOrder, closeModalOrder } = modalOrderSlice.actions
export const modalOrderReducer = modalOrderSlice.reducer
