import NftsTitle from "./../../../components/nftsTitle/NftsTitle";
import TrendingElement from "../../../components/trendingElement/TrendingElement";

import elem1 from "./images/elem1.svg";
import elem2 from "./images/elem2.svg";
import elem3 from "./images/elem3.svg";
import elem4 from "./images/elem4.svg";

let elements = [
    {elemNum: 1, image: elem1, sale: "Not for sale", ETH: "2.835 ETH"},
    {elemNum: 2, image: elem2, sale: "Not for sale", ETH: "2.835 ETH"},
    {elemNum: 3, image: elem3, sale: "Not for sale", ETH: "2.835 ETH"},
    {elemNum: 4, image: elem4, sale: "32 ETH", ETH: "2.835 ETH"},
]


export default function Tranding() {
    return(
        <div>
            <NftsTitle>Trending NFTs</NftsTitle>
            <ul>
                {elements.map(element => {
                    return(
                        <li key={element.elemNum}><TrendingElement image={element.image} sale={element.sale} ETH={element.ETH} /></li>
                    )
                })}
            </ul>
        </div>
    )
}