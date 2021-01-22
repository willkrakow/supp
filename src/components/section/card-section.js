import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import SupplementCard from "../supplement-card"

const CardSection = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(limit: 3) {
        edges {
          node {
            data {
              name
              category
              description
              verified_effects
              slug
              image {
                url
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Container fluid className="bg-gradient-primary py-3 px-md-5">
      <Row>
        {data.allAirtable.edges.map((item, index) => (
          <Col xs={12} md={4} key={index} className="my-3">
            <SupplementCard
              name={item.node.data.name}
              category={item.node.data.category}
              image={item.node.data.image}
              description={false}
              slug={item.node.data.slug}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default CardSection
