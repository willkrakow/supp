import React from 'react'
// import { PillButton } from '../components/pill-button'
import { Col, Row, Container, ListGroup  } from 'react-bootstrap'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SupplementCard from '../components/supplement-card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Product = ({data}) => {
    console.log(data)
    const { name, description, category, verified_effects, slug, image } = data.airtable.data;

    return (
      <Layout>
        <Container className="py-5">
          <Row>
            <Col xs={10} md={6}>
              <img src={image[0].url} alt={name} />
            </Col>
            <Col xs={10} md={6}>
              <SupplementCard
                name={name}
                category={category}
                image={false}
                description={description}
                slug={slug}
              />
              <ListGroup className="m-4">
                {verified_effects.map((effect, index) => (
                  <ListGroup.Item className="border-0" key={index}>
                    <h3 className="text-greenblack">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-primary mr-3"
                      />
                      {effect}
                    </h3>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
}

export default Product

export const query = graphql`
    query($slug: String!) {
        airtable(data: {slug: {eq: $slug}}){
            data {
                name
                description
                category
                verified_effects
                slug
                image {
                    url
                }
            }
        }
    }
`
