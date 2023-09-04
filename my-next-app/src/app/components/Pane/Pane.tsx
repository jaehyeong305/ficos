'use client';

import React, {useState} from "react";
import styles from "./Pane.module.scss";
import {useDispatch} from "react-redux";
import {closePane} from "@/store/pane/paneSlice";

const Pane: React.FC = () => {
    const dispatch = useDispatch();
    const [isClosing, setIsClosing] = useState(false);

    // NOTE(hajae): Pane close 애니메이션을 추가하기 위해
    const handleClosePane = () => {
        setIsClosing(true);
        setTimeout(() => {
            dispatch(closePane());
        }, 400);
    };

    return (
        <div className={styles.paneWrapper}>
            <div className={styles.overlay}></div>
            <div className={`${styles.pane} ${isClosing ? styles.closePane : ''}`}>
                <div className={styles.paneHeader}>
                    <span className={styles.paneTitle}>FICOS</span>
                    <span className={styles.paneClose} onClick={handleClosePane}>×</span>
                </div>
            </div>
        </div>
    )
}

export default Pane;