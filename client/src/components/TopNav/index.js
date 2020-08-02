import React from "react";
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

function TopNav() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Nav className="noBullets border border-success">
          <NavItem >
            <NavLink  href="/">
              Google Books
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/search">
              Search
            </NavLink>
          </NavItem>        
          <NavItem>
            <NavLink href="/save">
            Saved
            </NavLink>
          </NavItem>
        </Nav>    
      </Navbar>
    </div>
  );
}

export default TopNav;
