import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { FancyHeader } from "../pages/index"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { SizedImage } from '../components/image/sized-image'
import { ImageContainer } from '../components/image/image-container'
import { InfoRow } from '../components/section/info-row'

const About = ({ data }) => {
    const {
        name,
        image_1,
        image_2,
        image_3,
        text_content_1,
        text_content_3,
        bullet_1,
        bullet_2,
        bullet_3,
        bullet_1_content,
        bullet_2_content,
        bullet_3_content,
    } = data.allAirtable.edges[0].node.data

    const bullets = [
        {
            name: bullet_1,
            content: bullet_1_content,
        },
        {
            name: bullet_2,
            content: bullet_2_content,
        },
        {
            name: bullet_3,
            content: bullet_3_content,
        },
    ]

    return (
        <Layout>
            <Container>
                <InfoRow name={name} text_content={text_content_1} image={image_1[0].url} />
                <Row className="justify-content-center my-5 py-5 align-items-center">
                    <Col xs={12} className="order-1 order-md-1">
                        <h1 className="text-center"><FancyHeader>Our Values</FancyHeader></h1>
                    </Col>
                    <Col xs={12} md={6} className="order-2 order-md-3 p-5">
                        <ImageContainer>
                            <SizedImage src={image_2[0].url} alt={name} />
                        </ImageContainer>
                    </Col>
                    <Col xs={12} md={6} className="order-3 order-md-2">
                        {bullets.map((bullet, index) => (
                            <Row key={index}> 
                                <Col xs={2} md={3} className="text-right">
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        className="text-success mr-3 fa-2x margin-auto opacity-3"
                                    />
                                </Col>
                                <Col xs={10} md={9}>
                                    <h3>{bullet.name}</h3>
                                    <p>{bullet.content}</p>
                                </Col>
                            </Row>
                        ))}
                    </Col>
                </Row>
                <InfoRow name={"Our Process"} image={image_3[0].url} text_content={text_content_3} />
            </Container>
        </Layout>
    )
}

export const query = graphql`
  query {
    allAirtable(
      filter: { table: { eq: "Pages" }, data: { slug: { eq: "about" } } }
    ) {
      edges {
        node {
          id
          data {
            name
            text_content_1
            text_content_2
            bullet_1
            bullet_2
            bullet_3
            bullet_1_content
            bullet_2_content
            bullet_3_content
            text_content_3
            image_1 {
              url
            }
            image_2 {
              url
            }
            image_3 {
              url
            }
          }
        }
      }
    }
  }
`

export default About
