import React, {CSSProperties} from "react";
import styles from "./Header.module.scss";
import Icon from "../Icon/Icon";

const Header: React.FC = () => {
    const iconStyle: CSSProperties = {
        width: '40px',
        marginRight: '20px',
    }

    return (
        <div className={styles.headerWraaper}>
            <div className={styles.headerLogo}>FICOS</div>
            <Icon icon="menu" style={iconStyle}/>
        </div>
    )
}

export default Header;