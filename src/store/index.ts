import thunk from 'redux-thunk'
import storage from './storage'
import reducers from '@/store/reducers'
import { persistReducer } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'

const persistConfig = { key: 'root', storage }

const middleware = [thunk]
const reducer = persistReducer(persistConfig, reducers)

const store = configureStore({ reducer, middleware })

export default store
