import React from 'react'
import './Header.css'
import TruckIcon from '../../Assets/Truck.svg'
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter, BiLogoInstagram } from 'react-icons/bi'
const Header = () => {
    return (
        <>
            <div className="header_main">
                <div className="header ">
                    <div className="header_left">
                        <div className="header_left_left">
                            <img src={TruckIcon} alt="" width="22px" height="14px" style={{ marginRight: "4px" }} />
                            <h3 style={{ marginLeft: "4px",  marginRight:"4px"}}>Free Delivery</h3>
                        </div>

                        <div className="header_left_right">
                            <h3 style={{ marginLeft: "4px",  marginRight:"4px"  }}>Return Policy</h3>
                        </div>
                    </div>

                    <div className="header_right">
                        <div className="header_right_left">
                            <h3 style={{ marginLeft: "4px",  marginRight:"4px"}}>Login</h3>
                        </div>

                        <div className="header_right_right">
                            <h3 style={{ marginLeft: "4px",  marginRight:"4px"}}>Follow US</h3>
                            <BiLogoFacebook />
                            <BiLogoLinkedin />
                            <BiLogoTwitter />
                            <BiLogoInstagram />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header