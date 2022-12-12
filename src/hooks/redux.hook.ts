import { ReducersType, RootState } from '@/store/@types'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

export const useMapState = (key?: ReducersType) => {
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
    return useAppSelector(state => (key ? state[key] : state))
}
