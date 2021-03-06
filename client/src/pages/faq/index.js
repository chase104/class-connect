import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Tab from '../../components/tab/index.js'
import FaqDropdownHolder from '../../components/faq/holder/index.js'
import QuestionPropt from '../../components/faq/question-prompt/index.js'



const useStyles = makeStyles({
  faqPageHolder:{
    marginBottom: "10vh"
  }
})
const Faq = () => {

  useEffect(() => {
  }, [])
  const classes = useStyles()

  return (
    <div className={classes.faqPageHolder}>
      <Tab message="FAQ"/>
      <FaqDropdownHolder />
      <QuestionPropt />
    </div>
  )
}

export default Faq
