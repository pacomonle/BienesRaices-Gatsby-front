import React from 'react'
import Helmet from 'react-helmet'


const Layout = ({children}) => {
    return (
        <> 
            <Helmet>
                <title>BienesRaices Gatsby</title>
                <meta name='description' content='sitio web bienes raices en Gatsby'></meta>
                <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
            </Helmet>
            <h1>Mi sitio Gatsby</h1>
            {children}
        </>
    )
}

export default Layout
