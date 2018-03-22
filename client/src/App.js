import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { ArticleList, ArticleListItem } from "./components/ArticleList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  state = {
    articles: [],
    articleSearch: "",
    savedArticles: []
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get articles update the articles state
    event.preventDefault();
    API.getArticles(this.state.articleSearch)
      .then(res => {
        console.log(res.data);
        this.setState({ articles: res.data })
      })
      .catch(err => console.log(err));
  };

  // componentDidMount() {
  //   API.getSavedArticles()
  //     .then(res => this.setState({ savedArticles: res.data }))
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <div>
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="articleSearch"
                        value={this.state.articleSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a New York Times Article"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="primary"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.articles.length ? (
                <h3 className="text-center">Searched Articles Display Here</h3>
              ) : (
                <ArticleList>
                  {this.state.articles.map(article => {
                    return (
                      <ArticleListItem
                        key={article.headline.main}
                        title={article.headline.main}
                        href={article.web_url}
                        snippet={article.snippet}
                        pub_date={article.pub_date}
                        button_text={"Sweet"}
                      />
                    );
                  })}
                </ArticleList>
              )}
            </Col>
          </Row>
          <h1>Saved Articles:</h1>
          <Row>
            <Col size="xs-12">
              {!this.state.savedArticles.length ? (
                <h3 className="text-center">Saved Articles Display Here</h3>
              ) : (
                <ArticleList>
                  {this.state.savedArticles.map(article => {
                    return (
                      <ArticleListItem
                        key={article.headline.main}
                        title={article.headline.main}
                        href={article.web_url}
                        snippet={article.snippet}
                        pub_date={article.pub_date}
                      />
                    );
                  })}
                </ArticleList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
