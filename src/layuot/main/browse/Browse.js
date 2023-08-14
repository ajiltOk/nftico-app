import NftsTitle from "../../../components/nftsTitle/NftsTitle";
import Nft from "../../../components/nft/Nft";
import Btn from "../../../components/buttons/btn/Btn";

import elem1 from "./images/elem1.svg";
import elem2 from "./images/elem2.svg";
import elem3 from "./images/elem3.svg";
import elem4 from "./images/elem4.svg";

let buttons = [
    {btnName: "All NFT,s"}, {btnName: "Art"}, {btnName: "Games"}, {btnName: "Sports"}, {btnName: "Tranding Cards"},
]

let elements = [
    {image: elem1, title: "Election Season", value: 0.05, elemNum: 1},
    {image: elem2, title: "Election Season", value: 0.05, elemNum: 2},
    {image: elem3, title: "Election Season", value: 0.05, elemNum: 3},
    {image: elem4, title: "Election Season", value: 0.05, elemNum: 4},
]

export default function Browse() {
    return(
        <div>
            <div>
                <NftsTitle>Browse popular NFTs</NftsTitle>
                <ul>
                    {buttons.map(btn => {
                        return(
                            <li key={btn.btnName}><Btn>{btn.btnName}</Btn></li>
                        )
                    })}
                </ul>
            </div>
            <ul>
                {elements.map(element => {
                    return(
                        <li key={element.elemNum}><Nft image={element.image} title={element.title} value={element.value} /></li>
                    )
                })}
            </ul>
        </div>
    )
}