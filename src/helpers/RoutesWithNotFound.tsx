import { Route, Routes } from "react-router-dom";

interface INotFound {
  children: JSX.Element[] | JSX.Element;
}
const RoutesWithNotFound = ({ children }: INotFound) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<h2>$404</h2>}></Route>
    </Routes>
  );
};

export default RoutesWithNotFound;
