import { Card, Col, Row, Text } from "@nextui-org/react";

const GameCard = ({ cardImg, cardText }) => (
  <Card css={{ w: "100%", h: "400px", maxW: "400px", cursor: "pointer" }}>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={cardImg}
        width="100%"
        height="100%"
        objectFit="cover"
        alt="game card"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text
            color="#000"
            h3
            css={{
              color: "#16003B",
              fontWeight: "500",
              textAlign: "center",
            }}
            size="2rem"
          >
            {cardText}
          </Text>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);

export default GameCard;
