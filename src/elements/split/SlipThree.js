import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from "react-on-screen";
import ScrollAnimation from "react-animate-on-scroll";

const Data = [
    {
        countNum : 199,
        countTitle: 'Happy Clients.',
    },
    {
        countNum : 575,
        countTitle: 'Employees',
    },
    {
        countNum : 69,
        countTitle: 'Useful Programs',
    },
    {
        countNum : 500,
        countTitle: 'Useful Programs',
    },
];

const SlipThree = () => {
    return (
        <div className="rn-splite-style bg-color-blackest">
            <div className="split-wrapper">
                <div className="row no-gutters radius-10 align-items-center">
                    <div className="col-lg-12 col-xl-6 col-12">
                        <div className="thumbnail">
                            <img src="./images/split/split-03.jpg" alt="split Images" />
                        </div>
                    </div>
                    <div className="col-lg-12 col-xl-6 col-12">
                        <div className="split-inner">
                            <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                                <h4 className="title">Global Trade, Simplified.</h4>
                            </ScrollAnimation>
                            <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                                <p className="description">CFS is dedicated to simplifying the complexities of international trade for our clients. Our expert customs brokerage services ensure your shipments effortlessly navigate global regulations and cross borders without delays. We specialize in managing every aspect of customs clearance, from accurate documentation and compliance to efficient duty calculation.</p>

<p>Our team is well-versed in international trade laws and tariff classifications, enabling us to provide expedited clearance and prevent any hold-ups. By staying current with global trade policy changes, CFS offers not just compliance but strategic guidance to enhance your trading operations. We focus on cost-effective solutions, leveraging our knowledge and global customs relationships to resolve potential issues swiftly.</p>

<p>Choose CFS for a customs brokerage experience that prioritizes efficient, compliant, and optimized international shipping. We’re committed to adding value to your business by ensuring each shipment is timely, legally compliant, and aligned with your logistical needs.</p>
                            </ScrollAnimation>

    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default SlipThree;