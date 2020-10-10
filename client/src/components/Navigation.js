import React, { useState } from "react";

const Navigation = () => {
  const [selected, setSelected] = useState("Comments");

  const onSelection = (e) => {
    setSelected(e.target.textContent);
  };

  // QUESTION : 더 효과적인 방법은 없는 것인가......!!!!!!!
  const commentActive = () => {
    return selected === "Comments" ? "active" : "";
  };

  const searchActive = () => {
    return selected === "Search" ? "active" : "";
  };

  return (
    <div className="ui secondary pointing menu">
      <a className={`item ${commentActive()}`} onClick={(e) => onSelection(e)}>
        Comments
      </a>
      <a className={`item ${searchActive()}`} onClick={(e) => onSelection(e)}>
        Search
      </a>
    </div>
  );
};

export default Navigation;

/*
state = selected 

onClick={handleSelection}

useEffect((prev) => {
  
})

const selections = ['Comments', 'Search']

1. when user clicks navigation the event.target
2. 
*/
