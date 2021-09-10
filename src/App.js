import React from "react";
import { PostsListContainer } from "./components/Posts/PostsListContainer";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/posts">
            <PostsListContainer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
