import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody, Row
} from 'reactstrap';
// import booksController from '../../../../controllers/booksController';
const book = {
    title: "Python Crash Course",
    authors: "Eric Matthes",
    description: "A Hands-On, Project-Based Introduction to Programming",
    image: "https://picsum.photos/id/1056/10/25/",
    link: "https://googlebooks.com"

}
const Cards = (props) => {
  return (
    <CardGroup>
      <Card>
        <CardBody>
        <Row>
          <CardTitle>{book.title}</CardTitle>
          <Button {...props} style={{ float: "right", marginBottom: 10, marginLeft: 10 }} className="btn btn-success" color="success" size="sm">Save</Button> <Button {...props} style={{ float: "right", marginBottom: 10, marginLeft: 10 }} className="btn btn-success"color="danger" size="sm">Delete</Button>
        </Row>
          <CardSubtitle>{book.authors}</CardSubtitle>
          <CardText>{book.description}</CardText>
            <CardImg top width="10%" src={book.image} alt="Card image cap" />
            <CardText>{book.link}</CardText>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default Cards;