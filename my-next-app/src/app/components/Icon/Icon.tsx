import React, { CSSProperties } from "react";
import styles from "./Icon.module.scss";

type IconProps = {
    // NOTE(hajae): 현재 menu 아이콘 밖에 없기 때문에 
    icon: 'menu';
    style?: CSSProperties; 
}
const Icon: React.FC<IconProps> = (props: IconProps) => {
    return (
        <div className={styles.iconWrapper}>
            <img
                src={`/icons/icon_${props.icon}.svg`}
                alt={props.icon}
                style={props.style}/>
        </div>
    )
}

export default Icon;