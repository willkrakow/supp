import React from "react"
import { Button } from "react-bootstrap"
import Styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"

const GreenButton = Styled(Button)`
box-shadow: inset -40px 0px 0px rgba(0, 220, 167, 0.15),
    0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
transition: box-shadow 0.3s;
&:hover {
    box-shadow: inset 0px 0px 0px rgba(0, 220, 167, 0.0),
0 .5rem 1rem rgba(0,0,0,.15);
&:active {
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
}
}
`

const PurpleButton = Styled(Button)`
box-shadow: inset -40px 0px 0px rgba(255, 255, 255, 0.6),
    0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
transition: box-shadow 0.3s;
&:hover {
      box-shadow: inset 0px 0px 0px rgba(255, 255, 255, 0.6),
                  0 .5rem 1rem rgba(0,0,0,.15);
      color: #fafafa!important;
&:active {
      box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
}
}
`
const EffectIcon = Styled(FontAwesomeIcon)`
  transition: color 0.4s;

  ${PurpleButton}:hover & {
  color: #f8f9fa!important;
}
`

export const BetaButton = ({ buttonColor, text, icon, ...props }) => {

  if (buttonColor === "purple") {
    return (
      <PurpleButton
        className={`border-0 my-2 rounded-pill bg-purple text-light btn-purple ${props.className}`}
        value={`${props.value ? props.value : null}`}
        {...props}
      >
        <span className="mr-3 ml-2">{text}</span>
        {icon ? (
          <EffectIcon icon={icon} className={`ml-3 text-purple`} />
        ) : null}
      </PurpleButton>
    )
  } else {
    return (
      <GreenButton
        value={`${props.value ? props.value : null}`}
        {...props}
        className={`rounded-pill my-2 border-0 bg-gradient-light text-greenblack ${props.className}`}
      >
        <span className="mr-3 ml-2">{text}</span>
        {icon ? (
          <FontAwesomeIcon icon={icon} className="text-success ml-3" />
        ) : null}
      </GreenButton>
    )
  }
}

BetaButton.propTypes = {
  buttonColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.object,
}
