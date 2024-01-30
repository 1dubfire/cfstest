import React from 'react';
import { FaSistrix } from "react-icons/fa";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";
import BlogProp from './itemProp/BlogProp';
import SideCategories from './sidebar/SideCategories';
import SidebarPost from './sidebar/SidebarPost';
import SidebarTag from './sidebar/SidebarTag';
import SidebarArchive from './sidebar/SidebarArchive';
import HeaderTwo from '../../common/header/HeaderTwo';
import SectionTitle from '../../elements/sectionTitle/SectionTitle';
import FooterTwo from '../../common/footer/FooterTwo';
import Copyright from '../../common/footer/Copyright';


const BlogGridSidebar = () => {
    return (
        <>
            <SEO title="Jobs" />
            <main className="page-wrapper">
            <HeaderTwo btnStyle="btn-small" HeaderSTyle="header-not-transparent" />
                

            <div className="rn-accordion-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Jobs"
                                        title = "Available Opportunities."
                                        description = ""
                                    />
                                </div>
                            </div> 
                            </div>
                    {/* Start Blog Area  */}
                    <div className="rn-blog-area rn-section-gap">
                        <div className="container">
                            <div className="row row--30">
                                <div className="col-lg-8">
                                    <div className="row mt_dec--30">
                                        <BlogProp column="col-lg-6 col-md-6 col-12 mt--30" />
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 mt_md--40 mt_sm--40">
                                    <aside className="rwt-sidebar">

                                        <div className="rbt-single-widget widget_search mt--40">
                                            <div className="inner">
                                                <form className="blog-search" action="#">
                                                    <input type="text" placeholder="Search ..." />
                                                    <button className="search-button"><FaSistrix /></button>
                                                </form>
                                            </div>
                                        </div>


                                        {/* Start Single Widget  */}
                                        <div className="rbt-single-widget widget_categories mt--40">
                                            <h3 className="title">Categories</h3>
                                            <div className="inner">
                                                <SideCategories />
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}



                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Blog Area  */}
                </div>
                <FooterTwo />
                <Copyright />
                </main>
        </>
    )
}

export default BlogGridSidebar
