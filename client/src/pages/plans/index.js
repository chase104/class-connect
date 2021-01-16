import React, { useState } from 'react'
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

const Plans = () => {

  const [packageState, setPackageState] = useState([
    {type: "New Recruit",
      image: trialImage,
      benefits: ["One set of classes (3)", "Educational Assitance Team", "Lesson material access", "Games access"],
      price: 25,
      description: "The Trial package is meant to give you a chance to make sure LearningLab is the right fit for you! You'll be able to access three (3) classes along with the lesson materials for those lessons. In addition to this, you'll have access to the games page while the trial is active."},
    {type: "Archer",
      image: basicImage,
      benefits: ["One unit of classes (65)", "Educational Assitance Team"],
      price: 390,
      description: "The Basic Package offers you our basic services for a reduced price. You'll have access to the classes of the course, as well as the help of our Educational Assistance Team."},
    {type: "Knight",
      image: basicPlusImage,
      benefits: ["One unit of classes (65)", "Educational Assitance Team", "Lesson material access", "Progress reports"],
      price: 495,
      description: "The Basic+ package adds an important addition to your child's education. You'll get access to the lesson materials, meaning your child will be able to both prepare for classes as well as review after class. In addition to this, you'll receive detailed progress reports showing you how your child is doing."},
    {type: "Wizard",
      image: fullImage,
      benefits: ["One unit of classes (65)", "Educational Assitance Team", "Lesson material access", "Progress reports", "Games access", "Extra review classes (6)", "Two (2) progress report videocalls"],
      price: 695,
      description: "The Full-Access package give you absolutely everything you need for the complete LearningLab experience, in addition to all our other services, you also get access to our exciting host of games related to class-material. This helps greatly to reinforce concepts and terms from class. You'll also have an additional 6 classes added to the course that serve to solidify everything learned. Lastly, you will also be able to schedule two (2) videocalls with a member of our Educational Assistance Team, in which you'll have a conversation about your child's progress."},
  ])

  return (
    <div>
      <Tab message="Class Packages"/>
      <PlanComparison benefits={[packageState[1].benefits, packageState[2].benefits, packageState[3].benefits]} types={[packageState[1].type, packageState[2].type, packageState[3].type]}/>
      {packageState.map((plan) => {
        return <PackageDescription type={plan.type} image={plan.image} benefits={plan.benefits} price={plan.price} description={plan.description} />
       })}
    </div>
  )
}

export default Plans
