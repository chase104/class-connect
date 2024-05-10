import React, { useContext, useState } from "react";
import "./styles.css";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CheckCircleOutline as CheckCircle } from "@material-ui/icons/";
import { Link } from "react-router-dom";
import { FormContext } from "../../../contexts";

const useStyles = makeStyles((theme) => ({
  comparisonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5vh",
    borderRadius: "20px",
  },
  comparisonBlock: {
    border: "1px solid black",
  },
  packageTitle: {
    fontWeight: "bold",
    fontSize: "18px",
    marginTop: "12px",
  },
  packageBlock: {
    backgroundColor: "white",
  },
  packageBlockTwo: {
    backgroundColor: "#e6e6e6",
  },
  benefitItem: {
    display: "flex",
    marginLeft: "5%",
  },
  CheckCircle: {
    color: "#01AA31",
  },
}));

const PlanComparison = ({ props, homepage }) => {
  const classes = useStyles();
  const { plans } = useContext(FormContext);

  const [pointer, setPointer] = useState(false);

  let benefits = plans.map((plan) => plan.benefits);
  let types = plans.map((plan) => plan.type);

  return (
    <Grid
      container
      className={`${classes.comparisonContainer} ${
        homepage ? "pointer" : null
      }`}
      onClick={() => {
        if (homepage == true) {
          window.scrollTo(0, 0);
          props.history.push("/plans");
        }
      }}
      onMouseEnter={() => setPointer(true)}
      onMouseLeave={() => setPointer(false)}
    >
      <Grid item xs={11} sm={10} md={10} className={classes.comparisonBlock}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={4}
            className={`${classes.packageBlock} archer-block`}
          >
            <div className={classes.packageTitle}>{types[0] + " Package"}</div>
            <div style={{ marginTop: "12px", marginBottom: "24px" }}>
              {benefits[0].map((benefit) => {
                return (
                  <div className={classes.benefitItem}>
                    <div>
                      <CheckCircle className={classes.CheckCircle} />
                    </div>
                    <div style={{ textAlign: "left" }}>{benefit}</div>
                  </div>
                );
              })}
            </div>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.packageBlockTwo}>
            <div className={classes.packageTitle}>{types[1] + " Package"}</div>
            <div style={{ marginTop: "12px", marginBottom: "24px" }}>
              {benefits[1].map((benefit) => {
                return (
                  <div className={classes.benefitItem}>
                    <div>
                      <CheckCircle className={classes.CheckCircle} />
                    </div>
                    <div style={{ textAlign: "left" }}>{benefit}</div>
                  </div>
                );
              })}
            </div>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.packageBlock}>
            <div className={classes.packageTitle}>{types[2] + " Package"}</div>
            <div style={{ marginTop: "12px", marginBottom: "24px" }}>
              {benefits[2].map((benefit) => {
                return (
                  <div className={classes.benefitItem}>
                    <div style={{ marginRight: "4px" }}>
                      <CheckCircle className={classes.CheckCircle} />
                    </div>
                    <div style={{ textAlign: "left" }}>{benefit}</div>
                  </div>
                );
              })}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PlanComparison;
