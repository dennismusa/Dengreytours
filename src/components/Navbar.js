
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Globe2,
  ArrowUpRight,
  MapPin,
  Images,
  CarFront,
  Package,
  House,
  Phone,
  Compass,
} from "lucide-react";

import safarilinklogo from "../assets/safarilinklogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  const desktopLangRef = useRef(null);
  const mobileLangRef = useRef(null);
  const desktopDestRef = useRef(null);

  const location = useLocation();
  const { t } = useTranslation();

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "fr", name: "French", flag: "🇫🇷" },
    { code: "de", name: "German", flag: "🇩🇪" },
    { code: "es", name: "Spanish", flag: "🇪🇸" },
  ];

  const destinations = [
    ["Aberdare National Park", "/aberdare"],
    ["Meru National Park", "/meru"],
    ["Amboseli National Park", "/amboseli"],
    ["Nairobi National Park", "/nairobipark"],
    ["Mount Kenya", "/mountkenya"],
    ["Hell’s Gate", "/hellsgate"],
    ["Tsavo East", "/tsavoeast"],
    ["Tsavo West", "/tsavowest"],
    ["Lake Nakuru", "/lakenakuru"],
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percentage =
        scrollHeight > 0
          ? (window.scrollY / scrollHeight) * 100
          : 0;

      setProgress(Math.min(100, Math.max(0, percentage)));
      setScrolled(window.scrollY > 30);
    };

    const handleOutsideClick = (event) => {
      if (
        desktopLangRef.current &&
        !desktopLangRef.current.contains(event.target) &&
        mobileLangRef.current &&
        !mobileLangRef.current.contains(event.target)
      ) {
        setLangOpen(false);
      }

      if (
        desktopDestRef.current &&
        !desktopDestRef.current.contains(event.target)
      ) {
        setDestOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleOutsideClick);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Close menus after route changes
  useEffect(() => {
    setMenuOpen(false);
    setDestOpen(false);
    setLangOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
    setLangOpen(false);
  };

  const current =
    languages.find((x) => x.code === i18n.language?.split("-")[0]) ||
    languages[0];

  const closeMobile = () => {
    setMenuOpen(false);
    setDestOpen(false);
    setLangOpen(false);
  };

  const navLinks = [
    { name: t("home"), path: "/", icon: House },
    { name: t("gallery"), path: "/gallery", icon: Images },
    { name: "Packages", path: "/packages", icon: Package },
    { name: t("vehicles"), path: "/vehicles", icon: CarFront },
    { name: t("contact"), path: "/contact", icon: Phone },
  ];

  const isActive = (path) => location.pathname === path;

  const languageMenu = (mobile = false) => (
    <div
      className={`absolute right-0 top-[calc(100%+14px)] z-[300] w-48 overflow-hidden rounded-2xl border border-white/10 bg-[#102219] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300 ${
        langOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-2 opacity-0"
      }`}
    >
      <p className="px-3 pb-2 pt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#d4af37]/70">
        Select Language
      </p>

      {languages.map((lang) => (
        <button
          key={lang.code}
          type="button"
          onClick={() => changeLanguage(lang.code)}
          className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-xs transition-colors ${
            current.code === lang.code
              ? "bg-[#d4af37]/10 text-[#e6c77e]"
              : "text-white/70 hover:bg-white/5 hover:text-white"
          }`}
        >
          <span className="flex items-center gap-3">
            <span className="text-base">{lang.flag}</span>
            {lang.name}
          </span>

          {current.code === lang.code && (
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
          )}
        </button>
      ))}
    </div>
  );

  return (
    <>
      {/* SCROLL PROGRESS */}
      <div className="fixed left-0 top-0 z-[500] h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-[#d4af37] transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* MAIN NAVBAR */}
      <nav
        className={`fixed left-0 top-0 z-[200] w-full border-b transition-all duration-500 ${
          scrolled
            ? "border-white/[0.08] bg-[#08150e]/95 py-1 shadow-[0_10px_35px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
            : "border-white/10 bg-[#08150e]/85 py-2 backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

          <div className="flex h-[72px] items-center justify-between">

            {/* BRAND */}
            <Link
              to="/"
              className="group flex shrink-0 items-center gap-3"
              aria-label="DenGray Safari Adventures Home"
            >
              <div className="relative">
                <img
                  src={safarilinklogo}
                  alt="DenGray Safari Adventures"
                  className="h-11 w-11 rounded-full border border-[#d4af37]/60 object-cover transition-transform duration-500 group-hover:rotate-6 sm:h-12 sm:w-12"
                />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#08150e] bg-[#d4af37]" />
              </div>

              <div className="leading-tight">
                <h2 className="font-serif text-xl font-semibold tracking-wide text-white sm:text-[22px]">
                  DenGray
                </h2>
                <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.25em] text-[#d4af37] sm:text-[9px]">
                  Safari Adventures
                </p>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden items-center gap-1 xl:flex">

              <Link
                to="/"
                className={`nav-link ${isActive("/") ? "nav-active" : ""}`}
              >
                {t("home")}
              </Link>

              {/* DESTINATIONS DROPDOWN */}
              <div
                ref={desktopDestRef}
                className="relative"
                onMouseEnter={() => setDestOpen(true)}
                onMouseLeave={() => setDestOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setDestOpen(!destOpen)}
                  aria-expanded={destOpen}
                  className={`nav-link flex items-center gap-2 ${
                    destinations.some(([, path]) => isActive(path))
                      ? "nav-active"
                      : ""
                  }`}
                >
                  {t("destinations")}
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-300 ${
                      destOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute left-0 top-full z-[300] w-[270px] pt-4 transition-all duration-300 ${
                    destOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#102219] p-3 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">

                    <div className="mb-2 border-b border-white/10 px-3 pb-3 pt-2">
                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#d4af37]">
                        Discover East Africa
                      </p>
                      <p className="mt-1 text-xs text-white/45">
                        Explore our destinations
                      </p>
                    </div>

                    <div className="grid grid-cols-1">
                      {destinations.map(([name, path]) => (
                        <Link
                          key={path}
                          to={path}
                          onClick={() => setDestOpen(false)}
                          className={`group flex items-center justify-between rounded-xl px-3 py-2.5 text-xs transition-all ${
                            isActive(path)
                              ? "bg-[#d4af37]/10 text-[#e5c47c]"
                              : "text-white/65 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <span className="flex items-center gap-2.5">
                            <MapPin
                              size={13}
                              className="text-[#d4af37]/70"
                            />
                            {name}
                          </span>
                          <ChevronRight
                            size={13}
                            className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                          />
                        </Link>
                      ))}
                    </div>

                  </div>
                </div>
              </div>

              {navLinks.slice(1).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${
                    isActive(item.path) ? "nav-active" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}

            </div>

            {/* DESKTOP ACTIONS */}
            <div className="hidden items-center gap-3 xl:flex">

              <div ref={desktopLangRef} className="relative">
                <button
                  type="button"
                  onClick={() => setLangOpen(!langOpen)}
                  aria-expanded={langOpen}
                  className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2.5 text-[11px] text-white/75 transition-colors hover:border-[#d4af37]/50 hover:text-white"
                >
                  <Globe2 size={14} className="text-[#d4af37]" />
                  {current.code.toUpperCase()}
                  <ChevronDown
                    size={12}
                    className={`transition-transform ${
                      langOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {languageMenu()}
              </div>

              <a
                href="https://wa.me/254112277671"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-[#d4af37] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#102015] transition-all duration-300 hover:bg-white"
              >
                {t("book")}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

            </div>

            {/* MOBILE ACTIONS */}
            <div className="flex items-center gap-3 xl:hidden">

              <div ref={mobileLangRef} className="relative">
                <button
                  type="button"
                  onClick={() => setLangOpen(!langOpen)}
                  aria-label="Select language"
                  aria-expanded={langOpen}
                  className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-2 text-[10px] font-semibold text-white"
                >
                  <span>{current.flag}</span>
                  {current.code.toUpperCase()}
                </button>

                {languageMenu(true)}
              </div>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                <Menu size={21} />
              </button>

            </div>

          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        onClick={closeMobile}
        className={`fixed inset-0 z-[250] bg-black/70 backdrop-blur-sm transition-all duration-500 xl:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* MOBILE DRAWER */}
      <aside
        aria-hidden={!menuOpen}
        className={`fixed right-0 top-0 z-[300] flex h-[100dvh] w-full max-w-[420px] flex-col overflow-y-auto border-l border-white/10 bg-[#09160e] shadow-2xl transition-transform duration-500 xl:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* DRAWER HEADER */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">

          <Link
            to="/"
            onClick={closeMobile}
            className="flex items-center gap-3"
          >
            <img
              src={safarilinklogo}
              alt="DenGray Safari Adventures"
              className="h-11 w-11 rounded-full border border-[#d4af37]/60 object-cover"
            />

            <div>
              <h2 className="font-serif text-xl font-semibold text-white">
                DenGray
              </h2>
              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#d4af37]">
                Safari Adventures
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={closeMobile}
            aria-label="Close navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/80 transition-colors hover:border-[#d4af37] hover:text-[#d4af37]"
          >
            <X size={21} />
          </button>

        </div>

        {/* DRAWER CONTENT */}
        <div className="flex-1 px-6 py-7">

          <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.25em] text-[#d4af37]">
            Navigation
          </p>

          <div className="space-y-2">

            {navLinks.slice(0, 1).map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobile}
                  className={`mobile-link ${
                    isActive(item.path) ? "mobile-active" : ""
                  }`}
                >
                  <Icon size={17} />
                  {item.name}
                  <ChevronRight size={15} className="ml-auto" />
                </Link>
              );
            })}

            {/* MOBILE DESTINATIONS */}
            <div>
              <button
                type="button"
                onClick={() => setDestOpen(!destOpen)}
                aria-expanded={destOpen}
                className="mobile-link w-full"
              >
                <Compass size={17} />
                {t("destinations")}
                <ChevronDown
                  size={16}
                  className={`ml-auto transition-transform ${
                    destOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  destOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="ml-5 mt-2 space-y-1 border-l border-[#d4af37]/30 pl-4">
                    {destinations.map(([name, path]) => (
                      <Link
                        key={path}
                        to={path}
                        onClick={closeMobile}
                        className={`block rounded-lg px-3 py-3 text-xs transition-colors ${
                          isActive(path)
                            ? "bg-[#d4af37]/10 text-[#e6c77e]"
                            : "text-white/55 hover:text-white"
                        }`}
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobile}
                  className={`mobile-link ${
                    isActive(item.path) ? "mobile-active" : ""
                  }`}
                >
                  <Icon size={17} />
                  {item.name}
                  <ChevronRight size={15} className="ml-auto" />
                </Link>
              );
            })}

          </div>

          {/* MOBILE BOOKING CTA */}
          <div className="mt-9 rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/[0.06] p-5">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
              Your next adventure awaits
            </span>

            <h3 className="mt-2 font-serif text-2xl text-white">
              Let's plan your safari.
            </h3>

            <p className="mt-2 text-xs leading-6 text-white/50">
              Speak with our team and start planning your East African journey.
            </p>

            <a
              href="https://wa.me/254112277671"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              className="mt-5 flex items-center justify-center gap-3 rounded-full bg-[#d4af37] px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#102015] transition-colors hover:bg-white"
            >
              {t("book")}
              <ArrowUpRight size={15} />
            </a>
          </div>

        </div>

        {/* DRAWER FOOTER */}
        <div className="border-t border-white/10 px-6 py-5">
          <p className="text-center text-[9px] uppercase tracking-[0.2em] text-white/35">
            DenGray Safari Adventures
          </p>
        </div>

      </aside>

      {/* COMPONENT STYLES */}
      <style>{`
        .nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 11px 10px;
          color: rgba(255,255,255,.67);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: .025em;
          transition: color .3s ease;
          white-space: nowrap;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 10px;
          right: 10px;
          bottom: 3px;
          height: 1px;
          background: #d4af37;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .3s ease;
        }

        .nav-link:hover,
        .nav-link.nav-active {
          color: #f0d28e;
        }

        .nav-link:hover::after,
        .nav-link.nav-active::after {
          transform: scaleX(1);
        }

        .mobile-link {
          display: flex;
          align-items: center;
          gap: 14px;
          border: 1px solid rgba(255,255,255,.06);
          border-radius: 13px;
          background: rgba(255,255,255,.035);
          padding: 16px;
          color: rgba(255,255,255,.78);
          font-size: 13px;
          transition: all .3s ease;
        }

        .mobile-link:hover,
        .mobile-link.mobile-active {
          border-color: rgba(212,175,55,.3);
          background: rgba(212,175,55,.08);
          color: #e6c77e;
        }

        @media (min-width: 1280px) and (max-width: 1350px) {
          .nav-link {
            padding-left: 7px;
            padding-right: 7px;
            font-size: 10px;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
