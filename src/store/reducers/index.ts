import { combineReducers } from '@reduxjs/toolkit'

import ui from './ui.reducer'
import auth from './auth.reducer'
import loading from './loading.reducer'

export const reducers = { ui, auth, loading }
export default combineReducers(reducers)
