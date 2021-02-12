import React, { useState, createContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

import { ContextProvider } from "./contexts";
import Customers from "./components/customers/index.js";
import Navbar from "./components/navigation/navbar/index.js";
import Slogan from "./components/slogantwo/index.js";
import LoggedOutDashboard from "./pages/dashboards/logged-out-dashboard/index.js";
import About from "./pages/about/index.js";
import Games from "./pages/games/index.js";
import Homepage from "./pages/homepage/index.js";
import Login from "./pages/login/index.js";
import PdfPage from "./pages/pdf-page/index.js";
import Application from "./pages/application/index.js";
import Faq from "./pages/faq/index.js";
import Plans from "./pages/plans/index.js";
import Footer from "./components/footer/index.js";

import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1fc3cd",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

export const PlanContext = createContext();

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <div className="App">
            <Route exact path="/pdfpage" component={PdfPage} />
            <div className="rest">
              <Route path="/" component={Navbar} />
              <Route path="/" component={Slogan} />
              <Route path="/application" component={Application} />
              <Route exact path="/" component={Homepage} />
              <Route path="/about" component={About} />
              <Route path="/games" component={Games} />
              <Route path="/login" component={Login} />
              <Route path="/faq" component={Faq} />
              <Route path="/plans" component={Plans} />
              <Route path="/" component={Footer} />
            </div>
          </div>
        </ContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
