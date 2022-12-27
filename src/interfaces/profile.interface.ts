export interface IProfile {
    _id: string
    role: string
    name: string
    email: string
    surname: string
    websiteUrl: string
    linkedinUrl: string
    companyName: string
    profileAvatar: string
    companyAvatar: string
    mobileNumber: number | string
    whatsAppNumber: number | string
}

export interface IProfileRegister extends IProfile {
    password: string
}
