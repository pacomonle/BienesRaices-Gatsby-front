import { graphql, useStaticQuery } from 'gatsby'

const useInicio = () => {

    // sharp-transform -> dar efectos a las imagenes
    // usar -> duotone: { }
    
    const resultado = useStaticQuery(
        graphql`
            query {
                allStrapiPaginas( filter: { nombre: { eq: "Inicio" } } ){
                nodes {
                    id
                    nombre
                    contenido
                    imagen {
                        sharp: childImageSharp {
                            
                            fluid( maxWidth: 1200 duotone: {
                                highlight: "#222222", shadow: "#192550", opacity: 30
                            } ) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
          }
        `
    );

    return resultado.allStrapiPaginas.nodes.map( data => ({
        nombre: data.nombre,
        contenido: data.contenido,
        imagen: data.imagen
    }))

}
 
export default useInicio;