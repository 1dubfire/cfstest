import React from 'react';
import Typed from 'react-typed';
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import AccordionOne from '../accordion/AccordionOne';

const otrabout = () => {
    return (
        <div className="rn-company-mission-are rn-section-gap">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-6">
                        <div className="mission-title">
                            <h2 className="title">Unique Mission <br /> {" "}
                                <Typed className="theme-gradient"
                                    strings={[
                                        "Vision.",
                                        "Network.",
                                        "Coordination.",
                                    ]}
                                    typeSpeed={80}
                                    backSpeed={5}
                                    backDelay={1000}
                                    loop
                                />
                            </h2>
                            <p>
At Capital Freight Solutions, we are redefining freight brokerage by seamlessly blending an expansive network of logistics partners with a commitment to innovative, sustainable solutions. Our approach focuses on the future, anticipating and navigating the complexities of global transportation</p>

                            <p>At the heart of our service is a dedication to meticulous planning and execution, ensuring every shipment is managed with precision and care. This fusion of comprehensive connections, strategic foresight, and exceptional operational management forms the cornerstone of our business, offering our clients a reliable, efficient, and forward-thinking logistics experience.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 mt_md--30 mt_sm--30">
                        <AccordionOne customStyle="" />
                    </div>
                </div>
            </div>                        
        </div>
    )
}
export default otrabout;
