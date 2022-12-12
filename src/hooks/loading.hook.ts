import { loadingActions } from '@/store/reducers/loading.reducer'

export const setLoading = (state: boolean, message = '') => {
    loadingActions.setLoading(state)
    if (message) loadingActions.setMessage(message)
}
