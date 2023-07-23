import * as React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Card, Badge } from "react-bootstrap";
import { useState } from "react";
import { HeaderNavBar } from "./Header.component";

const PricingCard = ({ card, cart, setCart }) => {
  const [btnText, setBtnText] = useState("Add to Cart");
  const handleAddToCard = async () => {
    // if (btnText != "Remove from Cart" && cart >= 0) {
    if (cart <= 0) {
      await setCart((prevCount) => prevCount + 1);
    } else {
      await setCart((prevCount) => prevCount - 1);
    }

    // setBtnText(cart > cart.length ? "Add to Cart" : "Remove from Cart");
    setBtnText(
      cart <= 0
        ? "Remove from Cart"
        : card <= -0
        ? "Add to Cart"
        : "Add to Cart"
    );
  };
  return (
    <div>
      <Container>
        <Card
          style={{
            width: "18rem",
            height: "25rem",
            justifyContent: "space-around",
          }}
        >
          <Card.Img variant="top" size={20} src={card.image} />
          <div>
            {card.badge === true ? (
              <Badge
                bg="dark"
                style={{ position: "absolute", top: "10px", right: "10px" }}
              >
                Sale
              </Badge>
            ) : null}
          </div>
          <Card.Body className="h-5">
            <Card.Title>{card.title}</Card.Title>
            <div>{card.rating === true ? <div>⭐⭐⭐⭐⭐</div> : <p> </p>}</div>
            <div className="price">
              {card.rating === true ? (
                <Card.Text className="card-firstPrice text-decoration-line-through">
                  {card.firstPrice}
                </Card.Text>
              ) : (
                <Card.Text className="card-firstPrice">
                  {card.firstPrice}
                </Card.Text>
              )}
              <Card.Text className="card-secondPrice ">
                {card.secondPrice}
              </Card.Text>
            </div>
            <Button
              variant="outline-dark "
              className="m-auto p-auto "
              onClick={
                // style = { btnStyle };
                // setCart(cart + 1);
                handleAddToCard
              }
            >
              {btnText}
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export { PricingCard };
