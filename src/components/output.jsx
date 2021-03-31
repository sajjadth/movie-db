import React from "react";
import $ from "jquery";
import { connect } from "react-redux";

class Output extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="d-flex flex-md-row flex-column container" id="output">
          <div id="img" className="m-2 text-center">
            <img
              className="rounded"
              src={this.props.data.Poster}
              title={this.props.data.Title}
              alt={this.props.data.Title}
            />
          </div>
          <div className="m-2">
            <h1 className="mode">
              {this.props.data.Title} {this.props.data.Year}
            </h1>
            <div className="d-flex flex-md-row flex-column">
              <div className="d-flex flex-row" id="details">
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
            </div>
            <table className="" id="table">
              <tbody className="" id="table">
                <tr id="genre">
                  <th className="table-head mode">genre</th>
                  <td className="mode">{this.props.data.Genre}</td>
                </tr>
                {this.props.data.Director === "N/A" ? null : (
                  <tr id="director">
                    <th className="table-head mode">director</th>
                    <td className="mode">{this.props.data.Director}</td>
                  </tr>
                )}
                <tr id="writer">
                  <th className="table-head mode">writer</th>
                  <td className="mode">{this.props.data.Writer}</td>
                </tr>
                <tr id="actors">
                  <th className="table-head mode">actors</th>
                  <td className="mode">{this.props.data.Actors}</td>
                </tr>
                <tr id="language">
                  <th className="table-head mode">Language</th>
                  <td className="mode">{this.props.data.Language}</td>
                </tr>
                <tr id="country">
                  <th className="table-head mode">Country</th>
                  <td className="mode">{this.props.data.Country}</td>
                </tr>
                <tr id="story">
                  <th className="table-head mode">story</th>
                  <td className="mode">{this.props.data.Plot}</td>
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
          rate.Source === "Internet Movie Database" ? "imdb text-dark" : ""
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
