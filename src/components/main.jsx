import React from "react";
import { connect } from "react-redux";
import Input from "./input";
import Output from "./output";
import Loading from "./loading";
import NotFound from "./not found";
import Side from "./side";
import $ from "jquery";

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Side />
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
  componentDidMount() {
    this.props.mode === false
      ? $("body").removeClass("dark-mode") &&
        $("body").addClass("light-mode") &&
        $(".mode").addClass("text-dark") &&
        $(".mode").removeClass("text-light")
      : this.props.mode === true
      ? $("body").removeClass("light-mode") &&
        $("body").addClass("dark-mode") &&
        $(".mode").addClass("text-light") &&
        $(".mode").removeClass("text-dark")
      : null;
  }
  componentDidUpdate() {
    this.props.mode === false
      ? $("body").removeClass("dark-mode") &&
        $("body").addClass("light-mode") &&
        $(".mode").addClass("text-dark") &&
        $(".mode").removeClass("text-light")
      : this.props.mode === true
      ? $("body").removeClass("light-mode") &&
        $("body").addClass("dark-mode") &&
        $(".mode").addClass("text-light") &&
        $(".mode").removeClass("text-dark")
      : null;
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Main);
