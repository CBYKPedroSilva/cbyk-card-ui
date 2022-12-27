import { cpf, phoneNumber } from '@/helpers/mask'

const maskTypes = { cpf, phoneNumber }
type MaskTypes = keyof typeof maskTypes

export const useMask = (mask: MaskTypes) => {
    return maskTypes[mask]
}
