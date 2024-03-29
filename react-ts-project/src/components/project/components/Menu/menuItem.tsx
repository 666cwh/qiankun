import React from 'react'
import classNames from 'classnames'
import { createContext } from 'vm';

export interface MenuItemProps {
    index?: number;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties,
    children?: any
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
    const { index, disabled, className, style, children } = props
    const classes = classNames('menu-item', className, {
        'is-disabled': disabled
    })
    return (
        <li className={classes} style={style}> {children}</li>
    )
}

export default MenuItem