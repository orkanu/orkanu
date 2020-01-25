import React from 'react'
import { GlobalStyles } from './components/GlobalStyles'
import { StateProvider } from './state/State'
import { Root } from './pages/Root'

export default function App() {
    const initialState = {
        theme: { primary: 'green' },
    }

    const reducer = (state: any, action: any) => {
        switch (action.type) {
            case 'changeTheme':
                return {
                    ...state,
                    theme: action.newTheme,
                }

            default:
                return state
        }
    }
    return (
        <div>
            <GlobalStyles />
            <StateProvider initialState={initialState} reducer={reducer}>
                <Root />
            </StateProvider>
        </div>
    )
}
