import React, { useState } from 'react'
import Layout from '../components/layout'
import { Container, Col, Row } from 'react-bootstrap'
import { graphql } from 'gatsby'
import SupplementCard from '../components/supplement-card'
import { faUndo } from '@fortawesome/free-solid-svg-icons'
import { BetaButton } from '../components/new-button'
import { FancyHeader } from '../pages/index'

const Explore = ({data}) => {
      const categories = [
      "Herbal",
      "Minerals",
      "Vitamins",
      "Prehormones",
      "Performance",
      "Neuro",
    ]

    const supplements = data.allAirtable.edges;
    const [ supplementsToRender, setSupplementsToRender ] = useState(supplements);



    const handleClick = (category) => {
      if(category) {
          setSupplementsToRender(supplements.filter(supp => supp.node.data.category[0] === category))
      } else {
        setSupplementsToRender(supplements)
      }
    }

    return (
      <Layout>
        <Container fluid className="my-4">
          <h1 className="text-center">
            <FancyHeader>Explore</FancyHeader>
          </h1>
          <Row>
            <Col xs={12} md={2} className="bg-light py-5">
              {categories.map((category, index) => (
                <BetaButton
                  key={index}
                  className="w-100"
                  value={category}
                  text={category}
                  name="category"
                  onClick={() => handleClick(category)}
                />
              ))}
              <BetaButton
                value={null}
                icon={faUndo}
                buttonColor={"purple"}
                name="category"
                onClick={() => handleClick(null)}
                text="Reset"
              />
            </Col>
            <Col xs={12} md={10}>
              <Row>
                {supplementsToRender ? (
                  supplementsToRender.map((item, index) => (
                    <Col xs={12} md={4} className="my-3" key={index}>
                      <SupplementCard
                        name={item.node.data.name}
                        image={item.node.data.image}
                        category={item.node.data.category}
                        description={false}
                        slug={item.node.data.slug}
                      />
                    </Col>
                  ))
                ) : (
                  <div>Loading...</div>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
}

export const query = graphql`
  query ExplorePageQuery {
    allAirtable(filter: {table: {eq: "Supplements"}}) {
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
`

export default Explore