import React from 'react'
import { Card, CardImg } from 'react-bootstrap'
import { Link } from "gatsby"
import Styled from "styled-components"
import { faPlus, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import {BetaButton} from './new-button'

const RoundedCard = Styled(Card)`
border-radius: 30px;
border: none;
overflow: hidden;
box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
transition: transform 0.3s;
`


const SupplementCard = ({name, category, image, description, slug}) => {
    
    return (
      <RoundedCard className={`text-center border-none bg-gradient-light ${image ? null : `py-3` }`}>
        <Link to={`/products/${slug}`}>
          {image ? (
            <CardImg className="px-5 py-3" src={image[0].url} alt={name} />
          ) : null}
          <Card.Title as="h3" className="text-greenblack font-weight-bold">
            {name}
          </Card.Title>
          <Card.Subtitle className="text-greengray font-weight-light">
            {category}
          </Card.Subtitle>
        </Link>
        {description ? <Card.Text className="text-left p-3">{description}</Card.Text> : null}
        <Card.Footer className="d-flex justify-content-around bg-transparent border-0 p-2">
          <Link to={`/products/${slug}`}>
            <BetaButton text={"Details"} icon={faArrowRight} buttonColor={"purple"} />
          </Link>
          <Link to={`/cart`}>
            <BetaButton text={"Buy now"} icon={faPlus} buttonColor={"green"} />
          </Link>
        </Card.Footer>
      </RoundedCard>
    )
}

export default SupplementCard