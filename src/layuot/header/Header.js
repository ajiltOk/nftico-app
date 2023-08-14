import styles from "./header.module.scss";
import Logo from "../../components/logo/Logo";
import Navigation from "../../components/navigation/Navigation";
import Search from "../../components/search/Search";
import Btn from "../../components/buttons/btn/Btn";


export default function Header() {
    return(
        <header className={styles.header}>
            <Logo />
            <Navigation />
            <div className={styles.searchBtn}>
                <Search placeholder={"Search..."} />
                <Btn>Get in Touch</Btn>
            </div>
        </header>
    )
}