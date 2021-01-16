import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FaqDropdown from '../faq-dropdown/index.js'
import { Grid } from '@material-ui/core';


const useStyles = makeStyles({
  dropdownContainer:{
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    justifyContent: "center",
},
  faqContainer: {
    border: "1px solid black",
  }


})


const FaqDropdownHolder = () => {
  const classes = useStyles()

  const [faqState, setFaqState] = useState([
    {faqId: 1, question: "Will enrollment automatically recharge my bank account?", answer: "You have the option to enroll in automatic payments which will withdraw the money automatically from your bank account, or you may also make the payments manually. You can change your preference in your account settings."},
    {faqId: 2, question: "How do I know which plan is right for me", answer: "There are many factors to consider when selecting the right plan for your unique situation. It's important to take into account the ammount of time your child can commit per week as well as how intensive of a course you'd like to take advantage of. It's also important, of course, to consider which course offers the best value for your circumstances. To get a more personalized opinion, feel free to request a consulation with our of our representatives."},
    {faqId: 3, question: "How can I see my child's progress?", answer: "Transparency and information access are core values we hold here at learning lab. You can find progress reports in your account dashboard. Look at the top right corner of the screen."},
    {faqId: 4, question: "How long is each class?", answer: "Individual Classes last 25 minutes while group classes last 29 minutes."},
    {faqId: 1, question: "Will enrollment automatically recharge my bank account?", answer: "You have the option to enroll in automatic payments which will withdraw the money automatically from your bank account, or you may also make the payments manually. You can change your preference in your account settings."},
    {faqId: 2, question: "How do I know which plan is right for me", answer: "There are many factors to consider when selecting the right plan for your unique situation. It's important to take into account the ammount of time your child can commit per week as well as how intensive of a course you'd like to take advantage of. It's also important, of course, to consider which course offers the best value for your circumstances. To get a more personalized opinion, feel free to request a consulation with our of our representatives."},
    {faqId: 3, question: "How can I see my child's progress?", answer: "Transparency and information access are core values we hold here at learning lab. You can find progress reports in your account dashboard. Look at the top right corner of the screen."},
    {faqId: 4, question: "How can I see my child's progress?", answer: "Transparency and information access are core values we hold here at learning lab. You can find progress reports in your account dashboard. Look at the top right corner of the screen."},

  ])

  return (
    <Grid container style={{marginTop: "30px"}}>
      <Grid item xs={12} sm={12}>
        <Grid container className={classes.dropdownContainer}>
          <Grid item xs={10} sm={8} md={8}>
            <div  className={classes.faqContainer}>
              {faqState.map((faq) => {
                return <FaqDropdown faqId={faq.faqId} question={faq.question} answer={faq.answer} />
              })}
            </div>



          </Grid>
        </Grid>
      </Grid>


    </Grid>
  )
}

export default FaqDropdownHolder
