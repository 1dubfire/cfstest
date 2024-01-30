import React from 'react';
import SEO from "../common/SEO";
import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import {Link} from "react-router-dom";
import HeaderTwo from '../common/header/HeaderTwo';
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
import ContactOne from '../elements/contact/ContactOne';
import TestimonialThree from '../elements/testimonial/TestimonialThree';
import TestimonialOne from '../elements/testimonial/TestimonialOne';
import TestimonialTwo from '../elements/testimonial/TestimonialTwo';
import TabOne from '../elements/tab/TabOne';
import TabTwo from '../elements/tab/TabTwo';
import TabThree from '../elements/tab/TabThree';
import TimelineOne from '../elements/timeline/TimelineOne';
import ServiceTwo from '../elements/service/ServiceTwo';
import ServiceThree from '../elements/service/ServiceThree';
import ServiceFour from '../elements/service/ServiceFour';
import ServiceFive from '../elements/service/ServiceFive';
import SlipTwo from '../elements/split/SlipTwo';
import FooterOne from '../common/footer/FooterOne';
import FooterFour from '../common/footer/FooterFour';
import FooterThree from '../common/footer/FooterThree';


const BannerData = [
    {
        image: "/images/bg/bg-image-20.jpg",
        title: "Capital Freight<br /> Solutions",
        description: "Streamlining Every Shipment, Effortlessly."
    },
]


const Home = () => {
    return (
        <>
            <SEO title="Home" />
            <main className="page-wrapper">
                <HeaderTwo btnStyle="btn-small" HeaderSTyle="header-not-transparent" />


                {/* Start Slider Area  */}
                <div className="slider-area slider-style-8 height-650">
                    {BannerData.map((data, index) => (
                        <div key={index} className="single-slide">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <div className="inner text-center">
                                            <span className="subtitle theme-gradient"><strong>Capitalize On Our Freight Solutions</strong></span>
                                            <h1 className="title" dangerouslySetInnerHTML={{__html: data.title}}></h1>
                                            <p className="description" dangerouslySetInnerHTML={{__html: data.description}}></p>
                                            <div className="button-group mt--30">
                                            <a className="btn-default btn-large round" target="_blank" href="/about-us">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* End Slider Area  */}



                                {/* Start Elements Area  */}
                                <div className="rwt-split-area">
                    <div className="wrapper">
                        <SlipTwo />
                    </div>
                </div>
                {/* End Elements Area  */}
                                 {/* Start Service Area  */}
                                 <div className="rn-service-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "A-Z Logistics"
                                        title = "We Handle It All."
                                        description = "Your single-source solution for end-to-end logistics"
                                     />
                                </div>
                            </div>
                            <ServiceOne 
                                serviceStyle = "service__style--1 bg-color-blackest radius mt--25"
                                textAlign = "text-center"
                            />
                        </div>
                    </div>
                {/* End Service Area  }
                {/* Start Service Area  */}
                <Separator />
                <div className="rwt-timeline-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "At A Glance"
                                            title = "The Perfect Recipe."
                                        />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 mt--50">
                                    <TimelineTwo classVar="no-gradient"  />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Separator />
                {/* End Service Area  */}

                <Separator /> 


                {/* Start Brand Area  */}
 {/* Start Elements Area  */}
 <div className="rwt-tab-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--40">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Why Choose Us?"
                                    title = "The CFS Difference."
                                    description = "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials."
                                />
                            </div>
                        </div>
                        <TabTwo />
                    </div>
                </div>
                {/* End Elements Area  */}
                {/* End Brand Area  */}

                <FooterTwo />
                <Copyright />
            </main>
        </>
    )
}
export default Home;