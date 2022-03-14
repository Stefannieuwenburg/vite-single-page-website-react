import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function List() {
    return (
        <>
            <header>
                <div className="container container-flex">
                    <div className="logoContainer">
                        <img src={logo} alt="logo" className="logo" />
                    </div>
                    <nav>
                        <div className="list">
                            <Link
                                to="/"
                                className="listItem"
                                activeClasName="activeItem"
                            >
                                Home
                            </Link>

                            <Link
                                to="/about"
                                className="listItem"
                                activeClasName="activeItem"
                            >
                                About
                            </Link>

                            <Link
                                to="/services"
                                className="listItem"
                                activeClasName="activeItem"
                            >
                                Services
                            </Link>

                            <Link
                                to="/contact"
                                className="listItem"
                                activeClasName="activeItem"
                            >
                                Contact
                            </Link>

                            <Link
                                to="/policy"
                                className="listItem"
                                activeClasName="activeItem"
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
