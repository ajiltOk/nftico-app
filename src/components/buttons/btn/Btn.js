import styles from "./btn.module.scss";
import chevronDownMini from "./chevron-down-mini.svg";

export default function Btn({children, hasDrop=false}) {
    return(
        <button className={styles.btn}>
            {children}
            {hasDrop && <img src={chevronDownMini} alt="Drop" />}
        </button>
    )
}