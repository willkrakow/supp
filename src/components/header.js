import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Nav, Navbar, Button, Form, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faSearch, faTimes, faShoppingBag, faPills } from '@fortawesome/free-solid-svg-icons'
import Styled from 'styled-components'
import { useForm } from 'react-hook-form'
import {BetaButton} from '../components/new-button'


const Modal = Styled.div`
position: fixed;
top: 40vh;
display: ${props => (props.open ? "flex" : "none")};
justify-content: center;
align-items: center;
background: white;
border-radius: 30px;
flex-wrap: wrap;
}
`

const ModalContainer = Styled.div`
  position: fixed;
  display: ${props => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.6);
  z-index: 10;
`

const SearchBar = Styled(Form.Control)`
box-shadow: inset 0px 0px 10px rgba(0,0,0,0.15);
`

const BrandTitle = Styled(Navbar.Brand)`
font-size: 1.75em;
font-family: 'Lobster', cursive;
`

const Header = ({ siteTitle }) => {

  const {register, watch, handleSubmit} = useForm();

 const [open, setOpen] = useState(false);

  const handleClick = () => {
    let temp = open;
    setOpen(!temp);
  }

  const handleSearch = (data) => {
    console.log(data)
  }

  watch('query')

  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
          <BrandTitle href="/">
            <FontAwesomeIcon
              icon={faPills}
              className="text-purple mr-3"
            />
            {siteTitle}
          </BrandTitle>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto align-items-center">
            <Link to="/" className="mx-3">
              <Nav.Link as="span">Home</Nav.Link>
            </Link>
            <Link to="/explore" className="mx-3">
              <Nav.Link as="span">Explore</Nav.Link>
            </Link>
            <Link to="/about" className="mx-3">
              <Nav.Link as="span">About</Nav.Link>
            </Link>
            <Link to="/login" className="mx-3">
              <BetaButton text="Log in" icon={faArrowRight} color="purple" />
            </Link>
            <Link to="/cart" className="mx-3">
              <Button className="btn btn-light text-success">
                <FontAwesomeIcon icon={faShoppingBag} />
              </Button>
            </Link>
            <Button
              className="btn btn-light text-success"
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {open ? (
        <ModalContainer open={open}>
          <Modal open={open} className="text-center bg-light p-5 m-3">
            <h1 className="w-100">Search</h1>
            <Form className="w-75" onSubmit={handleSubmit(handleSearch)}>
              <InputGroup className="m-3">
                <SearchBar
                  className="border-0 p-2"
                  name="query"
                  ref={register}
                />
                <InputGroup.Append>
                  <Button className="btn btn-light text-success">
                    <FontAwesomeIcon icon={faSearch} type="submit" />
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
            <BetaButton
              buttonColor="green"
              className="w-50"
              text="Close"
              icon={faTimes}
              onClick={handleClick}
            />
          </Modal>
        </ModalContainer>
      ) : null}
    </React.Fragment>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
