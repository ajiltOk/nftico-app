import NftsTitle from "./../../../components/nftsTitle/NftsTitle";
import Btn from "../../../components/buttons/btn/Btn";
import CollectionElement from "./../../../components/collectionElement/CollectionElement";

import elem1 from "./images/elem1.svg";
import elem2 from "./images/elem2.svg";
import elem3 from "./images/elem3.svg";
import elem4 from "./images/elem4.svg";
import elem5 from "./images/elem5.svg";
import elem6 from "./images/elem6.svg";
import elem7 from "./images/elem7.svg";
import elem8 from "./images/elem8.svg";
import elem9 from "./images/elem9.svg";

let elements = [
    {image: elem1, title: "Bored Ape Yacht Club", amount: "10,450.00", ETH: 2.9},
    {image: elem2, title: "Chromie Squiggle", amount: "19,320.00", ETH: 2.7},
    {image: elem3, title: "Worlwide Webb Land", amount: "10,450.00", ETH: 2.9},
    {image: elem4, title: "Bored Ape Chemistry", amount: "10,450.00", ETH: 2.5},
    {image: elem5, title: "Bored Ape Kennel Club", amount: "10,450.00", ETH: 1.9},
    {image: elem6, title: "Brick-and-Mortar", amount: "10,450.00", ETH: 1.9},
    {image: elem7, title: "RTFKT CloneX Mintvial", amount: "10,450.00", ETH: 1.9},
    {image: elem8, title: "Psychedelics Anonymous", amount: "10,450.00", ETH: 1.4},
    {image: elem9, title: "Free Way to Back Up", amount: "10,450.00", ETH: 2.5},
]


export default function Collections() {
    return(
        <div>
            <div>
                <NftsTitle hasDrop={true}>Top collections</NftsTitle>
                <div>
                    <Btn hasDrop={true}>1 DAY</Btn>
                    <Btn hasDrop={true}>7 DAYS</Btn>
                    <Btn hasDrop={true}>30 DAYS</Btn>
                </div>
                <Btn>Ethereum</Btn>
            </div>
            <ul>
                {elements.map(element => {
                    return(
                        <li key={element.title}><CollectionElement image={element.image} title={element.title} amount={element.amount} ETH={element.ETH} /></li>
                    )
                })}
            </ul>
            <Btn>See All Collections</Btn>
        </div>
    )
}