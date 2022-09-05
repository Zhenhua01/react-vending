import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <li><NavLink to="/" style={({isActive}) => ({color: isActive ? "red" : "black"})}>Home</NavLink></li>
      <li><NavLink to="/chips" style={({isActive}) => ({color: isActive ? "red" : "black"})}>Chips</NavLink></li>
      <li><NavLink to="/soda" style={({isActive}) => ({color: isActive ? "red" : "black"})}>Soda</NavLink></li>
      <li><NavLink to="/sardines" style={({isActive}) => ({color: isActive ? "red" : "black"})}>Sardines</NavLink></li>
    </ul>
  );
}

export default Nav;
