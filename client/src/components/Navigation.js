import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const NAV_SELECTIONS = {
  comments: "comments",
  search: "search",
};

const Navigation = () => {
  const [selected, setSelected] = useState(NAV_SELECTIONS.comments);
  const [toggleModal, setToggleModal] = useState(false);

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
        className={`item ${
          selected === NAV_SELECTIONS.comments ? "active" : ""
        }`}
        onClick={() => setSelected(NAV_SELECTIONS.comments)}
      >
        Comments
      </Link>
      <Link
        to="/search"
        className={`item ${selected === NAV_SELECTIONS.search ? "active" : ""}`}
        onClick={() => setSelected(NAV_SELECTIONS.search)}
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
