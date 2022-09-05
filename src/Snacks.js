import { Link } from "react-router-dom";

function Snacks() {
  return (
    <ul>
      <li><Link to="/chips">Chips</Link></li>
      <li><Link to="/soda">Soda</Link></li>
      <li><Link to="/sardines">Sardines</Link></li>
    </ul>
  );
}

export default Snacks;
