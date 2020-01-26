import React from 'react'
import styled from '@emotion/styled'

const colors = {
    primary: {
        black: '#000000',
        orange: '#ff9900',
        blue: '#146eb4',
    },
    neutral: {
        white: '#ffffff',
    },
}

const blockSize = s => s * 8

const buttonStyles = {
    primary: `
    min-width: ${blockSize(18)}px;
    background-color: ${colors.primary.black};
    color: ${colors.neutral.orange};

    :hover {
      background-color: #0088F1;
    }

    :active {
      background-color: #0061AB;
    }
  `,
    secondary: `
    min-width: ${blockSize(18)}px;
    border: 1px solid ${colors.primary.black};
    background-color: transparent;
    color: ${colors.primary.black};

    :hover {
      color: #0088F1;
      border-color: #0088F1;
    }

    :active {
      background-color: #0061AB;
      color: ${colors.neutral.white};
    }
  `,
    tertiary: `
    background-color: transparent;
    text-decoration: underline;
    color: ${colors.primary.black};

    :hover {
      color: #0088F1;
    }

    :active {
      color: #0061AB;
    }
  `,
}
const getStylesForButton = ({ uiType }) => buttonStyles[uiType]

const microStyles = `
  min-width: auto;
  white-space: nowrap;
  margin-left: ${blockSize(1)}px;
  font-family: 'Source Sans Pro', Helvetica, Sans-Serif;
  font-weight: 300;
  padding: 2px ${blockSize(0.5)}px;
`

const StyledButton = styled('button')`
    font-family: 'Source Sans Pro', Helvetica, Sans-Serif;
    font-weight: 600;
    border: 0;
    padding: ${blockSize(1.25)}px ${blockSize(2)}px;
    border-radius: ${blockSize(0.5)}px;
    text-decoration: none;
    text-align: center;
    ${getStylesForButton};
    ${props => (props.uiSize === 'micro' ? microStyles : ``)};
    :disabled {
        opacity: 0.5;
        pointer-events: none;
    }
`

const Button = ({
    dataTestId,
    children,
    parentId,
    uiType = 'primary',
    uiSize,
    disabled,
    onClick,
    tag = 'button',
    href,
}) => {
    return (
        <StyledButton
            data-test-id={dataTestId}
            id={parentId && `${parentId}-button`}
            uiSize={uiSize}
            uiType={uiType}
            disabled={disabled}
            onClick={onClick}
            as={tag}
            href={href}
        >
            {children}
        </StyledButton>
    )
}

export { Button }
