import store from '@/store'
import { createSlice } from '@reduxjs/toolkit'
import { LoadingStateInterface } from '../@interfaces/loading.interface'

const initialState: LoadingStateInterface = {
    isLoading: false,
    message: ''
}

const { actions: mutations, reducer } = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading(state, { payload }) {
            state.isLoading = payload
        },
        setMessage(state, { payload }) {
            state.message = payload
        }
    }
})

export const loadingActions = {
    setLoading: (payload: boolean) =>
        store.dispatch(mutations.setLoading(payload)),
    setMessage: (payload: string) =>
        store.dispatch(mutations.setMessage(payload))
}

export default reducer
