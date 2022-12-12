import store from '@/store'
import { createSlice } from '@reduxjs/toolkit'
import { THEME_TYPE } from '@/contants/theme-type'
import { UiStateInterface } from '@/store/@interfaces/uiState.interface'

const initialState: UiStateInterface = {
    theme: THEME_TYPE.light
}

const { actions: mutations, reducer } = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(state, { payload }) {
            state.theme = payload
        }
    }
})

export const uiActions = {
    setTheme: (payload: number) => store.dispatch(mutations.setTheme(payload))
}

export default reducer
