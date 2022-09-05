import { Route, Routes, Navigate } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Soda from "./Soda";
import Sardines from "./Sardines";

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<VendingMachine />} />
      <Route path="/chips" element={<Chips />} />
      <Route path="/soda" element={<Soda />} />
      <Route path="/sardines" element={<Sardines />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
