import React, { useState } from 'react'
import './styles.css'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import pdfImage from '../../assets/images/pdfImage.jpg'
import pdfPracticeTemplate from './practice.js'


const PdfWork = (props) => {

  return (
    <div class="pdf-container">

       <div class="header-row">

        <div>
          <img  src={pdfImage} class="image" />
        </div>
        <div class="unit-holder">
          <div class="lesson-title">Unit 3</div>
          <div class="lesson-title">Lesson 25</div>
        </div>
        <div class="date">
          <div>Date</div>
        </div>
       </div>
    </div>
  )
}

export default PdfWork
