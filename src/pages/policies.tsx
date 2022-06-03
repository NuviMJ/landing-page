import * as React from "react"
import Navbar from "../sections/Navbar/Navbar";
import '../styles/index.css';
import '../styles/colour.css';
import '../styles/fonts.css';
import '../styles/Policies.scss';

import Footer from "../sections/Footer/Footer";


const PoliciesPage = () => {
    return (<>
            <Navbar/>
            <div className="Policies">
                <h1 className="Policies-title">Our policies</h1>

                <div className="Policies-top">
                    <a href="/privacy-policy"><h2>Privacy Policy </h2></a>
                    <a href="terms-and-conditions"><h2> Terms & Conditions </h2></a>
                </div>

            </div>
            <Footer/>
        </>
    )
}

export default PoliciesPage
