import { Link } from "react-router-dom";
import Koffie from "../images/koffie.png";
import "../Css/NavbarStyle.css";


export default function NavBar() {
    return (
        <>
            <header>
                <div className="container containerFlex">
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
                                to="/menu"
                                className="listItem"
                            >
                                Menu
                            </Link>

                            <Link
                                to="/contact"
                                className="listItem"  
                            >
                                Contact
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}
