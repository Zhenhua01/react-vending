import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/chips">Chips</Link></li>
      <li><Link to="/soda">Soda</Link></li>
      <li><Link to="/sardines">Sardines</Link></li>
    </ul>
  );
}

export default Nav;
