import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cardgen() {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="cover placeholder/200px350" />
      <Card.Body>
        <Card.Title>Comic Title</Card.Title>
        <Card.Text>
          Issue Number, Vol Number
        </Card.Text>
        <Button variant="secondary">Buy</Button>
      </Card.Body>
    </Card>
  );
}