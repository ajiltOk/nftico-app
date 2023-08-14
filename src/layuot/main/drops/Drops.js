//import styles from "./drops.module.scss";
import NftsTitle from "../../../components/nftsTitle/NftsTitle";
import Drop from "../../../components/drop/Drop";

import drop1 from "./images/drops/drop1.svg";
import drop2 from "./images/drops/drop2.svg";
import drop3 from "./images/drops/drop3.svg";
import drop4 from "./images/drops/drop4.svg";

let drops = [
    {id: 1, img: drop1},
    {id: 2, img: drop2},
    {id: 3, img: drop3},
    {id: 4, img: drop4}
];


export default function Drops() {
    return(
        <>
            <NftsTitle>Selected notable drops</NftsTitle>
            <ul>
                {drops.map(drop => {
                    return(
                        <li key={drop.id}><Drop>{drop.img}</Drop></li>
                    )
                })}
            </ul>
        </>
    )
}