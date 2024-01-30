import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";


const testimonialData = [
    {
        image: 'software',
        name: 'Capital TMS™',
        designation: 'Capital TMS™',
        description: 'All in one customer-carrier portal to help you keep track of shipment history, rate trends, and live tracking',
       
    },
    {
        image: 'testimonial-01',
        name: 'Capital TMS™',
        designation: 'Capital TMS™',
        description: 'All in one customer-carrier portal to help you keep track of shipment history, rate trends, and live tracking',
       
    },
    {
        image: 'test',
        name: 'Capital TMS™',
        designation: 'Capital TMS™',
        description: 'All in one customer-carrier portal to help you keep track of shipment history, rate trends, and live tracking',
       
    },
        {
        image: 'agent',
        name: 'Capital TMS™',
        designation: 'Capital TMS™',
        description: 'All in one customer-carrier portal to help you keep track of shipment history, rate trends, and live tracking',
       
    },

]


const TestimonialOne = ({column , teamStyle}) => {
    return (
        <div className="row row--15">
            {testimonialData.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`rn-box-card ${teamStyle}`}>
                            <div className="inner">
                                <figure className="thumbnail">
                                    <img src={`./images/testimonial/${data.image}.jpg`} alt="Corporate React Template" />
                                </figure>
                                <figcaption className="content">
                                <h1 className="subtitle theme-gradient">{data.designation}</h1>
                                    <p className="description">{data.description}</p>
                                </figcaption>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}

export default TestimonialOne;
