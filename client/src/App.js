import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Customers from './components/customers/index.js'
import Navbar from './components/navigation/navbar/index.js'
import Slogan from './components/slogan/index.js'
import LoggedOutDashboard from './pages/dashboards/logged-out-dashboard/index.js'
import About from './pages/about/index.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Route path="/" component={Navbar} />
          <Slogan />
          <div className="rest">
            <Route exact path="/" component={LoggedOutDashboard} />
            <Route path="/about" component={About} />
          </div>


      </div>
    </BrowserRouter>

  );
}

export default App;
