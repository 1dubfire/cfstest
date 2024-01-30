import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import ContactOne from "./ContactOne";
import HeaderTwo from '../../common/header/HeaderTwo';
import FooterTwo from '../../common/footer/FooterTwo';
import Copyright from '../../common/footer/Copyright';

const Contact = () => {
    return (
        <>
            <SEO title="Contact Us" />
                <div className="main-content">
                <HeaderTwo btnStyle="btn-small" HeaderSTyle="header-not-transparent" />
                    {/* Start Contact Area  */}
                    <div className="rwt-contact-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Contact Us"
                                        title = "Questions? Reach Out."
                                        description = ""
                                    />
                                </div>
                            </div>
                            <ContactOne />
                        </div>
                    </div>
                    {/* End Contact Area  */}
                </div>
                <FooterTwo />
                <Copyright />
        </>
    )
}
export default Contact;

