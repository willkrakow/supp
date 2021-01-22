import React from 'react'
import { Col, Row } from 'react-bootstrap'
import PropTypes from "prop-types"
import Styled from 'styled-components'

const FancyBar = Styled.hr`
width: 220%;
position: relative;
left: ${props => props.left ? "-110%" : "-10%"};
top: 12.5px;
height: 40px;
background: transparent;
box-shadow: 0px 40px 0px 0px #A026FF;
z-index: -1;
`
const FeatureRow = ({ ...props }) => {
    const { image_alignment, image, super_text, header_text, body_text } = props


    if (image_alignment === "left") {
        return (
           
                <Row className="d-flex align-items-center my-5">
                    <Col xs={{ span: 12, order: 1 }} md={{ span: 7, order: 1 }}>
                    <div className="image-wrapper" data-sal="slide-right" data-sal-delay="500" data-sal-duration="300" data-sal-easing="ease">
                        <img src={image} alt={header_text} className="w-100 d-block shadow" />
                    </div>
                    </Col>
                    <Col xs={{ span: 12, order: 2 }} md={{ span: 5, order: 2 }}>
                        <FancyBar left={true} />
                        <h5 className="text-light">{super_text.toUpperCase()}</h5>
                        <h2 className="text-greenblack">{header_text}</h2>
                        <p className="text-greengray">{body_text}</p>
                    </Col>
                </Row>
        )
    } else {
        return (
           
                <Row className="d-flex align-items-center my-5">
                    <Col xs={{ span: 12, order: 2 }} md={{ span: 5, order: 1 }}>
                        <FancyBar />
                        <h5 className="text-light">{super_text.toUpperCase()}</h5>
                        <h2 className="text-greenblack">{header_text}</h2>
                        <p className="text-greengray">{body_text}</p>
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} md={{ span: 7, order: 2 }}>
                        <div className="image-wrapper" data-sal="slide-left" data-sal-duration="300" data-sal-delay="500" data-sal-easing="ease">
                            <img src={image} alt={header_text} className="w-100 shadow d-block" />
                        </div>
                    </Col>
                </Row>
        )
    }
}

FeatureRow.propTypes = {
    image_alignment: PropTypes.string,
    image: PropTypes.string,
    super_text: PropTypes.string,
    header_text: PropTypes.string,
    body_text: PropTypes.string,
}


export default FeatureRow