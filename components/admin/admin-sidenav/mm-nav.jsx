/**
 * mm-nav.jsx
 */

import React from 'react'
import BlogPostCollapsible from "./blog-posts-collapsible";
import MainRoutes from "./main-routes";
import WebsitePages from "./website-pages";

const MNav = () => {
    return (
        <>
            <MainRoutes />
            <BlogPostCollapsible />
            <WebsitePages />
        </>
    )
}

export default MNav
