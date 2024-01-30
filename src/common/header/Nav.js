import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li className="has-dropdown"><Link to="/">Home</Link>

            </li>
            
            <li className="has-droupdown"><Link to="#">Soutions</Link>
                <ul className="submenu">
                    <li><Link to="/OTR">Over The Road</Link></li>
                    <li><Link to="/ocean-air">Ocean & Air Freight</Link></li>
                    <li><Link to="/customs">Customs Processing</Link></li>
                    <li><Link to="/warehousing">Warehouse Solutions</Link></li>
                </ul>
            </li>

            <li className="has-droupdown"><Link to="#">About</Link>
                <ul className="submenu">
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/our-team">Our Team</Link></li>
                </ul>
            </li>



            <li className="has-droupdown"><Link to="#">Carriers</Link>
                <ul className="submenu">
                    <li><a href="https://www.capitalfreightcarriers.com" target="_blank" rel="noopener noreferrer">Register With CFS</a></li>
                    <li><Link to="/carrier-faq">FAQs</Link></li>
                </ul>
            </li>

            <li className="has-droupdown"><Link to="#">Careers</Link>
                <ul className="submenu">
                    <li><Link to="/jobs">Jobs</Link></li>

                </ul>
            </li>

            <li className="has-droupdown"><Link to="/contact">Contact</Link></li>
        </ul>
    )
}
export default Nav;
