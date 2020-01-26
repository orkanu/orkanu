import React from 'react'
import { GlobalStyles } from './components/GlobalStyles'
import { StateProvider, mainReducer } from './state'
import { AppState } from './state/reducers'
import { Root } from './pages/Root'

export default function App() {
    const initialState: AppState = {
        general: { loading: true },
    }
    return (
        <div>
            <GlobalStyles />
            <StateProvider initialState={initialState} reducer={mainReducer}>
                <Root />
            </StateProvider>
        </div>
    )
}
