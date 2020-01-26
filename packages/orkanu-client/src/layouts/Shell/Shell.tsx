import React from 'react'
import styled from '@emotion/styled'
import { renderChildren } from '../../utils/react'
import { Aside } from './Aside'
import { Main } from './Main'
import { Header } from './Header'
import { Footer } from './Footer'

const StyledShell = styled('div')`
    height: 100vh;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        'aside header'
        'aside main'
        'aside footer';
`
const Shell = ({ children, id }: { id?: string; children: any }) => {
    return <StyledShell id={id}>{renderChildren(children, id)}</StyledShell>
}

Shell.Aside = Aside
Shell.Main = Main
Shell.Header = Header
Shell.Footer = Footer

export default Shell
