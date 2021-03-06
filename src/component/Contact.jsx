import { Link } from "react-router-dom";
import map from "../images/map.jpg";
import "../Css/ContactStyle.css";

export default function Contact() {
    return (
        <>
            <div className="mainSection">
                <div className="contentBox">
                    <h1>contact info</h1>
                    <p>
                        Adres Coffee to go : Zeedijk 6,
                        1108 AM Amsterdam. Telefoon: 0819-347069. E-mail:
                        coffeetogo@info.nl
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
                    <img src={map} alt="map" />
                </div>
            </div>
        </>
    );
}
