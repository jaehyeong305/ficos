import React from "react";
import "./page.scss"
import Header from "@/app/components/Header/Header";

const Home: React.FC = () => {
    return (
        <main>
            <Header/>
            <div className="main-wrapper">
                <section className="main-cover"
                     style={{backgroundImage: `url("/images/background/main-background.jpg")`}}>
                    <div className="top"></div>
                    <div className="main-title">
                        <span className="title">Find Colleagues</span>
                        <span
                            className="description">Talent recruitment management is done on the FICOS platform.</span>
                    </div>
                </section>
                {/*<img src="/images/background/main-background.jpg" alt="background"/>*/}

            </div>
        </main>
    )
}

export default Home;