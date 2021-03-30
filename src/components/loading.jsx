import React from "react";

class Loading extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="load">
          <div className="mode">G</div>
          <div className="mode">N</div>
          <div className="mode">I</div>
          <div className="mode">D</div>
          <div className="mode">A</div>
          <div className="mode">O</div>
          <div className="mode">L</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Loading;
