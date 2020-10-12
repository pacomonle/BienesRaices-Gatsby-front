import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const ListadoIconos = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 3rem auto 0 auto;

    li {
        display: flex;
        img {
            margin-right: 1rem;
        }
    }
`;

const Iconos = ({ wc, estacionamientos, habitaciones }) => {

    const { iconos } = useStaticQuery( graphql`
        query {
            iconos: allFile(filter: { relativeDirectory: { eq: "icono"}}) {
                edges {
                    node {
                        id
                        publicURL
                    }
                }
            }
        }
    `)
    // console.log(iconos)
    const imagenesIconos = iconos.edges;
    // console.log(imagenesIconos)

    return ( 
        <ListadoIconos>
            <li> 
                <img src={imagenesIconos[5].node.publicURL} alt="icono wc" />
                <p>{wc}</p>
            </li>
            <li> 
                <img src={imagenesIconos[4].node.publicURL} alt="icono estacionamiento" />
                <p>{estacionamientos}</p>
            </li>
            <li> 
                <img src={imagenesIconos[3].node.publicURL} alt="icono habitaciones" />
                <p>{habitaciones}</p>
            </li>
        </ListadoIconos>
     );
}
 
export default Iconos;