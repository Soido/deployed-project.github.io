import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import "./App.css";

import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Projects from "./components/pages/projects/Projects";
import Services from "./components/pages/services/Services";
import Typeassertion from "./components/pages/services/subPages/Typeassertion";
import Verification from "./components/pages/services/subPages/Verification";
import Examination from "./components/pages/services/subPages/Examination";
import Certification from "./components/pages/services/subPages/Certificationmi";
import Accreditationcertification from "./components/pages/services/subPages/Accreditationcertification";
import Safety from "./components/pages/services/subPages/Safety";

import Forpartners from "./components/pages/forparnters/Forpartners";

import Contacts from "./components/pages/contacts/Contacts";
import NotFound from "./components/NotFound";
import MainLayout from "./Layouts/MainLayout";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <div className="App">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index={true} /*можно без true */ element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="services" element={<Services />} />
              <Route
                path="services/typeassertion"
                element={<Typeassertion />}
              />
              <Route path="services/verification" element={<Verification />} />
              <Route path="services/examination" element={<Examination />} />
              <Route
                path="services/certificationmi"
                element={<Certification />}
              />
              <Route
                path="services/accreditationcertification"
                element={<Accreditationcertification />}
              />
              <Route path="services/safety" element={<Safety />} />

              <Route path="forpartners" element={<Forpartners />} />
              <Route path="contacts" element={<Contacts />} />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
