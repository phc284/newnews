import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Map from "./containers/Map.jsx";
import AppBar from "./components/TitleBar.jsx";
import Articles from "./containers/ArticlesList.jsx";

//redux
import { Provider } from "react-redux";
// import store from "./store";

const App = () => (
  <MuiThemeProvider>
      <AppBar />
      <div style={{ marginBottom: "15px" }}>
        <Map />
      </div>
      <Articles />
  </MuiThemeProvider>
);

render(<App />, document.getElementById("app"));
