import React from 'react';
import Slider from "react-slick";
import { slickDot } from "../../utils/script";


const TestimonialData = [
    {
        form: "Capital TMS™",
        description: "All in one customer-carrier portal to help you keep track of shipment history, rate trends, and live tracking.",
        image: "test"
    },
    {
        form: "TruckMatch™",
        description: "Shipments gets matched with all available carriers in your specific lane with the click of a button.",
        image: "test"
    },
    {
        form: "Carrier Network",
        description: "Our select network of top performing and reputable carriers will exceed your needs and expectations, every time.",
        image: "test"
    },
    {
        form: "Designated Representative",
        description: "Each customer is provided with their own designated company representative ready to tackle any of your supply chain needs.",
        image: "testimonial-dark-03"
    },
]
const TestimonialThree = ({teamStyle}) => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <Slider className="slick-space-gutter--15 rn-slick-dot rn-slick-arrow mb--60" {...slickDot}>
                    {TestimonialData.map((data, index) => (
                        <div key={index} className={`testimonial-style-two ${teamStyle}`}>
                            <div className="row align-items-center row--20">
                                <div className="order-2 order-md-1 col-lg-6 col-md-8 offset-lg-1">
                                    <div className="content mt_sm--40">
                                        <span className="form">{data.form}</span>
                                        <p className="description">{data.description}</p>
                                        <div className="client-info">
                                            <h4 className="title">{data.name}</h4>
                                            <h6 className="subtitle">{data.subtitle}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 order-md-2 col-lg-4 col-md-4">
                                    <div className="thumbnail">
                                        <img className="w-100" src={`./images/testimonial/${data.image}.jpg`} alt="Corporate React Template" />
                                    </div>
                                </div>
                            </div> 
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
export default TestimonialThree;




















