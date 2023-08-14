import Btn from "./../../components/buttons/btn/Btn";
import Search from "./../../components/search/Search";

import facebook from "./images/facebook.svg";
import twitter from "./images/twitter.svg";
import youtube from "./images/youtube.svg";
import linkedin from "./images/linkedIn.svg"


let marketplace = ["Explore", "Help Center", "Become a Partner", "About Us", "Platform Status"]
let community = ["Profile", "Favorites", "Watchlist", "My Collections", "Rankings", "Activity"]
let categories = ["Arts", "Collectibles", "Games", "Sports", "Trading Cards", "Photography"]

export default function Footer() {
    return(
        <footer>
            <div>
                <ul>
                    <h3>Marketplace</h3>
                    {marketplace.map(element => {
                        return(
                            <li key={element}>{element}</li>
                        )
                    })}
                </ul>
                <ul>
                    <h3>Community</h3>
                    {community.map(element => {
                        return(
                            <li key={element}>{element}</li>
                        )
                    })}
                </ul>
                <ul>
                    <h3>Categories</h3>
                    {categories.map(element => {
                        return(
                            <li key={element}>{element}</li>
                        )
                    })}
                </ul>
                <div>
                    <h3>Marketplace</h3>
                    <p>If you’re an NFT enthusiast or are looking to download our NFT App.</p>
                    <div>
                        <Search placeholder={"Type Your Email"} glass={false} />
                        <Btn>Subscribe</Btn>
                    </div>
                    <div>
                        <img src={facebook} alt="Facebook" />
                        <img src={twitter} alt="Twitter" />
                        <img src={youtube} alt="Youtube" />
                        <img src={linkedin} alt="Linkedin" />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <span>Privacy Policy</span>
                    <span>License</span>
                    <span>API</span>
                </div>
                <span>@ 2021 All rights reserved</span>
            </div>
        </footer>
    )
}