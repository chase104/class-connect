import React, { useState } from 'react'
import './styles.css'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import pdfPracticeTemplate from './practice.js'


const PdfPractice = (props) => {

  const [open, setOpen] = useState(false)
  const handleClick = () => {
    axios({
      method: "GET",
      url: "make-pdf"
    }).then((res) => {
      console.log(res);
    })
  }
  return (
    <div>
      <Button onClick={handleClick}>MakePdf</Button>

    </div>
  )
}

export default PdfPractice
