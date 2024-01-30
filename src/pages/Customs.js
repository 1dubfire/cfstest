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
            <SEO title="Customs" />
            <main className="page-wrapper">
                <HeaderTwo btnStyle="btn-small" HeaderSTyle="header-not-transparent" />


                {/* Start Slider Area  */}
                {/* End Slider Area  */}



                                {/* Start Elements Area  */}
                {/* End Elements Area  */}
                                 {/* Start Service Area  */}
                                 <div className="rwt-split-area rn-section-gap">
                        <div className="wrapper">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Global"
                                        title = "Customs Brokerage."
                                        description = ""
                                    />
                                </div>
                            </div>
                            <SlipThree />
                        </div>
                    </div>
                {/* End Service Area  }
                {/* Start Service Area  */}
                {/* End Service Area  */}

                <Separator /> 

                <FooterTwo />
                <Copyright />
            </main>
        </>
    )
}
export default Home;