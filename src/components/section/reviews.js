import React, { useState, useEffect } from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'
import Styled, {keyframes} from 'styled-components'
import {SizedImage} from '../image/sized-image'
import { FancyHeader } from '../../pages'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Review = Styled(Col)`
  display: ${props => props.active ? `flex` : `none`};
  animation: ${props => (props.active ? flyin : flyout)} 0.6s ease;
`

const flyin = keyframes`
  from {
    transform: translate(600px, 0px);
  }

  to {
    transform: translate(0px, 0px);
  }
`

const flyout = keyframes`
  from {
    transform: translate(0px, 0px);
    opacity: 1.0;
  }

  to {
    transform: translate(-1000px, 20px) rotate(70deg);
    opacity: 0.0;
  }
`

const Flexbox = Styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 24px;
`

const ShinyIcon = Styled(FontAwesomeIcon)`
box-shadow: inset 0px 8px 16px rgba(255,255,255,0.7);
`


const Reviews = () => {
    const testData = [
      {
        customer_name: "Amber Smith",
        product: "Acne-Away Ointment",
        stars: 4,
        customer_image:
          "https://images.pexels.com/photos/5774176/pexels-photo-5774176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        review_text:
          "This stuff did wonders to all the zits I get under my flabby back rolls! It even popped the big ole boil I had under my double chin for ages, which I'm pretty sure was herpes I picked up from my nasty husband.",
      },
      {
        customer_name: "Toddy Smith",
        product: "Acne-Away Ointment",
        stars: 4,
        customer_image:
          "https://images.pexels.com/photos/5774176/pexels-photo-5774176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        review_text:
          "This stuff did wonders to all the zits I get under my flabby back rolls! It even popped the big ole boil I had under my double chin for ages, which I'm pretty sure was herpes I picked up from my nasty husband.",
      },
      {
        customer_name: "Zach Smith",
        product: "Acne-Away Ointment",
        stars: 4,
        customer_image:
          "https://images.pexels.com/photos/5774176/pexels-photo-5774176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        review_text:
          "This stuff did wonders to all the zits I get under my flabby back rolls! It even popped the big ole boil I had under my double chin for ages, which I'm pretty sure was herpes I picked up from my nasty husband.",
      },
      {
        customer_name: "Amber Smith",
        product: "Acne-Away Ointment",
        stars: 4,
        customer_image:
          "https://images.pexels.com/photos/5774176/pexels-photo-5774176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        review_text:
          "This stuff did wonders to all the zits I get under my flabby back rolls! It even popped the big ole boil I had under my double chin for ages, which I'm pretty sure was herpes I picked up from my nasty husband.",
      },
    ]

    function createStarArray(stars) {
      return new Array(stars)
    }

    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
          let temp = (activeIndex + 1) % 4;
          setActiveIndex(temp);
      }, 5000)
      return () => clearInterval(interval)
    }, [activeIndex])

    return (
      <Container>
        <h1>
          <FancyHeader>Reviews</FancyHeader>
        </h1>
        <Row className="justify-content-center align-items-center">
          {testData.map((item, index) => (
            <Review
              xs={10}
              md={6}
              key={index}
              id={`review-${index}`}
              active={activeIndex === index ? true : false}
            >
              <Card>
                <SizedImage
                  width="200px"
                  src={item.customer_image}
                  className="rounded-circle w-50"
                />
                <h4>{item.customer_name}</h4>
                <h4 className="text-secondary">{item.product}</h4>
                <Flexbox>
                  {createStarArray(item.stars).map((star, index) => (
                    <ShinyIcon icon={faStar} className="text-warning" key={index} />
                  ))}
                  <p>
                    <em>{item.review_text}</em>
                  </p>
                </Flexbox>
              </Card>
            </Review>
          ))}
        </Row>
      </Container>
    )
}

export default Reviews
