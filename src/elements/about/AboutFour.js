import React from 'react';
import VideoTwo from '../video/VideoTwo';
import { FaCheck } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";


const PopupData = [
    {
        id: "01",
        image: "./images/bg/truck2.jpg",
        popupLink: [
            'https://www.youtube.com/watch?v=ctsT5Y-InqE&ab_channel=Rainbow-Themes',
        ],
    }
]

const AboutFour = ({image}) => {
    return (
        <div className="about-area about-style-4 rn-section-gap">
            <div className="container">
                <div className="row row--40 align-items-center">
                    <div className="col-lg-6">
                        {PopupData.map((item) => (
                            <div className="video-btn" key={item.id}>
                                <VideoTwo imagename={`${image}`} galleryItem={item} />
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-6 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="inner">
                                <h3 className="title">Providing you full service<br /><strong>Transportation & Logistics</strong></h3>
                                <ul className="feature-list">
                                    <li>
                                        <div className="title-wrapper">
                                            <h3 className="title">Over the Road</h3>
                                            <p className="text">Since opening our doors, we’ve been committed to providing service of the highest quality, paying particular attention to working efficiently while keeping the lines of communication with our clients clear and concise.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="title-wrapper">
                                            <p className="text">Our mission at Capital Freight Solutions is simple: to provide high-quality services in a timely manner. Our team caters to each project’s specific needs to ensure excellence. We hope you’ll find what you’re looking for. For more information or general inquiries, feel free to get in touch today.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFour
