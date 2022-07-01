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
import ContentPage from "./pages/contentPage";

import { ReactComponent as DataSvg1 } from "./svgs/data1.svg";
import { ReactComponent as DataSvg2 } from "./svgs/data2.svg";
import { ReactComponent as DataSvg3 } from "./svgs/data3.svg";
import { ReactComponent as DataSvg4 } from "./svgs/data4.svg";
import { ReactComponent as DataSvg5 } from "./svgs/data5.svg";
import { ReactComponent as DataSvg6 } from "./svgs/data6.svg";

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
            <Route
              path="/cloudEngineering"
              element={
                <ContentPage
                  title="Cloud Engineering"
                  contentCards={[
                    {
                      title: "Cloud Modernization",
                      description: [
                        `For enterprises to invest in continuous transformation they need to migrate and modernize their data on cloud platforms. Once cloud migration is done, the business-critical data needs to be modernized to accelerate real-time reporting and analysis.`,
                        `With our certified Cloud engineers and solution architects, we help in building cloud architectures that are highly scalable, secure and cost-effective as per your business requirements.`,
                        `Our Cloud modernization services provide business processes with faster collaboration and communication metrices to enhance business processes.`,
                        `We collaborate with your internal development and architecture teams to resolve codes, configuration, and architecture challenges that are prevailing in your cloud adoption process and thereby accelerate Cloud modernization and cloud migration.`,
                      ],
                      alignment: "right",
                      textAlignment: "left",
                      media: DataSvg5,
                    },
                    {
                      title: "Hybrid Cloud",
                      description: [
                        `Hybrid Cloud is likely to be the best approach for your workloads and data, while you transition from a traditional IT paradigm to cloud-first or cloud-only.`,
                        `We work with you to align your business's cloud deployment strategy so that you may embrace agile approaches and create a cloud-ready culture.`,
                        `We assist you in identifying and building the ideal solution for your hybrid–enabled converged and hyper-converged systems. We collaborate with you to relocate and modernise workloads to the most appropriate locations, allowing you to transfer as quickly, painlessly, and cost-effectively as feasible.`,
                        `Our wide portfolio, global end-to-end knowledge, and leading relationships enable you to build your cloud environments and perfect your future approach across cloud platforms. You can transfer& transform workloads and data with maximum security, optimization and flexibility.`,
                      ],
                      alignment: "left",
                      textAlignment: "left",
                      media: DataSvg6,
                    },
                  ]}
                />
              }
            ></Route>
            <Route
              path="/dataAndAnalytics"
              element={
                <ContentPage
                  title="Data and Analytics"
                  contentCards={[
                    {
                      title: "AI & ML Solutions",
                      description: [
                        `Our AI & ML services include the creation of self-learning algorithms that reduce errors while increasing accuracy over time. Machine learning systems examine data and learn new things from it, resulting in fast and accurate insights supplied without the need for human intervention.`,
                        `We can assist you in spotting AI opportunities and removing impediments to AI innovation. With our expertise in applied AI and software development, you may create intelligent systems that can do human-like jobs at any time and in any location.`,
                      ],
                      alignment: "left",
                      textAlignment: "left",
                      media: DataSvg3,
                    },
                    {
                      title: "Data Engineering Services",
                      description: [
                        `Organizations are inundated with data already and the volume is growing by the minute. To gain maximum value from their data assets, companies must build data pipelines to help transform and transfer the data into a format that is ready for use for data scientists and other end-users. Growing data volumes offer enormous potential for organizations to generate business value from captured data, offer exceptional customer service and help stay ahead of the curve in today’s competitive global market.`,
                        `FrightFlex uses a tailored approach to help firms monetize and optimise the value of their data. We establish a solid data foundation and use data mining to generate insights. Our objectives are to address major obstacles that restrict firms from scaling and transforming themselves into data-savvy rivals.`,
                        `Our data engineering services help make data more useful and accessible to all data consumers. We help our clients gather data requirements, maintain metadata about data, ensure security and data governance, and process data according to their unique requirements.`,
                        `We help: Design and develop data pipeline (ETL and ELT), Design and develop data products with APIs, Enable data quality management.`,
                      ],
                      alignment: "right",
                      textAlignment: "left",
                      media: DataSvg4,
                    },
                  ]}
                />
              }
            ></Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Wrapper>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
