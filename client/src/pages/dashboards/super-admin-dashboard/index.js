import React from 'react'

import { makeStyles } from "@material-ui/core/styles";


import Tab from "../../../components/tab/index.js";

const useStyles = makeStyles((theme) => ({

}))


const SuperDashboard = () => {
  const classes = useStyles()

  return (
    <div>
      <Tab message="Super-Admin Dashboard" admin={true} superAdmin={true}/>

    </div>
  )
}

export default SuperDashboard
