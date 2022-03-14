import { Link } from "react-router-dom";
import Koffie from "../images/koffie.png";
import "../Css/ListStyle.css";


export default function List() {
    return (
        <>
            <header>
                <div className="container container-flex">
                    <div className="logoContainer">
                        <img src={Koffie} alt="koffie-cup" className="logo" />
                    </div>
                    <nav>
                        <div className="list">
                            <Link 
                                to="/"
                                className="listItem"
                            >
                                Home
                            </Link>

                            <Link
                                to="/about"
                                className="listItem"
                            >
                                About
                            </Link>

                            <Link
                                to="/services"
                                className="listItem"
                            >
                                Services
                            </Link>

                            <Link
                                to="/contact"
                                className="listItem"  
                            >
                                Contact
                            </Link>

                            <Link
                                to="/policy"
                                className="listItem"
                            >
                                Policy
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}
