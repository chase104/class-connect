import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./styles.css";
import Tab from "../../components/tab/index.js";
import { FormControl, Input, InputLabel, FilledInput } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    marginBottom: "5vh",
  },
  loginContainer: {
    backgroundColor: "#1FC3CD !important",
    borderRadius: "15px",
    marginTop: "5vh",
    minHeight: "20vh",
    boxShadow: "4px 4px 16px darkgrey",
    maxWidth: "50vw",
  },
  form: {
    padding: "20px 0px !important",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    width: "50%",
  },
  button: {
    marginTop: "12px",
  },
}));
const Login = () => {
  const classes = useStyles();

  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.pageContainer}>
      <Tab message="Login" />
      <Container maxWidth="sm" className={classes.loginContainer}>
        <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
          <TextField
            label="Email"
            color="secondary"
            variant="outlined"
            className={classes.textField}
          />
          <TextField
            label="Password"
            color="secondary"
            variant="outlined"
            className={classes.textField}
            style={{ marginTop: "8px" }}
          />
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            className={classes.button}
          >
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
