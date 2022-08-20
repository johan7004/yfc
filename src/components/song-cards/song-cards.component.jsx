import { React } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./song-cards.styles.css";

export default function SongCards({ url, title, description, ...otherProps }) {
  return (
    <Card style={{ width: "18rem" }} className="card-container">
      <Card.Body className="card-container__body">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="card-container__text">{description}</Card.Text>
        <Button variant="primary">
          <Link to={url}>Full Song</Link>
        </Button>
      </Card.Body>
    </Card>
  );
}
