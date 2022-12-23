import { imageBBClient } from '@/axios'

export class ImageService {
    upload(file: File, name: string) {
        const formData = new FormData()
        formData.append('image', file)

        const expiration = 'never'
        const key = `43267c99c7fe8214190225ece489bc27`
        const query = `key=${key}&expiration=${expiration}&name=${name}`

        return imageBBClient.post(`upload?${query}`, formData)
    }
}
