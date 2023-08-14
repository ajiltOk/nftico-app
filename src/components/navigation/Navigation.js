import styles from "./navigation.module.scss";

const navigation = ["Explore", "Stats", "Drops", "Activity"];

export default function Navigation() {
    return(
        <nav>
            <ul className={styles.nav}>
                {navigation.map(navElem => {
                    return( <li className={styles.nav_elem} key={navElem}>{navElem}</li> )
                })}
            </ul>
        </nav>
    )
}