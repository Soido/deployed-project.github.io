import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import React, { useRef } from "react";
import { useScroll } from "react-use";
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
  const scrollRef = React.useRef(null);
  const { x, y } = useScroll(scrollRef);

  return (
    <>
      <BrowserRouter>
        <div ref={scrollRef} className="App  overflow-auto">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainLayout yScroll={y} />}>
              <Route
                index={true}
                /*можно без true */ element={<Home yScroll={y} />}
              />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="services" element={<Services />} />
              <Route
                path="services/typeassertion"
                element={<Typeassertion yScroll={y} />}
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
