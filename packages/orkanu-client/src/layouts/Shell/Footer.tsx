import React from 'react'
import styled from '@emotion/styled'
import { blockSize, colors } from '../../tokens'

const StyledFooter = styled('footer')`
    grid-area: footer;
    display: flex;
    padding: ${blockSize(2)}px ${blockSize(3)}px;
    background: linear-gradient(${colors.neutral.white}, #f3f3f5);
    justify-content: flex-end;
    box-shadow: 0 0 ${blockSize(1)}px rgba(0, 0, 0, 0.1);
    position: relative;

    > button {
        margin-left: ${blockSize(2)}px;
    }
`

export const Footer = ({ parentId }: { parentId?: string }) => {
    return <StyledFooter id={parentId && `${parentId}-footer`}></StyledFooter>
}
