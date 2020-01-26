import React from 'react'
import styled from '@emotion/styled'
import { blockSize, colors } from '../../tokens'

const StyledMain = styled('main')`
    grid-area: main;
    overflow-y: auto;
    padding: ${blockSize(3)}px;
    position: relative;
`
export const Main = ({
    children,
    parentId,
}: {
    children?: any
    parentId?: string
}) => {
    return (
        <StyledMain id={parentId && `${parentId}-main`}>{children}</StyledMain>
    )
}
