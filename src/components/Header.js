import { css } from '@emotion/core'
import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import Navegacion from './Navegacion'

const Header = () => {

  // consultar el logo.svg
 
 /*  const { logoUrl } = useStaticQuery(graphql`
  query {
     logoUrl: file(relativePath: {eq: "logo.svg"}) {
      publicURL
      }
    }
`)
   
 console.log(logoUrl) */
    
    return (
    <header
        css={css`
            background-color: #0D283B;
            padding: 1rem;
        `}
    >
        <div
            css={css`
                max-width: 120rem;
                margin: 0 auto;
                text-align: center;
                /**para hacer responsive en pantallas pequeñas */
                @media (min-width: 768px) {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    }
                `}
             >
            
                <Link to='/'>
                {/**
                  <img src={logo.publicURL} alt="logo Bienes Raices" />
                */}
                    <img src='/static/ab002b2e1f1518dbb875b266e92b8f34/logo.svg' alt="logo Bienes Raices" />  
                </Link>
                <Navegacion />
            </div>
        </header>
    )
}

export default Header