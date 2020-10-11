import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import { createPost } from "../../actions/comment.js";
import { connect } from "react-redux";
import jsonplaceholder from "../../apis/jsonplaceholder";
import { format } from "date-fns";

const CreateComment = ({ createPost }) => {
  const [profile, setProfile] = useState("");

  useEffect(() => {
    const getProfile = async () => {
      const response = await jsonplaceholder.get("/photos");
      const randomIndex = Math.floor(Math.random() * response.data.length);
      setProfile(response.data[randomIndex].thumbnailUrl);
    };
    getProfile();
  }, []);

  const submit = (value) => {
    createPost({
      userName: "test1", // TODO
      id: new Date(),
      content: value.commentText,
      thumbnailUrl: profile,
      likes: 0,
      date: format(new Date(), "yyyy,MM,dd"),
    });
  };
  return (
    <div>
      <h3>Write your post</h3>
      <CommentForm onSubmit={submit} />
    </div>
  );
};

export default connect(null, { createPost })(CreateComment);

// formatDistance(subDays(new Date(), 3), new Date()), //3일전
