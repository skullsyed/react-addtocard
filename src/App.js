import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HeaderNavBar } from "./components/Header.component";
import { TextBody } from "./components/TextBody";
import { PricingCard } from "./components/PricingCard";
import cardDetails from "./data/data";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState(0);
  const itemsDetails = cardDetails;
  return (
    <div className="App">
      <HeaderNavBar cart={cart} setCart={setCart} />
      {/* <TextBody /> */}
      <Container>
        <Row md-3 sm-3 lg-2>
          {itemsDetails.map((data) => (
            <Col className="d-flex justify-content-center align-items-center m-1 py-2 px-3 text-center">
              <PricingCard
                key={data.id}
                // title={data.title}
                // rating={data.rating}
                // firstPrice={data.firstPrice}
                // secondPrice={data.secondPrice}
                // btnText={data.btnText}
                // image={data.image}
                // badge={data.badge}
                card={data}
                cart={cart}
                setCart={setCart}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
