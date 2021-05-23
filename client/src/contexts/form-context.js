import React, { createContext, useState } from "react";
import _ from "lodash";

import trialImage from "../assets/images/image-trial.png";
import basicImage from "../assets/images/image-basic.png";
import basicPlusImage from "../assets/images/image-basic+.png";
import fullImage from "../assets/images/image-full.png";

export const FormContext = createContext(null);

export function FormProvider({ children }) {
  const [applicationStatus, setStatus] = useState(false)
  const [studentState, setStudentState] = useState([
    [
      {
        type: "title",
        label: "Student Info",
      },
      {
        type: "input",
        key: "firstname",
        location: "101",
        label: "First name",
        answer: null,
      },
      {
        type: "input",
        key: "lastname",
        location: "102",
        label: "Last name",
        answer: null,
      },
      {
        type: "input",
        key: "city",
        location: "103",
        label: "City of residence",
        answer: null,
      },
      {
        type: "select",
        key: "country",
        location: "104",
        label: "Country of residence",
        answer: null,
      },
      {
        type: "select",
        key: "nationality",
        location: "105",
        label: "Nationality",
        answer: null,
      },
    ],
    [
      {
        type: "title",
        label: "Student Info Cont.",
      },
      {
        type: "input",
        key: "age",
        location: "111",
        label: "Age",
        answer: null,
      },
      {
        type: "input",
        key: "grade",
        location: "112",
        label: "Current School Year",
        answer: null,
      },
      {
        type: "input",
        key: "years studied",
        location: "113",
        label: "Years Studying English",
        answer: null,
      },
      {
        type: "select",
        key: "level",
        location: "114",
        label: "English Skill Level",
        answer: null,
      },
    ],
  ]);
  const [planState, setPlanState] = useState([
    [
      {
        type: "title",
        label: "Select Plan",
      },
      {
        type: "select",
        key: "plan",
        location: "201",
        label: "Your Plan",
        answer: null,
      },
      {
        type: "calendar",
        key: "start date",
        location: "202",
        label: "Desired Start Date",
        answer: null,
      },
    ],
  ]);
  const [plans, setPlans] = useState([
    {
      type: "New Recruit",
      image: trialImage,
      benefits: [
        "One set of classes (3)",
        "Educational Assitance Team",
        "Lesson material access",
        "Games access",
      ],
      price: 25,
      description:
        "The Trial package is meant to give you a chance to make sure LearningLab is the right fit for you! You'll be able to access three (3) classes along with the lesson materials for those lessons. In addition to this, you'll have access to the games page while the trial is active.",
    },
    {
      type: "Archer",
      image: basicImage,
      benefits: ["One unit of classes (65)", "Educational Assitance Team"],
      price: 390,
      description:
        "The Basic Package offers you our basic services for a reduced price. You'll have access to the classes of the course, as well as the help of our Educational Assistance Team.",
    },
    {
      type: "Knight",
      image: basicPlusImage,
      benefits: [
        "One unit of classes (65)",
        "Educational Assitance Team",
        "Lesson material access",
        "Progress reports",
      ],
      price: 495,
      description:
        "The Basic+ package adds an important addition to your child's education. You'll get access to the lesson materials, meaning your child will be able to both prepare for classes as well as review after class. In addition to this, you'll receive detailed progress reports showing you how your child is doing.",
    },
    {
      type: "Wizard",
      image: fullImage,
      benefits: [
        "One unit of classes (65)",
        "Educational Assitance Team",
        "Lesson material access",
        "Progress reports",
        "Games access",
        "Extra review classes (6)",
        "Two (2) progress report videocalls",
      ],
      price: 695,
      description:
        "This Full-Access package give you absolutely everything you need for the complete LearningLab experience, in addition to all our other services, you also get access to our exciting host of games related to class-material. This helps greatly to reinforce concepts and terms from class. You'll also have an additional 6 classes added to the course that serve to solidify everything learned. Lastly, you will also be able to schedule two (2) videocalls with a member of our Educational Assistance Team, in which you'll have a conversation about your child's progress.",
    },
  ]);


  return (
    <FormContext.Provider
      value={{
        studentState,
        setStudentState,
        planState,
        setPlanState,
        plans,
        setPlans,
        applicationStatus,
        setStatus
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
