import styles from "./wrapper.module.scss";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";

export default function Wrapper() {
    return(
        <div className={styles.wrapper}>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}