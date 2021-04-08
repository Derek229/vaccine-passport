import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import {Container} from 'semantic-ui-react'
import NavBar from './components/NavBar';
import About from './pages/About';
import ComponentDemo from './pages/ComponentDemo';
import NoMatch from './components/NoMatch';
import Register from './components/Register';
import Login from './components/Login';
import FetchUser from './components/FetcherUser';
import ProtectedRoute from './components/ProtectedRoutes';
import Wallet from './pages/user/Wallet';
import UserDashboard from './pages/user/UserDashboard';
import VaccinesCRUD from './pages/issuer/VaccinesCRUD';
import verifierSubmissions from './pages/verifier/verifierSubmissions';

function App() {

  return (
    <>
    <NavBar />
    <FetchUser>
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/componentDemo' component={ComponentDemo} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/users/self/wallet' component={Wallet} />
        <Route exact path='/users/self' component={UserDashboard} />
        <Route exact path='/users/issuer/vaccines' component={VaccinesCRUD} />
        <Route exact path='/users/verifier/pending' component={verifierSubmissions} />
        < Route component={NoMatch} />
              </Switch>
      </Container>
      </FetchUser>
   </>
  );
}

export default App;

