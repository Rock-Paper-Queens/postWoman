/*

reply

Post 

reply button onClick => action createReply(parentId, formValues)

---- onlcik  useRef(parent)
// 방법 1 ref = Ref 로 parent 가 누군지 id access  
// 방법 2 <Reply key, parentId, reply/> props
commenent// 
onReply(
  function(post.id)
) 

reply//
onClick = {onReply}
const [parentId, setParentId] = useState(0)
setParentId(post.id)

postReply(post.id)
// posts 에서 해당 id 값을 갖고 있는 post 를 찾아서 post.replies 에다가 넣어준다. 

// FIXME
postReply(id, formValues) {
  fetchPost(id) => comment
  const data = {...comment}
  data.comment.reply.push(formValues)
  posts.patch('/posts/id', data)

  오전 3시간 공부 - 1시에 만난다 4시까지 - 공부 4시간 한다 - 8시에 만나서 11시까지 한다 

  export const editStream = (id, formValues) => async (dispatch) => {
	const response = await streams.patch(`/streams/${id}`, formValues);
	dispatch({ type: EDIT_STREAM, payload: response.data });
	history.push('/');
};
}


createReply(parentId, formValues)
  

export const fetchPost = (id) => async (dispatch) => {
  const response = await posts.get(`/posts/${id}`);
  dispatch({
    type: FETCH_POST,
    payload: response.data,
  });
};

website/edit 

state post : {}  
useEffect(() => {
  fetchPost(param.id)
}, [])

{
  "userName": "test1",
  "content": "asld asdlkjga skjhkas ha jung asl",
  "id": 1,
  "img-url": "http://alsdkfjalkdsjfl.com",
  "likes": 34,

export const fetchPosts = () => async (dispatch) => {
  const response = await posts.get("/posts");
  dispatch({ type: FETCH_POSTS, payload: response.data });
};
/username content img-url    /// id likes  
  likes reply 
  isOpen: false 
  
  #1: 

  user 가 reply button 을 누를때 onClick -> isOpen = !isOpen 

  
}, [isOpen]) 
*/
