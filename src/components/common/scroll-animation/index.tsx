import React, { useEffect, useRef } from 'react'

interface ScrollAnimationProps {
    children: React.ReactNode
    animation: string
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = props => {
    const { children, animation } = props
    const elementContainer = useRef(null)

    useEffect(() => {
        checkVisible()
        window.addEventListener('scroll', () => checkVisible(), false)
    }, [])

    const checkVisible = () => {
        if (!elementContainer.current) return
        const classAnimation = `animate__${animation}`
        const element = elementContainer.current as HTMLElement
        const hasClass = element.classList.contains(classAnimation)

        if (hasClass) return

        const rect = element.getBoundingClientRect()
        const clientHeight = document.documentElement.clientHeight
        const viewHeight = Math.max(clientHeight, window.innerHeight)
        const result = !(rect.bottom < 0 || rect.top - viewHeight >= 0)

        if (result) element.classList.add(classAnimation)
    }

    return (
        <div className="animate__animated" ref={elementContainer}>
            {children}
        </div>
    )
}

export default ScrollAnimation
