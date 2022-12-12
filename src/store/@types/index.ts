import store from '@/store'
import { reducers } from '@/store/reducers'

export type ReducersType = keyof typeof reducers
export type RootState = ReturnType<typeof store.getState>
