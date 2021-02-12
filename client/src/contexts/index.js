import React, { createContext, useState } from "react";
import _ from "lodash";

export const Context = createContext(null);

export function ContextProvider({ children }) {
  const [appLocation, setAppLocation] = useState([0, 0]);
  const [youState, setYouState] = useState([
    [
      {
        type: "title",
        label: "Parent / Guardian Info",
      },
      {
        type: "input",
        key: "firstname",
        location: "001",
        label: "First name",
        answer: null,
      },
      {
        type: "input",
        key: "lastname",
        location: "002",
        label: "Last name",
        answer: null,
      },
      {
        type: "input",
        key: "email",
        location: "003",
        label: "Email",
        answer: null,
      },
      {
        type: "input",
        key: "phone",
        location: "004",
        label: "Phone number",
        answer: null,
      },
      {
        type: "input",
        key: "city",
        location: "005",
        label: "City of residence",
        answer: null,
      },
      {
        type: "select",
        key: "country",
        location: "006",
        label: "Country of residence",
        answer: null,
      },
    ],

    [
      {
        type: "title",
        label: "Parent / Guardian Info Cont.",
      },
      {
        type: "input",
        key: "age",
        location: "011",
        label: "Age",
        answer: null,
      },
      {
        type: "select",
        key: "nationality",
        location: "012",
        label: "Nationality",
        answer: null,
      },
      {
        type: "select",
        key: "relation",
        location: "013",
        label: "Relation To Student",
        answer: null,
      },
    ],

    [
      {
        type: "title",
        label: "Parent / Guardian 2 Info",
      },
      {
        type: "input",
        key: "firstname",
        location: "021",
        label: "First name",
        answer: null,
      },
      {
        type: "input",
        key: "lastname",
        location: "022",
        label: "Last name",
        answer: null,
      },
      {
        type: "input",
        key: "email",
        location: "023",
        label: "Email",
        answer: null,
      },
      {
        type: "input",
        key: "phone",
        location: "024",
        label: "Phone number",
        answer: null,
      },
      {
        type: "input",
        key: "city",
        location: "025",
        label: "City of residence",
        answer: null,
      },
      {
        type: "select",
        key: "country",
        location: "026",
        label: "Country of residence",
        answer: null,
      },
    ],

    [
      {
        type: "title",
        label: "Parent / Guardian 2 Info Cont.",
      },
      {
        type: "input",
        key: "age",
        location: "031",
        label: "Age",
        answer: null,
      },
      {
        type: "select",
        key: "nationality",
        location: "032",
        label: "Nationality",
        answer: null,
      },
      {
        type: "select",
        key: "relation",
        location: "033",
        label: "Relation To Student",
        answer: null,
      },
    ],
  ]);
  const [studentState, setStudentState] = useState([
    [
      {
        type: "title",
        label: "Student Info",
      },
      {
        type: "input",
        key: "first-name",
        location: "101",
        label: "First name",
        answer: null,
      },
      {
        type: "input",
        key: "last-name",
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
        key: "years-studied",
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
        key: "startdate",
        location: "202",
        label: "Desired Start Date",
        answer: null,
      },
    ],
  ]);

  return (
    <Context.Provider
      value={{
        appLocation,
        setAppLocation,
        youState,
        setYouState,
        planState,
        setPlanState,
        studentState,
        setStudentState,
      }}
    >
      {children}
    </Context.Provider>
  );
}
