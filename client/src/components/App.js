import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//Components
import Header from "./Header";
import SearchComment from "./SearchComment";
import Settings from "./Settings";
import Comment from "./post/Comment";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Comment} />
        {/**TODO Search는 Comment를 도전하고 나서 결정하기 */}
        {/* <Route path="/search" exact component={SearchComment} /> */}
        <Settings />
      </BrowserRouter>
    </div>
  );
};

export default App;
