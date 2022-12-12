import { IUser } from '@/interfaces/user.interface'

export interface IAuthStore {
    user: IUser
    token: string
}
