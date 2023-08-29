import React from "react";
import styles from "./page.module.scss";
import Header from "@/app/components/Header/Header";

const Home: React.FC = () => {
    return (
        <main>
            <Header/>
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
                {/*<img src="/images/background/main-background.jpg" alt="background"/>*/}

            </div>
        </main>
    )
}

export default Home;