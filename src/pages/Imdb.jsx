import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

function Imdb() {
    return (
        <section className="imdb">
            <Header />
            <main className="banner__title">
                <h1
                    style={{
                        color: "papayawhip",
                        textAlign: "center",
                        height: "28vh",
                        marginTop: "25vh",
                    }}
                >
                    Coming Soon
                </h1>
            </main>
            <Footer />
        </section>
    );
}

export default Imdb;
