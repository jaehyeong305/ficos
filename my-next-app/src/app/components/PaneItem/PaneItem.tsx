'use client';

import React, {useState} from "react";
import styles from "./PaneItem.module.scss"
import {Nanum_Gothic_Coding} from "next/font/google";

const nanumGothicCoding = Nanum_Gothic_Coding({ weight: '700', subsets: ['latin'], display: 'swap' });

export type PaneItemProps = {
    paneItemName: string;
    paneItemNameAlias: string;
}

const PaneItem: React.FC<PaneItemProps> = (props: PaneItemProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    return (
        <div className={styles.paneItemWrapper} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={`${styles.paneItem} ${isHovered ? styles.hoveredPaneItem : ''}`}>
                {props.paneItemName}
            </div>
            <div className={`${styles.paneItemAlias} ${nanumGothicCoding.className} ${isHovered ? styles.hoveredPaneItemAlias : ''}`}>
                {props.paneItemNameAlias}
            </div>
        </div>
    );
}

export default PaneItem;