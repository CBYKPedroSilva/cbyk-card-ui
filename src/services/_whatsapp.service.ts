export class WhatsAppService {
    sendMessage(phone: string, message: string) {
        window.open(
            `http://api.whatsapp.com/send?phone=${phone}&text=${message}`,
            '_blank'
        )
    }
}
