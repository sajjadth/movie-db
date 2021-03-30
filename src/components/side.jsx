import React from "react";
import { connect } from "react-redux";
import { store, selectMode } from "../reducer";

class Side extends React.Component {
  handleClasses() {
    var classes = "btn d-flex align-items-center justify-content-center m-1 ";
    return this.props.mode === false
      ? (classes += "btn-light")
      : this.props.mode === true
      ? (classes += "btn-dark")
      : null;
  }
  render() {
    return (
      <React.Fragment>
        <div className="d-flex flex-row" id="side">
          {this.props.mode === false ? (
            <button
              className="btn btn-light d-flex align-items-center justify-content-center m-1"
              id="side-mode-btn"
              onClick={() => store.dispatch(selectMode())}
            >
              <i className="bi bi-brightness-high-fill mode"></i>
            </button>
          ) : this.props.mode === true ? (
            <button
              className="btn btn-dark d-flex align-items-center justify-content-center m-1"
              id="side-mode-btn"
              onClick={() => store.dispatch(selectMode())}
            >
              <i className="bi bi-moon-fill mode"></i>
            </button>
          ) : null}
          <button className={this.handleClasses()} id="side-mode-btn">
            <i class="bi bi-envelope-fill"></i>
          </button>
          <button className={this.handleClasses()} id="side-mode-btn">
            <i class="bi bi-github"></i>
          </button>
          <button className={this.handleClasses()} id="side-mode-btn">
            <i class="bi bi-twitter"></i>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Side);
