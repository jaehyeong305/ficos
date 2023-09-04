'use client';

import React from "react";
import styles from "./Main.module.scss";
import Pane from "@/app/components/Pane/Pane";
import {useSelector} from "react-redux";

const Main: React.FC = () => {
    const paneState = useSelector((state) => state.PaneReducer);
    
    return (
        <div className={styles.mainWrapper}>
            <section className={styles.mainCover}
                     style={{backgroundImage: `url("/images/background/main-background.jpg")`}}>
                <div className={styles.top}></div>
                <div className={styles.mainTitle}>
                    <span className={styles.title}>Find Colleagues</span>
                    <span
                        className={styles.description}>Talent recruitment management is done on the FICOS platform.</span>
                </div>
            </section>
            {paneState && <Pane/>}
        </div>
    )
}

export default Main;