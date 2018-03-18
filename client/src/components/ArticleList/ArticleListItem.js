import React from "react";
import { Container, Row, Col } from "../Grid";
import Button from "../Button"

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const ArticleListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-9 sm-10">
          <h3>{props.title}</h3>
          <p>Snippet: {props.snippet}</p>
          <p>Published on {props.pub_date}</p>
          <a rel="noreferrer noopener" target="_blank" href={props.href}>Go to article!</a>
        </Col>
        <Col size="xs-3 sm-2">
          <Button
            href="/api/saved"
            type="success"
            className="input-lg"
          >
            Save
          </Button>
        </Col>
      </Row>
    </Container>
  </li>
);
