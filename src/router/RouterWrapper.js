import { Routes, Route } from "react-router-dom";
import { Home, Login, Jobs } from "../pages/pages";
import { RequiresAuth } from "./RequiresAuth";

export const RouterWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/jobs"
        element={
          <RequiresAuth>
            <Jobs />
          </RequiresAuth>
        }
      />
    </Routes>
  );
};
