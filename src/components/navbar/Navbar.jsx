import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.scss"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="lama estate" />
          <span>LamaEstate</span>
        </Link>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contacts</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/">Sign in</a>
        <a href="/" className="register">
          Sign up
        </a>
        <div className="menuIcon" onClick={()=>setOpen(!open)}>
          <img src="/menu.png" alt="" />
        </div>
        <div className={open? "menu active":"menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contacts</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
