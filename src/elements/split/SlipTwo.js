import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from "react-on-screen";
import ScrollAnimation from "react-animate-on-scroll";

const Data = [
    {
        countNum : 10000,
        countTitle: 'Trusted Carriers',
    },
    {
        countNum : 20000,
        countTitle: 'Available Trucks',
    },
    {
        countNum : 100000,
        countTitle: 'Weekly Miles',
    },
    {
        countNum : 1000,
        countTitle: 'Happy Customers',
    },
];

const SlipTwo = () => {
    return (
        <div className="rn-splite-style">
            <div className="split-wrapper">
                    <div className="row no-gutters radius-10 align-items-center">
                        <div className="col-lg-12 col-xl-6 col-12">
                            <div className="thumbnail">
                                <img src="./images/split/sliptest.jpg" alt="split Images" />
                            </div>
                        </div>
                        <div className="col-lg-12 col-xl-6 col-12">
                            <div className="split-inner">
                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <h4 className="title">Streamlined Supply Chain Management.</h4>
                                </ScrollAnimation>
                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <p className="description">Comprehensive supply chain management solutions designed to optimize efficiency and reliability is just one phone call. Our expert team utilizes cutting-edge technology to streamline logistics processes, ensuring seamless coordination from sourcing to delivery. With a focus on customization and flexibility, we adapt to meet your unique business needs, guaranteeing a smooth, cost-effective, and agile supply chain.</p>
                                </ScrollAnimation>

                                <div className="row">
                                    {Data.map((data, index) => (
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={index}>
                                            <div className="count-box counter-style-4 text-start">
                                                <TrackVisibility once>
                                                    {({ isVisible }) => isVisible && 
                                                        <div className="count-number">{isVisible ? <CountUp end={data.countNum} /> : 0}</div>}
                                                </TrackVisibility>
                                                <h5 className="counter-title">{data.countTitle}</h5>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SlipTwo;