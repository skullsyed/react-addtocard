import * as React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Card, Badge } from "react-bootstrap";
import { useState } from "react";
import { HeaderNavBar } from "./Header.component";

const PricingCard = ({ card }) => {
  const ratingDynamics = {
    button: cart ? "card added" : "add to cart",
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
          ;
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
              onClick={() => setCart(!cart)}
              // style={ratingDynamics}
            >
              {card.btnText}
              {/* {ratingDynamics} */}
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export { PricingCard };
