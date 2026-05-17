import "../styles/Footer.css";
import logo from "../assets/logo smk 8.png";

const FOOTER_LINKS = [
    { label: "Home", sectionId: "home" },
    { label: "Profile", sectionId: "profile" },
    { label: "Pendahuluan", sectionId: "pendahuluan" },
    { label: "Laporan", sectionId: "laporan" },
    { label: "Lampiran", sectionId: "lampiran" },
];

const SOCIAL_LINKS = [
    {
        label: "Portfolio",
        href: "https://fitri-portfolio-v3.vercel.app/",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm6.93 9h-3.12a15.66 15.66 0 0 0-1.16-4.33A8.03 8.03 0 0 1 18.93 11zM12 4.06c.83 1.01 1.9 3.09 2.42 6.94H9.58C10.1 7.15 11.17 5.07 12 4.06zM9.35 6.67A15.66 15.66 0 0 0 8.19 11H5.07a8.03 8.03 0 0 1 4.28-4.33zM5.07 13h3.12a15.66 15.66 0 0 0 1.16 4.33A8.03 8.03 0 0 1 5.07 13zM12 19.94c-.83-1.01-1.9-3.09-2.42-6.94h4.84c-.52 3.85-1.59 5.93-2.42 6.94zm2.65-2.61A15.66 15.66 0 0 0 15.81 13h3.12a8.03 8.03 0 0 1-4.28 4.33z"
                />
            </svg>
        ),
        variant: "portfolio",
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/xnrzfii_ran?igsh=MWV1Y3o3MGZvZjFtZQ==",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm5-3.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17 6.25z"
                />
            </svg>
        ),
        variant: "instagram",
    },
    {
        label: "Email",
        href: "mailto:fitrirachmania29@gmail.com",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.4l8 5.33 8-5.33V7l-8 5.33zm16 10V9.8l-7.45 4.97a1 1 0 0 1-1.1 0L4 9.8V17z"
                />
            </svg>
        ),
        variant: "email",
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/6282330717123",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M12 2a10 10 0 0 0-8.76 14.82L2 22l5.33-1.22A10 10 0 1 0 12 2zm0 18a7.94 7.94 0 0 1-4.05-1.11l-.29-.17-3.16.72.75-3.08-.19-.31A8 8 0 1 1 12 20zm4.37-5.55c-.24-.12-1.4-.69-1.62-.77s-.38-.12-.54.12-.61.77-.75.93-.27.18-.51.06a6.53 6.53 0 0 1-1.92-1.18 7.22 7.22 0 0 1-1.33-1.65c-.14-.24 0-.37.11-.49l.35-.41a1.89 1.89 0 0 0 .25-.43.47.47 0 0 0 0-.45c-.06-.12-.54-1.3-.74-1.77s-.4-.39-.54-.4h-.46a.88.88 0 0 0-.63.29 2.67 2.67 0 0 0-.83 2 4.65 4.65 0 0 0 1 2.48 10.63 10.63 0 0 0 4.08 3.61 13.86 13.86 0 0 0 1.36.5 3.27 3.27 0 0 0 1.5.09 2.44 2.44 0 0 0 1.59-1.12 1.93 1.93 0 0 0 .14-1.12c-.06-.08-.22-.14-.46-.26z"
                />
            </svg>
        ),
        variant: "whatsapp",
    },
];

export default function Footer({ onNavigate }) {
    return (
        <section id="contact" data-aos="fade-up" data-aos-once="true">
            <footer className="container footer-shell">
                <div className="site-footer">
                    <div className="site-footer__top">
                        <button
                            type="button"
                            className="site-footer__brand site-footer__brand-button"
                            onClick={() => onNavigate("home")}
                        >
                            <img
                                src={logo}
                                alt="Logo SMK Negeri 8 Malang"
                                className="site-footer__brand-logo"
                                width="44"
                                height="44"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="site-footer__brand-copy">
                                <h3 className="site-footer__title">Laporan PKL</h3>
                            </div>
                        </button>

                        <nav className="site-footer__nav" aria-label="Footer navigation">
                            {FOOTER_LINKS.map((link) => (
                                <button
                                    key={link.label}
                                    type="button"
                                    className="site-footer__link"
                                    onClick={() => onNavigate(link.sectionId)}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </nav>

                        <div className="site-footer__social" aria-label="Social media links">
                            {SOCIAL_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={`site-footer__social-button site-footer__social-button--${link.variant}`}
                                    target={link.href.startsWith("http") || link.href.startsWith("mailto:") ? "_blank" : undefined}
                                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="site-footer__bottom">
                        <p className="site-footer__copyright">
                            Copyright © 2026 Fitri Rachmania Harianto. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    );
}
