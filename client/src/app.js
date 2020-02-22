import React, { Component } from "react";
// import GlobalStyle from "./components/public/global-style";
import ErrorBoundary from "./components/error-boundary";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        {/* <GlobalStyle /> */}
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </ErrorBoundary>
    );
  }
}

export default App;
