import { React } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./song-cards.styles.css";

export default function SongCards({ url, title, author, ...otherProps }) {
  return (
    <Card style={{ width: "18rem" }} className="card-container">
      <Card.Body className="card-container__body">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="card-container__text">
          Source/Author: {author}
        </Card.Text>
        <Link to={url}>
          <Button variant="primary">Full Song</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
