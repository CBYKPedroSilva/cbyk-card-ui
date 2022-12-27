import store from '@/store'
import { createSlice } from '@reduxjs/toolkit'
import { IProfile } from '@/interfaces/profile.interface'
import { IProfileStore } from '../@interfaces/profile.interface'

const initialState: IProfileStore = {
    profile: {} as IProfile,
    initialName: ''
}

const { actions: mutations, reducer } = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile(state, { payload }) {
            state.profile = payload
            if (payload && payload.name) {
                state.initialName = `${payload.name[0]}${payload.surname[0]}`
            }
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
