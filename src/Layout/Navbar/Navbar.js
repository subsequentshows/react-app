import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navbar = () => {
  return (
    <Router>
      <div className="navbar">
        <Link className="link" to="/DanhMuc/DanhMuc">Danh mục</Link>
        <Link className="link" to="/DanhMuc/DanhMucTinh">Danh mục tỉnh</Link>
        <Link className="link" to="/todos">Todos</Link>
      </div>
    </Router>
  )
}

export default Navbar;