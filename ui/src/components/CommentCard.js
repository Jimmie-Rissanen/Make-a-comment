import React from "react";
import { Card, Button } from "react-bootstrap";

function CommentCard() {
  // const size of parent and make it 10% smaller. If(parent === 0) same as parent.
  return (
    <div style={{}}>
      <Card body>
        <Card.Title className="fs-4">Name</Card.Title>
        <Card.Body>
          <img
            className="rounded-circle shadow-1-strong"
            src="https://picsum.photos/80"
            alt="avatar"
            style={{ paddingBottom: "5px" }}
          />
          <Card.Text>
            <p>
              I'm baby echo park typewriter meditation, dreamcatcher
              cold-pressed meggings migas praxis XOXO etsy paleo jianbing.
              Humblebrag umami yes plz cornhole pitchfork. Squid copper mug
              gluten-free beard pinterest letterpress knausgaard. Fashion axe
              neutra mixtape, health goth cray air plant green juice.
            </p>
          </Card.Text>
          <Button className="float-end" variant="secondary" type="submit">
            Reply
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CommentCard;
