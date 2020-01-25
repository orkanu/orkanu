import React from 'react'
import { useStateValue } from '../../state/State'
const Root = () => {
    const [context, dispatch] = useStateValue()
    setTimeout(() => {
        dispatch({ type: 'changeTheme', newTheme: { secondary: 'red' } })
    }, 3)
    const { theme } = context
    return <div>The theme is {JSON.stringify(theme)}</div>
}

export { Root }
