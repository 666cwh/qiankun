import React, { createContext, useState } from "react";
import classNames from "classnames";

type MenuModel = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: number) => void

export interface MenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: MenuModel;
    style?: React.CSSProperties;
    onSelect?: SelectCallback,
    children?: any
}

interface IMenuContext {
    index?: number;
    onSelect?: SelectCallback;
}

export const MenuContext = createContext<IMenuContext>({ index: 0 })
const Menu: React.FC<MenuProps> = (props) => {

    const { defaultIndex, className, mode, children, style } = props

    const [currentActive, setActive] = useState(defaultIndex)

    const classes = classNames('viking-menu', className, {
        'menu-vertical': mode === 'vertical'
    })

    return (
        <ul className={classes} style={style}>
            {children}
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
}
export default Menu