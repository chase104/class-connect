import React, { useState, useEffect, useContext } from "react";
import "./styles.css";
import Tab from "../../components/tab/index.js";
import PlanComparison from "../../components/plans/comparison/index.js";
import PackageDescription from "../../components/plans/package-description/index.js";
import trialWizard from "../../assets/images/wizard-trial.png";
import wizardOne from "../../assets/images/wizard-one.png";
import wizardTwo from "../../assets/images/wizard-two.png";
import goldKnight from "../../assets/images/gold-knight.png";
import trialImage from "../../assets/images/image-trial.png";
import basicImage from "../../assets/images/image-basic.png";
import basicPlusImage from "../../assets/images/image-basic+.png";
import fullImage from "../../assets/images/image-full.png";
import { FormContext } from "../../contexts";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";

const Plans = () => {
  const { plans } = useContext(FormContext);

  return (
    <div style={{ marginBottom: "10vh" }}>
      <Tab message="Class Packages" />
      <PlanComparison
        benefits={[plans[1].benefits, plans[2].benefits, plans[3].benefits]}
        types={[plans[1].type, plans[2].type, plans[3].type]}
      />
      {plans.map((plan) => {
        return (
          <PackageDescription
            type={plan.type}
            image={plan.image}
            benefits={plan.benefits}
            price={plan.price}
            description={plan.description}
          />
        );
      })}
      <Link to="/application" className="apply-button">
        <Button>Apply today!</Button>
      </Link>
    </div>
  );
};

export default Plans;
