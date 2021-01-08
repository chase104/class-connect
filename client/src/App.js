import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Customers from './components/customers/index.js'
import Navbar from './components/navigation/navbar/index.js'
import Slogan from './components/slogantwo/index.js'
import LoggedOutDashboard from './pages/dashboards/logged-out-dashboard/index.js'
import About from './pages/about/index.js'
import Login from './pages/login/index.js'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'



const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1565c0"
    }
  }
})
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>

          <div className="App">
              <Route path="/" component={Navbar} />
              <Route path="/" component={Slogan} />
              <div className="rest">
                <Route exact path="/" component={LoggedOutDashboard} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
              </div>
          </div>

      </ThemeProvider>

    </BrowserRouter>

  );
}

export default App;
