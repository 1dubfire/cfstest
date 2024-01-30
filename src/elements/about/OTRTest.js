import React from 'react';
import AccordionOTR from '../accordion/AccordionOTR';

const OTRTest = () => {
    return (
        <div className="rn-about-area about-style-3 rn-section-gap">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <img className="w-100" src="./images/about/about-1.png" alt="About Images" />
                        </div>
                    </div>
                    <div className="col-lg-6 mt_md--40 mt_sm--40">
                        <div className="inner">
                            <div className="section-title">
                                <h4 className="subtitle">
                                    <span className="theme-gradient">OVER THE ROAD</span>
                                </h4>
                                <h2 className="title mb--40">Trucking In Every Angle.</h2>
                            </div>
                            <AccordionOTR customStyle="" />
                        </div>
                    </div>
                </div>
            </div>                        
        </div>
    )
}

export default OTRTest
