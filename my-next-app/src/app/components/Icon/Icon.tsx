import React, {CSSProperties} from "react";
import styles from "./Icon.module.scss";

type IconProps = {
    // NOTE(hajae): 현재 menu 아이콘 밖에 없기 때문에 
    icon: 'menu';
    wrapperStyle?: CSSProperties;
    iconStyle?: CSSProperties;
    canHover?: boolean;
}
const Icon: React.FC<IconProps> = (props: IconProps) => {
    return (
        <div
            className={`${styles.iconWrapper} ${props.canHover ? styles.hover : ''}`}
            style={props.wrapperStyle}>
            <img
                src={`/icons/icon_${props.icon}.svg`}
                alt={props.icon}
                style={props.iconStyle}/>
        </div>
    )
}

export default Icon;