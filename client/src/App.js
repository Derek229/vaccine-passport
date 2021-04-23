import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
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
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login}/>
        <Route exact path='/about' component={About} />
        <Route exact path='/register' component={Register} />
        <ProtectedRoute exact path='/users/self/qr_code' component={Wallet} />
        <ProtectedRoute exact path='/users/self' component={UserDashboard} />
        <ProtectedRoute exact path='/users/issuer/vaccines' component={IssuerVaccines} />
        <ProtectedRoute exact path='/users/verifier/required' component={VerifierReq}/>
        <ProtectedRoute exact path='/users/verifier/requiredVaccines' component={RequiredVaccines}/>
        <ProtectedRoute exact path='/users/verifier/VerifierHomePage' component={VerifierHomePage}/>
        <ProtectedRoute exact path='/users/verifier/QRScanner' component={QRScanner}/>
        <ProtectedRoute exact path='/users/issuer/manage' component={IssuersCRUD} />
        <ProtectedRoute exact path='/admin/vaccines' component={AdminVaccines} />
        <ProtectedRoute exact path='/admin/vaccinations' component={AdminVaccinations} />
				<Route exact path='/users/allVaccines' component={AllVaccines} />
        
        < Route component={NoMatch} />
      </Switch>
    </FetchUser>
   </>
  );
}

export default App;

