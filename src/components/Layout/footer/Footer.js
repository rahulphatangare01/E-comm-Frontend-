import React from "react";
import playStore from "../../../Assets/images/playstore.png";
import appStore from "../../../Assets/images/Appstore.png";
import './Footer.css'

const Footer =()=>{
    return(
        <>
        <footer id="footer">

        <div className="leftFooter">
            <h4>DOWNLOAD OUR APP </h4>
            <p>Download App for Android and IOS mobile Phone</p>
            <img src={playStore} alt="playStore" />
            <img src={appStore} alt="AppStore" />
            
        </div>
        <div className="midFooter">
            <h1>ECOMMERCE</h1>
            <p> High Quality is our first priority</p>   
            <p>copyrights 2021 &copy; MeBasicCoder</p>        
        </div>
        <div className="rightFooter">
            <h4>Follow Us</h4>
            <a href="#">Instagram</a>
            <a href="#">Youtube</a>
            <a href="#">FaceBook</a>

            
        </div>
        </footer>
        </>
    )

}
export default Footer;