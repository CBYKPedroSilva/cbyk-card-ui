import { useStore } from 'react-redux'
import { useRouter } from 'next/router'
import { RootState } from '@/store/@types'
import React, { useEffect, useState } from 'react'

interface RouteGuardProps {
    children: React.ReactNode
}
const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
    const router = useRouter()
    const store = useStore()
    const [authorized, setAuthorized] = useState(false)

    useEffect(() => {
        authCheck(router.asPath)

        const hideContent = () => setAuthorized(false)
        router.events.on('routeChangeStart', hideContent)
        router.events.on('routeChangeComplete', authCheck)

        return () => {
            router.events.off('routeChangeStart', hideContent)
            router.events.off('routeChangeComplete', authCheck)
        }
    }, [])

    function authCheck(url: string) {
        const { auth } = store.getState() as RootState

        const hasToken = !!auth.token
        const publicPaths = ['/login']
        const path = url.split('?')[0]

        console.log('HAS TOKEN :', hasToken, path)

        if (path === '/login' && hasToken) {
            setAuthorized(true)
            router.push({ pathname: '/' })
        } else if (!hasToken && !publicPaths.includes(path)) {
            setAuthorized(false)
            router.push({ pathname: '/login' })
        } else setAuthorized(true)
    }

    return <>{authorized && children}</>
}

export default RouteGuard
