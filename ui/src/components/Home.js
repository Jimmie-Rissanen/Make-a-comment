import React from "react";
import { Container, Col, Card } from "react-bootstrap";
import Comment from "./Comment";
import CommentCard from "./CommentCard";

function Home() {
  return (
    <Container fluid style={{ maxWidth: "800px" }}>
      <Card>
        <Card.Header as="h1">Make A Comment!</Card.Header>
        <Comment height="150px" />
        <CommentCard />
      </Card>
    </Container>
  );
}

export default Home;
