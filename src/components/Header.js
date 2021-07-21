import React from 'react';


function Header (blog) {
    console.log(blog)
    return (
        <h1>{blog.blog.name}</h1>
    )
}

export default Header;