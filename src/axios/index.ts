import axios from 'axios'
import store from '@/store'

console.log('TOKEN ::::', store.getState().auth.token)

export const httpClient = axios.create({
    baseURL: 'http://146.190.125.152:3000',
    headers: {
        Accept: 'application/json',
        'content-type': 'application/json'
    }
})

httpClient.interceptors.request.use(config => {
    const { token } = store.getState().auth
    console.log('INTERCEPTOR', token)
    if (config && config.headers)
        config.headers.Authorization = `Bearer ${token}`

    return config
})

export const imageBBClient = axios.create({
    baseURL: 'https://api.imgbb.com/1'
})
