import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const TabOne = () => {
    return (
        <div>
            <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <div className="row row--30 align-items-center">
                                <div className="col-lg-5">
                                    <img className="radius-small" src='./images/tab/tabs-01.jpg' alt="Corporate React Template" />
                                </div>
                                <div className="col-lg-7 mt_md--40 mt_sm--40">
                                    <div className="rn-default-tab">
                                        <div className="tab-button-panel">
                                            <TabList className="tab-button">
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>Storage</button>
                                                    </div>   
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>Fulfillment</button>
                                                    </div>   
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>Distribution</button>
                                                    </div>   
                                                </Tab>
                                            </TabList>
                                        </div>

                                        <div className="tab-content-panel">
                                        <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <p>Our Storage solutions offer secure and versatile options for all goods types. Featuring advanced security and optimal environmental conditions, our facilities accommodate both short-term and long-term storage needs, ensuring your products remain in prime condition. Our customizable plans are designed to meet diverse space and logistical requirements, providing efficient and accessible inventory management.</p>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            
                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <p>Our Fulfillment services offer comprehensive management of your orders, covering inventory control, accurate picking, and efficient packing and shipping. We utilize advanced systems for order accuracy and swift processing, ensuring customer satisfaction with every delivery. Our dedicated team ensures that your products are handled with care and delivered on time.</p>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <p>Our Distribution Services provide efficient and reliable transport of your goods, whether locally or internationally. We handle all aspects of distribution, from coordinating logistics to executing deliveries, ensuring timely and cost-effective transport. Our network is designed to cater to diverse shipping needs, guaranteeing that your products reach their intended markets seamlessly.</p>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </div>
        </div>
    )
}

export default TabOne
