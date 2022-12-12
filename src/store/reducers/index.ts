import { combineReducers } from '@reduxjs/toolkit'

import ui from './ui.reducer'
import loading from './loading.reducer'

export const reducers = { ui, loading }
export default combineReducers(reducers)
