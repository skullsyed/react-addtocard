import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { BiSolidCartDownload } from "react-icons/bi";

function HeaderNavBar({ cart, setCart }) {
  // const addNumToAddCart = () => {
  //   {
  //     cart === true ? cart + 1 : null;
  //   }
  // };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary p-0">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Button
                variant="secondary"
                size="sm"
                className="ms-auto addCartBtn m-2"
                // onChange={addNumToAddCart}
              >
                <BiSolidCartDownload size={35} className="AddToCartIcon" />
                Cart {cart}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Card text="white" className="shopCart" bg="black">
            <Card.Body>This is some text within a card body.</Card.Body>
        </Card> */}
      <div className="h1 fs-1 text-center align-items-center text-bg-dark py-5">
        Shop in style{" "}
        <div className="fs-6 fw-normal lead text-white pt-3 ">
          With this shop hompeage template
        </div>
      </div>
    </div>
  );
}

export { HeaderNavBar };
