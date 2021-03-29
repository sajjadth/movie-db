import React from "react";
import { connect } from "react-redux";
import Input from "./input";
import Output from "./output";
import Loading from "./loading";
import NotFound from "./not found";

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Input />
        {this.props.loading === "loading" ? (
          <Loading />
        ) : this.props.data.Response === "False" ? (
          <NotFound />
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
