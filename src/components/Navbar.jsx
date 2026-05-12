import { useEffect, useRef, useState } from "react";
import logoSmk8 from "../assets/logo-smk-8-optimized.png";
import "../styles/Navbar.css";

const DESKTOP_BREAKPOINT = 992;

const NAV_ITEMS = [
    { label: "Home", sectionId: "home" },
    {
        label: "Profile",
        sectionId: "profile",
        children: [
            { label: "Profile Siswa", tabId: "siswa" },
            { label: "Profile Industri", tabId: "industri" },
        ],
    },
    {
        label: "Pendahuluan",
        sectionId: "pendahuluan",
        children: [
            { label: "Tujuan", tabId: "tujuan" },
            { label: "Manfaat", tabId: "manfaat" },
        ],
    },
    {
        label: "Laporan",
        sectionId: "laporan",
        children: [
            { label: "Kompetensi", tabId: "kompetensi" },
            { label: "Kesimpulan", tabId: "kesimpulan" },
        ],
    },
    { label: "Lampiran", sectionId: "lampiran" },
    { label: "Contact", sectionId: "contact" },
];

export default function Navbar({ onNavigate, activeSection, activeTabs }) {
    const navbarRef = useRef(null);
    const closeDropdownTimeoutRef = useRef(null);
    const [theme, setTheme] = useState(() => {
        if (typeof window === "undefined") {
            return "light";
        }

        const savedTheme = window.localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        return savedTheme ?? (systemPrefersDark ? "dark" : "light");
    });
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const isDesktopViewport = () => window.innerWidth >= DESKTOP_BREAKPOINT;

    const clearDropdownCloseTimeout = () => {
        if (closeDropdownTimeoutRef.current) {
            window.clearTimeout(closeDropdownTimeoutRef.current);
            closeDropdownTimeoutRef.current = null;
        }
    };

    const openDesktopDropdown = (sectionId) => {
        if (!isDesktopViewport()) {
            return;
        }

        clearDropdownCloseTimeout();
        setOpenDropdown(sectionId);
    };

    const closeDesktopDropdown = (sectionId) => {
        if (!isDesktopViewport()) {
            return;
        }

        clearDropdownCloseTimeout();
        closeDropdownTimeoutRef.current = window.setTimeout(() => {
            setOpenDropdown((currentDropdown) =>
                currentDropdown === sectionId ? null : currentDropdown,
            );
            closeDropdownTimeoutRef.current = null;
        }, 140);
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setOpenDropdown(null);
                setIsNavOpen(false);
            }
        };

        const handleResize = () => {
            if (isDesktopViewport()) {
                setIsNavOpen(false);
            } else {
                setOpenDropdown(null);
            }
        };

        document.addEventListener("click", handleClickOutside);
        window.addEventListener("resize", handleResize);

        return () => {
            document.removeEventListener("click", handleClickOutside);
            window.removeEventListener("resize", handleResize);
            clearDropdownCloseTimeout();
        };
    }, []);

    const handleNavigate = (sectionId, tabId) => {
        onNavigate(sectionId, tabId);
        setOpenDropdown(null);
        setIsNavOpen(false);
    };

    const handleThemeToggle = () => {
        setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
    };

    const handleDropdownToggle = (sectionId) => {
        setOpenDropdown((currentDropdown) => (currentDropdown === sectionId ? null : sectionId));
    };

    return (
        <header className="site-header sticky-top py-3">
            <div className="container site-header__container">
                <nav className="navbar navbar-expand-lg site-navbar px-3 px-lg-4 py-3" ref={navbarRef}>
                    <div className="container-fluid site-navbar__inner">
                        <button
                            className="navbar-brand d-inline-flex align-items-center gap-2 border-0 bg-transparent p-0"
                            type="button"
                            onClick={() => handleNavigate("home")}
                        >
                            <img
                                src={logoSmk8}
                                alt="Logo SMK 8"
                                width="32"
                                height="32"
                                className="site-navbar__brand-logo"
                                decoding="async"
                            />
                            <span>Fitri Rachmania H</span>
                        </button>

                        <button
                            className={`navbar-toggler ms-auto site-navbar__toggler ${isNavOpen ? "is-open" : ""}`}
                            type="button"
                            aria-controls="mainNavbar"
                            aria-expanded={isNavOpen}
                            aria-label="Toggle navigation"
                            onClick={() => setIsNavOpen((currentState) => !currentState)}
                        >
                            <span className="site-navbar__toggler-line" />
                            <span className="site-navbar__toggler-line" />
                            <span className="site-navbar__toggler-line" />
                        </button>

                        <div className={`collapse navbar-collapse site-navbar__collapse ${isNavOpen ? "show" : ""}`} id="mainNavbar">
                            <ul className="navbar-nav gap-lg-3 site-navbar__nav ms-auto">
                                {NAV_ITEMS.map((item) => {
                                    const isActive = activeSection === item.sectionId;
                                    const isDropdownOpen = openDropdown === item.sectionId;
                                    const dropdownItems = item.children
                                        ? [...item.children].sort((firstItem, secondItem) => {
                                            const activeTabId = activeTabs[item.sectionId];
                                            const firstIsActive = firstItem.tabId === activeTabId;
                                            const secondIsActive = secondItem.tabId === activeTabId;

                                            if (firstIsActive === secondIsActive) {
                                                return 0;
                                            }

                                            return firstIsActive ? -1 : 1;
                                        })
                                        : [];

                                    return (
                                        <li
                                            key={item.label}
                                            className={`nav-item site-navbar__item ${item.children ? "dropdown" : ""}`}
                                            onMouseEnter={() => {
                                                if (item.children) {
                                                    openDesktopDropdown(item.sectionId);
                                                }
                                            }}
                                            onMouseLeave={() => {
                                                if (item.children) {
                                                    closeDesktopDropdown(item.sectionId);
                                                }
                                            }}
                                        >
                                            {item.children ? (
                                                <>
                                                    <button
                                                        className={`nav-link site-navbar__link site-navbar__trigger border-0 bg-transparent ${isActive ? "is-active" : ""} ${isDropdownOpen ? "is-open" : ""}`}
                                                        type="button"
                                                        aria-expanded={isDropdownOpen}
                                                        onClick={() => handleDropdownToggle(item.sectionId)}
                                                    >
                                                        <span>{item.label}</span>
                                                        <span className="site-navbar__caret" aria-hidden="true" />
                                                    </button>

                                                    <ul
                                                        className={`dropdown-menu site-navbar__dropdown shadow-sm border-light-subtle ${isDropdownOpen ? "show" : ""}`}
                                                        onMouseEnter={() => openDesktopDropdown(item.sectionId)}
                                                        onMouseLeave={() => closeDesktopDropdown(item.sectionId)}
                                                    >
                                                        {dropdownItems.map((child) => {
                                                            const isChildActive = activeTabs[item.sectionId] === child.tabId;

                                                            return (
                                                                <li key={child.label}>
                                                                    <button
                                                                        className={`dropdown-item site-navbar__dropdown-item ${isChildActive ? "is-active" : ""}`}
                                                                        type="button"
                                                                        onClick={() => handleNavigate(item.sectionId, child.tabId)}
                                                                    >
                                                                        {child.label}
                                                                    </button>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </>
                                            ) : (
                                                <button
                                                    className={`nav-link site-navbar__link border-0 bg-transparent ${isActive ? "is-active" : ""}`}
                                                    type="button"
                                                    onClick={() => handleNavigate(item.sectionId)}
                                                >
                                                    {item.label}
                                                </button>
                                            )}
                                        </li>
                                    );
                                })}
                                <li className="nav-item theme-switch-item">
                                    <label className="theme-switch" aria-label="Toggle dark mode">
                                        <span className="theme-switch__sun" aria-hidden="true">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <g fill="currentColor">
                                                    <circle cx="12" cy="12" r="5" />
                                                    <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z" />
                                                </g>
                                            </svg>
                                        </span>
                                        <span className="theme-switch__moon" aria-hidden="true">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path
                                                    fill="currentColor"
                                                    d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
                                                />
                                            </svg>
                                        </span>
                                        <input
                                            id="theme-toggle"
                                            className="theme-switch__input"
                                            type="checkbox"
                                            aria-label="Toggle dark mode"
                                            checked={theme === "dark"}
                                            onChange={handleThemeToggle}
                                        />
                                        <span className="theme-switch__slider" />
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
