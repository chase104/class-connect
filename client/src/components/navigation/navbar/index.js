import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Toolbar, AppBar, Typography, Grid } from "@material-ui/core";
import "./styles.css";
import SignedInLinks from "../signed-in-links/index";
import SignedOutLinks from "../signed-out-links/index";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { ModalContext } from "../../../contexts";
import ModalBody from "../../modal/ModalBody";

const useStyles = makeStyles((theme) => ({
  appTitle: {
    fontFamily: "'Audiowide', cursive !important",
    color: "white",
    margin: "12px 0px",
    fontSize: "3vw",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
  titleGridDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Navbar = (props) => {
  const { modal, setModal } = useContext(ModalContext);
  console.log(modal);

  const [display, setDislay] = useState(null);

  useEffect(() => {
    if (props.location.pathname != "/pdfpage" && display != "flex") {
      setDislay(true);
    } else {
      setDislay(false);
    }
  }, [props.location.pathname]);
  const classes = useStyles();
  let appbarClass = display ? "flex-display" : "null-display";
  return (
    <AppBar
      className={appbarClass + " color-primary"}
      position="static"
      id="navbar-container"
      style={{
        display: props.location.pathname == "/pdfpage" ? "null" : "flex",
      }}
    >
      <Toolbar className="header-holder">
        <Grid container style={{ minHeight: "inherit" }}>
          <Grid item xs={12} sm={7} md={7} className={classes.titleGridDiv}>
            <Link to="/" className="no-decoration">
              <Typography variant="h3" className={classes.appTitle}>
                Adventurer's College
              </Typography>
            </Link>
          </Grid>
          <Grid item sx={12} sm={5} md={5} className="navbar-icons">
            <SignedOutLinks />
          </Grid>
        </Grid>
        <Modal
          open={modal}
          onClose={() => setModal(false)}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          disableScrollLock={true}
        >
          <ModalBody />
        </Modal>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
