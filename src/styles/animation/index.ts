const _buildAnimationAttr = (animation: string) => ({
    className: `animate__animated ${animation}`
})

const _buildCommonObj = (animation: string) => ({
    up: _buildAnimationAttr(`animate__${animation}Up`),
    default: _buildAnimationAttr(`animate__${animation}`),
    down: _buildAnimationAttr(`animate__${animation}Down`),
    left: _buildAnimationAttr(`animate__${animation}Left`),
    right: _buildAnimationAttr(`animate__${animation}Right`)
})

export const zoomIn = _buildCommonObj('zoomIn')
export const zoomOut = _buildCommonObj('zoomOut')

export const fadeIn = _buildCommonObj('fadeIn')
export const fadeOut = _buildCommonObj('fadeOut')

export const backIn = _buildCommonObj('backIn')
export const backOut = _buildCommonObj('backOut')

export const slideIn = _buildCommonObj('slideIn')
export const slideOut = _buildCommonObj('slideOut')

export const bounceIn = _buildCommonObj('bounceIn')
export const bounceOut = _buildCommonObj('bounceOut')
