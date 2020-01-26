import React from 'react'
import styled from '@emotion/styled'
import { blockSize, colors } from '../../tokens'

const StyledHeader = styled('header')`
    grid-area: header;
    padding: ${blockSize(4)}px;
    background-color: ${colors.neutral.white};
    box-shadow: 0 0 ${blockSize(1)}px rgba(0, 0, 0, 0.1);
    position: relative;
`

export const Header = ({ parentId }: { parentId?: string }) => {
    return <StyledHeader id={parentId && `${parentId}-header`}></StyledHeader>
}
