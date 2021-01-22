import React from "react"

import Layout from "../components/layout"
import { Jumbotron, Row, Col, Container } from 'react-bootstrap'
import { faArrowRight, faCompass } from "@fortawesome/free-solid-svg-icons"
import Styled from 'styled-components'
import CardSection from "../components/section/card-section"
import FeatureRow from "../components/feature-row"
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'
import { BetaButton } from "../components/new-button"
// import Reviews from "../components/section/reviews"
// import AnimatedReviews from '../components/section/animated-reviews/animated-reviews'
import Checkout from '../components/checkout'

export const FancyHeader = Styled.span`
padding-bottom: 0px;
box-shadow: inset 0px -25px 0px rgba(160, 38, 255, 0.15);
`

const IndexPage = ({ data }) => (
  <Layout>
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Jumbotron className="bg-transparent">
            <h1 className="text-greenblack">
              <FancyHeader>
                Get the facts on every supplement in your cabinet.
              </FancyHeader>
            </h1>
            <p className="text-greengray">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <Link to="/explore" className="mr-3">
              <BetaButton
                icon={faCompass}
                text={"Explore"}
                buttonColor={"purple"}
              />
            </Link>
            <Link to="/about">
              <BetaButton
                icon={faArrowRight}
                text={"About"}
                buttonColor={"green"}
              />
            </Link>
          </Jumbotron>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Img fixed={data.file.childImageSharp.fixed} />
        </Col>
      </Row>
    </Container>
    <CardSection />
    <Checkout />
    {/* <AnimatedReviews /> */}
    {/* <Reviews /> */}
    <Container className="my-2 py-2">
      <FeatureRow
        image={
          "https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        }
        image_alignment={"left"}
        super_text={"Trusted"}
        header_text={"100% snake oil-free. Guaranteed."}
        body_text={
          "Everything we sell has been validated by peer-reviewed studies to help you make positive changes to your health."
        }
      />
    </Container>
    <Container className="my-2 py-2">
      <FeatureRow
        image={
          "https://images.pexels.com/photos/348689/pexels-photo-348689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }
        image_alignment={"right"}
        super_text={"All-natural"}
        header_text={"Made from really good stuff."}
        body_text={
          "All of our supplements come from plants found in nature, either directly or through gentle water-based nutrient extraction."
        }
      />
    </Container>
    <Container className="my-2 py-2">
      <FeatureRow
        image={
          "https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }
        image_alignment={"left"}
        super_text={"Lab tested"}
        header_text={"Batch tested by third-party labs."}
        body_text={
          "All of our supplements come from plants found in nature, either directly or through gentle water-based nutrient extraction."
        }
      />
    </Container>
  </Layout>
)


export const query = graphql`
  query {
    file(relativePath: { eq: "undraw_science_fqhl.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 500, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default IndexPage
