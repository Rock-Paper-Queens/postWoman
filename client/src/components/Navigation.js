import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { setSelected } from "../actions/settings";
import { connect } from "react-redux";

import Modal from "./Modal";

export const NAV_SELECTIONS = {
  comments: "comments",
  search: "search",
};

const Navigation = ({ currentPath, setSelected }) => {
  //const [selected, setSelected] = useState(NAV_SELECTIONS.comments);
  const [toggleModal, setToggleModal] = useState(false);

  useEffect(() => {
    setSelected(NAV_SELECTIONS.comments);
  }, []);

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
          currentPath === NAV_SELECTIONS.comments ? "active" : ""
        }`}
        onClick={() => setSelected(NAV_SELECTIONS.comments)}
      >
        Comment
      </Link>
      <Link
        to="/search"
        className={`item ${
          currentPath === NAV_SELECTIONS.search ? "active" : ""
        }`}
        onClick={() => setSelected(NAV_SELECTIONS.search)}
      >
        Search
      </Link>

      <div className="right menu">
        <div className="ui item" onClick={showModal}>
          Settings
        </div>
      </div>

      <Modal show={toggleModal} handleClose={hideModal} />
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    currentPath: state.settings.currentPath,
  };
};

export default connect(mapStateToProps, { setSelected })(Navigation);

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

// app

// header -> navigation (state) useContext(setState)
// commnet                              | |
// searchComment ()                saerchComment (prop.setState ) useEffect (())
// p
