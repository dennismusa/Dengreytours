/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useLanguageSync from "../hooks/useLanguageSync";
import { useTranslation } from "react-i18next";

//import cruiser1 from "../assets/cruiser1.jpg";
import cruiser2 from "../assets/cruiser2.jpg";
import image1 from "../assets/image1.jpg";
import nakuru from "../assets/nakuru.jpg";
import image16 from "../assets/image16.jpg";
import image4 from "../assets/image4.jpg";
import image2 from "../assets/image2.jpg";
import west from "../assets/west.jpg";
import amboseli from "../assets/amboseli.jpg";
import climbingkenya from "../assets/climbingkenya.jpg";
import climbinglongonot from "../assets/climbinglongonot.jpg";
import climbingkili from "../assets/climbingkili.jpg";
import meru from "../assets/meru.jpg";
import hellsgate from "../assets/hellsgate.jpg";
import gorilla from "../assets/gorilla.jpg";
import serengeti from "../assets/serengeti.jpg";
import tanzania from "../assets/tanzania.jpg";
import Wilderbeast from "../assets/Wilderbeast.jpg";
import kenya from "../assets/kenya.jpg";
import image17 from "../assets/image17.jpg";

import poster1 from "../assets/poster1.jpg";
import poster2 from "../assets/poster2.jpg";

function Home() {
  useLanguageSync();
  const images = [meru, kenya,amboseli,Wilderbeast];
  const [index, setIndex] = useState(0);
const aboutImages = [cruiser2,image17,image16,nakuru,west,amboseli];
const [aboutIndex,setAboutIndex]=useState(0);
const [smallAboutIndex,setSmallAboutIndex]=useState(1);


  // ================= REVIEWS STATE =================
  const [reviews, setReviews] = useState([]);
   const { t, i18n } = useTranslation();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  
const [loading, setLoading] = useState(false);
const [loadingReviews, setLoadingReviews] = useState(false);
const [success, setSuccess] = useState(false);

const safariPackages = [
  {
    titleKey: "safariPackages.wildebeest.title",
    locationKey: "safariPackages.wildebeest.location",
    durationKey: "safariPackages.wildebeest.duration",
    departureKey: "safariPackages.wildebeest.departure",

    prices: {
      citizens: "KSh. 30,860",
      nonResidents: "USD 693",
    },

    accommodationKey: "safariPackages.wildebeest.accommodation",

    activitiesKeys: [
      "safariPackages.wildebeest.activities.0",
      "safariPackages.wildebeest.activities.1",
      "safariPackages.wildebeest.activities.2"
    ],

    includedKeys: [
      "safariPackages.wildebeest.included.0",
      "safariPackages.wildebeest.included.1",
      "safariPackages.wildebeest.included.2",
      "safariPackages.wildebeest.included.3",
      "safariPackages.wildebeest.included.4"
    ],

    excludedKeys: [
      "safariPackages.wildebeest.excluded.0",
      "safariPackages.wildebeest.excluded.1",
      "safariPackages.wildebeest.excluded.2"
    ]
  },

  {
    titleKey: "safariPackages.nakuru.title",
    locationKey: "safariPackages.nakuru.location",
    durationKey: "safariPackages.nakuru.duration",
    departureKey: "safariPackages.nakuru.departure",

    prices: {
      citizens: "KSh. 19,700",
      nonResidents: "USD 273",
    },

    accommodationKey: "safariPackages.nakuru.accommodation",

    activitiesKeys: [
      "safariPackages.nakuru.activities.0",
      "safariPackages.nakuru.activities.1",
      "safariPackages.nakuru.activities.2",
      "safariPackages.nakuru.activities.3"
    ],

    includedKeys: [
      "safariPackages.nakuru.included.0",
      "safariPackages.nakuru.included.1",
      "safariPackages.nakuru.included.2",
      "safariPackages.nakuru.included.3",
      "safariPackages.nakuru.included.4"
    ],

    excludedKeys: [
      "safariPackages.nakuru.excluded.0",
      "safariPackages.nakuru.excluded.1",
      "safariPackages.nakuru.excluded.2"
    ]
  }
];
  // ================= SLIDER =================
  useEffect(()=>{

const slider=setInterval(()=>{

// HERO SLIDER
setIndex(prev=>(prev + 1) % images.length);

// ABOUT SLIDER
setAboutIndex(prev=>(prev + 1) % aboutImages.length);
setSmallAboutIndex(prev=>(prev + 1) % aboutImages.length);

},4000);



    return () => clearInterval(slider);
  }, [aboutImages.length, images.length]);

  // ================= SUBMIT REVIEW (IMPORTANT PART 2) =================
 
// instantly update UI

  
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">


      
<section id="home" className="relative min-h-[65vh] lg:min-h-[75vh] flex items-center overflow-hidden">
{/* IMAGE SLIDER */}
<div className="absolute inset-0">
{images.map((img,i)=>(
<div
key={i}
className="absolute inset-0 transition-all duration-[3500ms] ease-in-out"
style={{
backgroundImage:`url(${img})`,
backgroundSize:"cover",
backgroundPosition:"center",
opacity:i===index?1:0,
transform:i===index?"scale(1)":"scale(1.06)"
}}
/>

))}

</div>
{/* DARK LAYERS */}

<div className="absolute inset-0 bg-black/50"/>

<div className="absolute inset-0 bg-gradient-to-r from-[#022c22]/95 via-black/60 to-transparent"/>

<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"/>
{/* ANIMATED LIGHT */}

<div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse"/>

<div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[130px]"/>
{/* CONTENT */}

<div className="relative z-20 max-w-7xl mx-auto px-5 md:px-8 w-full">


<div className="max-w-2xl text-white">
{/* BADGE */}

<div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-emerald-300/30 mb-5 animate-bounce">
<div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"/>
<span className="text-[10px] md:text-xs uppercase tracking-[4px] text-emerald-200">

DenGrey Tours & Safaris
</span></div>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight max-w-xl drop-shadow-xl">

{t("heroTitle")}

</h1>
<p className="mt-4 text-gray-200 text-sm sm:text-base leading-7 max-w-lg">

{t("heroDesc")}

</p>{/* ACTION BUTTONS */}
<div className="mt-6 flex flex-col sm:flex-row gap-3">

</div>
{/* TRUST TAGS */}
<div className="mt-8 flex flex-wrap gap-3">
</div></div></div>
{/* SLIDER DOTS */}

<div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">

{images.map((_,i)=>(

<button

key={i}

onClick={()=>setIndex(i)}

className={`rounded-full transition-all duration-700 ${
i===index
?
"h-12 w-2 bg-yellow-400 shadow-lg shadow-yellow-400/50"
:
"h-2 w-2 bg-white/40 hover:bg-white"
}`}

/>

))}
</div>
{/* BOTTOM GLASS PANEL */}

</section>


      {/* ABOUT / EXPERIENCE SECTION */}
{/* ABOUT / EXPERIENCE SECTION */}
<section className="relative py-28 overflow-hidden bg-[#F6FAF8]">

  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-40"></div>

  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-[1fr_1.1fr] gap-20 items-center">

      {/* IMAGE SIDE */}
      <div className="relative">

        <div className="group overflow-hidden rounded-[40px] shadow-2xl relative">

          <img
            src={aboutImages[aboutIndex]}
            alt={t("aboutTitle")}
            className="w-full h-[520px] object-cover transition-all duration-[2000ms] group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent"></div>

        </div>

        <div className="hidden md:block absolute -bottom-10 -right-10 w-[230px] h-[280px] overflow-hidden rounded-[30px] border-[8px] border-white shadow-2xl">

          <img
            src={poster1}
            alt={t("aboutTitle")}
            className="w-full h-full object-cover hover:scale-110 transition duration-[2000ms]"
          />

        </div>

        <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-xl px-6 py-5 rounded-3xl shadow-xl">

          <h2 className="text-4xl font-black text-emerald-500">
            10+
          </h2>

          <p className="text-gray-700 text-sm">
            {t("yearsExperience")}
          </p>

        </div>

      </div>

      {/* CONTENT SIDE */}
      <div>

        <span className="uppercase tracking-[5px] text-emerald-500 font-bold">

          {t("aboutLabel")}

        </span>

        <h2 className="text-4xl md:text-6xl font-black leading-tight mt-6 text-gray-900">

          {t("aboutHeading1")}

          <span className="block text-emerald-500">

            {t("aboutHeading2")}

          </span>

        </h2>

        <p className="mt-8 text-gray-600 leading-8 text-lg">

          {t("aboutDescription")}

          <br />
          <br />

          {t("aboutDescription2")}

        </p>

        {/* FEATURES */}

        <div className="space-y-6 mt-10">

          <div className="flex items-start gap-4">

            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-2xl">
              🚙
            </div>

            <div>

              <h3 className="font-bold text-lg">
                {t("luxuryVehicles")}
              </h3>

              <p className="text-gray-600">
                {t("luxuryVehiclesDesc")}
              </p>

            </div>

          </div>

          <div className="flex items-start gap-4">

            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-2xl">
              🦁
            </div>

            <div>

              <h3 className="font-bold text-lg">
                {t("professionalGuides")}
              </h3>

              <p className="text-gray-600">
                {t("professionalGuidesDesc")}
              </p>

            </div>

          </div>

          <div className="flex items-start gap-4">

            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-2xl">
              🌍
            </div>

            <div>

              <h3 className="font-bold text-lg">
                {t("eastAfricaAdventure")}
              </h3>

              <p className="text-gray-600">
                {t("eastAfricaAdventureDesc")}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

{/* ============================================================
    PREMIUM SAFARI PACKAGES — MULTI-LANGUAGE
    Supports: EN / DE / ES / FR
============================================================ */}



{/* ============================================================
    PREMIUM SAFARI PACKAGES
============================================================ */}
{/* ============================================================
    PREMIUM SAFARI PACKAGES — MULTI-LANGUAGE
============================================================ */}

<section className="relative overflow-hidden bg-[#f8f5ee] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">

  {/* ============================================================
      DECORATIVE BACKGROUND
  ============================================================ */}
  <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#dba33a]/10 blur-3xl" />

  <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-[#082d19]/10 blur-3xl" />


  <div className="relative mx-auto max-w-7xl">

    {/* ============================================================
        SECTION HEADER
    ============================================================ */}
    <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">

      <div className="mb-4 flex items-center justify-center gap-3">

        <span className="h-px w-8 bg-[#b98220]" />

        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#b98220] sm:text-xs">
          {t("safariPackages.label")}
        </span>

        <span className="h-px w-8 bg-[#b98220]" />

      </div>


      <h2 className="font-serif text-3xl font-semibold leading-tight text-[#082d19] sm:text-4xl md:text-5xl lg:text-6xl">

        {t("safariPackages.title")}

        <span className="block text-[#b98220]">
          {t("safariPackages.titleHighlight")}
        </span>

      </h2>


      <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600 sm:mt-5 sm:text-base sm:leading-7">
        {t("safariPackages.description")}
      </p>

    </div>


    {/* ============================================================
        SAFARI CARDS
    ============================================================ */}
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">

      {safariPackages.map((safari, index) => {

        /*
          Support BOTH structures:

          Old:
          safari.title
          safari.location
          safari.activities
          safari.included
          safari.excluded

          New:
          safari.titleKey
          safari.locationKey
          safari.activitiesKeys
          safari.includedKeys
          safari.excludedKeys
        */

        const safariTitle = safari.titleKey
          ? t(safari.titleKey)
          : safari.title;

        const safariLocation = safari.locationKey
          ? t(safari.locationKey)
          : safari.location;

        const safariDuration = safari.durationKey
          ? t(safari.durationKey)
          : safari.duration;

        const safariDeparture = safari.departureKey
          ? t(safari.departureKey)
          : safari.departure;

        const safariAccommodation = safari.accommodationKey
          ? t(safari.accommodationKey)
          : safari.accommodation;


        const activities = safari.activitiesKeys
          ? safari.activitiesKeys.map((key) => t(key))
          : safari.activities || [];


        const includedItems = safari.includedKeys
          ? safari.includedKeys.map((key) => t(key))
          : safari.included || [];


        const excludedItems = safari.excludedKeys
          ? safari.excludedKeys.map((key) => t(key))
          : safari.excluded || [];


        return (

          <article
            key={index}
            className="group flex min-w-0 flex-col overflow-hidden rounded-[1.5rem] border border-[#e3dbce] bg-white shadow-[0_15px_50px_rgba(8,45,25,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(8,45,25,0.12)] sm:rounded-[2rem]"
          >

            {/* ==================================================
                LARGE SAFARI IMAGE
            ================================================== */}
            <div className="relative h-80 w-full overflow-hidden sm:h-[420px] lg:h-[500px]">

              <img
                src={index === 0 ? poster1 : poster2}
                alt={safariTitle}
                className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
              />


              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#03160c]/95 via-[#03160c]/20 to-transparent" />


              {/* DURATION */}
              <div className="absolute left-5 top-5 sm:left-7 sm:top-7">

                <span className="rounded-full border border-white/25 bg-black/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md sm:px-5 sm:text-xs">
                  {safariDuration}
                </span>

              </div>


              {/* IMAGE CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">

                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f3c45d] sm:text-xs">
                  {safariLocation}
                </p>


                <h3 className="max-w-2xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  {safariTitle}
                </h3>


                <div className="mt-3 flex items-center gap-2 text-xs text-white/75 sm:text-sm">

                  <span className="text-[#f3c45d]">
                    📍
                  </span>

                  <span>
                    {safariDeparture}
                  </span>

                </div>

              </div>

            </div>


            {/* ==================================================
                CARD BODY
            ================================================== */}
            <div className="flex flex-1 flex-col p-5 sm:p-7 lg:p-8">


              {/* ==================================================
                  PRICES
              ================================================== */}
              <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-[#e6ded1]">


                {/* CITIZENS */}
                <div className="bg-[#faf8f3] p-4 sm:p-5">

                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-500 sm:text-[10px]">
                    {t("safariPackages.citizens")}
                  </p>


                  <p className="mt-2 break-words font-serif text-xl font-bold text-[#082d19] sm:text-2xl">
                    {safari.prices?.citizens || "-"}
                  </p>


                  <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                    {t("safariPackages.perPerson")}
                  </p>

                </div>


                {/* NON RESIDENTS */}
                <div className="bg-[#082d19] p-4 sm:p-5">

                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/60 sm:text-[10px]">
                    {t("safariPackages.nonResidents")}
                  </p>


                  <p className="mt-2 break-words font-serif text-xl font-bold text-[#f3c45d] sm:text-2xl">
                    {safari.prices?.nonResidents || "-"}
                  </p>


                  <p className="mt-1 text-[10px] text-white/50 sm:text-xs">
                    {t("safariPackages.perPerson")}
                  </p>

                </div>

              </div>


              {/* ==================================================
                  ACCOMMODATION
              ================================================== */}
              <div className="mt-5 flex items-start gap-3 rounded-2xl bg-[#f4f1e9] p-4 sm:mt-6 sm:p-5">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#082d19] text-lg">
                  🛖
                </div>


                <div className="min-w-0">

                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#b98220] sm:text-[10px]">
                    {t("safariPackages.accommodation")}
                  </p>


                  <p className="mt-1 text-xs font-medium leading-5 text-[#082d19] sm:text-sm">
                    {safariAccommodation}
                  </p>

                </div>

              </div>


              {/* ==================================================
                  ITINERARY
              ================================================== */}
              <div className="mt-7 sm:mt-8">

                <div className="flex items-center gap-3">

                  <h4 className="whitespace-nowrap font-serif text-xl font-semibold text-[#082d19] sm:text-2xl">
                    {t("safariPackages.itinerary")}
                  </h4>

                  <div className="h-px flex-1 bg-[#e5ddd0]" />

                </div>


                <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">

                  {activities.map((activity, i) => (

                    <div
                      key={i}
                      className="flex gap-3 rounded-xl border border-[#eee7db] bg-[#fcfaf6] p-3 sm:gap-4 sm:p-4"
                    >

                      {/* NUMBER */}
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#082d19] text-[9px] font-bold text-[#f3c45d] sm:h-8 sm:w-8 sm:text-[10px]">
                        {i + 1}
                      </div>


                      {/* ACTIVITY */}
                      <p className="min-w-0 text-xs leading-5 text-gray-600 sm:text-sm sm:leading-6">
                        {activity}
                      </p>

                    </div>

                  ))}

                </div>

              </div>


              {/* ==================================================
                  INCLUDED / EXCLUDED
              ================================================== */}
              <div className="mt-7 grid gap-6 border-t border-[#e8dfd2] pt-7 sm:mt-8 sm:pt-8 md:grid-cols-2">


                {/* ==================================================
                    INCLUDED
                ================================================== */}
                <div>

                  <div className="mb-4 flex items-center gap-2">

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eaf3eb] text-xs font-bold text-[#2f7d4a]">
                      ✓
                    </span>


                    <h4 className="font-serif text-lg font-semibold text-[#082d19]">
                      {t("safariPackages.included")}
                    </h4>

                  </div>


                  <div className="space-y-2.5">

                    {includedItems.map((item, i) => (

                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs leading-5 text-gray-600 sm:text-sm"
                      >

                        <span className="mt-0.5 text-[#2f7d4a]">
                          ✓
                        </span>


                        <span className="min-w-0">
                          {item}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>


                {/* ==================================================
                    EXCLUDED
                ================================================== */}
                <div>

                  <div className="mb-4 flex items-center gap-2">

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-xs font-bold text-red-400">
                      ×
                    </span>


                    <h4 className="font-serif text-lg font-semibold text-[#082d19]">
                      {t("safariPackages.excluded")}
                    </h4>

                  </div>


                  <div className="space-y-2.5">

                    {excludedItems.map((item, i) => (

                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs leading-5 text-gray-500 sm:text-sm"
                      >

                        <span className="mt-0.5 text-red-400">
                          ×
                        </span>


                        <span className="min-w-0">
                          {item}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </div>


              {/* ==================================================
                  BOOKING CTA
              ================================================== */}
              <div className="mt-7 border-t border-[#e8dfd2] pt-6 sm:mt-8 sm:pt-7">

                <a
                  href={`https://wa.me/254112277671?text=${encodeURIComponent(
                    `${t("safariPackages.whatsappMessage")} ${safariTitle}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-[#082d19] px-5 py-3.5 text-xs font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#0d4825] hover:shadow-xl sm:px-6 sm:py-4 sm:text-sm"
                >

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-sm">
                    💬
                  </span>


                  <span>
                    {t("safariPackages.book")}
                  </span>


                  <span className="ml-auto text-lg text-[#f3c45d]">
                    →
                  </span>

                </a>


                <p className="mt-3 text-center text-[10px] leading-4 text-gray-400 sm:text-xs">
                  {t("safariPackages.whatsappNote")}
                </p>

              </div>

            </div>

          </article>

        );

      })}

    </div>


    {/* ============================================================
        BOTTOM CTA
    ============================================================ */}
    <div className="mt-10 overflow-hidden rounded-[1.5rem] bg-[#082d19] px-5 py-9 text-center sm:mt-14 sm:rounded-[2rem] sm:px-10 sm:py-12">

      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#dba33a] sm:text-xs sm:tracking-[0.3em]">
        {t("safariPackages.bottomLabel")}
      </p>


      <h3 className="mt-3 font-serif text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
        {t("safariPackages.bottomTitle")}
      </h3>


      <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-white/60 sm:text-sm sm:leading-6">
        {t("safariPackages.bottomDescription")}
      </p>


      <a
        href={`https://wa.me/254112277671?text=${encodeURIComponent(
          t("safariPackages.bottomWhatsappMessage")
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#dba33a] px-6 py-3 text-xs font-bold text-[#082d19] transition hover:bg-[#f0bd50] sm:px-7 sm:py-3.5 sm:text-sm"
      >

        {t("safariPackages.chatWhatsapp")}

        <span>
          →
        </span>

      </a>

    </div>

  </div>

</section>

{/* ================= PREMIUM SERVICES ================= */}
<section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#F8F6F1] via-[#FCFBF8] to-[#EFE9DE]">

  {/* Background */}
  <div className="absolute -top-44 left-0 w-[500px] h-[500px] bg-emerald-300/20 blur-[140px] rounded-full"></div>
  <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] bg-yellow-300/20 blur-[140px] rounded-full"></div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

    {/* Header */}
    {/* Header */}

    <div className="text-center max-w-3xl mx-auto mb-20">

      <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full uppercase tracking-[3px] text-xs font-bold">
        {t("premiumServices")}
      </span>

      <h2 className="mt-6 text-5xl md:text-6xl font-black">
        {t("servicesHeading1")}
        <span className="block text-[#C8A94C]">
          {t("servicesHeading2")}
        </span>
      </h2>

      <p className="mt-7 text-gray-600 text-lg leading-8">
        {t("servicesDescription")}
      </p>

    </div>
    {/* Cards */}
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

      {[
        
  {
    icon: "🦁",
    color: "from-emerald-500 to-green-700",
    title: t("serviceSafariTitle"),
    desc: t("serviceSafariDesc"),
    features: [
      t("serviceSafariFeature1"),
      t("serviceSafariFeature2"),
      t("serviceSafariFeature3"),
      t("serviceSafariFeature4"),
    ],
    perfect: t("serviceSafariPerfect"),
  },
  {
    icon: "🏨",
    color: "from-yellow-500 to-orange-500",
    title: t("serviceHotelTitle"),
    desc: t("serviceHotelDesc"),
    features: [
      t("serviceHotelFeature1"),
      t("serviceHotelFeature2"),
      t("serviceHotelFeature3"),
      t("serviceHotelFeature4"),
    ],
    perfect: t("serviceHotelPerfect"),
  },
  {
    icon: "🤝",
    color: "from-blue-500 to-cyan-600",
    title: t("serviceCorporateTitle"),
    desc: t("serviceCorporateDesc"),
    features: [
      t("serviceCorporateFeature1"),
      t("serviceCorporateFeature2"),
      t("serviceCorporateFeature3"),
      t("serviceCorporateFeature4"),
    ],
    perfect: t("serviceCorporatePerfect"),
  },
  {
    icon: "✈️",
    color: "from-purple-500 to-indigo-600",
    title: t("serviceTransferTitle"),
    desc: t("serviceTransferDesc"),
    features: [
      t("serviceTransferFeature1"),
      t("serviceTransferFeature2"),
      t("serviceTransferFeature3"),
      t("serviceTransferFeature4"),
    ],
    perfect: t("serviceTransferPerfect"),
  },
  {
    icon: "🚙",
    color: "from-red-500 to-orange-600",
    title: t("serviceCarTitle"),
    desc: t("serviceCarDesc"),
    features: [
      t("serviceCarFeature1"),
      t("serviceCarFeature2"),
      t("serviceCarFeature3"),
      t("serviceCarFeature4"),
    ],
    perfect: t("serviceCarPerfect"),
  },
  {
    icon: "🌍",
    color: "from-emerald-600 to-green-800",
    title: t("serviceCustomTitle"),
    desc: t("serviceCustomDesc"),
    features: [
      t("serviceCustomFeature1"),
      t("serviceCustomFeature2"),
      t("serviceCustomFeature3"),
      t("serviceCustomFeature4"),
    ],
    perfect: t("serviceCustomPerfect"),
  }


      ].map((service,index)=>(

        <div
        key={index}
        className="group relative overflow-hidden rounded-[35px] bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3">

          {/* Gradient Border */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br ${service.color}`}></div>

          <div className="relative m-[1px] rounded-[34px] bg-white p-9">

            {/* Icon */}
            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition duration-500`}>
              {service.icon}
            </div>

            <h3 className="mt-8 text-2xl font-bold text-gray-900">
              {service.title}
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              {service.desc}
            </p>

            {/* Footer */}
            

          </div>

        </div>

      ))}

    </div>

    {/* Bottom CTA */}
    
    <div className="mt-24">

      <div className="rounded-[40px] overflow-hidden bg-gradient-to-r from-[#092517] via-[#123B25] to-[#092517] p-12 md:p-16 shadow-2xl">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div>

            <span className="uppercase tracking-[4px] text-yellow-400 text-sm font-bold">
              {t("whyTravel")}
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-white mt-6">
              {t("journeyTitle")}
            </h2>

            <p className="mt-6 text-gray-300 leading-8 text-lg">
              {t("journeyDescription")}
            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-black text-yellow-400">10+</h3>
              <p className="text-gray-300 mt-3">
                {t("experienceYears")}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-black text-yellow-400">500+</h3>
              <p className="text-gray-300 mt-3">
                {t("successfulTrips")}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-black text-yellow-400">24/7</h3>
              <p className="text-gray-300 mt-3">
                {t("support247")}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-black text-yellow-400">100%</h3>
              <p className="text-gray-300 mt-3">
                {t("tailorMade")}
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

{/* FEATURED DESTINATIONS */}
<section className="relative py-32 bg-[#070B08] text-white overflow-hidden">

  {/* Background glow */}
  <div className="absolute -top-40 left-[-120px] w-[600px] h-[600px] bg-yellow-400/10 blur-[140px] rounded-full"></div>
  <div className="absolute -bottom-40 right-[-120px] w-[600px] h-[600px] bg-emerald-400/10 blur-[140px] rounded-full"></div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

    {/* HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-16">

      <span className="text-xs tracking-[0.4em] uppercase text-yellow-400 border border-yellow-400/20 px-5 py-2 rounded-full bg-white/5">
        {t("unveilingTitle")}
      </span>

      <h2 className="text-4xl md:text-6xl font-black mt-6 leading-[1.1]">
        {t("exploreAfrica")}
        <span className="block text-yellow-400">
          {t("iconicDestinations")}
        </span>
      </h2>

      <p className="mt-6 text-gray-300 leading-8">
        {t("scrollDescription")}
      </p>

    </div>

    {/* HORIZONTAL SCROLL */}
    <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth scrollbar-hide">

      {[
        {
          img: Wilderbeast,
          title: t("migrationTitle"),
          trips: t("migrationTrips"),
          desc: t("migrationDesc"),
          tag: t("premium")
        },
        {
          img: gorilla,
          title: t("gorillaTitle"),
          trips: t("gorillaTrips"),
          desc: t("gorillaDesc"),
          tag: t("adventure")
        },
        {
          img: kenya,
          title: t("kenyaTitle"),
          trips: t("kenyaTrips"),
          desc: t("kenyaDesc"),
          tag: t("popular")
        },
        {
          img: serengeti,
          title: t("serengetiTitle"),
          trips: t("serengetiTrips"),
          desc: t("serengetiDesc"),
          tag: t("iconic")
        },
        {
          img: climbinglongonot,
          title: t("rwenzoriTitle"),
          trips: t("rwenzoriTrips"),
          desc: t("rwenzoriDesc"),
          tag: t("hiking")
        },
        {
          img: tanzania,
          title: t("tanzaniaTitle"),
          trips: t("tanzaniaTrips"),
          desc: t("tanzaniaDesc"),
          tag: t("premium")
        }
      ].map((item, i) => (
        <div
          key={i}
          className="min-w-[320px] md:min-w-[420px] snap-start group relative rounded-[30px] overflow-hidden shadow-2xl hover:scale-[1.02] transition duration-700"
        >

          {/* IMAGE */}
          <div className="relative h-[520px] overflow-hidden">

            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-[1200ms]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_60%)]"></div>

            <div className="absolute top-5 left-5">
              <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                {item.tag}
              </span>
            </div>

            <div className="absolute bottom-0 p-6 md:p-8 w-full">

              <span className="text-xs text-white/70 border border-white/20 px-3 py-1 rounded-full backdrop-blur">
                {item.trips}
              </span>

              <h3 className="text-2xl font-bold mt-4">
                {item.title}
              </h3>

              <p className="text-sm text-white/70 mt-2">
                {item.desc}
              </p>

              <div className="flex items-center justify-between mt-6">

                <span className="text-xs text-white/50">
                  {t("swipeMore")}
                </span>

                <div className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 text-yellow-300 group-hover:bg-yellow-400 group-hover:text-black transition">
                  →
                </div>

              </div>

            </div>

          </div>
        </div>
      ))}

    </div>

  </div>
</section>







{/* DESTINATIONS & EXPERIENCES */}
<section className="py-28 bg-gradient-to-b from-[#F8F7F3] via-white to-[#F3F3EF] relative overflow-hidden">

  <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#D4AF37]/15 blur-[120px] rounded-full" />
  <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-green-900/10 blur-[120px] rounded-full" />

  <div className="relative max-w-7xl mx-auto px-6 md:px-10">

    {/* HEADER */}
    <div className="text-center mb-20">

      <span className="uppercase tracking-[0.4em] text-[#D4AF37] text-xs font-semibold">
        {t("exploreEastAfrica") || "Explore East Africa"}
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-5 leading-tight">
        {t("destinationsTitlePart1") || "Destinations Crafted for"}{" "}
        <span className="text-[#D4AF37]">
          {t("destinationsTitleHighlight") || "Unforgettable Adventure"}
        </span>
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
        {t("destinationsDesc")}
      </p>

    </div>

    {/* GRID CARDS */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {[
        {
          img: tanzania,
          title: t("maasaiMara") || "Maasai Mara",
          icon: "🦁",
          color: "from-yellow-400/20",
          desc: t("maasaiMaraDesc")
        },
        {
          img: amboseli,
          title: t("amboseli"),
          icon: "🐘",
          color: "from-emerald-400/20",
          desc: t("amboseliDesc")
        },
        {
          img: nakuru,
          title: t("lakeNakuru"),
          icon: "🦩",
          color: "from-pink-400/20",
          desc: t("nakuruDesc")
        },
        {
          img: west,
          title: t("tsavo"),
          icon: "🐆",
          color: "from-red-400/20",
          desc: t("tsavoDesc")
        },
        {
          img: serengeti,
          title: t("serengeti"),
          icon: "🌍",
          color: "from-sky-400/20",
          desc: t("serengetiDesc")
        }
      ].map((place, index) => (
        <div
          key={index}
          className="group relative rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-700 bg-white border border-gray-100 hover:-translate-y-2"
        >

          <div className="relative h-[260px] overflow-hidden">
            <img
              src={place.img}
              alt={place.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-[1500ms]"
            />

            <div className={`absolute inset-0 bg-gradient-to-t ${place.color} via-black/20 to-black/50`} />

            <div className="absolute top-4 left-4 bg-white/90 text-black text-lg px-3 py-1 rounded-full shadow-md">
              {place.icon}
            </div>
          </div>

          <div className="p-7">
            <h3 className="text-xl font-bold mb-3 group-hover:text-[#D4AF37] transition">
              {place.title}
            </h3>

            <p className="text-gray-600 text-sm leading-7">
              {place.desc}
            </p>
          </div>

        </div>
      ))}
    </div>

    {/* FOOTER STRIP */}
    <div className="mt-20 bg-gradient-to-r from-[#0F2418] via-[#102315] to-[#0B1A12] rounded-[40px] p-12 text-white shadow-2xl">

      <div className="grid md:grid-cols-3 gap-10 text-center">

        <div>
          <h3 className="text-[#D4AF37] text-3xl font-bold">
            {t("tailoredSafaris")}
          </h3>
          <p className="text-gray-300 mt-3">
            {t("tailoredSafarisDesc")}
          </p>
        </div>

        <div>
          <h3 className="text-[#D4AF37] text-3xl font-bold">
            {t("kenyaTanzania")}
          </h3>
          <p className="text-gray-300 mt-3">
            {t("kenyaTanzaniaDesc")}
          </p>
        </div>

        <div>
          <h3 className="text-[#D4AF37] text-3xl font-bold">
            {t("expertGuides")}
          </h3>
          <p className="text-gray-300 mt-3">
            {t("expertGuidesDesc")}
          </p>
        </div>

      </div>

    </div>

  </div>
</section>

{/*Treking and climbing*/}
<section className="relative py-28 bg-gradient-to-b from-black via-[#06130D] to-black text-white overflow-hidden">

  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full"></div>
  <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full"></div>

  <div className="relative max-w-7xl mx-auto px-6 md:px-10">

    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl md:text-5xl font-bold">{t("trekTitle") || "Trek & Climb East Africa"}</h2>
      <p className="mt-5 text-white/70 leading-8">{t("trekDesc")}</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {image:"climbingkili.jpg",title:"kilimanjaro",desc:"Experience Africa’s highest peak with breathtaking landscapes, glaciers, and unforgettable sunrise views above the clouds.",location:"Tanzania",height:"5,895m",duration:"5 - 9 Days",level:"Challenging",season:"June - October"},
        {image:"climbingkenya.jpg",title:"mountKenya",desc:"Explore Kenya’s legendary mountain with dramatic valleys, alpine scenery, and stunning views from Point Lenana.",location:"Kenya",height:"5,199m",duration:"4 - 6 Days",level:"Moderate",season:"January - March"},
        {image:"climbinglongonot.jpg",title:"longonot",desc:"A perfect day adventure hiking through volcanic terrain, crater trails, and panoramic views of the Great Rift Valley.",location:"Naivasha, Kenya",height:"2,776m",duration:"1 Day",level:"Easy - Moderate",season:"All Year"},
        {image:"hellsgate.jpg",title:"hellsGate",desc:"Enjoy an active outdoor adventure with hiking, cycling, cliffs, wildlife, and spectacular volcanic landscapes.",location:"Nakuru, Kenya",height:"2,190m",duration:"1 Day",level:"Easy",season:"All Year"}
      ].map((item,index)=>(

        <div key={index} className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-yellow-400/40 transition-all duration-500 hover:-translate-y-2">

          <div className="h-56 overflow-hidden relative">
            <img src={require(`../assets/${item.image}`)} alt={t(item.title)} className="w-full h-full object-cover group-hover:scale-110 transition duration-1000"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <h3 className="absolute bottom-4 left-5 text-2xl font-bold text-yellow-300">{t(item.title)}</h3>
          </div>

          <div className="p-6">

            <p className="text-sm text-white/70 leading-7 mb-5">{item.desc}</p>

            <div className="space-y-3 text-sm text-white/80">
              <div className="flex justify-between"><span>📍 Location</span><span>{item.location}</span></div>
              <div className="flex justify-between"><span>⛰ Height</span><span>{item.height}</span></div>
              <div className="flex justify-between"><span>🕒 Duration</span><span>{item.duration}</span></div>
              <div className="flex justify-between"><span>🥾 Difficulty</span><span>{item.level}</span></div>
              <div className="flex justify-between"><span>☀ Best Time</span><span>{item.season}</span></div>
            </div>

           

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

{/* WHY TRAVEL WITH US */}
<section className="py-24 bg-[#102315] text-white relative overflow-hidden">

  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6 md:px-10">

    {/* HEADER */}
    <div className="text-center mb-16">

      <span className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">
        {t("whyChooseUs")}
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-4">
        {t("whyTitlePart1")}{" "}
        <span className="text-[#D4AF37]">
          {t("whyTitleHighlight")}
        </span>
      </h2>

      <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">
        {t("whyDescription")}
      </p>

    </div>

    {/* FEATURE CARDS */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 hover:-translate-y-2 transition duration-500">

        <div className="text-5xl mb-5">🦁</div>

        <h3 className="text-2xl font-bold mb-4">
          {t("expertGuidesTitle")}
        </h3>

        <p className="text-gray-300 leading-7">
          {t("expertGuidesDesc")}
        </p>

      </div>

      {/* Card 2 */}
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 hover:-translate-y-2 transition duration-500">

        <div className="text-5xl mb-5">🚙</div>

        <h3 className="text-2xl font-bold mb-4">
          {t("luxuryTravelTitle")}
        </h3>

        <p className="text-gray-300 leading-7">
          {t("luxuryTravelDesc")}
        </p>

      </div>

      {/* Card 3 */}
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 hover:-translate-y-2 transition duration-500">

        <div className="text-5xl mb-5">🌍</div>

        <h3 className="text-2xl font-bold mb-4">
          {t("ecoTourismTitle")}
        </h3>

        <p className="text-gray-300 leading-7">
          {t("ecoTourismDesc")}
        </p>

      </div>

      {/* Card 4 */}
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 hover:-translate-y-2 transition duration-500">

        <div className="text-5xl mb-5">⭐</div>

        <h3 className="text-2xl font-bold mb-4">
          {t("trustedServiceTitle")}
        </h3>

        <p className="text-gray-300 leading-7">
          {t("trustedServiceDesc")}
        </p>

      </div>

    </div>

  </div>

</section>




{/* ===================== GOOGLE REVIEWS ===================== */}
<section className="relative overflow-hidden bg-gradient-to-b from-[#F8F6F1] via-white to-[#F2EEE5] py-20 lg:py-24">

  {/* Background Effects */}
  <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-yellow-400/10 blur-[130px]" />
  <div className="pointer-events-none absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-green-600/10 blur-[130px]" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

    {/* ===================== HEADER ===================== */}
    <div className="mx-auto max-w-3xl text-center">

      <span className="inline-flex items-center rounded-full bg-green-100 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-green-700">
        {t("testimonialsBadge")}
      </span>

      <h2 className="mt-5 text-4xl font-black leading-tight text-gray-900 sm:text-5xl">
        {t("testimonialsTitle1")}
        <span className="block text-[#C8A94C]">
          {t("testimonialsTitle2")}
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
        {t("testimonialsDescription")}
      </p>

    </div>


    {/* ===================== GOOGLE RATING ===================== */}
    <div className="mt-12 flex justify-center">

      <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-6 rounded-[1.7rem] border border-gray-100 bg-white px-7 py-7 shadow-lg sm:flex-row sm:px-10">

        {/* Rating */}
        <div className="text-center sm:min-w-[160px]">

          <div className="text-5xl font-black text-green-700">
            5.0
          </div>

          <div className="mt-1 text-2xl tracking-wide text-yellow-400">
            ★★★★★
          </div>

          <p className="mt-1 text-xs font-medium text-gray-500">
            {t("googleBased")}
          </p>

        </div>

        {/* Divider */}
        <div className="hidden h-16 w-px bg-gray-200 sm:block" />

        {/* Trust Message */}
        <div className="text-center sm:text-left">

          <h3 className="text-xl font-bold text-gray-900">
            {t("trustedTitle")}
          </h3>

          <p className="mt-2 max-w-md text-sm leading-6 text-gray-600">
            {t("trustedDescription")}
          </p>

        </div>

      </div>

    </div>


    {/* ===================== HORIZONTAL REVIEWS ===================== */}
    <div className="relative mt-14">

      {/* Scroll Hint */}
      <div className="mb-4 flex items-center justify-between px-1">

        <p className="text-xs font-semibold uppercase tracking-[2px] text-gray-400">
          Google Reviews
        </p>

        <p className="text-xs font-medium text-gray-400">
          ← {t("viewAllReviews")} →
        </p>

      </div>


      {/* Scroll Container */}
      <div
        className="
          flex
          gap-5
          overflow-x-auto
          pb-6
          snap-x
          snap-mandatory
          scrollbar-thin
          scrollbar-track-transparent
          scrollbar-thumb-green-700/30
        "
      >

        {/* ================= REVIEW 1 ================= */}
        <div className="group flex w-[85vw] shrink-0 snap-start flex-col rounded-[1.7rem] border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[420px]">

          <div className="flex items-center justify-between">

            <div className="text-lg tracking-wide text-yellow-400">
              ★★★★★
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold text-green-700">
              {t("verifiedReview")}
            </span>

          </div>

          <p className="mt-5 flex-1 text-sm leading-7 text-gray-600">
            "We've just embarked from a 2 nights 3 days Masai Mara Safari.
            Guess what, I highly recommend and appreciate DENGRAY ADVENTURES
            for organizing this amazing and unforgettable safari for my family.
            Denis our Safari guide and still the organizer did an amazing job,
            from organizing, driving and communicating, he's really professional
            the way he operates. We were able to spot the Big 5 so close."
          </p>

          <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white">
              D
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-900">
                Dancan Omondi
              </h4>

              <p className="mt-1 text-xs text-gray-500">
                1 review · 5 photos
              </p>
            </div>

          </div>

        </div>


        {/* ================= REVIEW 2 ================= */}
        <div className="group flex w-[85vw] shrink-0 snap-start flex-col rounded-[1.7rem] border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[420px]">

          <div className="flex items-center justify-between">

            <div className="text-lg tracking-wide text-yellow-400">
              ★★★★★
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold text-green-700">
              {t("verifiedReview")}
            </span>

          </div>

          <p className="mt-5 flex-1 text-sm leading-7 text-gray-600">
            "We've travelled the world and the Safari with Denis is by far
            the most marking, beautiful, magical experience that we've ever
            lived. Not only Denis loves what he does and shares his knowledge
            with passion and kindness, but he also truly takes care of the
            details and provides a genuine experience."
          </p>

          <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white">
              A
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-900">
                Andrea Milán
              </h4>

              <p className="mt-1 text-xs text-gray-500">
                3 reviews · 5 photos
              </p>
            </div>

          </div>

        </div>


        {/* ================= REVIEW 3 ================= */}
        <div className="group flex w-[85vw] shrink-0 snap-start flex-col rounded-[1.7rem] border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[420px]">

          <div className="flex items-center justify-between">

            <div className="text-lg tracking-wide text-yellow-400">
              ★★★★★
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold text-green-700">
              {t("verifiedReview")}
            </span>

          </div>

          <p className="mt-5 flex-1 text-sm leading-7 text-gray-600">
            "Denis was a fantastic guide for safari in Masai Mara.
            He was knowledgeable, kind, and focused. I highly recommend him
            as a guide! The guide in training, Sylvester, was awesome, too.
            They are a dynamic duo."
          </p>

          <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white">
              H
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-900">
                Harper Schupbach
              </h4>

              <p className="mt-1 text-xs text-gray-500">
                2 reviews · 3 photos
              </p>
            </div>

          </div>

        </div>


        {/* ================= REVIEW 4 ================= */}
        <div className="group flex w-[85vw] shrink-0 snap-start flex-col rounded-[1.7rem] border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[420px]">

          <div className="flex items-center justify-between">

            <div className="text-lg tracking-wide text-yellow-400">
              ★★★★★
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold text-green-700">
              {t("verifiedReview")}
            </span>

          </div>

          <p className="mt-5 flex-1 text-sm leading-7 text-gray-600">
            "We just embarked from a 2 nights 3 days Masai Mara safari
            with DENGRAY ADVENTURES. My family had a very amazing and
            unforgettable experience. I highly recommend Denis who was
            our Safari guide."
          </p>

          <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white">
              A
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-900">
                Antoine Obunde
              </h4>

              <p className="mt-1 text-xs text-gray-500">
                1 review
              </p>
            </div>

          </div>

        </div>


        {/* ================= REVIEW 5 ================= */}
        <div className="group flex w-[85vw] shrink-0 snap-start flex-col rounded-[1.7rem] border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[420px]">

          <div className="flex items-center justify-between">

            <div className="text-lg tracking-wide text-yellow-400">
              ★★★★★
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold text-green-700">
              {t("verifiedReview")}
            </span>

          </div>

          <p className="mt-5 flex-1 text-sm leading-7 text-gray-600">
            "The safari was really very interesting and beautifully organised!
            The guide was friendly and reliable! We are happy to come back."
          </p>

          <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white">
              S
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-900">
                Steinert Liesel
              </h4>

              <p className="mt-1 text-xs text-gray-500">
                3 reviews
              </p>
            </div>

          </div>

        </div>


        {/* ================= REVIEW 6 ================= */}
        <div className="group flex w-[85vw] shrink-0 snap-start flex-col rounded-[1.7rem] border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[420px]">

          <div className="flex items-center justify-between">

            <div className="text-lg tracking-wide text-yellow-400">
              ★★★★★
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold text-green-700">
              {t("verifiedReview")}
            </span>

          </div>

          <p className="mt-5 flex-1 text-sm leading-7 text-gray-600">
            "Very jovial tour guide, helped us in explaining everything,
            helped at taking us good pictures and videos. He was very
            friendly, I recommend him to anyone who is after quality service."
          </p>

          <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white">
              B
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-900">
                Beverlyne Adriano
              </h4>

              <p className="mt-1 text-xs text-gray-500">
                2 reviews
              </p>
            </div>

          </div>

        </div>


        {/* ================= REVIEW 7 ================= */}
        <div className="group flex w-[85vw] shrink-0 snap-start flex-col rounded-[1.7rem] border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[420px]">

          <div className="flex items-center justify-between">

            <div className="text-lg tracking-wide text-yellow-400">
              ★★★★★
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold text-green-700">
              {t("verifiedReview")}
            </span>

          </div>

          <p className="mt-5 flex-1 text-sm leading-7 text-gray-600">
            "Amazing experience! The ranger was very friendly and went
            out of his way to accommodate our special requests. We had
            fantastic accommodation in Nakuru and a 7-hour stay in the
            national park – highly recommended! An unforgettable experience."
          </p>

          <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white">
              H
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-900">
                hermine_mtnr
              </h4>

              <p className="mt-1 text-xs text-gray-500">
                3 reviews · 6 photos
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>


    {/* ===================== TRUST STATISTICS ===================== */}
    <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">

      <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 text-center shadow-md">
        <h3 className="text-3xl font-black text-green-700 sm:text-4xl">
          5.0
        </h3>

        <div className="mt-1 text-base text-yellow-400">
          ★★★★★
        </div>

        <p className="mt-1 text-xs text-gray-600">
          {t("googleRating")}
        </p>
      </div>


      <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 text-center shadow-md">
        <h3 className="text-3xl font-black text-green-700 sm:text-4xl">
          7
        </h3>

        <p className="mt-2 text-xs text-gray-600">
          {t("verifiedReviews")}
        </p>
      </div>


      <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 text-center shadow-md">
        <h3 className="text-3xl font-black text-green-700 sm:text-4xl">
          100%
        </h3>

        <p className="mt-2 text-xs text-gray-600">
          {t("satisfiedGuests")}
        </p>
      </div>


      <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 text-center shadow-md">
        <h3 className="text-3xl font-black text-green-700 sm:text-4xl">
          24/7
        </h3>

        <p className="mt-2 text-xs text-gray-600">
          {t("travelSupport")}
        </p>
      </div>

    </div>


    {/* ===================== ACTION BUTTONS ===================== */}
    <div className="mt-12 flex flex-wrap justify-center gap-4">

      <a
        href="https://search.google.com/local/writereview?placeid=ChIJoS2CGQqlKhgR63ePw3o5Wu0"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-2xl bg-green-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-800"
      >
        ⭐ {t("writeReview")}
      </a>

      <a
        href="https://search.google.com/local/reviews?placeid=ChIJoS2CGQqlKhgR63ePw3o5Wu0"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-2xl border-2 border-green-700 px-7 py-3.5 text-sm font-semibold text-green-700 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:text-white"
      >
        💬 {t("viewAllReviews")}
      </a>

    </div>

  </div>

</section>



{/* FOOTER */}
<footer className="relative overflow-hidden bg-black text-white py-16">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

    {/* BRAND */}
    <div>

      <h2 className="text-3xl font-bold text-yellow-500 mb-2">
        {t("footerBrand")}
      </h2>

      <p className="text-xs text-gray-500 mb-1">
        {t("footerDeveloper")}
      </p>

      <p className="text-gray-400 leading-8 mb-3">
        {t("footerDescription")}
      </p>

      <a
        href="https://dennismusa.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="text-yellow-500 hover:underline text-sm font-semibold"
      >
        {t("footerPortfolio")}
      </a>

    </div>

    {/* LINKS */}
    <div>

      <h3 className="text-xl font-bold mb-5">
        {t("quickLinks")}
      </h3>

      <ul className="space-y-4 text-gray-400">

        <li>
          <Link to="/" className="hover:text-yellow-500 transition">
            {t("home")}
          </Link>
        </li>

        <li>
          <Link to="/vehicles" className="hover:text-yellow-500 transition">
            {t("fleet")}
          </Link>
        </li>

        <li>
          <Link to="/gallery" className="hover:text-yellow-500 transition">
            {t("gallery")}
          </Link>
        </li>

        <li>
          <Link to="/contact" className="hover:text-yellow-500 transition">
            {t("contact")}
          </Link>
        </li>

      </ul>

    </div>

    {/* SERVICES */}
    <div>

      <h3 className="text-xl font-bold mb-5">
        {t("services")}
      </h3>

      <ul className="space-y-4 text-gray-400">

        <li>{t("service1")}</li>
        <li>{t("service2")}</li>
        <li>{t("service3")}</li>
        <li>{t("service4")}</li>

      </ul>

    </div>

    {/* CONTACT */}
    <div>

      <h3 className="text-xl font-bold mb-5">
        {t("contactInfo")}
      </h3>

      <ul className="space-y-4 text-gray-400">

        <li>{t("location")}</li>
        <li>{t("phone")}</li>
        <li>{t("email")}</li>

      </ul>

      <a
        href="https://wa.me/+254112277671"
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-lg transition"
      >
        {t("whatsappBooking")}
      </a>

    </div>

  </div>

  {/* BOTTOM */}
  <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
    {t("footerBottom")}
  </div>

</footer>
    </div>
  );
}

export default Home;
