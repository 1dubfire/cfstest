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
            <SEO title="Web Agency" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small" HeaderSTyle="header-not-transparent" />


                <Separator />


                <Separator />

                <Mission />       
{/* Start Service Area  */}
<div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "What we can do for you"
                                    title = "Services provide for you."
                                    description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                    />
                            </div>
                        </div>
                        <ServiceFour 
                            serviceStyle = "service__style--1 icon-circle-style with-working-process"
                            textAlign = "text-center"
                            />
                    </div>
                </div>
                {/* End Service Area  */}

                    <AboutFour image="./images/about/contact-image.jpg" />*/
                                    <AboutTwo />


                {/* Start Brand Area  */}
                <div className="rwt-brand-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Our Awesome Client"
                                    title = "Our Awesome Client."
                                    description = ""
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mt--40">
                                <BrandOne brandStyle="brand-style-1" />
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