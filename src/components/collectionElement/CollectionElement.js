import shape from "./shape.svg";

export default function Collection({image, title, amount, ETH}) {
    return(
        <div>
            <img src={image} alt="Element" />
            <div>
                <p>{title}</p>
                <div>
                    <img src={shape} alt="Shape" />
                    <span>{amount}</span>
                </div>
            </div>
            <div>
                <span><span>{ETH}</span>K ETH</span>
                <span>+10.00%</span>
            </div>
        </div>
    )
}