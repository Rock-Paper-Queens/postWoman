import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//Components
import Header from "./Header";
import SearchComment from "./SearchComment";
import Comment from "./post/Comment";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Comment} />
        <Route path="/search" exact component={SearchComment} />
      </BrowserRouter>
    </div>
  );
};

export default App;
