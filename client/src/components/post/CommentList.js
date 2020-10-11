import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/fetch";
import CommentEntry from "./CommentEntry";
import _ from "lodash";

const CommentList = ({ comments, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  // console.log(comments);
  const renderComments = () => {
    return _.map(comments, (comment) => {
      // console.log(comment);
      return (
        <React.Fragment key={comment.id}>
          <CommentEntry comment={comment} />
        </React.Fragment>
      );
    });
  };

  return (
    <div className="ui comments">
      <h3 className="ui dividing header">Comments</h3>
      {renderComments()}
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    comments: state.posts,
  };
  // return {
  //    posts: state..posts
  // }
};
export default connect(mapStateToProps, { fetchPosts })(CommentList);

/*
{
  "comments": [
    {
      "userName": "test1",
      "content": "asld asdlkjga skjhkas ha jung asl",
      "id": 1,
      "img-url": "http://alsdkfjalkdsjfl.com",
      "likes": 34,
      "reply": [
        {
          "userName": "paul",
          "content": "donjoe",
          "id": 2,
          "likes": 34
        },
        {
          "userName": "hailey",
          "content": "Redux is horrible!",
          "id": 2,
          "likes": 34
        }
      ]
    },
    {
      "userName": "Si Choi",
      "content": "아 제가 그냥 말을 하면 되는 건가요? 그렇게 입력을 하시면 어떡해요...",
      "id": 2,
      "img-url": "http://alsdkfjalkdsjfl.com",
      "likes": 100,
      "reply": [
        {
          "userName": "Si Choi",
          "content": "양같이 순수한 사람이 되길....",
          "id": 2,
          "likes": 34
        },
        {
          "userName": "paul",
          "content": "또 헛소리 하네...",
          "id": 2,
          "likes": 34
        }
      ]
    }
  ]
}
*/
