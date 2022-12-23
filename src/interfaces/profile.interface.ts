export interface IProfile {
    _id: string
    role: string
    name: string
    email: string
    surname: string
    websiteUrl: string
    linkedinUrl: string
    companyName: string
    mobileNumber: number
    profileAvatar: string
    companyAvatar: string
    whatsAppNumber: number
}

export interface IProfileRegister extends IProfile {
    password: string
}
