import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import urlSlug from 'url-slug'
import Iconos from './iconos';


const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #75ab00;
    width: 100%;
    color: #fff;
    display: block;
    text-decoration: none;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
`;

const Card = styled.div`
    border: 1px solid #E1E1E1;
    img {
        max-width: 100%;
    }
`
const Contenido = styled.div`
    padding: 2rem;
    h3 {
        font-family: 'Lato', sans-serif;
        margin: 0 0 2rem 0;
        font-size: 2.4rem;
    }
    .precio {
        font-size: 2rem;
        color: #75AB00;
    }
`

const PropiedadPreview = ({propiedad}) => {
    const { nombre, imagen, wc, estacionamientos, habitaciones, precio } = propiedad;
   // console.log(estacionamientos)
    return ( 

        <Card>

            <Image
                fluid={imagen.sharp.fluid}
            />
            <Contenido>
                <h3>{nombre}</h3>

                <p className="precio">$ {precio} </p>

                <Iconos 
                    wc={wc}
                    estacionamientos={estacionamientos}
                    habitaciones={habitaciones}
                />
                  {/** 
                to={ urlSlug( nombre ) }

                */}
                <Boton  to={ urlSlug( nombre ) }>
                    Visitar Propiedad
                </Boton>

            </Contenido>
        </Card>
     );
}
 
export default PropiedadPreview;