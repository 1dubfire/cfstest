import React from 'react';
import ContactForm from "./ContactForm";
import GoogleMapStyle from "./GoogleMapStyle";
import { FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";

const ContactOne = () => {
    return (
        <>
            <div className="row row--15">
                <div className="col-lg-12">
                    <div className="rn-contact-address mt_dec--30">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiHeadphones />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Phone.</h4>
                                        <p><strong>Operations:</strong><a href="tel:+1 650 729 1336"> 650-729-1336 x1</a></p>
                                        <p><strong>AR/AP:</strong><a href="tel:+1 650 729 1336"> 650-729-1336 x2</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMail />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Email.</h4>
                                        <p><strong>General:</strong> <a href="mailto:admin@gmail.com">info@capitalfreight.net</a></p>
                                        <p><strong>AP/AR:</strong> <a href="mailto:accounting@capitalfreight.net">accounting@capitalfreight.net</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Address.</h4>
                                        <p>533 Airport Blvd, Suite 400 <br />Burlingame, CA 94010</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt--40 row--15">
                <div className="col-lg-7">
                    <ContactForm formStyle="contact-form-1" />
                </div>
                <div className="col-lg-5 mt_md--30 mt_sm--30">
                    <GoogleMapStyle />
                </div>
            </div>
        </>
    )
}
export default ContactOne;