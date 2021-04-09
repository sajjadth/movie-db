import React from "react";
import Main from "./components/main";
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
