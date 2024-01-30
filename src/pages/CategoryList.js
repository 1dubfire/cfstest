import React from 'react';
import BlogClassicData from '../data/blog/BlogList.json';
import CategoryListPost from '../components/blog/CategoryListPost';
import { slugify} from "../utils"
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import HeaderTwo from '../common/header/HeaderTwo';
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';

const CategoryList = ({match: {params: {slug}}}) => {
    const data = BlogClassicData.map(blog => {
        return {
            ...blog,
            categories: blog.categories.filter(data => slugify(data) === slug)
        }
    }).filter(blog => blog.categories.length > 0);
    const categoryTitle = data[0].categories[0];

    return (
        <>
            <SEO title="Blog Category List || Doob" />
            <main className="page-wrapper">
                <HeaderTwo btnStyle="btn-small" HeaderSTyle="header-not-transparent" />
                <BreadcrumbOne 
                    title={categoryTitle}
                    rootUrl="/jobs"
                    parentUrl="Back to Jobs"
                    currentUrl="Categories"
                />
                <div className="main-content">
                    <div className="rn-blog-category-area rn-section-gap">
                        <div className="container">
                            <CategoryListPost Column="col-lg-4 mt--0" data={data} />
                        </div>
                    </div>
                </div>
                <FooterTwo />
                <Copyright />
                </main>
        </>
    )
}
export default CategoryList;