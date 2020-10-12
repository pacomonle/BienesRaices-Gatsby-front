import { css } from '@emotion/core'
import React, { useEffect, useState } from 'react'
import usePropiedades from '../hooks/usePropiedades'
import PropiedadPreview from './propiedadPreview';
import listadoPropiedadesCSS from '../css/listadoPropiedades.module.css';
import useFiltro from '../hooks/useFiltro';

const ListadoPropiedades = () => {
    const resultado = usePropiedades();
    // console.log(resultado)
    const [propiedades, setpropiedades] = useState(resultado)
        
    const [ filtradas, setFiltradas] = useState([]);
    // filtrado de propiedades
    const { categoria,  FiltroUI } = useFiltro();

    useEffect(() => {
        // setpropiedades(resultado)
        if(categoria) {
           // console.log('propiedades', propiedades)
            const filtro = propiedades.filter( propiedad => propiedad.categorias.nombre === categoria);
            setFiltradas(filtro);
        } else {
            setFiltradas(propiedades);
        }
        return () => {
            // cleanup
        }
    
    }, [categoria])
 // console.log(filtradas)
 // console.log('categoria', categoria)
    return (
        <>
            <h2 css={css`
            margin-top: 5rem;
            `}>Nuestras Propiedades</h2>

            { FiltroUI() }

            <ul className={listadoPropiedadesCSS.propiedades} >
                { filtradas && 
                  filtradas.map( propiedad => (
                    <PropiedadPreview 
                        key={propiedad.id}
                        propiedad={propiedad}
                    />
                ))}
            </ul>
        </>
    )
}

export default ListadoPropiedades
