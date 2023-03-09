import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Sell() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="sellTitle">
        <Form.Label>Comic Title</Form.Label>
        <Form.Control type="title" placeholder="Enter comic book title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="sellIssue">
        <Form.Label>Issue Number</Form.Label>
        <Form.Control type="issue" placeholder="Issue #" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="sellVol">
        <Form.Label>Volume Number</Form.Label>
        <Form.Control type="volume" placeholder="Enter Volume #" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="sellCond">
        <Form.Label>Comic Condition</Form.Label>
        <Form.Control type="volume" placeholder="Enter Comic Condition (NM, VF, FN, other)" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="sellPrice">
        <Form.Label>Purchase Price</Form.Label>
        <Form.Control type="price" placeholder="Enter Desired Purchase Price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I agree to all terms and conditions." />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
