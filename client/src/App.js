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
import IssuerRoute from './components/IssuerRoute'
import VerifierRoute from './components/VerifierRoute'
import AdminRoute from './components/AdminRoute'
import Wallet from './pages/user/Wallet';
import UserDashboard from './pages/user/UserDashboard';
import IssuerVaccines from './pages/issuer/IssuerVaccines';
import AdminVaccines from './pages/Admin/AdminVaccines'
import RequiredVaccines from './pages/verifier/RequiredVaccines';
import QRScanner from './pages/verifier/QRScanner';
import AllVaccines from './pages/Public/AllVaccines';
import IssuersCRUD from './pages/issuer/IssuersCRUD';
import AdminVaccinations from './pages/Admin/AdminVaccinations';
import AllVerifiers from './pages/Public/AllVerifiers';
import AdminCreateUser from './components/AdminCreateUser'

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
        <IssuerRoute exact path='/users/issuer/vaccines' component={IssuerVaccines} />
        <IssuerRoute exact path='/users/issuer/manage' component={IssuersCRUD} />
        <VerifierRoute exact path='/users/verifier/requiredVaccines' component={RequiredVaccines}/>
        <VerifierRoute exact path='/users/verifier/QRScanner' component={QRScanner}/>
        <AdminRoute exact path='/admin/vaccines' component={AdminVaccines} />
        <AdminRoute exact path='/admin/vaccinations' component={AdminVaccinations} />
        <AdminRoute exact path='/admin/user/create' component={AdminCreateUser} />
				<Route exact path='/all-vaccines' component={AllVaccines} />
        <Route exact path='/all-verifiers' component={AllVerifiers} />
        
        < Route component={NoMatch} />
      </Switch>
    </FetchUser>
   </>
  );
}

export default App;

