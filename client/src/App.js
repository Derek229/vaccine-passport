import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import {Container} from 'react-bootstrap'
import NavBar from './components/NavBar';
import About from './pages/About';
import NoMatch from './components/NoMatch';
import Register from './components/Register';
import Login from './components/Login';
import FetchUser from './components/FetcherUser';
import ProtectedRoute from './components/ProtectedRoutes';
import Wallet from './pages/user/Wallet';
import UserDashboard from './pages/user/UserDashboard';
import IssuerVaccines from './pages/issuer/IssuerVaccines';
import AdminVaccines from './pages/Admin/AdminVaccines'
import VerifierReq from './pages/verifier/VerifiersReq';
import VerifierLogin from './pages/verifier/VerifierLogin';
import IssuerLogin from './pages/issuer/IssuerLogin';
import RequiredVaccines from './pages/verifier/RequiredVaccines';
import VerifierHomePage from './pages/verifier/VerifierHomePage';
import QRScanner from './pages/verifier/QRScanner';
import AllVaccines from './pages/Public/AllVaccines';
import IssuersCRUD from './pages/issuer/IssuersCRUD';
import AdminVaccinations from './pages/Admin/AdminVaccinations';
function App() {

  return (
    <>
    <NavBar />
    <FetchUser>
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login}/>
        <Route exact path='/verifierLogin' component={VerifierLogin}/>
        <Route exact path='/issuerLogin' component={IssuerLogin}/>
        <Route exact path='/about' component={About} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/users/self/qr_code' component={Wallet} />
        <Route exact path='/users/self' component={UserDashboard} />
        <ProtectedRoute exact path='/users/issuer/vaccines' component={IssuerVaccines} />
        <Route exact path='/users/verifier/required' component={VerifierReq}/>
        <Route exact path='/users/verifier/requiredVaccines' component={RequiredVaccines}/>
        <Route exact path='/users/verifier/VerifierHomePage' component={VerifierHomePage}/>
        <Route exact path='/users/verifier/QRScanner' component={QRScanner}/>
        <Route exact path='/users/issuer/manage' component={IssuersCRUD} />
        <Route exact path='/admin/vaccines' component={AdminVaccines} />
        <Route exact path='/admin/vaccinations' component={AdminVaccinations} />
				<Route exact path='/users/allVaccines' component={AllVaccines} />
        
        < Route component={NoMatch} />
      </Switch>
      </Container>
    </FetchUser>
   </>
  );
}

export default App;

