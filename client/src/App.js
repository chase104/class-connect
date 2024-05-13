import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

import { ContextProvider } from "./contexts";
import Navbar from "./components/navigation/navbar/index.js";
import Slogan from "./components/slogantwo/index.js";
import Footer from "./components/footer/index.js";

import routes from "./routes.js"; // Assume routes are defined here

import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#80b3b1" },
    secondary: { main: "#ffffff" },
    black: { main: "#000000" },
  },
});

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <div className="App">
            <Route path="/" component={Navbar} />
            <Route path="/" component={Slogan} />
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
            <Route path="/" component={Footer} />
          </div>
        </ContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
