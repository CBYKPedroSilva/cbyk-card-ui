import store from '@/store'
import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '@/interfaces/user.interface'
import { IAuthStore } from '../@interfaces/auth.interface'

const initialState: IAuthStore = {
    user: {} as IUser,
    token: ''
}

const { actions: mutations, reducer } = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, { payload }) {
            state.user = payload
        },
        setToken(state, { payload }) {
            state.token = payload
        },
        reset(state) {
            state.token = ''
            state.user = {} as IUser
        }
    }
})

export const authActions = {
    reset: () => store.dispatch(mutations.reset()),
    setUser: (value: IUser) => store.dispatch(mutations.setUser(value)),
    setToken: (value: string) => store.dispatch(mutations.setToken(value))
}

export default reducer
