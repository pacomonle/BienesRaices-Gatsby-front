import React from 'react'
import Layout from '../components/layout'
import useInicio from '../hooks/useInicio';
import BackgroundImage from 'gatsby-background-image';
import Encuentra from '../components/Encuentra';
import ListadoPropiedades from '../components/ListadoPropiedades';
import heroCSS from '../css/hero.module.css';
import styled from '@emotion/styled';
import { css } from '@emotion/core';



const ImagenBackground = styled(BackgroundImage)`
    height: 600px;
`;

const Index = () => {
    const inicio = useInicio();
    const { nombre, contenido, imagen } = inicio[0];

   // console.log(nombre, contenido, imagen) 

    return (
        <>
            <Layout> 
                <ImagenBackground
                    tag="section"
                    fluid={imagen.sharp.fluid}
                    fadeIn="soft"
                >
                    <div className={heroCSS.imagenbg}>
                        <h1 className={heroCSS.titulo}> Venta de casas y departamentos exclusivos </h1>
                    </div>
                </ImagenBackground>
                <main>
                    <div css={css`
                            max-width: 800px;
                            margin: 0 auto;
                        `}
                    >
                        <h1>{nombre}</h1>
                        <p css={css`
                            text-align: center;
                        `}>{contenido}</p>
                    </div>
                </main> 
                
                <Encuentra />

                <ListadoPropiedades />
            </Layout>
        </>
    )
}

export default Index
