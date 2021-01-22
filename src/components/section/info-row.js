import React from 'react'
import { Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { FancyHeader } from '../typography/fancy-header'
import { ImageContainer } from '../image/image-container'
import { SizedImage } from '../image/sized-image'

export const InfoRow = ({name, text_content, image}) => {

    return (
      <Row className="justify-content-center my-5 py-5">
        <Col xs={12} className="order-1 order-md-1">
          <h1 className="text-center">
            <FancyHeader>{name}</FancyHeader>
          </h1>
        </Col>
        <Col xs={12} md={8} className="order-3 order-md-2">
          <p className="text-greenblack">{text_content}</p>
        </Col>
        <Col xs={12} md={12} className="order-2 order-md-3">
          <ImageContainer>
            <SizedImage src={image} alt={name} />
          </ImageContainer>
        </Col>
      </Row>
    )
}

InfoRow.propTypes = {
    name: PropTypes.string,
    text_content: PropTypes.string,
    image: PropTypes.string,
}

