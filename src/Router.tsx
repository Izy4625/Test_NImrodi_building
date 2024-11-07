import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./utils/PrivateRoute";
import Floor from "./pages/Floor/Floor";
import Forbidden from "./pages/Forbidden/Forbidden";
import Reception from "./pages/Reception/Reception";


 const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout children={<Reception/>} />} />
        {/* <Route path="/floor/:id" element={<Floor />} /> */}
        <Route path="/Forbidden" element={<Forbidden />}/>
        <Route
          path="/floor:id"
          element={
            <PrivateRoute component={<Floor />}>
            </PrivateRoute>
          }
        />
        {/* <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
};
export default Router
