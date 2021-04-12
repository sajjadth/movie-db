import React from "react";
import $ from "jquery";
import { connect } from "react-redux";
import tipply, { animateFill } from "tippy.js";

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
              <div className="d-flex flex-row details">
                {this.props.data.Rated === "N/A" ? null : (
                  <p className="badge badge-pill badge-info m-1" id="rated">
                    <i className="bi bi-exclamation-diamond mr-1"></i>
                    {this.props.data.Rated}
                  </p>
                )}
                {this.props.data.Released === "N/A" ? null : (
                  <p className="badge badge-pill badge-info m-1" id="released">
                    <i className="bi bi-calendar4 mr-1"></i>
                    {this.props.data.Released}
                  </p>
                )}
                {this.props.data.Runtime === "N/A" ? null : (
                  <p className="badge badge-pill badge-info m-1" id="runtime">
                    <i className="bi bi-clock mr-1"></i>
                    {this.props.data.Runtime}
                  </p>
                )}
              </div>
              <div className="d-flex flex-row details" id="rate"></div>
            </div>
            <table className="" id="table">
              <tbody className="" id="table">
                {this.props.data.Genre === "N/A" ? null : (
                  <tr id="genre">
                    <th className="table-head mode">
                      {/* <i className="bi bi-film cat-logo"></i> */}
                      genre
                    </th>
                    <td className="mode">{this.props.data.Genre}</td>
                  </tr>
                )}
                {this.props.data.Director === "N/A" ? null : (
                  <tr id="director">
                    <th className="table-head mode">
                      {/* <i className="bi bi-camera-reels cat-logo"></i> */}
                      director
                    </th>
                    <td className="mode">{this.props.data.Director}</td>
                  </tr>
                )}
                {this.props.data.Writer === "N/A" ? null : (
                  <tr id="writer">
                    <th className="table-head mode">
                      {/* <i className="bi bi-pen cat-logo"></i> */}
                      writer
                    </th>
                    <td className="mode">{this.props.data.Writer}</td>
                  </tr>
                )}
                {this.props.data.Actors === "N/A" ? null : (
                  <tr id="actors">
                    <th className="table-head mode">
                      {/* <i className="bi bi-person-fill cat-logo"></i> */}
                      actors
                    </th>
                    <td className="mode">{this.props.data.Actors}</td>
                  </tr>
                )}
                {this.props.data.Awards === "N/A" ? null : (
                  <tr>
                    <th className="table-head mode">
                      {/* <i className="bi bi-award cat-logo"></i> */}
                      Awards
                    </th>
                    <td className="mode">{this.props.data.Awards}</td>
                  </tr>
                )}
                {this.props.data.BoxOffice === undefined || "N/A" ? null : (
                  <tr id="boxbffice">
                    <th className="table-head mode">
                      {/* <i className="bi bi-cash cat-logo"></i> */}
                      BoxOffice
                    </th>
                    <td className="mode">{this.props.data.BoxOffice}</td>
                  </tr>
                )}
                {this.props.data.Language === "N/A" ? null : (
                  <tr id="language">
                    <th className="table-head mode">
                      {/* <i className="bi bi-soundwave cat-logo"></i> */}
                      Language
                    </th>
                    <td className="mode">{this.props.data.Language}</td>
                  </tr>
                )}
                {this.props.data.Country === "N/A" ? null : (
                  <tr id="country">
                    <th className="table-head mode">
                      {/* <i className="bi bi-map cat-logo"></i> */}
                      Country
                    </th>
                    <td className="mode">{this.props.data.Country}</td>
                  </tr>
                )}
                {this.props.data.Plot === "N/A" ? null : (
                  <tr id="story">
                    <th className="table-head mode">
                      {/* <i className="bi bi-journal-text cat-logo"></i> */}
                      story
                    </th>
                    <td className="mode">{this.props.data.Plot}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    const ratings = this.props.data.Ratings;
    const classes = "m-1 rate badge badge-pill ";
    const elm = ratings.forEach((rate) =>
      $("#rate").append(() => {
        return `
            <p class="${classes} ${
          rate.Source === "Internet Movie Database" ? "imdb text-dark" : ""
        } ${rate.Source === "Rotten Tomatoes" ? "rotten-tomatoes" : ""} ${
          rate.Source === "Metacritic" ? "metacritic" : ""
        }" id="${
          rate.Source === "Internet Movie Database"
            ? "imdb"
            : rate.Source === "Rotten Tomatoes"
            ? "rotten-tomatoes"
            : rate.Source === "Metacritic"
            ? "metacritic"
            : null
        }" >
            ${rate.Value}
            </p>
    `;
      })
    );
    return (
      elm,
      tipply("#imdb", {
        content: "IMDb",
        arrow: false,
        animateFill: true,
        plugins: [animateFill],
      }),
      tipply("#metacritic", {
        content: "Metacritic",
        arrow: false,
        animateFill: true,
        plugins: [animateFill],
      }),
      tipply("#rotten-tomatoes", {
        content: "Rotten Tomatoes",
        arrow: false,
        animateFill: true,
        plugins: [animateFill],
      })
      // tipply("#rated", {
      //   content: "PG",
      //   animation: "scale",
      // }),
      // tipply("#released", {
      //   content: "Released",
      //   animation: "scale",
      // }),
      // tipply("#awards", {
      //   content: "Awards",
      //   animation: "scale",
      // }),
      // tipply("#runtime", {
      //   content: "Runtime",
      //   animation: "scale",
      // })
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Output);
