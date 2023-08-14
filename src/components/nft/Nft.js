import Btn from "../buttons/btn/Btn";
import Likes from "../likes/Likes";

import shape from "./shape.svg";

export default function Nft({image, title, value}) {
    return(
        <div>
            <img src={image} alt="Element" />
            <h3>{title}</h3>
            <div>
                <div>
                    <img src={shape} alt="Shape" />
                    <span>From</span>
                    <span>{value} ETH</span>
                </div>
                <Likes />
            </div>
            <span></span>
            <Btn>Place bid</Btn>
        </div>
    )
}