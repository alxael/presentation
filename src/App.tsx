import { useState, useLayoutEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { pink, deepPurple } from "@mui/material/colors";
import { useMediaQuery, CssBaseline } from "@mui/material";

import MainPage from "./pages/mainPage";
import ContactPage from "./pages/contactPage";

import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";

interface WrapperProps {
  children: JSX.Element;
}

const Wrapper = (props: WrapperProps) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return props.children;
};

const App = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [light, setLight] = useState(
    useMediaQuery("(prefers-color-scheme: light)") ||
      window.sessionStorage.getItem("theme") === "light"
  );

  const getTheme = (light: boolean) => {
    return createTheme({
      palette: {
        mode: light ? "light" : "dark",
        primary: {
          main: pink.A400,
        },
        secondary: {
          main: deepPurple.A400,
        },
      },
    });
  };

  const darkTheme = getTheme(false);
  const lightTheme = getTheme(true);

  const changeTheme = () => {
    setLight(!light);
    window.sessionStorage.setItem("theme", light ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={{ ...(light ? lightTheme : darkTheme), changeTheme }}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar show={showNavbar} />
        <Wrapper>
          <Routes>
            <Route
              path="/"
              element={<MainPage setShowNavbar={setShowNavbar} />}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Wrapper>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
