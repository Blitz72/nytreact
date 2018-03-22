// import React, { Component } from "react";
import React from "react";
import { Container, Row, Col } from "../Grid";
import API from "../../utils/API";
import Button from "../Button";
// import axios from "axios";

// ArticleListItem renders a bootstrap list item containing data from the article api call
// class ArticleListItem extends Component {
export const ArticleListItem = props => (

  // constructor(props) {
  //   super(props);

  // this.handleSavedArticle = article => {
  //   API.saveArticle(article);
  // },

  // render() {
    // return (
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
                // onClick={this.handleSavedArticle(this.props)}
                type="primary"
                className="input-lg btn-primary"
              >
                Save
              </Button>
            </Col>
          </Row>
        </Container>
      </li>
    // )
  // }
// }
// }
);

// export default ArticleListItem;


