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
import AdvanceTabOne from '../elements/advancetab/AdvanceTabOne';
import TabTwo from '../elements/tab/TabTwo';
import TabThree from '../elements/tab/TabThree';
import TabOne from '../elements/tab/TabOne';


const BannerData = [
    {
        image: "/images/bg/bg-image-20.jpg",
        title: "Capital Freight<br /> Solutions",
        description: "Streamlining Every Shipment, Effortlessly."
    },
]


const Warehousing = () => {
    return (
        <>
            <SEO title="Warehouse Solutions" />
            <main className="page-wrapper">
                <HeaderTwo btnStyle="btn-small" HeaderSTyle="header-not-transparent" />


                {/* Start Brand Area  */}
                <div className="rwt-tab-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--40">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Full Service"
                                        title = "Warehousing Solutions."
                                        description = ""
                                    />
                                </div>
                            </div>
                            <TabOne />
                        </div>
                    </div>
                {/* End Brand Area  */}

                <FooterTwo />
                <Copyright />
            </main>
        </>
    )
}
export default Warehousing;