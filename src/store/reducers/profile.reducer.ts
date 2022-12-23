import store from '@/store'
import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '@/interfaces/user.interface'
import { IProfile } from '@/interfaces/profile.interface'
import { IProfileStore } from '../@interfaces/profile.interface'

const initialState: IProfileStore = {
    profile: {} as IProfile
}

const { actions: mutations, reducer } = createSlice({
    name: 'profile',
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

export const profileActions = {
    reset: () => store.dispatch(mutations.reset()),
    setProfile: (value: IProfile) => store.dispatch(mutations.setProfile(value))
}

export default reducer
