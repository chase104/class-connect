import React, { createContext, useState } from "react";
import _ from "lodash";

export const YouContext = createContext(null);

export function YouProvider({ children }) {
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
        key: "relation to student",
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

  return (
    <YouContext.Provider
      value={{
        appLocation,
        setAppLocation,
        youState,
        setYouState,
      }}
    >
      {children}
    </YouContext.Provider>
  );
}
