import React from "react";
import Input from "./input";
import Output from "./output";
import { connect } from "react-redux";

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Input />
        {this.props.data.Error === "Movie not found!" ? (
          <h1 className="text-center">Movie not found!</h1>
        ) : this.props.data.Error === "Series not found!" ? (
          <h1 className="text-center">Series not found!</h1>
        ) : this.props.loading === "done" ? (
          <Output />
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Main);
