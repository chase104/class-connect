import React from 'react'

import { makeStyles } from "@material-ui/core/styles";


import Tab from "../../../components/tab/index.js";

const useStyles = makeStyles((theme) => ({

}))


const AdminDashboard = () => {
  const classes = useStyles()

  return (
    <div>
      <Tab message="Admin Dashboard" admin={true}/>

    </div>
  )
}

export default AdminDashboard
