import { httpClient } from '@/axios'
import { IProfile, IProfileRegister } from '@/interfaces/profile.interface'

export class ProfileService {
    private path: string = '/profiles'

    getById(id: string) {
        return httpClient.get<IProfile>(`${this.path}/${id}`)
    }

    getByEmail(email: string) {
        return httpClient.get<IProfile>(`${this.path}/byEmail/${email}`)
    }

    create(data: IProfileRegister) {
        return httpClient.post(`${this.path}`, data)
    }

    update(id: string, data: IProfile) {
        return httpClient.put(`${this.path}/${id}`, data)
    }
}
