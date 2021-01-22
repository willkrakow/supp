/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allAirtable(filter: {table: {eq: "Supplements"}}) {
        edges {
          node {
            data {
              name
              category
              description
              slug
            }
          }
        }
      }
    }
  `)
  data.allAirtable.edges.forEach(edge => {
    const slug = edge.node.data.slug
    actions.createPage({
      path: `products/${slug}`,
      component: require.resolve(`./src/templates/product.js`),
      context: { slug: slug },
    })
  })
}