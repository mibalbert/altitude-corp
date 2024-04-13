/**
 * mm-nav.jsx
 */

import React from 'react'
import BlogPostCollapsible from "./blog-posts-collapsible";
import MainRoutes from "./main-routes";
import WebsitePages from "./website-pages";

const MNav = () => {
    return (
        <section className='space-y-1.5'>
            <MainRoutes />
            <BlogPostCollapsible />
            <WebsitePages />
        </section>
    )
}

export default MNav
