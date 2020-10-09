// ANCHOR : import lodash
import { filter, includes } from "lodash/collection";

const data = [
  {
    userName: "test1",
    content: "asld asdlkjga skjhkas ha jung asl",
    id: 1,
    "img-url": "http://alsdkfjalkdsjfl.com",
    likes: 34,
    reply: [
      {
        userName: "paul",
        content: "donjoe",
        id: 2,
        likes: 34,
      },
      {
        userName: "hailey",
        content: "Redux is horrible!",
        id: 2,
        likes: 34,
      },
    ],
  },
];
const t = _.filter(data, (el) => _.includes(el.content, "ha jung"));
console.log(t);

console.log(filter);
console.log(includes);
