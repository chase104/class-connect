import React, { useState, useEffect, useContext } from 'react'
import Tab from '../../components/tab/index.js'
import PlanComparison from '../../components/plans/comparison/index.js'
import PackageDescription from '../../components/plans/package-description/index.js'
import trialWizard from '../../assets/images/wizard-trial.png'
import wizardOne from '../../assets/images/wizard-one.png'
import wizardTwo from '../../assets/images/wizard-two.png'
import goldKnight from '../../assets/images/gold-knight.png'
import trialImage from '../../assets/images/image-trial.png'
import basicImage from '../../assets/images/image-basic.png'
import basicPlusImage from '../../assets/images/image-basic+.png'
import fullImage from '../../assets/images/image-full.png'
import { FormContext } from "../../contexts";

const Plans = () => {

  const { plans } = useContext(FormContext);


  const [packageState, setPackageState] = useState(plans)
  useEffect(() => {
  }, [])
  return (
    <div style={{marginBottom: "10vh"}}>
      <Tab message="Class Packages"/>
      <PlanComparison benefits={[packageState[1].benefits, packageState[2].benefits, packageState[3].benefits]} types={[packageState[1].type, packageState[2].type, packageState[3].type]}/>
      {packageState.map((plan) => {
        return <PackageDescription type={plan.type} image={plan.image} benefits={plan.benefits} price={plan.price} description={plan.description} />
       })}
    </div>
  )
}

export default Plans
