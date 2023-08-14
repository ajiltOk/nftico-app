import Btn from "./../buttons/btn/Btn";

import comment from "./comment.svg";

export default function ResoursesElement({image, hasImage=false, hasButton=false, buttonName1, buttonName2, title, person, peronName, mounth, day, year}) {
    return(
        <div>
            {hasImage && <img src={image} alt="Element" />}
            <div>
                <Btn>{buttonName1}</Btn>
                {hasButton && <Btn>{buttonName2}</Btn>}
                <span><img src={comment} alt="Comment" />No Comment</span>
            </div>
            <h3>{title}</h3>
            <div>
                <img src={person} alt="Person" />
                <div>
                    <span>{peronName}</span>
                    <div>
                        <span>{mounth} </span>
                        <span>{day}, </span>
                        <span>{year}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}