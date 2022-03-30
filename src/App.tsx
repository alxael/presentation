import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { pink, deepPurple } from "@mui/material/colors";
import { useMediaQuery, CssBaseline } from "@mui/material";

import MainPage from "./pages/mainPage";
import PageNotFoundPage from "./pages/pageNotFoundPage";
import ContactPage from "./pages/contactPage";
import Navbar from "./components/shared/navbar";

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
