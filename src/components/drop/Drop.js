import Btn from "./../buttons/btn/Btn";
import Likes from "../likes/Likes";

import shape from "./shape.svg";

import people1 from "./../../layuot/main/drops/images/peoples/p1.svg";
import people2 from "./../../layuot/main/drops/images/peoples/p2.svg";
import people3 from "./../../layuot/main/drops/images/peoples/p3.svg";

let humans = [
    {id: 1, img: people1},
    {id: 2, img: people2},
    {id: 3, img: people3},
]

export default function Drop({children}) {
    return(
        <div>
            <img src={children} alt="Drop"/>
            <div>
                <h3>Science Jobs</h3>
                <Likes />
            </div>
            <div>
                <img src={shape} alt="Shape"/>
                <span>From <span>17.59</span> Flow</span>
                <ul>
                    {humans.map(human => {
                        return(
                            <li key={human.id}><img src={human.img} alt="Human" /></li>
                        )
                    })}
                </ul>
            </div>
            <Btn>Live now</Btn>
        </div>
    )
}