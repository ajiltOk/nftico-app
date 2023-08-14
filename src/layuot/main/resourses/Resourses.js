import Nfts from "./../../../components/nftsTitle/NftsTitle";
import ResoursesElement from "../../../components/resoursesElement/ResoursesElement";

import mainImage from "./images/Image.svg";
import elem1 from "./images/elem1.svg";
import elem2 from "./images/elem2.svg";
import person1 from "./images/person1.svg";
import person2 from "./images/person2.svg";

let elements = [
    {image: elem1, hasImage: true, hasButton: true, buttonName1: "Game", buttonName2: "NFT", title: "I think I minted duplicate NFTs", person: person1,
     peronName: "Courtney Henry", mounth: "May", day: 27, year: 2022},
    {image: elem2, hasImage: true, hasButton: true, buttonName1: "NFT Token", buttonName2: "NFT", title: "The  Marketplace isn’t working", person: person2,
     peronName: "Courtney Henry",mounth: "May", day: 27, year: 2022},
]

export default function Resourses() {
    return(
        <div>
            <Nfts>Resouces for getting started</Nfts>
            <div>
                <img src={mainImage} alt="Main" />
                <ul>
                    {elements.map(element => {
                        return(
                            <li key={element.title}><ResoursesElement image={element.image} title={element.title} hasImage={element.hasImage} hasButton={element.hasButton}
                            buttonName1={element.buttonName1} buttonName2={element.buttonName2} person={element.person} peronName={element.peronName} mounth={element.mounth}
                            day={element.day} year={element.year} 
                            /></li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}