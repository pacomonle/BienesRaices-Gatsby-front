/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {

    const resultado = await graphql(`
                        query {
                            allStrapiPaginas {
                                nodes {
                                    nombre
                                    id
                                }
                            }
                            allStrapiPropiedades {
                                nodes {
                                    nombre
                                    id
                                }
                            }
                        }
                    `);
        
      //  console.log(JSON.stringify(resultado.data.allStrapiPaginas))
      //  console.log(JSON.stringify(resultado.data.allStrapiPropiedades))

        // Si no hay resultados
    if(resultado.errors) {
        reporter.panic('No hubo resultados', resultado.errors);
    }

    // Si hay resultados generar los archivos estaticos
    const paginas = resultado.data.allStrapiPaginas.nodes;
    const propiedades = resultado.data.allStrapiPropiedades.nodes;
     console.log('prop', propiedades)
     console.log('pag', paginas)

    // crear los templates para paginas
    paginas.forEach( pagina => {
        actions.createPage({
            path: urlSlug( pagina.nombre ),
            component: require.resolve('./src/components/paginas.js'),
            context: {
                id: pagina.id
            }
        })
    } ) 

    // Crear los templates de propiedades
    propiedades.forEach( propiedad => {
        actions.createPage({
            path: urlSlug( propiedad.nombre ),
            component: require.resolve('./src/components/propiedades.js'),
            context: {
                id: propiedad.id
            }
        })
    } )

}