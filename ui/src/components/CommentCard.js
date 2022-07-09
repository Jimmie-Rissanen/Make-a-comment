import React from "react";
import { Card, Button } from "react-bootstrap";

function CommentCard() {
  return (
    <Card body>
      <Card.Title as="h5">Name</Card.Title>
      <Card.Body>
        <img
          className="rounded-circle shadow-1-strong"
          src="https://picsum.photos/65"
          alt="avatar"
          width="80"
          height="80"
        />
        <Card.Text>
          <p>
            I'm baby echo park typewriter meditation, dreamcatcher cold-pressed
            meggings migas praxis XOXO etsy paleo jianbing. Humblebrag umami yes
            plz cornhole pitchfork. Squid copper mug gluten-free beard pinterest
            letterpress knausgaard. Fashion axe neutra mixtape, health goth cray
            air plant green juice.
          </p>
        </Card.Text>
        <Button className="float-end" variant="secondary" type="submit">
          Reply
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CommentCard;
