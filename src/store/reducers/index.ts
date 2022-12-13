import { combineReducers } from '@reduxjs/toolkit'

import ui from './ui.reducer'
import auth from './auth.reducer'
import loading from './loading.reducer'
import register from './register.reducer'

export const reducers = { ui, auth, loading, register }
export default combineReducers(reducers)
