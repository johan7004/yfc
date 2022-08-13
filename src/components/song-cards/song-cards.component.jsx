import React from "react";
import {Card, Button } from "react-bootstrap";
import './song-cards.styles.css'

export default function SongCards({ title, description, ...otherProps }) {
  return (
    
          <Card style={{ width: "18rem" }} className="card-container">
            <Card.Body className="card-container__body">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Button variant="primary">Full Song</Button>
            </Card.Body>
          </Card>
        
    
  );
}
