import beCheck from "./biCheck.svg";

export default function TrendingElement({image, sale, ETH}) {
    return(
        <div>
            <img src={image} alt="Element" />
            <div>
                <span>By Ya Chin-Ho</span>
                <img src={beCheck} alt="Check" /> 
            </div>
            <h3>Venture Capitalist</h3>
            <div>
                <span>From</span>
                <span>{sale}</span>
            </div>
            <div>
                <span>Highest bid</span>
                <span>{ETH}</span>
            </div>
        </div>
    )
}