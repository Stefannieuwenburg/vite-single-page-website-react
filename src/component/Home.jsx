import { Link } from "react-router-dom";
import shop from "../images/shop.jpg";
import "../Css/HomeStyle.css";



export default function Home() {
    return (
        <>
            <div className="mainSection">
                <div className="contentBox">
                    <h1>coffee to go </h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Voluptatem, repudiandae excepturi maxime sunt,
                        voluptatum non animi, voluptatibus impedit deleniti
                        cupiditate sint ipsum et blanditiis asperiores deserunt
                        provident! Ratione, fuga voluptatem.
                    </p>
                    <div className="btnBox">
                        <div className="btn">
                            <Link to="/about" className="readMore">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="imgContainer">
                    <img src={shop} alt="shop"/>

                </div>
            </div>
        </>
    );
}
