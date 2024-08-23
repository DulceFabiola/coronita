import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider, Container } from "@chakra-ui/react";
import PrimaryLayout from "./components/layout";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import ProductDetailsPage from "./pages/productDetails";
import theme from "../src/theme";
import "../src/components/layout/index.css";
import RegisterPage from "./pages/register";
import PageNotFound from "./pages/404";
const Router = () => {
  return (
    <Container className="main-container">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PrimaryLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/producto/:id" element={<ProductDetailsPage />} />
              {/* Rutas de Usuario*/}
              <Route path="inicio-sesion" element={<LoginPage />} />
              <Route path="registro" element={<RegisterPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </Container>
  );
};
export default Router;
