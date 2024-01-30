import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import { FiArrowRight } from "react-icons/fi";
import Logo from "../logo/Logo";

const callToActionData = {
    title: "Ready To Ship With The Best?",
    subtitle: "We're here for you every step of the way making sure your cargo is where it needs to be, when it needs to.",
    btnText: "Get A Quote!",
}

const CalltoActionSeven = () => {
    return (
        <div className="rn-callto-action clltoaction-style-default style-7">
            <div className="container">
                <div className="row row--0 align-items-center content-wrapper">
                    <div className="col-lg-8 col-md-8">
                        <div className="inner">
                            <div className="content text-start">
                                <Logo 
                                    image={`${process.env.PUBLIC_URL}/images/logo/logocfs.png`}
                                    image2={`${process.env.PUBLIC_URL}/images/logo/logocfs-dark.png`}
                                />
                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <p className="subtitle">{callToActionData.subtitle}</p>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <ScrollAnimation 
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        animateOnce={true}>
                            <div className="call-to-btn text-start mt_sm--20 text-md-end">
                                <a className="btn-default btn-icon" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">{callToActionData.btnText} <i className="icon"><FiArrowRight /></i></a>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalltoActionSeven;