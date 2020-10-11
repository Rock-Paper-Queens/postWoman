import { FETCH_POST, FETCH_POSTS } from "./type";
import postwoman from "../apis/postwoman";
import jsonplaceholder from "../apis/jsonplaceholder";
import _ from "lodash";

_.mixin({
  mergeByKey: function (arr1, arr2, key) {
    let criteria = {};
    criteria[key] = null;
    return _.map(arr1, function (item) {
      criteria[key] = item[key];
      const result = _.merge(item, _.find(arr2, criteria));
      return _.omit(result, ["title", "url"]);
    });
  },
});

export const fetchPost = (id) => async (dispatch) => {
  const response = await postwoman.get(`/comments/${id}`);
  dispatch({
    type: FETCH_POST,
    payload: response,
  });
};

export const fetchPosts = () => async (dispatch) => {
  const response = await postwoman.get("/comments");
  const response2 = await jsonplaceholder.get("/photos/");

  const newResponse = _.mergeByKey(response.data, response2.data, "id");
  // const photos = response2.thumbnailUrl;
  // console.log("response", response.data);
  // console.log("response2", response2.data);

  /* 
  response.data.forEach(data => data.id) 
  response2.data.forEach(data => data.id).thumbnailUrl 
  
  response.data 
  
  */
  // console.log(response.data);
  dispatch({ type: FETCH_POSTS, payload: response.data });
};
