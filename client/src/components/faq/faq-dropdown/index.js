import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {ChevronRight, ExpandMore} from '@material-ui/icons/';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import './styles.css'



const useStyles = makeStyles((theme) => ({
  faqHolder:{
    textAlign: "initial",
    padding: "5px 0px",
    display: "flex"
  },
  question:{
    marginLeft: "4px",
    marginRight: "12px"
  },
  dropdownArrow: {
    marginLeft: "auto",
  marginRight: "4px",
  alignItems: "center",
  display: "flex",
},
  answerContainer: {
    color: "white",
    textAlign: "justify",
    backgroundColor: " #411271",



  }
}))

const FaqDropdown = ({question, faqId, answer}) => {
  const classes = useStyles()

  const [mouseDown, setMouseDown] = useState(false)
  const [answerState, setAnswerState] = useState(false)
  const [holderState, setHolderState] = useState(false)

  useEffect(() => {
    setTimeout(function(){
      console.log("holder activated");
      setHolderState(!holderState)
    }, 1000)
  }, [answerState])

  const handleMouseDown = () => {
    console.log("downed");
    setMouseDown(true)
  }
  const handleMouseUp = () => {
    console.log("mouseUp");
    setMouseDown(false)
  }
  const handleDropdownClick = (e) => {
   console.log("dropdown clicked", e.target);
   setAnswerState(!answerState)
  }

  return (
    <div>
      <div
        faqId={faqId}
        className={` no-select ${classes.faqHolder} ${faqId % 2 == 0 ? "faq-even" : "faq-odd"} ${mouseDown ? (faqId % 2 == 0) ? 'even-down' : 'odd-down' : null}` }
        onMouseDown={() => handleMouseDown()}
        onMouseUp={() => handleMouseUp()}
        onMouseOut={() => handleMouseUp()}
        onClick={(e) => handleDropdownClick(e)}
        >
        <div className={classes.question}>
          {question}
        </div>
        <div className={classes.dropdownArrow}>

          {answerState ? <ExpandMore /> : <ChevronRight />}

        </div>
      </div>
      <div className={`answer-div ${classes.answerContainer} ${answerState ? "display-on" : "display-none"}`}>
        <div style={{padding: "12px 8px"}}>
          <div>
            <EmojiPeopleIcon />
          </div>
          <div>
            {answer}
          </div>
        </div>

      </div>
    </div>

  )
}

export default FaqDropdown
