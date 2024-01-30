import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const teamData = [
    {
        image: 'alec',
        name: 'Alec Manoukian',
        designation: 'CEO & President',
        location: 'USA', 
        description: "Infusing innovation into transportation and logistics, Alec's commitment to our mission and a forward-thinking approach inspires our team to deliver cutting-edge solutions, making us industry pioneers, dedicated to growth and innovation.",
        socialNetwork: [
            {
                icon: <FiLinkedin />,
                url: 'https://www.linkedin.com/in/alec-manoukian-b09826249/'
            },
        ]
       
    },
    {
        image: 'team-02',
        name: 'Gary Manoukian',
        designation: 'COO & Co-Founder',
        location: 'USA', 
        description: "Gary serves as our Chief Operating Officer, overseeing daily operations. With a focus on efficiency and performance, Gary plays a key role in driving our company's growth through streamlined processes and a commitment to excellence.",
        socialNetwork: [
            {
                icon: <FiLinkedin />,
                url: '#'
            },
        ]
      
    },
    {
        image: 'team-03',
        name: 'Jeff Kazeika',
        designation: 'VP Sales & Marketing',
        location: 'USA', 
        description: "Jeff is our Vice President of Sales, with a proven track record in sales leadership. They lead our sales team, driving revenue growth, building customer relationships, and ensuring exceptional service and tailored solutions.",
        socialNetwork: [
            {
                icon: <FiLinkedin />,
                url: '#'
            },
        ]
        
    },
]


const TeamOne = ({column , teamStyle}) => {
    return (
        <div className="row row--15">
            {teamData.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <div className={`rn-team ${teamStyle}`}>
                        <ScrollAnimation 
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        animateOnce={true}>
                            <div className="inner">
                                <figure className="thumbnail">
                                    <img src={`./images/team/${data.image}.jpg`} alt="Corporate React Template" />
                                </figure>
                                <figcaption className="content">
                                    <h2 className="title">{data.name}</h2>
                                    <h6 className="subtitle theme-gradient">{data.designation}</h6>
                                    <span className="team-form">
                                        <img src="./images/team/location.svg" alt="Corporate React Template" />
                                        <span className="location">{data.location}</span>
                                    </span>
                                    <p className="description">{data.description}</p>

                                    <ul className="social-icon social-default icon-naked mt--20" >
                                        {data.socialNetwork.map((social, index) =>
                                            <li key={index}><a target="_blank" href={`${social.url}`}>{social.icon}</a></li>
                                        )}
                                    </ul>
                                </figcaption>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TeamOne;
