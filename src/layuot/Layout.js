import styles from "./layout.module.scss";
import Wrapper from "./wrapper/Wrapper";
import "../base/base.scss";

export default function Layout() {
    return(
        <div className={styles.layout}>
            <Wrapper />
        </div>
    )
}