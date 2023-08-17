import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";
import { MainNavigation } from "./component/MainNavigation";
import { Header } from "./component/header/index.jsx";
import { AuthWrapper } from "./context/auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { CartWrapper } from "./context/cart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthWrapper>
          <CartWrapper>
            <ThemeProvider theme={theme}>
              <ToastContainer />
              <Header />
              <main>
                <MainNavigation />
              </main>
            </ThemeProvider>
          </CartWrapper>
        </AuthWrapper>
      </BrowserRouter>
    </>
  );
};

export default App;
