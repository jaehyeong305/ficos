'use client';

import React, {useState} from "react";
import styles from "./Pane.module.scss";
import {useDispatch} from "react-redux";
import {closePane} from "@/store/pane/paneSlice";

const Pane: React.FC = () => {
    const dispatch = useDispatch();
    const [isClosing, setIsClosing] = useState(false);

    const handleClosePane = () => {
        // 패널 닫기 애니메이션 시작
        setIsClosing(true);

        // 패널 닫기 애니메이션 이후 상태 변경
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