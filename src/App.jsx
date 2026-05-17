import { useEffect, useRef, useState } from "react";
import "./App.css";
import siteIcon from "./assets/icon.jpeg";
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

const HOME_SECTION_IDS = ["home", PROFILE_SECTION_ID, PENDAHULUAN_SECTION_ID, "contact"];
const PAGE_HOME = "home";
const PAGE_LAPORAN = LAPORAN_SECTION_ID;
const PAGE_LAMPIRAN = LAMPIRAN_SECTION_ID;

function getCurrentPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const page = searchParams.get("page");

  if (page === PAGE_LAPORAN || page === PAGE_LAMPIRAN) {
    return page;
  }

  return PAGE_HOME;
}

function buildPageUrl(page, sectionId) {
  if (page === PAGE_LAPORAN) {
    return "?page=laporan";
  }

  if (page === PAGE_LAMPIRAN) {
    return "?page=lampiran";
  }

  if (sectionId && sectionId !== "home") {
    return `#${sectionId}`;
  }

  return "#home";
}

function App() {
  const pendingHomeScrollRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(() => getCurrentPage());
  const [activeTabs, setActiveTabs] = useState(INITIAL_TABS);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const favicon =
      document.querySelector("link[rel='icon']") ??
      document.createElement("link");

    favicon.setAttribute("rel", "icon");
    favicon.setAttribute("type", "image/jpeg");
    favicon.setAttribute("href", siteIcon);

    if (!favicon.parentNode) {
      document.head.appendChild(favicon);
    }
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPage(getCurrentPage());
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const handleTabChange = (sectionId, tabId) => {
    setActiveTabs((previous) => ({
      ...previous,
      [sectionId]: tabId,
    }));
  };

  const getHeaderOffset = () => {
    const header = document.querySelector(".site-header");

    if (!header) {
      return 24;
    }

    return Math.ceil(header.getBoundingClientRect().height + 12);
  };

  const scrollToSection = (sectionId) => {
    window.requestAnimationFrame(() => {
      const sectionElement = document.getElementById(sectionId);

      if (!sectionElement) {
        return;
      }

      const sectionTop = sectionElement.getBoundingClientRect().top + window.scrollY;
      const targetTop = Math.max(sectionTop - getHeaderOffset(), 0);

      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    });
  };

  const openPage = (page) => {
    window.history.pushState(null, "", buildPageUrl(page));
    setCurrentPage(page);
    setActiveSection(page);

    window.requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  const handleNavigate = (sectionId, tabId) => {
    if (tabId) {
      handleTabChange(sectionId, tabId);
    }

    if (sectionId === LAPORAN_SECTION_ID) {
      openPage(PAGE_LAPORAN);
      return;
    }

    if (sectionId === LAMPIRAN_SECTION_ID) {
      openPage(PAGE_LAMPIRAN);
      return;
    }

    const targetSection = sectionId ?? "home";
    setActiveSection(targetSection);

    if (currentPage === PAGE_HOME) {
      window.history.pushState(null, "", buildPageUrl(PAGE_HOME, targetSection));
      scrollToSection(targetSection);
      return;
    }

    pendingHomeScrollRef.current = targetSection;
    window.history.pushState(null, "", buildPageUrl(PAGE_HOME, targetSection));
    setCurrentPage(PAGE_HOME);
  };

  useEffect(() => {
    if (currentPage !== PAGE_HOME) {
      setActiveSection(currentPage);
      return undefined;
    }

    const handleScroll = () => {
      const scrollMarker = window.scrollY + 160;
      let currentSection = "home";

      HOME_SECTION_IDS.forEach((sectionId) => {
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
  }, [currentPage]);

  useEffect(() => {
    if (currentPage !== PAGE_HOME) {
      return;
    }

    const hashTarget = window.location.hash.replace("#", "");
    const targetSection = pendingHomeScrollRef.current ?? hashTarget;

    if (!targetSection || !HOME_SECTION_IDS.includes(targetSection)) {
      return;
    }

    pendingHomeScrollRef.current = null;
    scrollToSection(targetSection);
  }, [currentPage]);

  return (
    <>
      <Navbar
        onNavigate={handleNavigate}
        activeSection={activeSection}
        activeTabs={activeTabs}
      />

      {currentPage === PAGE_HOME && (
        <>
          <Home onNavigate={handleNavigate} />
          <Profile
            activeTab={activeTabs[PROFILE_SECTION_ID]}
            onTabChange={handleTabChange}
          />
          <Pendahuluan
            activeTab={activeTabs[PENDAHULUAN_SECTION_ID]}
            onTabChange={handleTabChange}
          />
        </>
      )}

      {currentPage === PAGE_LAPORAN && (
        <Laporan
          activeTab={activeTabs[LAPORAN_SECTION_ID]}
          onTabChange={handleTabChange}
        />
      )}

      {currentPage === PAGE_LAMPIRAN && <Lampiran />}

      <Footer onNavigate={handleNavigate} />
    </>
  );
}

export default App;
