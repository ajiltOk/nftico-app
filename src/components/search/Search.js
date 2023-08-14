import styles from "./search.module.scss";
import search from "./search.svg"

export default function Search({placeholder, glass=true}) {
    return(
        <div className={styles.inputSearch}>
            <span className={styles.search}>{placeholder}</span>
            {glass && <img src={search} className={styles.glass} alt="Search" />}
        </div>
    )
}