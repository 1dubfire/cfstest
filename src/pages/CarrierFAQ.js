import React from 'react';
import SEO from "../common/SEO";
import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import {Link} from "react-router-dom";
import HeaderOne from '../common/header/HeaderOne';
import CounterUpThree from '../elements/counterup/CounterUpThree';
import ServiceOne from '../elements/service/ServiceOne';
import TimelineTwo from "../elements/timeline/TimelineTwo";
import AboutFour from '../elements/about/AboutFour';
import AdvancePricingOne from '../elements/advancePricing/AdvancePricingOne';
import BrandOne from '../elements/brand/BrandOne';
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import SlipThree from '../elements/split/SlipThree';
import Mission from "../elements/about/Mission";
import AboutTwo from '../elements/about/AboutTwo';
import ServiceFour from '../elements/service/ServiceFour';
import AboutOne from '../elements/about/AboutOne';
import HeaderTwo from '../common/header/HeaderTwo';
import TimelineOne from '../elements/timeline/TimelineOne';
import AccordionOne from '../elements/accordion/AccordionOne';
import AccordionFAQ from '../elements/accordion/AccordionFAQ';
import { AccordionCollapse } from 'react-bootstrap';


const BannerData = [
    {
        image: "/images/bg/bg-image-20.jpg",
        title: "Capital Freight<br /> Solutions",
        description: "Streamlining Every Shipment, Effortlessly."
    },
]


const WebAgency = () => {
    return (
        <>
           <SEO title="Carrier FAQ" />
            <main className="page-wrapper">
                <HeaderTwo btnStyle="btn-small" HeaderSTyle="header-not-transparent" />
                



                {/* Start Brand Area  */}
                <div className="rn-accordion-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Carrier FAQ"
                                        title = "Frequently Asked Questions."
                                        description = ""
                                    />
                                </div>
                            </div> 
                            <div className="row mt--35 row--20">
                                <div className="col-lg-10 offset-lg-1">
                                    <AccordionFAQ customStyle="rn-accordion-02" />
                                </div>
                            </div>
                        </div>
                    </div>
                {/* End Brand Area  */}

                <FooterTwo />
                <Copyright />
            </main>
        </>
    )
}
export default WebAgency;