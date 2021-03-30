import React from "react";
import { connect } from "react-redux";

const gifs = [
  "https://cdn.betterttv.net/emote/5b490e73cf46791f8491f6f4/3x",
  "https://cdn.betterttv.net/emote/5c3427a55752683d16e409d1/3x",
  "https://cdn.betterttv.net/emote/5e37903f61ff6b51e652837c/3x",
  "https://cdn.betterttv.net/emote/5a9cefea32b4e770a9571d1a/3x",
];
const randomNumber = (min, max) => {
  return gifs[Math.floor(Math.random() * (max - min) + min)];
};

class NotFound extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="d-flex flex-column w-100 align-items-center justify-content-center">
          <img
            src={
              this.props.data.Error === "Incorrect IMDb ID."
                ? gifs[2]
                : randomNumber(0, gifs.length)
            }
            id="not-found-img"
          />
          {this.props.data.Error === "Movie not found!" ? (
            <h1 className="text-center mode">Movie not found!</h1>
          ) : this.props.data.Error === "Series not found!" ? (
            <h1 className="text-center mode">Series not found!</h1>
          ) : this.props.data.Error === "Incorrect IMDb ID." ? (
            <h1 className="text-center mode">write something</h1>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(NotFound);
