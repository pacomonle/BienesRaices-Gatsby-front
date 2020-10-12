import { css } from '@emotion/core'
import React, { useEffect, useState } from 'react'
import usePropiedades from '../hooks/usePropiedades'
import PropiedadPreview from './propiedadPreview';
import listadoPropiedadesCSS from '../css/listadoPropiedades.module.css';

const ListadoPropiedades = () => {
    const resultado = usePropiedades();
    // console.log(resultado)
    const [propiedades, setpropiedades] = useState()

    useEffect(() => {
        setpropiedades(resultado)
        return () => {
            // cleanup
        }
    
    }, [])
   // console.log(propiedades)
    return (
        <>
            <h2 css={css`
            margin-top: 5rem;
            `}>Nuestras Propiedades</h2>

            <ul className={listadoPropiedadesCSS.propiedades} >
            {   propiedades &&
                propiedades.map( propiedad => (
                <PropiedadPreview
                key={propiedad.id} 
                propiedad={propiedad} />
                ))
            }
            </ul>
        </>
    )
}

export default ListadoPropiedades
