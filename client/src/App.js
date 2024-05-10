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
import Pdf from "./pages/pdf-practice/index.js";
import Application from "./pages/application/index.js";
import Consultation from "./pages/consultation";
import AdminDashboard from "./pages/dashboards/admin-dashboard/index.js";
import SuperDashboard from "./pages/dashboards/super-admin-dashboard/index.js";
import Faq from "./pages/faq/index.js";
import Plans from "./pages/plans/index.js";
import Footer from "./components/footer/index.js";

import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#80b3b1",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

export const PlanContext = createContext();

export default function App() {
  const toggleApplication = (option, result, email) => {
    console.log(email);
    if (option) {
      setAppState({
        ...appState,
        applicationSuccessModal: true,
        applicationResult: result,
        email: email,
      });
    } else {
      setAppState({
        ...appState,
        applicationSuccessModal: false,
        applicationResult: result,
      });
    }
  };

  const setEmail = (email) => {
    setAppState({
      ...appState,
    });
    console.log("setting email :", email);
  };

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
              <Route path="/consultation" component={Consultation} />
              <Route path="/games" component={Games} />
              <Route path="/login" component={Login} />
              <Route path="/faq" component={Faq} />
              <Route path="/plans" component={Plans} />
              <Route path="/pdf" component={Pdf} />
              <Route path="/admin-dash" component={AdminDashboard} />
              <Route path="/super-dash" component={SuperDashboard} />
              <Route path="/" component={Footer} />
            </div>
          </div>
        </ContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
