import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import {
  AccountBox as AccountCircleIcon,
  Notifications as NotifiationsIcon,
  NotificationImportantIcon as NewNotificationIcon,
} from "@material-ui/icons";
import "./styles.css";

const SignedInLinks = () => {
  var accountHolder = document.getElementById("account-holder");
  const handeMouseDown = () => {
    accountHolder.classList.add("downed");
  };
  return (
    <div className="icon-group-holder">
      <div className="icon-holder" id="notification-holder">
        <NotifiationsIcon fontSize="large" className="navbar-icon" />
      </div>
      <div
        className="icon-holder"
        id="account-holder"
        onMouseDown={() => handeMouseDown()}
      >
        <AccountCircleIcon fontSize="large" className="navbar-icon" />
      </div>
    </div>
  );
};

export default SignedInLinks;
