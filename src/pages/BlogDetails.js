import React from 'react';
import BlogClassicData from '../data/blog/BlogList.json';
import BlogDetailsContent from '../components/blog/BlogDetailsContent';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import HeaderTwo from '../common/header/HeaderTwo';

const BlogDetails = ({match: {params: {id}}}) => {
    const blogId = parseInt(id, 10)
    const data = BlogClassicData.filter(blog => blog.id === blogId);
    return (
        <>
           <SEO title="Job Category" />
            <main className="page-wrapper">
                <HeaderTwo btnStyle="btn-small" HeaderSTyle="header-not-transparent" />

                <div className="rn-blog-details-area">
                    <BlogDetailsContent data={data[0]}  />
                </div>
            </main>
        </>
    )
}
export default BlogDetails;