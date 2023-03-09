import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Cardspec() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="img placeholder" />
      <Card.Body>
        <Card.Title>Title</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Issue, Vol</ListGroup.Item>
        <ListGroup.Item>Author</ListGroup.Item>
        <ListGroup.Item>Publisher</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardspec;