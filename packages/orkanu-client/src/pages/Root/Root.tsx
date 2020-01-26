import React from 'react'
import { useStateValue } from '../../state'
import Shell from '../../layouts/Shell'

const Root = () => {
    const [context, dispatch] = useStateValue()

    return (
        <Shell id="shell">
            <Shell.Header />
            <Shell.Main />
            <Shell.Aside />
            <Shell.Footer />
        </Shell>
    )
}

export { Root }
