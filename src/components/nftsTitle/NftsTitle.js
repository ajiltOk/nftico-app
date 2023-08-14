import styles from "./nftsTitle.module.scss";
import chevronDown from "./chevron-down.svg";

export default function NftsTitle({children, hasDrop=false}) {
    return(
        <div className={styles.titleBlock}>
            <span className={styles.nfts}>NFTs</span>
            <h2 className={styles.title}>
                {children}
                {hasDrop && <img src={chevronDown} alt="Drop" />}
                </h2>
        </div>
    )
}