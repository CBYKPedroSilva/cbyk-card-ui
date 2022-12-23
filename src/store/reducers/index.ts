import { combineReducers } from '@reduxjs/toolkit'

import ui from './ui.reducer'
import auth from './auth.reducer'
import loading from './loading.reducer'
import profile from './profile.reducer'

export const reducers = { ui, auth, loading, profile }
export default combineReducers(reducers)
