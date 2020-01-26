import React from 'react'
import styled from '@emotion/styled'
import { blockSize, colors } from '../../tokens'

const StyledAside = styled('aside')`
    grid-area: aside;
    display: grid;
    align-items: end;
    padding: ${blockSize(2)}px ${blockSize(5)}px;
    background-color: ${colors.primary.black};
    border-right: 1px solid ${colors.primary.orange};
`

export const Aside = ({ parentId }: { parentId?: string }) => {
    return <StyledAside id={parentId && `${parentId}-aside`}></StyledAside>
}
