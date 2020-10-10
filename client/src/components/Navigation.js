import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Navigation = () => {
  const [selected, setSelected] = useState("Comments");
  const [toggleModal, setToggleModal] = useState(false);

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

  const showModal = () => {
    setToggleModal(true);
  };

  const hideModal = () => {
    setToggleModal(false);
  };

  return (
    <div className="ui secondary pointing menu">
      <Link
        to="/"
        className={`item ${commentActive()}`}
        onClick={(e) => onSelection(e)}
      >
        Comments
      </Link>
      <Link
        to="/search"
        className={`item ${searchActive()}`}
        onClick={(e) => onSelection(e)}
      >
        Search
      </Link>

      <div className="right menu">
        <a className="ui item" onClick={showModal}>
          Settings
        </a>
      </div>

      <Modal show={toggleModal} handleClose={hideModal} />
    </div>
  );
};

export default Navigation;

// const container = document.createElement("div");
// document.body.appendChild(container);
// ReactDOM.render(<Dashboard />, container);
// export default Navigation;

// render() {
//     return (
//       <Modal
//         title="Delete Stream"
//         content={this.renderContent()}
//         actions={this.renderActions()}
//         onDismiss={() => history.push("/")}
//       />
//     );
//   }

/*
state = selected 

onClick={handleSelection}

useEffect((prev) => {
  
})

const selections = ['Comments', 'Search']

1. when user clicks navigation the event.target
2. 
*/
