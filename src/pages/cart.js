import React from 'react'
import { Container, ListGroup, Row, Col } from 'react-bootstrap'
import CartItem from '../components/section/cart-item'
import Layout from '../components/layout'
import { BetaButton } from '../components/new-button'
import { faShoppingBag, faBackward } from '@fortawesome/free-solid-svg-icons'
import { graphql } from 'gatsby'


const Cart = ({data}) => {
    const items = [
      {
        sku: "SUPP-0001",
        name: "this stuff",
        image:
          "https://dl.airtable.com/.attachments/dba76d9d84472879020b95ef8be89580/932504af/pexels-photo-4505171.jpeg",
        price: 19.95,
        quantity: 2,
      },
      {
        sku: "SUPP-0001",
        name: "this stuff",
        image: "https://dl.airtable.com/.attachments/dba76d9d84472879020b95ef8be89580/932504af/pexels-photo-4505171.jpeg",
        price: 19.95,
        quantity: 2,
      },
      {
        sku: "SUPP-0001",
        name: "this stuff",
        image: "https://dl.airtable.com/.attachments/dba76d9d84472879020b95ef8be89580/932504af/pexels-photo-4505171.jpeg",
        price: 19.95,
        quantity: 2,
      },
    ]

    return (
      <Layout>
        <Container>
          <ListGroup>
            {items.map((item, index) => (
              <ListGroup.Item key={index}>
                <CartItem
                  sku={item.sku}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  image={item.image}
                />
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Row className="justify-content-end" style={{ margin: "1.25rem" }}>
            <Col xs={6} md={2}>
              <p>
                <strong>Total:</strong>
              </p>
            </Col>
            <Col xs={6} md={2}>
              <p> $99.13</p>
            </Col>
          </Row>
          <Row className="justify-content-end">
            <Col xs={4} md={3}>
              <BetaButton
                buttonColor="green"
                text="Shop more"
                icon={faBackward}
              ></BetaButton>
            </Col>
            <Col xs={4} md={3}>
              <BetaButton
                buttonColor="purple"
                text="Checkout"
                icon={faShoppingBag}
              ></BetaButton>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
}

export default Cart

export const query = graphql`
  query StripeCartQuery {
    allStripePrice {
      edges {
        node {
          type
          unit_amount
          product {
            id
            name
            active
            type
          }
          billing_scheme
        }
      }
    }
  }
`