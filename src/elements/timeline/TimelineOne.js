import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const TimelineData = [
    {
        id: "1",
        date: "",
        title: "Ocean.",
        description: "We offer a holistic approach to international logistics by providing both customs clearance and drayage services. Our dedicated team of experts ensures that your imports and exports comply with all customs regulations, reducing delays and simplifying the cross-border movement of your cargo. Simultaneously, our efficient drayage services guarantee the seamless transportation of your goods from the port to their final destination. With our comprehensive customs and drayage solutions, we streamline the entire supply chain, making international trade hassle-free and ensuring the timely and secure delivery of your shipments. For more information on our customs services, press the button below.",
        image: "ship",
        workingStep: [
            {
                stepTitle: "",
                stepDescription: "",
            },
        ]
    },
    {
        id: "2",
        date: "",
        title: "Air.",
        description: "We offer a seamless air freight solution that takes your cargo from customs clearance to airport pickup with the added assurance of TSA-approved drivers. Our integrated approach ensures the swift and compliant movement of your goods through customs, eliminating bureaucratic hurdles. Once your cargo arrives at the airport, our experienced TSA-approved drivers are ready to take over, providing a secure and efficient transition to the final destination. With our end-to-end air freight service, you can trust us to handle your shipments with precision and care, from customs to your doorstep. For more information on our customs services, press the button below.",
        image: "air",
        workingStep: [
            {
                stepTitle: "",
                stepDescription: "",
            },
        ]
    },
]

const TimelineOne = () => {
    return (
        <div className="rn-timeline-wrapper timeline-style-one position-relative">
            <div className="timeline-line"></div>
            {/* Start Single Timeline  */}

            {TimelineData.map((data, index) =>(
                <div className="single-timeline mt--50" key={index}>
                    <div className="timeline-dot">
                        <div className="time-line-circle"></div>
                    </div>
                    <div className="single-content">
                        <div className="inner">
                            <div className="row row--30 align-items-center">
                                <div className="order-2 order-lg-1 col-lg-6 mt_md--40 mt_sm--40">
                                    <div className="content">
                                        <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                            <span className="date-of-timeline">{data.date}</span>
                                        </ScrollAnimation>

                                        <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                            <h2 className="title">{data.title}</h2>
                                        </ScrollAnimation>

                                        <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                            <p className="description">{data.description}</p>
                                        </ScrollAnimation>

                                        <div className="row row--30">
                                            {data.workingStep.map((data, index)=>(
                                                <div className="col-lg-6 col-md-6 col-12" key={index}>
                                                    <div className="working-list">
                                                        <ScrollAnimation 
                                                        animateIn="fadeInUp"
                                                        animateOut="fadeInOut"
                                                        animateOnce={true}>
                                                            <h5 className="working-title">{data.stepTitle}</h5>
                                                        </ScrollAnimation>

                                                        <ScrollAnimation 
                                                        animateIn="fadeInUp"
                                                        animateOut="fadeInOut"
                                                        animateOnce={true}>
                                                            <p>{data.stepDescription}</p>
                                                        </ScrollAnimation>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="read-morebtn">
                                            <ScrollAnimation 
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}>
                                                <a className="btn-default btn-large round" href="/contact"><span>Customs Services</span></a>
                                            </ScrollAnimation>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 order-lg-2 col-lg-6">
                                    <div className="thumbnail">
                                        <img className="w-100" src={`./images/timeline/${data.image}.jpg`} alt="Corporate React Template" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
           
            {/* End Single Timeline  */}
        </div>
    )
}

export default TimelineOne;
