'use client';

import React, {useEffect, useState} from "react";
import styles from "./Pane.module.scss";
import {useDispatch} from "react-redux";
import {closePane} from "@/store/pane/paneSlice";
import PaneItem, {PaneItemProps} from "@/app/components/PaneItem/PaneItem";

const paneItemProps: PaneItemProps[] = [
    {
        paneItemName: 'Dashboard',
        paneItemNameAlias: '대시 보드',
    },
    {
        paneItemName: 'Jobs',
        paneItemNameAlias: '구인 공고',
    },
    {
        paneItemName: 'Applictions',
        paneItemNameAlias: '응모자 관리',
    },
    {
        paneItemName: 'interviews',
        paneItemNameAlias: '면접 관리',
    },
    {
        paneItemName: 'Report',
        paneItemNameAlias: '레포트',
    },
    {
        paneItemName: 'Setting',
        paneItemNameAlias: '설정',
    },
];

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

    useEffect(() => {
        if (isClosing) {
            document.body.style.overflow = 'visible';
        } else {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [isClosing]);

    return (
        <div className={styles.paneWrapper}>
            <div className={styles.overlay}></div>
            <div className={`${styles.pane} ${isClosing ? styles.closePane : ''}`}>
                <div className={styles.paneHeader}>
                    <span className={styles.paneTitle}>FICOS</span>
                    <span className={styles.paneClose} onClick={handleClosePane}>×</span>
                </div>
                <div>
                    {paneItemProps.map((item) => (
                        <PaneItem paneItemName={item.paneItemName} paneItemNameAlias={item.paneItemNameAlias} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Pane;