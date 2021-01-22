import React from "react"
import { Row, Col } from "react-bootstrap"
import PropTypes from "prop-types"
import { ImageContainer } from "../image/image-container"
import { SizedImage } from "../image/sized-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const CartItem = ({ sku, name, price, quantity, image }) => {
  return (
    <Row className="justify-content-center align-items-center border-none border-bottom border-secondary">
      <Col xs={10} md={3}>
        <ImageContainer>
          <SizedImage src={image} alt={name} />
        </ImageContainer>
      </Col>
      <Col xs={10} md={4}>
        <h4>{name}</h4>
      </Col>
      <Col xs={6} md={3}>
        <p>
          {price.toString()}
          &nbsp;
          <FontAwesomeIcon icon={faTimes} className="text-greengray" />
          &nbsp;
          {quantity.toString()}
        </p>
      </Col>
      <Col xs={6} md={2}>
        <p>{(price * quantity).toFixed(2).toString()}</p>
      </Col>
    </Row>
  )
}

CartItem.propTypes = {
  sku: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  image: PropTypes.string,
}

export default CartItem