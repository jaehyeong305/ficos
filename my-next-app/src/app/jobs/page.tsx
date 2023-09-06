import React from "react";
import styles from "./jobs.module.scss";

const Jobs: React.FC = () => {
    return (
        <div className={styles.jobsWrapper}>
            <div className={styles.jobsHeader}>
                <div className={styles.jobsHeaderTop}>
                    <div className={styles.jobsLogo}>FICOS</div>
                    <div className={styles.userInfo}>
                        <span>회사 명</span>
                        <span>채용담당자</span>
                        <span>하재형 님</span>
                        <div style={{backgroundImage: `url("/images/background/user.jpg")`}}></div>
                    </div>
                </div>
                <div className={styles.jobsTabs}>
                    <span className={styles.active}>구인공고 관리</span>
                    <span className={styles.inactive}>채용흐름 관리</span>
                    <span className={styles.inactive}>지원폼 관리</span>
                </div>
            </div>
        </div>
    )
}

export default Jobs;