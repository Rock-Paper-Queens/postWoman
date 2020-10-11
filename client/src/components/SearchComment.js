import React, { useEffect } from "react";
import { connect } from "react-redux";
import CommentForm from "./post/CommentForm";
import { NAV_SELECTIONS } from "./Navigation";
import { setSelected } from "../actions/settings";

const SearchComment = ({ setSelected }) => {
  useEffect(() => {
    setSelected(NAV_SELECTIONS.search);
  }, []);

  return (
    <div>
      <CommentForm />
    </div>
  );
};

export default connect(null, { setSelected })(SearchComment);
