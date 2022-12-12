import React from 'react'
import Styles from './styles'
import { useMapState } from '@/hooks/redux.hook'
import { LoadingStateInterface } from '@/store/@interfaces/loading.interface'

const AppLoading: React.FC = () => {
    const { isLoading, message } = useMapState(
        'loading'
    ) as LoadingStateInterface

    return (
        <>
            {isLoading ? (
                <Styles.Backdrop>
                    <Styles.Label>{message || 'Carregando...'}</Styles.Label>
                </Styles.Backdrop>
            ) : (
                <></>
            )}
        </>
    )
}

export default AppLoading
