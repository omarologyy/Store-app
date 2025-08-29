import React from "react";
import Logo from "./Logo";
import DarkMode from "./DarkMode";
import NavSearch from "./NavSearch";
import Container from "../global/Container";
import LinksDropdown from "./LinksDropdown";
import CartButton from "./CartButton";

function Navbar() {
  return (
    <nav className="border-b ">
      <Container className="flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <Logo />
        <NavSearch />
        <div className="flex gap-4 items-center ">
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
