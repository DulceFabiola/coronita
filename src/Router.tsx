import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrimaryLayout from "./components/layout";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrimaryLayout />}>
          <Route index element={<HomePage />} />
          {/* Rutas de Usuario*/}
          <Route path="inicio-sesion" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
