import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile, { DEFAULT_PROFILE_TAB, PROFILE_SECTION_ID } from "./components/Profile";
import Pendahuluan, { PENDAHULUAN_SECTION_ID, DEFAULT_PENDAHULUAN_TAB } from "./components/Pendahuluan";
import Laporan, { LAPORAN_SECTION_ID, DEFAULT_LAPORAN_TAB } from "./components/Laporan";
import Lampiran, { LAMPIRAN_SECTION_ID } from "./components/Lampiran";
import Footer from "./components/Footer";

const INITIAL_TABS = {
  [PROFILE_SECTION_ID]: DEFAULT_PROFILE_TAB,
  [PENDAHULUAN_SECTION_ID]: DEFAULT_PENDAHULUAN_TAB,
  [LAPORAN_SECTION_ID]: DEFAULT_LAPORAN_TAB,
};

const SECTION_IDS = ["home", PROFILE_SECTION_ID, PENDAHULUAN_SECTION_ID, LAPORAN_SECTION_ID, LAMPIRAN_SECTION_ID];

function App() {
  const [activeTabs, setActiveTabs] = useState(INITIAL_TABS);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollMarker = window.scrollY + 160;
      let currentSection = "home";

      SECTION_IDS.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);

        if (sectionElement && scrollMarker >= sectionElement.offsetTop) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTabChange = (sectionId, tabId) => {
    setActiveTabs((previous) => ({
      ...previous,
      [sectionId]: tabId,
    }));
  };

  const handleNavigate = (sectionId, tabId) => {
    if (tabId) {
      handleTabChange(sectionId, tabId);
    }

    setActiveSection(sectionId);

    window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <>
      <Navbar
        onNavigate={handleNavigate}
        activeSection={activeSection}
        activeTabs={activeTabs}
      />
      <Home />
      <Profile
        activeTab={activeTabs[PROFILE_SECTION_ID]}
        onTabChange={handleTabChange}
      />
      <Pendahuluan
        activeTab={activeTabs[PENDAHULUAN_SECTION_ID]}
        onTabChange={handleTabChange}
      />
      <Laporan 
      activeTab={activeTabs[LAPORAN_SECTION_ID]} 
      onTabChange={handleTabChange} />
      <Lampiran />
      <Footer />
    </>
  );
}

export default App;
