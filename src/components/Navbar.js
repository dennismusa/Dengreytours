/* eslint-disable jsx-a11y/alt-text */

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

import safarilinklogo from "../assets/safarilinklogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  const langRef = useRef();
  const { t } = useTranslation();

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "fr", name: "French", flag: "🇫🇷" },
    { code: "de", name: "German", flag: "🇩🇪" },
    { code: "es", name: "Spanish", flag: "🇪🇸" }
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
    ["Lake Nakuru", "/lakenakuru"]
  ];

  useEffect(() => {
    const scroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;

      setProgress((window.scrollY / height) * 100);
      setScrolled(window.scrollY > 40);
    };

    const close = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };

    window.addEventListener("scroll", scroll);
    document.addEventListener("click", close);

    return () => {
      window.removeEventListener("scroll", scroll);
      document.removeEventListener("click", close);
    };
  }, []);

  const changeLanguage = (code, e) => {
    e.stopPropagation();
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
    setLangOpen(false);
  };

  const current = languages.find((x) => x.code === i18n.language) || languages[0];

  const closeMobile = () => {
    setMenuOpen(false);
    setDestOpen(false);
  };

  return (
    <>
      {/* SCROLL BAR */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[999]">
        <div className="h-full bg-yellow-400 transition-all" style={{ width: `${progress}%` }} />
      </div>

      <nav className={`fixed top-0 left-0 w-full z-[100] border-b border-white/10 backdrop-blur-xl transition-all duration-500 ${scrolled ? "bg-[#151515] py-2" : "bg-[#151515] py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="h-20 flex items-center justify-between">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3">
              <img src={safarilinklogo} className="w-11 h-11 rounded-full border border-yellow-400 object-cover" />

              <div>
                <h2 className="text-yellow-300 font-bold">DenGray </h2>
                <p className="text-yellow-400 text-xs">Safari Adventures</p>
              </div>
            </Link>

            {/* DESKTOP */}
            <div className="hidden md:flex items-center gap-4">

              <Link to="/" className="navBtn">{t("home")}</Link>

              <div className="relative" onMouseEnter={() => setDestOpen(true)} onMouseLeave={() => setDestOpen(false)}>

                <button className="navBtn">
                  {t("destinations")} ▾
                </button>

                {destOpen && (
                  <div className="dropMenu">
                    <div className="titleDrop">Explore Parks</div>

                    {destinations.map(([name, path]) => (
                      <Link key={path} to={path} className="dropItem">
                        {name}
                      </Link>
                    ))}
                  </div>
                )}

              </div>

              <Link to="/gallery" className="navBtn">{t("gallery")}</Link>

              <Link to="/packages" className="navBtn">
                Packages
              </Link>

              <Link to="/vehicles" className="navBtn">{t("vehicles")}</Link>

              <Link to="/contact" className="navBtn">{t("contact")}</Link>

              {/* LANGUAGE */}
              <div ref={langRef} className="relative">

                <button
                  className="navBtn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLangOpen(!langOpen);
                  }}
                >
                  {current.flag} {current.name}
                </button>

                <div className={`dropMenu right-0 w-40 ${langOpen ? "show" : "hide"}`}>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="dropItem w-full text-left"
                      onClick={(e) => changeLanguage(lang.code, e)}
                    >
                      {lang.flag} {lang.name}
                    </button>
                  ))}
                </div>

              </div>

              <a href="https://wa.me/+254112277671" className="bg-yellow-400 text-black px-5 py-3 rounded-full font-bold">
                {t("book")}
              </a>

            </div>

            {/* MOBILE */}
            <div className="md:hidden flex items-center gap-3">

              <div ref={langRef} className="relative">

                <button
                  className="mobileLang"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLangOpen(!langOpen);
                  }}
                >
                  {current.flag} {current.code.toUpperCase()}
                </button>

                <div className={`dropMenu right-0 w-40 ${langOpen ? "show" : "hide"}`}>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="dropItem w-full text-left"
                      onClick={(e) => changeLanguage(lang.code, e)}
                    >
                      {lang.flag} {lang.name}
                    </button>
                  ))}
                </div>

              </div>

              <button onClick={() => setMenuOpen(true)} className="text-white text-3xl">
                ☰
              </button>

            </div>

          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={closeMobile}
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[180] transition-all duration-500 md:hidden ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* MOBILE DRAWER */}
      <div className={`fixed top-0 right-0 h-screen w-full bg-[#0d0d0d] z-[200] transition-all duration-500 overflow-y-auto md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>

        <div className="p-5 flex justify-between items-center border-b border-white/10">

          <div className="flex items-center gap-3">
            <img src={safarilinklogo} className="w-12 h-12 rounded-full border border-yellow-400" />

            <div>
              <h2 className="text-white font-bold">DenGray </h2>
              <p className="text-yellow-400 text-xs">Safari Adventures</p>
            </div>
          </div>

          <button onClick={closeMobile} className="text-white text-4xl">
            ✕
          </button>

        </div>

        <div className="p-6 space-y-4">

          <Link to="/" onClick={closeMobile} className="menuBtn">
            🏠 {t("home")}
          </Link>

          <button onClick={() => setDestOpen(!destOpen)} className="menuBtn justify-between">
            🌍 {t("destinations")} <span>⌄</span>
          </button>

          {destOpen && (
            <div className="bg-[#1a1a1a] p-4 rounded-2xl">

              {destinations.map(([name, path]) => (
                <Link key={path} to={path} onClick={closeMobile} className="block py-3 text-gray-300">
                  🦁 {name}
                </Link>
              ))}

            </div>
          )}

          <Link to="/gallery" onClick={closeMobile} className="menuBtn">
            📸 {t("gallery")}
          </Link>

          <Link to="/packages" onClick={closeMobile} className="menuBtn">
            📦 Packages
          </Link>

          <Link to="/vehicles" onClick={closeMobile} className="menuBtn">
            🚙 {t("vehicles")}
          </Link>

          <Link to="/contact" onClick={closeMobile} className="menuBtn">
            📞 {t("contact")}
          </Link>

        </div>

      </div>

      <style>{`
        .navBtn{
          color:white;
          padding:10px 14px;
          border-radius:12px;
          background:#222;
          transition:.3s;
        }

        .navBtn:hover{
          background:#333;
          color:#facc15;
        }

        .mobileLang{
          background:#222;
          padding:8px 14px;
          border-radius:999px;
          color:white;
          font-size:12px;
          border:1px solid rgba(255,255,255,.2);
        }

        .dropMenu{
          position:absolute;
          top:48px;
          background:#151515;
          border-radius:14px;
          overflow:hidden;
          border:1px solid rgba(255,255,255,.1);
          box-shadow:0 20px 40px #000;
        }

        .dropItem{
          display:block;
          padding:12px 16px;
          color:#ddd;
        }

        .dropItem:hover{
          background:#fff;
          color:#111;
        }

        .menuBtn{
          display:flex;
          align-items:center;
          padding:18px;
          border-radius:18px;
          background:#1b1b1b;
          color:white;
          border:1px solid rgba(255,255,255,.08);
        }

        .show{
          opacity:1;
        }

        .hide{
          opacity:0;
          pointer-events:none;
        }
      `}</style>
    </>
  );
}

export default Navbar;