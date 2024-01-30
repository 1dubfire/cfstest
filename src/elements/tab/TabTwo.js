import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const TabTwo = () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <Tabs>
                        <div className="row row--30 align-items-center">
                            {/* Remove the image column */}
                            <div className="col-lg-12 mt_md--40 mt_sm--40"> {/* Use the full width */}
                                <div className="rn-default-tab style-two">
                                    <div className="tab-button-panel">
                                        <TabList className="tab-button">
                                            <Tab>
                                                <div className="rn-tab-button">
                                                    <button>Expertise</button>
                                                </div>
                                            </Tab>
                                            <Tab>
                                                <div className="rn-tab-button">
                                                    <button>Technology</button>
                                                </div>
                                            </Tab>
                                            <Tab>
                                                <div className="rn-tab-button">
                                                    <button>Reliability</button>
                                                </div>
                                            </Tab>
                                            <Tab>
                                                <div className="rn-tab-button">
                                                    <button>Dedication</button>
                                                </div>
                                            </Tab>
                                        </TabList>
                                    </div>

                                    <div className="tab-content-panel">
                                        <TabPanel>
                                            <div className="rn-tab-content">
                                                <div className="inner">
                                                    <p>In the intricate world of logistics, expertise is paramount, and it's something we take immense pride in. With years of experience under our belt, we've honed our skills to perfection. Navigating the complexities of supply chains, transportation, and warehousing is second nature to us. Our team comprises industry experts who understand the nuances of every cargo, from perishables to oversized freight.</p>

                                                    <p>We stay ahead of the curve, continuously updating our knowledge to adapt to evolving industry trends and regulations. When you choose us, you're tapping into a wealth of expertise that ensures your cargo is handled with precision, from its origin to its destination. Our commitment to excellence is your guarantee for seamless logistics solutions.</p>
                                                </div>
                                            </div>
                                        </TabPanel>

                                        <TabPanel>
                                            <div className="rn-tab-content">
                                                <div className="inner">
                                                    <p>At our core, we are innovators in the logistics industry, driven by cutting-edge technology. Our pride lies in introducing you to our exclusive solutions: Capital TMS and TruckMatch. Capital TMS, our all-in-one customer portal, empowers you with live tracking and invoice monitoring, offering unparalleled visibility into your shipments.</p>

                                                    <p>With the click of a button, TruckMatch connects your shipments with nearby carriers, optimizing your logistics operations like never before. We're committed to keeping you ahead with the latest advancements in logistics technology, ensuring efficiency, transparency, and a competitive edge in every step of your freight journey.</p>
                                                </div>
                                            </div>
                                        </TabPanel>

                                        <TabPanel>
                                            <div className="rn-tab-content">
                                                <div className="inner">
                                                    <p>Reliability is the cornerstone of our service. We understand that you depend on us to deliver your goods efficiently and on time. That's why we've built rock-solid partnerships with top-quality carriers. These relationships are the backbone of our reliability.</p>

                                                    <p>You can trust that your shipments are in the hands of experienced professionals who share our commitment to delivering excellence. Our rigorous quality control measures and 24/7 support ensure that you can count on us, no matter the challenge. When you choose us, you choose unwavering reliability.</p>
                                                </div>
                                            </div>
                                        </TabPanel>

                                        <TabPanel>
                                            <div className="rn-tab-content">
                                                <div className="inner">
                                                    <p>Our dedication to your success sets us apart. We don't just move freight; we forge relationships. Our team is deeply committed to understanding your unique logistics needs and challenges.</p>

                                                    <p>We work tirelessly to tailor solutions that drive your success forward. Our dedication goes beyond business hours; we're always here to provide support, answer questions, and address concerns. Your success is our success, and our unwavering dedication reflects that commitment.</p>
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

export default TabTwo;
