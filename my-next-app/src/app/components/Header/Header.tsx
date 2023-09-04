'use client'

import React, {CSSProperties} from "react";
import styles from "./Header.module.scss";
import Icon from "../Icon/Icon";
import {useDispatch} from "react-redux";
import {openPane} from "@/store/pane/paneSlice";

const Header: React.FC = () => {
    const dispatch = useDispatch();

    const iconStyle: CSSProperties = {
        width: '40px',
        height: '40px',
        margin: '5px',
    }

    const wrapperStyle: CSSProperties = {
        width: '50px',
        height: '50px',
        marginRight: '20px',
    }

    return (
        <div className={styles.headerWraaper}>
            <div className={styles.headerLogo}>FICOS</div>
            <div onClick={() => dispatch(openPane())}>
                <Icon
                    icon="menu"
                    iconStyle={iconStyle}
                    wrapperStyle={wrapperStyle}
                    canHover={true}
                />
            </div>
        </div>
    )
}

export default Header;