import Btn from "./../../../components/buttons/btn/Btn";

import image from "./images/image.svg";
import spons1 from "./images/sponsors/spons1.svg";
import spons2 from "./images/sponsors/spons2.svg";
import spons3 from "./images/sponsors/spons3.svg";
import spons4 from "./images/sponsors/spons4.svg";
import spons5 from "./images/sponsors/spons5.svg";


export default function Connect() {
    return(
        <div>
            <img src={image} alt="Main" />
            <div>
                <h2>Create, Sell well & Collect Your Best Very Fast NFTs.</h2>
                <p>Create, Sell well & Collect Your Best Very Fast NFTs.The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless</p>
                <Btn>Connect Wallet</Btn>
            </div>
            <div>
                <img src={spons1} alt="Sponsor" />
                <img src={spons2} alt="Sponsor" />
                <img src={spons3} alt="Sponsor" />
                <img src={spons4} alt="Sponsor" />
                <img src={spons5} alt="Sponsor" />
            </div>
            <span></span>
        </div>
    )
}