import React from "react";
import $ from "jquery";
import { connect } from "react-redux";

class Output extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="rounded d-flex flex-md-row flex-column container "
          id="output"
        >
          <div>
            <img
              className="rounded m-3"
              src={this.props.data.Poster}
              title={this.props.data.Title}
              alt={this.props.data.Title}
            />
          </div>
          <div className="mt-3">
            <h1>
              {this.props.data.Title} {this.props.data.Year}
            </h1>
            <div className="d-flex flex-row">
              <p className="badge badge-pill badge-info m-1">
                {this.props.data.Rated}
              </p>
              <p className="badge badge-pill badge-info m-1">
                {this.props.data.Released}
              </p>
              <p className="badge badge-pill badge-info m-1">
                {this.props.data.Runtime}
              </p>
            </div>
            <div className="d-flex flex-row" id="rate"></div>
            <table className="" id="table">
              <tbody className="" id="table">
                <tr>
                  <th className="table-head">genre</th>
                  <td>{this.props.data.Genre}</td>
                </tr>
                <tr>
                  <th className="table-head">director</th>
                  <td>{this.props.data.Director}</td>
                </tr>
                <tr>
                  <th className="table-head">writer</th>
                  <td>{this.props.data.Writer}</td>
                </tr>
                <tr>
                  <th className="table-head">actors</th>
                  <td>{this.props.data.Actors}</td>
                </tr>
                <tr>
                  <th className="table-head">Language</th>
                  <td>{this.props.data.Language}</td>
                </tr>
                <tr>
                  <th className="table-head">Country</th>
                  <td>{this.props.data.Country}</td>
                </tr>
                <tr>
                  <th className="table-head">story</th>
                  <td>{this.props.data.Plot}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    const ratings = this.props.data.Ratings;
    const classes = "m-1 rate badge ";
    const elm = ratings.forEach((rate) =>
      $("#rate").append(() => {
        return `
          <p class="${classes} ${
          rate.Source === "Internet Movie Database" ? "imdb" : ""
        } ${rate.Source === "Rotten Tomatoes" ? "rotten-tomatoes" : ""} ${
          rate.Source === "Metacritic" ? "metacritic" : ""
        }" data-toggle="tooltip" data-placement="left" title="${
          rate.Source
        }" tabindex="0" >
          ${rate.Value}
          </p>
  `;
      })
    );
    return elm;
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Output);
