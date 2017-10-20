import React from "react";
import { render } from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Map from "./Map.jsx";
import AppBar from "../components/TitleBar.jsx";
import Articles from "./ArticlesList.jsx";


const App = () => (
  <MuiThemeProvider>
      <AppBar />
      <div style={{ marginBottom: "15px" }}>
        <Map />
      </div>
      <Articles />
  </MuiThemeProvider>
);

export default App;
