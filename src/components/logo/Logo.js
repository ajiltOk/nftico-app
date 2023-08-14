import styles from "./logo.module.scss";
import logo from "./logo.svg"

export default function Logo() {
    return(
        <div className={styles.logo}>
            <div className={styles.circle}>
                <img src={logo} alt="Logo" />
                <span className={styles.letter}>Z</span>
            </div>
            <span className={styles.title}>NFTICO</span>
        </div>
    )
}