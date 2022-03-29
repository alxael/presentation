import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { pink, deepPurple } from "@mui/material/colors";
import { useMediaQuery, CssBaseline } from "@mui/material";

import MainPage from "./pages/mainPage";
import PageNotFoundPage from "./pages/pageNotFoundPage";

const App = () => {
  const [light, setLight] = useState(
    useMediaQuery("(prefers-color-scheme: light)")
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
  };

  return (
    <ThemeProvider theme={{ ...(light ? lightTheme : darkTheme), changeTheme }}>
      <CssBaseline/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
