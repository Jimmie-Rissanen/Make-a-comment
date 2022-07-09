import React from "react";
import { Container, Card } from "react-bootstrap";
import Comment from "./Comment";
import CommentCard from "./CommentCard";

function Home() {
  return (
    <Container fluid style={{ maxWidth: "800px", paddingTop: "30px" }}>
      <Card>
        <Card.Header as="h1">Make A Comment!</Card.Header>
        <Comment height="150px" />
        <CommentCard />
        <Comment />
        <CommentCard />
      </Card>
    </Container>
  );
}

export default Home;
