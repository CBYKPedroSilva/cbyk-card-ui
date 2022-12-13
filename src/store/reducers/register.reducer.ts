import store from '@/store'
import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '@/interfaces/user.interface'
import { IProfile } from '@/interfaces/profile.interface'
import { IRegisterStore } from '../@interfaces/register.interface'

const initialState: IRegisterStore = {
    profile: {} as IProfile
}

const { actions: mutations, reducer } = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setProfile(state, { payload }) {
            state.profile = payload
        },
        reset(state) {
            state.profile = {} as IProfile
        }
    }
})

export const registerActions = {
    reset: () => store.dispatch(mutations.reset()),
    setProfile: (value: IUser) => store.dispatch(mutations.setProfile(value))
}

export default reducer
