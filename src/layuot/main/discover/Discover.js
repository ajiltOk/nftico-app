import styles from "./discover.module.scss";
import Btn from "../../../components/buttons/btn/Btn";
import play from "./play.svg";
import main from "./main.svg";

const money = [
    {num: null, description: "We will take all the worry and guesswork out of your blockchain and cryptocurrency concerns."},
    {num: "30.000+", description: "World Arts"},
    {num: "18.000+", description: "Digital Artists"},
    {num: "22.000+", description: "Live Auctions"},
    {num: "50.000+", description: "Unique Products"},
]

export default function Discover() {
    return(
        <div className={styles.discover}>
            <div className={styles.discoverContent}>
                <h1>Discover, collect, and sell extraordinary <span className={styles.ntfsDiscover}>NTFs</span></h1>
                <h3>Our marketplace is the world’s first and largest NFT market for independent creators worldwide</h3>
                <div>
                    <Btn>Explore</Btn>
                    <Btn>Create</Btn>
                </div>
                <div>
                    <img src={play} alt="Play" />
                    <span>Learn more about Nftico</span>
                </div>
                <img src={main} alt="Main" />
            </div>
            <ul className={styles.discoverMoney}>
                {money.map(block => {
                    if(block.num === null) {
                        return(
                            <li className={styles.moneyBlockDescription} key={block.description}>
                                <span>{block.description}</span>
                            </li>
                        )
                    }
                    if(block.num === "30.000+") {
                        return(
                            <li className={styles.moneyBlock} key={block.num}>
                                <span className={styles.coloredAdditional}>{block.num}</span>
                                <span>{block.description}</span>
                            </li>
                        ) 
                    }
                    return(
                        <li className={styles.moneyBlock} key={block.num}>
                            <span className={styles.colored}>{block.num}</span>
                            <span>{block.description}</span>
                        </li>
                    )
                })}
            </ul>
            <span className={styles.line}></span>
        </div>
    )
}