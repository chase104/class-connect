import React, { useState, createContext } from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Customers from './components/customers/index.js'
import Navbar from './components/navigation/navbar/index.js'
import Slogan from './components/slogantwo/index.js'
import LoggedOutDashboard from './pages/dashboards/logged-out-dashboard/index.js'
import About from './pages/about/index.js'
import Games from './pages/games/index.js'
import Homepage from './pages/homepage/index.js'
import Login from './pages/login/index.js'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import PdfPage from './pages/pdf-page/index.js'
import Faq from './pages/faq/index.js'
import Plans from './pages/plans/index.js'
import Footer from './components/footer/index.js'
import trialImage from './assets/images/image-trial.png'
import basicImage from './assets/images/image-basic.png'
import basicPlusImage from './assets/images/image-basic+.png'
import fullImage from './assets/images/image-full.png'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1fc3cd"
    },
    secondary: {
      main: "#4315c0"
    }
  }
})

export const PlanContext = createContext()

export default function App() {
  const [plans, setPlans] = useState(
    [
      {type: "New Recruit",
        image: trialImage,
        benefits: ["One set of classes (3)", "Educational Assitance Team", "Lesson material access", "Games access"],
        price: 25,
        description: "The Trial package is meant to give you a chance to make sure LearningLab is the right fit for you! You'll be able to access three (3) classes along with the lesson materials for those lessons. In addition to this, you'll have access to the games page while the trial is active."},
      {type: "Archer",
        image: basicImage,
        benefits: ["One unit of classes (65)", "Educational Assitance Team"],
        price: 390,
        description: "The Basic Package offers you our basic services for a reduced price. You'll have access to the classes of the course, as well as the help of our Educational Assistance Team."},
      {type: "Knight",
        image: basicPlusImage,
        benefits: ["One unit of classes (65)", "Educational Assitance Team", "Lesson material access", "Progress reports"],
        price: 495,
        description: "The Basic+ package adds an important addition to your child's education. You'll get access to the lesson materials, meaning your child will be able to both prepare for classes as well as review after class. In addition to this, you'll receive detailed progress reports showing you how your child is doing."},
      {type: "Wizard",
        image: fullImage,
        benefits: ["One unit of classes (65)", "Educational Assitance Team", "Lesson material access", "Progress reports", "Games access", "Extra review classes (6)", "Two (2) progress report videocalls"],
        price: 695,
        description: "The Full-Access package give you absolutely everything you need for the complete LearningLab experience, in addition to all our other services, you also get access to our exciting host of games related to class-material. This helps greatly to reinforce concepts and terms from class. You'll also have an additional 6 classes added to the course that serve to solidify everything learned. Lastly, you will also be able to schedule two (2) videocalls with a member of our Educational Assistance Team, in which you'll have a conversation about your child's progress."},
    ]
  )

  return (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
          <PlanContext.Provider value={plans}>
            <div className="App">
                <Route exact path="/pdfpage" component={PdfPage} />
                <div className="rest" >
                    <Route path="/" component={Navbar} />
                    <Route path="/" component={Slogan} />
                    <Route exact path="/" component={Homepage} />
                    <Route path="/about" component={About} />
                    <Route path="/games" component={Games} />
                    <Route path="/login" component={Login} />
                    <Route path="/faq" component={Faq} />
                    <Route path="/plans" component={Plans} />
                    <Route path="/" component={Footer} />

                </div>
            </div>
            </PlanContext.Provider>
        </ThemeProvider>
    </BrowserRouter>

  );
}
