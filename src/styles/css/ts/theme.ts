import store from '@/store'
import THEMES from './themes'

export default THEMES[store.getState().ui.theme]
