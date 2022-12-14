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
        const [fullPath] = url.split('?')
        const [, path] = fullPath.split('/')
        const publicPaths = ['login', 'profile', 'register']
        const isPublic = path
            ? publicPaths.some(item => item.startsWith(path))
            : false

        if (path === '/login' && hasToken) {
            setAuthorized(true)
            router.push({ pathname: '/' })
        } else if (!hasToken && !isPublic) {
            setAuthorized(false)
            router.push({ pathname: '/login' })
        } else setAuthorized(true)
    }

    return <>{authorized && children}</>
}

export default RouteGuard
