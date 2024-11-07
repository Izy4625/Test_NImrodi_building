import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./utils/PrivateRoute";
import Floor from "./pages/Floor/Floor";
import Forbidden from "./pages/Forbidden/Forbidden";
import Reception from "./pages/Reception/Reception";


 const Router = () => {
  return (
    <BrowserRouter>
     <Layout>
      <Routes>
        <Route path="/" element={<Reception/>} />
        {/* <Route path="/floor/:id" element={<Floor/>} /> */}
        <Route path="/forbidden" element={<Forbidden/>}/>
        <Route path="/floor/:id"  element={
            <PrivateRoute>
              <Floor />
            </PrivateRoute>
          }
        />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default Router
