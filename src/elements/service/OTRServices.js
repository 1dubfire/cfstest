import React from 'react';
import { PiGlobeThin } from "react-icons/pi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { PiTruckThin } from "react-icons/pi";
import { TbBuildingWarehouse } from "react-icons/tb";
import { FaBiohazard } from "react-icons/fa6";
import { CiWarning } from "react-icons/ci";
import { TiWarning } from "react-icons/ti";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import { LiaFastForwardSolid } from "react-icons/lia";
import { FaTruckFront } from "react-icons/fa6";
import { BsFastForwardBtnFill } from "react-icons/bs";
import { FaSnowflake } from "react-icons/fa";



const ServiceList = [
    {
        icon: <FaTruckFront />,
        title: 'Full Truckload',
        description: 'Guarantee the seamless transport of your goods, utilizing dedicated trucks to provide efficient, reliable, and capacity-tailored solutions to meet your specific shipping needs.'
    },
    {
        icon: <LiaTruckLoadingSolid />,
        title: 'Less Than Truckload',
        description: 'Optimize the utilization of truck space by consolidating smaller shipments from multiple customers, providing you with a cost-effective and environmentally friendly solution for shipping partial loads.'
    },
    {
        icon: <BsFastForwardBtnFill />,
        title: 'Expedited',
        description: 'Meet your urgent transportation needs by prioritizing fast delivery, reducing transit times, and providing time-sensitive solutions to ensure your cargo reaches its destination quickly and efficiently.'
    },
    {
        icon: <FaBiohazard />,
        title: 'Hazardous Material',
        description: 'Ensuring the secure and compliant movement of dangerous goods via trained professionals and a commitment to environmental protection and safety standards.'
    },    {
        icon: <FaSnowflake />,
        title: 'Temperature Control',
        description: 'Maintaining precise temperature ranges throughout transit to ensure the freshness and quality of your goods, whether they require refrigeration or heating during transportation.'
    },    {
        icon: <TiWarning />,
        title: 'Specialized Equipment',
        description: 'Accomodating to unique requirements, including oversized loads, ensuring that your specific cargo is handled with the right equipment for maximum safety and efficiency.'
    },
]

const ServiceOne = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title w-600"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceOne;