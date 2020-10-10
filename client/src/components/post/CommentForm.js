import React from "react";
import { Field, reduxForm } from "redux-form";

const CommentForm = () => {
  return (
    <form className="ui form">
      {/* <Field name="comment" label="write comment" /> */}
      <button className="ui button primary">Post</button>
    </form>
  );
};
export default reduxForm({
  form: "commentForm", // QUESTION 얜 정체가 뭐지..?
})(CommentForm);
