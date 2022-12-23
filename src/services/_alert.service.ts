import { toast, ToastOptions, Slide } from 'react-toastify'

type AlertConfigType = ToastOptions<{}>

export class AlertService {
    private defaultConfig: AlertConfigType = {
        theme: 'light',
        autoClose: 5000,
        draggable: true,
        transition: Slide,
        closeOnClick: true,
        pauseOnHover: true,
        position: 'top-right',
        hideProgressBar: false
    }

    hideAll() {
        toast.dismiss()
    }
    show(message: string, config?: AlertConfigType) {
        toast(message, { ...this.defaultConfig, ...config })
    }

    info(message: string, config?: AlertConfigType) {
        toast.info(message, { ...this.defaultConfig, ...config })
    }
    success(message: string, config?: AlertConfigType) {
        toast.success(message, { ...this.defaultConfig, ...config })
    }
    warn(message: string, config?: AlertConfigType) {
        toast.warn(message, { ...this.defaultConfig, ...config })
    }
    error(message: string, config?: AlertConfigType) {
        toast.error(message, { ...this.defaultConfig, ...config })
    }
}
