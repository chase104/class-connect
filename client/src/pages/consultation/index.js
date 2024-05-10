import React, { useState, useEffect, useContext } from "react";
import "./styles.css";
import Tab from "../../components/tab";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
// import DateAdapter from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { ModalContext } from "../../contexts";

import {
  FormControl,
  Input,
  InputLabel,
  FilledInput,
  TextField,
  Button,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    marginBottom: "5vh",
  },
  title: {
    paddingTop: "20px",
  },
  formContainer: {
    borderRadius: "15px",
    marginTop: "5vh",
    minHeight: "20vh",
    boxShadow: "4px 4px 16px darkgrey",
    maxWidth: "50vw",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "84vw",
      padding: "8px",
    },
  },
  button: {
    marginTop: "12px",
    alignSelf: "flex-end",
  },
}));

const Consultation = () => {
  const classes = useStyles();
  const [date, setDate] = useState(new Date());
  const [formState, setFormState] = useState({
    email: "",
    emailTwo: "",
    message: "",
    date: new Date(),
  });

  const { setModal } = useContext(ModalContext);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };
  useEffect(() => {
    console.log(formState);
  }, [formState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    axios({
      url: "/consultation-request",
      method: "POST",
      data: {
        ...formState,
      },
    }).then((res) => {
      console.log("Consultation Response: ", res);
      setModal(true);
      setFormState({
        email: "",
        emailTwo: "",
        message: "",
        date: new Date(),
      });
    });
  };

  return (
    <div className={classes.pageContainer}>
      <Tab message="Consultations" />
      <Container
        maxWidth="sm"
        className={`color-secondary  ${classes.formContainer}`}
      >
        <h3 className={classes.title}>Consulation Request</h3>
        <form onSubmit={(e) => handleSubmit(e)} className="consultation-form">
          <TextField
            label="Email"
            id="email"
            value={formState.email}
            variant="outlined"
            onChange={(e) => handleChange(e)}
            className="text-field no-decoration"
          />
          <TextField
            label="Confirm Email"
            id="emailTwo"
            value={formState.emailTwo}
            variant="outlined"
            onChange={(e) => handleChange(e)}
            className="text-field"
          />
          {/* <LocalizationProvider dateAdapter={DateAdapter}>
                    <DesktopDatePicker
                        label="Date desktop"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider> */}

          <TextField
            label="Message (optional)"
            id="message"
            value={formState.message}
            variant="outlined"
            multiline={true}
            rows={4}
            onChange={(e) => handleChange(e)}
            className="text-field"
            style={{ marginTop: "8px" }}
          />
          <label
            style={{ marginTop: "12px", color: "rgba(0, 0, 0, 0.57)" }}
            for="date"
          >
            Prefered Consultation Date
          </label>
          <TextField
            id="date"
            type="date"
            defaultValue={formState.date}
            style={{ marginTop: "8px", marginBottom: "8px" }}
            onChange={(e) => handleChange(e)}
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            type="submit"
            color="primary"
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

export default Consultation;
