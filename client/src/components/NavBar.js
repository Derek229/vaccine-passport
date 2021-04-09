
import React, { useContext } from "react";
import { Menu } from "semantic-ui-react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar1 = (props) => {
  let history = useHistory();
  let { pathname } = useLocation();
  const { user, handleLogout } = useContext(AuthContext);

  const rightNavItems = () => {
    if (user) {
      return (
        <Menu.Menu position="right">
          <Link to='/users/self'>
            <Menu.Item
              name='My Profile'
              id='users'
              active={pathname === '/users/self'}
            />
          </Link>
          <Menu.Item name="logout" onClick={() => handleLogout(history)} />
        </Menu.Menu>
      );
    } else {
      return (
      <div></div>
      )}
  };

  return (
    <div>
      <Menu pointing secondary>
        <Link to="/">
          <Menu.Item name="home" id="home" active={pathname === "/"} />
        </Link>
        <Link to="/about">
          <Menu.Item name="about" id="about" active={pathname === "/about"} />
        </Link>
        <Link to='/users/self/wallet'>
            <Menu.Item
              name='My Wallet'
              id='users'
              active={pathname === '/users/self/wallet'}
            />
          </Link>
          <Link to='/users/issuer/vaccines'>
            <Menu.Item
              name='Issuers CRUD Page'
              id='users'
              active={pathname === '/users/issuer/vaccines'}
            />
          </Link>
          <Link to='/users/verifier/pending'>
            <Menu.Item
              name='Verifier Pending Submissions Page'
              id='users'
              active={pathname === '/users/verifier/pending'}
            />
          </Link>
        {rightNavItems()}
      </Menu>
    </div>
  );
};

export default Navbar1