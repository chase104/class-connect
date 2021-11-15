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
const Faq = (props) => {

  useEffect(() => {

    console.log(props.location.state)
    if (props.location.state) {
        var top = document.getElementById("prompt-anchor").offsetTop; //Getting Y of target element
        window.scrollTo(0, top); 
    } else {
      var top = document.getElementById("mytab").offsetTop; //Getting Y of target element
      window.scrollTo(0, top); 
    }
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
