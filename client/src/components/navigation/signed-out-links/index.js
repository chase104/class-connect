import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { Grid } from "@material-ui/core";
import { IconButton, Typography } from "@material-ui/core";
import {
  PostAdd as PostAddIcon,
  AssignmentTurnedIn as AssignmentTurnedInIcon,
  AccountBox as AccountCircleIcon,
  Notifications as NotificationsIcon,
  NotificationImportant as NewNotificationIcon,
  Info as InfoIcon,
  AccountBox as AccountBoxIcon,
} from "@material-ui/icons";

const SignedOutLinks = () => {
  const [hover, setHover] = useState({
    plans: false,
    apply: false,
    about: false,
    login: false,
  });

  const toggleHover = (item) => {
    setHover((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <div className="icon-group-holder">
      <Grid container className="navbar-grid">
        {[
          {
            path: "/plans",
            label: "PLANS",
            icon: <AssignmentTurnedInIcon fontSize="small" />,
            key: "plans",
          },
          {
            path: "/application",
            label: "APPLY",
            icon: <PostAddIcon />,
            key: "apply",
          },
          {
            path: "/about",
            label: "ABOUT",
            icon: <InfoIcon fontSize="small" />,
            key: "about",
          },
          {
            path: "/login",
            label: "LOGIN",
            icon: <AccountBoxIcon fontSize="small" />,
            key: "login",
          },
        ].map((link) => (
          <Grid item sm={3} key={link.key}>
            <Link
              to={link.path}
              className="no-decoration"
              onMouseEnter={() => toggleHover(link.key)}
              onMouseLeave={() => toggleHover(link.key)}
            >
              <div className="icon-holder color-primary">
                <div className="title-icon-holder">
                  <h4 className="navbar-icon no-select no-margin">
                    {link.label}
                  </h4>
                  <div className="small-icons-holder">
                    {React.cloneElement(link.icon, {
                      style: { color: hover[link.key] ? "#f0f0f0" : "white" },
                    })}
                  </div>
                </div>
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SignedOutLinks;
