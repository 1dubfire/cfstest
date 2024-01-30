import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const AboutTwo = () => {
    return (
        <div className="rwt-about-area about-style-2 rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-center">
                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <img className="w-100" src="./images/about/truck2.png" alt="About Images" />
                        </div>
                    </div>

                    <div className="col-lg-7 mt_md--30 mt_sm--30">
                        <div className="content">
                            <div className="section-title">

                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <h4 className="subtitle"><span className="theme-gradient">The Goal</span></h4>
                                    <h2 className="title mt--10">Our Mission.</h2>
                                </ScrollAnimation>

                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <ul className="list-icon">
                                    <li>Since opening our doors, we’ve been committed to providing service of the highest quality, paying particular attention to working efficiently while keeping the lines of communication with our clients clear and concise.</li>
                                    </ul>
                                    <ul className="list-icon">
                                        <li>Our mission at Capital Freight Solutions is simple: to provide high-quality services in a timely manner. Our team caters to each project’s specific needs to ensure excellence. We hope you’ll find what you’re looking for. For more information or general inquiries, feel free to get in touch today.</li>

                                    </ul>
                                </ScrollAnimation>
                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default AboutTwo;
