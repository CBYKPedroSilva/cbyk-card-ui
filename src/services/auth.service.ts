import { httpClient } from '@/axios'
import { IAuth } from '@/interfaces/auth.interface'

export class AuthService {
    private path: string = '/auth'

    login(data: IAuth) {
        return httpClient.post(`${this.path}/login`, data)
    }
}
