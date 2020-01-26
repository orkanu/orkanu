import React from 'react'

export const renderChildren = (children: any, id?: string) => {
    return React.Children.map(children, (child, key) => {
        return React.cloneElement(child, {
            key,
            index: key,
            parentId: id,
        })
    })
}
