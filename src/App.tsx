import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { pink, deepPurple } from "@mui/material/colors";
import { useMediaQuery, CssBaseline } from "@mui/material";

import MainPage from "./pages/mainPage";
import ContactPage from "./pages/contactPage";

import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import Wrapper from "./components/shared/wrapper";

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
