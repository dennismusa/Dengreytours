/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useLanguageSync from "../hooks/useLanguageSync";
import { useTranslation } from "react-i18next";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

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
import serengeti2 from "../assets/serengeti2.jpg";
import tanzania from "../assets/tanzania.jpg";
import Wilderbeast from "../assets/Wilderbeast.jpg";
import kenya from "../assets/kenya.jpg";
import image17 from "../assets/image17.jpg";


import poster1 from "../assets/poster1.jpg";
import poster2 from "../assets/poster2.jpg";
import poster3 from "../assets/poster3.jpg";
import poster4 from "../assets/poster4.jpg";
import poster5 from "../assets/poster5.jpg";
import poster6 from "../assets/poster6.jpg";

function Home() {
  useLanguageSync();
  const images = [meru, serengeti2,amboseli,Wilderbeast];
  const [index, setIndex] = useState(0);
const aboutImages = [cruiser2,image17,image16,nakuru,west,amboseli];
const [aboutIndex,setAboutIndex]=useState(0);
const [smallAboutIndex,setSmallAboutIndex]=useState(1);


const [selectedSafari, setSelectedSafari] = useState(null);
const [activeTab, setActiveTab] = useState("overview");


  // ================= REVIEWS STATE =================
  const [reviews, setReviews] = useState([]);
   const { t, i18n } = useTranslation();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  
const [typedText, setTypedText] = useState("");
const [isDeleting, setIsDeleting] = useState(false);
const [typingIndex, setTypingIndex] = useState(0);  
const [loading, setLoading] = useState(false);
const [loadingReviews, setLoadingReviews] = useState(false);
const [success, setSuccess] = useState(false);


const typingTexts = [
  "Explore Kenya With Luxury Safari Vehicles",
  "Discover Kenya With DenGray Safaris",
  "Experience Africa In Comfort",
  "Your Adventure. Our Expertise."
];


const safariPackages = [
  // 1. WILDEBEEST MIGRATION
  {
    id: "wildebeest",
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
      "safariPackages.wildebeest.activities.2",
    ],
    includedKeys: [
      "safariPackages.wildebeest.included.0",
      "safariPackages.wildebeest.included.1",
      "safariPackages.wildebeest.included.2",
      "safariPackages.wildebeest.included.3",
      "safariPackages.wildebeest.included.4",
    ],
    excludedKeys: [
      "safariPackages.wildebeest.excluded.0",
      "safariPackages.wildebeest.excluded.1",
      "safariPackages.wildebeest.excluded.2",
    ],
    image: poster1,
  },

  // 2. LAKE NAKURU
  {
    id: "nakuru",
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
      "safariPackages.nakuru.activities.3",
    ],
    includedKeys: [
      "safariPackages.nakuru.included.0",
      "safariPackages.nakuru.included.1",
      "safariPackages.nakuru.included.2",
      "safariPackages.nakuru.included.3",
      "safariPackages.nakuru.included.4",
    ],
    excludedKeys: [
      "safariPackages.nakuru.excluded.0",
      "safariPackages.nakuru.excluded.1",
      "safariPackages.nakuru.excluded.2",
    ],
    image: poster2,
  },

  // 3. BOOKING ADVENTURE
  {
    id: "booking-adventure",
    titleKey: "safariPackages.booking.title",
    locationKey: "safariPackages.booking.location",
    durationKey: "safariPackages.booking.duration",
    departureKey: "safariPackages.booking.departure",
    prices: {
      citizens: "Contact Us",
      nonResidents: "Contact Us",
    },
    accommodationKey: "safariPackages.booking.accommodation",
    activitiesKeys: [
      "safariPackages.booking.activities.0",
      "safariPackages.booking.activities.1",
      "safariPackages.booking.activities.2",
    ],
    includedKeys: [
      "safariPackages.booking.included.0",
      "safariPackages.booking.included.1",
      "safariPackages.booking.included.2",
    ],
    excludedKeys: [
      "safariPackages.booking.excluded.0",
      "safariPackages.booking.excluded.1",
    ],
    image: poster3,
  },

  // 4. KAKAMEGA FOREST BIRD WATCHING
  {
    id: "kakamega-bird-watching",
    title: "Bird Watching at Kakamega Forest",
    location: "Kakamega Forest, Western Kenya",
    duration: "1 Day Trip",
    departure: "Every Friday · United Mall, Kisumu · 6:30 AM",
    prices: {
      citizens: "KSh. 3,945",
      nonResidents: "USD 83",
    },
    accommodation: "Day trip; overnight accommodation is not included in the supplied package details.",
    description:
      "Escape from Kisumu for a refreshing day in Kakamega Forest. Enjoy bird watching, guided nature experiences, hiking, a river walk and cave visits while exploring the forest's natural surroundings.",
    activities: [
      "6:30 AM — Depart from United Mall, Kisumu.",
      "Approximately two-hour drive towards the Rondo Retreat and Kakamega Forest area.",
      "Bird watching in the forest with a guide.",
      "Hiking and exploring the forest environment.",
      "River walk and opportunities to enjoy the natural scenery.",
      "Cave visits and other forest activities.",
      "Picnic lunch during the excursion.",
      "Unlimited photography throughout the trip.",
    ],
    included: [
      "Round-trip transport in a 4x4 safari Land Cruiser.",
      "Entrance fee to Kakamega Forest.",
      "Picnic lunch.",
      "Bottled water.",
      "Guiding fee.",
      "Unlimited photography.",
    ],
    excluded: [
      "Tips and gratuities.",
      "Additional drinks.",
      "Personal spending and other extras.",
    ],
    whatToCarry: [
      "Refillable water bottle.",
      "Comfortable sports shoes.",
      "Binoculars for bird watching.",
      "Raincoat in case of rain.",
      "Camera or phone for photography.",
    ],
    image: poster4,
    bookingPhone: "254112277671",
  },

  // 5. RUMA NATIONAL PARK DAY TRIP
  {
    id: "ruma-national-park",
    title: "Day Trip to Ruma National Park",
    location: "Ruma National Park, Homa Bay County",
    duration: "1 Day Trip",
    departure: "Every Sunday · United Mall, Kisumu · 6:30 AM",
    prices: {
      citizens: "KSh. 3,750",
      nonResidents: "USD 75",
    },
    accommodation: "Day trip; no overnight accommodation specified.",
    description:
      "Join a full-day wildlife adventure from Kisumu to Ruma National Park. Travel through the scenic route via Katito, Kendu Bay and Homa Bay Town before exploring the park on a game drive to spot remarkable wildlife in its natural habitat.",
    activities: [
      "6:30 AM — Pick-up at United Mall, Kisumu.",
      "Approximately 3.5-hour drive via Katito, Kendu Bay and Homa Bay Town, as specified in the supplied itinerary.",
      "Park gate check-in; the supplied itinerary lists 9:00 AM, so confirm this time with the organiser.",
      "Five-hour game drive and wildlife spotting.",
      "Look out for Rothschild's giraffes, black and white rhinos, buffaloes, roan antelopes and other wildlife.",
      "Enjoy unlimited photography throughout the experience.",
    ],
    included: [
      "Round-trip transport from Kisumu in a tour Land Cruiser or tour van.",
      "Entrance fee to Ruma National Park.",
      "Bottled water.",
      "Unlimited photography.",
    ],
    excluded: [
      "Tips and gratuities.",
      "Drinks other than the provided bottled water.",
      "Personal spending and other extras.",
    ],
    whatToCarry: [
      "Comfortable clothing and shoes.",
      "Hat and sunscreen.",
      "Camera or phone for wildlife photography.",
      "Personal essentials for a full-day trip.",
    ],
    image: poster5,
    bookingPhone: "254112277671",
  },

  // 6. PARK AND CHILL AT DUNGA HILL CAMP
  {
    id: "dunga-hill-camp",
    title: "Park and Chill at Dunga Hill Camp",
    location: "Dunga Hill Camp, Kisumu",
    duration: "4:30 PM – 9:00 PM",
    departure: "Every Saturday · Kisumu CBD",
    prices: {
      citizens: "KSh. 1,500",
      nonResidents: "KSh. 1,500",
    },
    accommodation: "Not applicable; this is an evening leisure experience.",
    description:
      "Unwind by Lake Victoria with an evening of live music, sunset views and good company. Park and Chill at Dunga Hill Camp brings together live performances, a sundowner boat ride, photography, bonding and networking in a relaxed lakeside atmosphere.",
    activities: [
      "4:30 PM — Start of the evening experience.",
      "Enjoy live performances from different artists and bands.",
      "Take a 40-minute boat ride on Lake Victoria and enjoy the sunset.",
      "Capture memorable moments with unlimited photography.",
      "Bond and network with fellow travellers and new friends.",
      "9:00 PM — Scheduled end of the experience.",
    ],
    included: [
      "Round-trip transport by tour van between Kisumu CBD and Dunga Hill Camp.",
      "Fresh juice and fries.",
      "40-minute sundowner boat ride on Lake Victoria.",
      "Unlimited photography.",
    ],
    excluded: [
      "Additional food and drinks beyond those specified.",
      "Personal purchases and extra spending.",
      "Other services not listed under the inclusions.",
    ],
    whatToCarry: [
      "Phone or camera for sunset photography.",
      "Light jacket for the evening breeze.",
      "Personal spending money for additional purchases.",
    ],
    image: poster6,
    bookingPhone: "254112277671",
  },
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



  // ================= TYPING EFFECT =================
useEffect(() => {
  const currentText = typingTexts[typingIndex];

  const speed = isDeleting ? 45 : 80;

  const timer = setTimeout(() => {
    if (!isDeleting) {
      setTypedText(currentText.substring(0, typedText.length + 1));

      if (typedText.length === currentText.length) {
        setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      setTypedText(currentText.substring(0, typedText.length - 1));

      if (typedText.length === 0) {
        setIsDeleting(false);
        setTypingIndex(
          (prev) => (prev + 1) % typingTexts.length
        );
      }
    }
  }, speed);

  return () => clearTimeout(timer);
}, [typedText, isDeleting, typingIndex]);
  // ================= SUBMIT REVIEW (IMPORTANT PART 2) =================
 
// instantly update UI

  
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">



<section
  id="home"
  className="relative min-h-[65vh] lg:min-h-[75vh] overflow-hidden flex items-center"
>
  {/* =====================================================
      BACKGROUND IMAGE SLIDER — CLEAR & SHARP
  ====================================================== */}
  <div className="absolute inset-0">
    {images.map((img, i) => (
      <div
        key={i}
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out"
        style={{
          backgroundImage: `url(${img})`,
          opacity: i === index ? 1 : 0,
        }}
      />
    ))}
  </div>

  {/* =====================================================
      SUBTLE OVERLAYS
  ====================================================== */}

  {/* Light overall overlay */}
  <div className="absolute inset-0 bg-black/20" />

  {/* Darker area behind text only */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#022c22]/75 via-[#022c22]/35 to-transparent" />

  {/* Bottom readability gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

  {/* =====================================================
      HERO CONTENT
  ====================================================== */}

  <div className="relative z-20 w-full max-w-7xl mx-auto px-5 md:px-8 py-20">
    <div className="max-w-2xl text-white">

      {/* ================= BADGE ================= */}

      <div
        className="
          inline-flex
          items-center
          gap-3
          px-5
          py-2
          mb-6
          rounded-full
          bg-white/10
          backdrop-blur-md
          border
          border-white/20
        "
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>

        <span className="text-[10px] md:text-xs uppercase tracking-[4px] text-white font-semibold">
          DenGray Tours & Safaris
        </span>
      </div>

      {/* ================= TYPING TITLE ================= */}

      <h1
  className="
    text-3xl
    sm:text-4xl
    md:text-5xl
    lg:text-6xl
    font-black
    leading-[1.08]
    max-w-2xl
    min-h-[130px]
    drop-shadow-2xl
  "
>
  {typedText}
  <span className="ml-1 text-yellow-400 animate-pulse">
    |
  </span>
</h1>

      {/* ================= DESCRIPTION ================= */}

      <p
        className="
          mt-5
          text-gray-100
          text-sm
          sm:text-base
          md:text-lg
          leading-7
          md:leading-8
          max-w-xl
          drop-shadow-lg
        "
      >
        {t("heroDesc")}
      </p>

      {/* =================================================
          ACTION BUTTONS
      ================================================== */}

      

      {/* =================================================
          TRUST TAGS
      ================================================== */}

      <div className="mt-8 flex flex-wrap gap-3">

        <div
          className="
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-black/20
            border
            border-white/20
            text-sm
            text-white
          "
        >
          <span className="text-yellow-400">✓</span>
          Custom Safari Packages
        </div>

        <div
          className="
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-black/20
            border
            border-white/20
            text-sm
            text-white
          "
        >
          <span className="text-yellow-400">✓</span>
          Professional Guides
        </div>

        <div
          className="
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-black/20
            border
            border-white/20
            text-sm
            text-white
          "
        >
          <span className="text-yellow-400">✓</span>
          Kenya & East Africa
        </div>

      </div>

    </div>
  </div>

  {/* =====================================================
      SLIDER NAVIGATION
  ====================================================== */}

  <div
    className="
      absolute
      right-5
      md:right-8
      top-1/2
      -translate-y-1/2
      hidden
      lg:flex
      flex-col
      items-center
      gap-3
      z-30
    "
  >
    {images.map((_, i) => (
      <button
        key={i}
        type="button"
        onClick={() => setIndex(i)}
        aria-label={`Go to slide ${i + 1}`}
        className={`
          rounded-full
          transition-all
          duration-500
          ${
            i === index
              ? "h-12 w-2 bg-yellow-400 shadow-lg shadow-yellow-400/50"
              : "h-2 w-2 bg-white/60 hover:bg-white"
          }
        `}
      />
    ))}
  </div>

  {/* =====================================================
      BOTTOM SCROLL INDICATOR
  ====================================================== */}

  

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
{/* ============================================================
    PREMIUM SAFARI PACKAGES
============================================================ */}

<section className="relative overflow-hidden bg-[#f8f6f0] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
  {/* BACKGROUND DETAILS */}
  <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#dba33a]/10 blur-[100px]" />
  <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#082d19]/10 blur-[100px]" />

  <div className="relative mx-auto max-w-7xl">
    {/* SECTION INTRO */}
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <div className="mb-4 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-[#b98220]" />
        <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#a77b2c]">
          {t("safariPackages.label")}
        </span>
        <span className="h-px w-8 bg-[#b98220]" />
      </div>

      <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-[#082d19] sm:text-4xl lg:text-[46px]">
        {t("safariPackages.title")}
        <span className="mt-1 block text-[#b98220]">
          {t("safariPackages.titleHighlight")}
        </span>
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#666b62] sm:text-base">
        {t("safariPackages.description")}
      </p>

      <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#b98220] to-transparent" />
    </div>

    {/* SAFARI PACKAGE CARDS */}
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {safariPackages.map((safari, index) => {
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

        const safariPosters = [
          poster1,
          poster2,
          poster3,
          poster4,
          poster5,
          poster6,
        ];

        const safariPoster = safariPosters[index] || poster1;

        const openDetails = () => {
          setSelectedSafari({
            ...safari,
            displayTitle: safariTitle,
            displayLocation: safariLocation,
            displayDuration: safariDuration,
            displayDeparture: safariDeparture,
            displayAccommodation: safariAccommodation,
            displayActivities: activities,
            displayIncluded: includedItems,
            displayExcluded: excludedItems,
            displayPoster: safariPoster,
            displayDescription: safari.description || safari.overview || "",
          });

          setActiveTab("overview");
        };

        const bookingMessage =
          `Hello! I am interested in the ${safariTitle} package. ` +
          "Please share the complete itinerary, prices and availability.";

        return (
          <article
            key={safari.id || index}
            className="group relative isolate flex min-h-[440px] flex-col justify-end overflow-hidden rounded-[22px] border border-[#d9d3c5] bg-[#082d19] shadow-[0_12px_35px_rgba(8,45,25,0.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(8,45,25,0.20)] sm:min-h-[470px] sm:rounded-[26px]"
          >
            {/* CARD IMAGE */}
            <img
              src={safariPoster}
              alt={safariTitle}
              loading={index === 0 ? "eager" : "lazy"}
              className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />

            {/* REFINED IMAGE OVERLAY */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/5 to-[#03160c]/95" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#03160c]/75 via-transparent to-transparent" />

            {/* TOP META */}
            <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-2 sm:left-5 sm:right-5 sm:top-5">
              <span className="rounded-full border border-white/25 bg-black/35 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-lg sm:text-[10px]">
                {safariDuration}
              </span>

              <span className="flex items-center gap-1.5 rounded-full border border-[#e8bd68]/40 bg-[#082d19]/75 px-3 py-2 text-[9px] font-semibold uppercase tracking-wider text-[#f3c45d] backdrop-blur-lg sm:text-[10px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f3c45d]" />
                Signature Journey
              </span>
            </div>

            {/* CARD CONTENT */}
            <div className="relative p-4 pt-24 sm:p-5 sm:pt-28 lg:p-6">
              <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.24em] text-[#f3c45d] sm:text-[10px]">
                {safariLocation}
              </p>

              <h3 className="max-w-[95%] font-serif text-2xl font-semibold leading-tight text-white sm:text-[28px]">
                {safariTitle}
              </h3>

              <div className="mt-3 flex items-center gap-2 text-xs text-white/75">
                <span className="text-[#f3c45d]">⌖</span>
                <span className="line-clamp-1">
                  {safariDeparture || "Departure arrangements on request"}
                </span>
              </div>

              {/* PRICING */}
              <div className="mt-5 grid grid-cols-2 gap-2">
                <div className="rounded-xl border border-white/15 bg-black/30 p-3 backdrop-blur-lg">
                  <p className="text-[9px] font-semibold uppercase tracking-wider text-white/55">
                    {t("safariPackages.citizens")}
                  </p>
                  <p className="mt-1 break-words font-serif text-base font-semibold text-white sm:text-lg">
                    {safari.prices?.citizens || "On request"}
                  </p>
                  <p className="mt-1 text-[9px] text-white/50">
                    {t("safariPackages.perPerson")}
                  </p>
                </div>

                <div className="rounded-xl border border-[#e3b75f]/35 bg-[#082d19]/75 p-3 backdrop-blur-lg">
                  <p className="text-[9px] font-semibold uppercase tracking-wider text-white/55">
                    {t("safariPackages.nonResidents")}
                  </p>
                  <p className="mt-1 break-words font-serif text-base font-semibold text-[#f3c45d] sm:text-lg">
                    {safari.prices?.nonResidents || "On request"}
                  </p>
                  <p className="mt-1 text-[9px] text-white/50">
                    {t("safariPackages.perPerson")}
                  </p>
                </div>
              </div>

              {/* ACCOMMODATION */}
              <div className="mt-4 flex items-start gap-3 border-t border-white/15 pt-4">
                <span className="text-lg text-[#f3c45d]">⌂</span>
                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#f3c45d]">
                    {t("safariPackages.accommodation")}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/75">
                    {safariAccommodation || "Accommodation options on request"}
                  </p>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="mt-5 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={openDetails}
                  className="flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-3 py-3 text-[10px] font-bold text-white backdrop-blur-md transition duration-300 hover:border-white hover:bg-white hover:text-[#082d19] sm:text-xs"
                >
                  Explore Package
                  <span>↗</span>
                </button>

                <a
                  href={`https://wa.me/254112277671?text=${encodeURIComponent(
                    bookingMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#dba33a] px-3 py-3 text-[10px] font-bold text-[#082d19] transition duration-300 hover:bg-[#f3c45d] sm:text-xs"
                >
                  Enquire Now
                  <span>→</span>
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>

    {/* CUSTOM SAFARI CTA */}
    <div className="relative mt-12 overflow-hidden rounded-[24px] bg-[#082d19] px-5 py-10 text-center shadow-xl sm:mt-16 sm:px-10 sm:py-14">
      <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border border-[#dba33a]/15" />
      <div className="pointer-events-none absolute -right-5 -top-12 h-48 w-48 rounded-full border border-[#dba33a]/10" />

      <div className="relative mx-auto max-w-2xl">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-7 bg-[#dba33a]" />
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#dba33a]">
            {t("safariPackages.bottomLabel")}
          </p>
          <span className="h-px w-7 bg-[#dba33a]" />
        </div>

        <h3 className="font-serif text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
          {t("safariPackages.bottomTitle")}
        </h3>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/65">
          {t("safariPackages.bottomDescription")}
        </p>

        <a
          href={`https://wa.me/254112277671?text=${encodeURIComponent(
            t("safariPackages.bottomWhatsappMessage")
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-[#dba33a] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#082d19] transition duration-300 hover:bg-[#f3c45d] hover:shadow-lg"
        >
          {t("safariPackages.chatWhatsapp")}
          <span>→</span>
        </a>
      </div>
    </div>
  </div>

  {/* =====================================================
      SAFARI DETAILS MODAL
  ===================================================== */}
  {selectedSafari && (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020b06]/85 p-2 backdrop-blur-md sm:p-5 lg:p-8"
      onClick={() => setSelectedSafari(null)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="safari-modal-title"
        className="relative flex max-h-[96dvh] w-full max-w-6xl flex-col overflow-hidden rounded-[20px] border border-white/20 bg-[#fffdf8] shadow-[0_30px_100px_rgba(0,0,0,0.5)] sm:max-h-[92dvh] sm:rounded-[28px]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* MODAL HERO */}
        <div className="relative h-[210px] shrink-0 overflow-hidden bg-[#03160c] sm:h-[280px] lg:h-[310px]">
          <img
            src={selectedSafari.displayPoster || selectedSafari.image}
            alt={selectedSafari.displayTitle}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#03160c]/75 via-[#03160c]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#03160c]/90 via-transparent to-black/20" />

          {/* MODAL TOP BAR */}
          <div className="absolute left-4 right-4 top-4 z-10 flex items-center justify-between sm:left-7 sm:right-7 sm:top-6">
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3 py-2 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e7bb60]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white sm:text-[10px]">
                Curated Safari Experience
              </span>
            </div>

            <button
              type="button"
              aria-label="Close package details"
              onClick={() => setSelectedSafari(null)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/40 text-xl text-white backdrop-blur-lg transition hover:rotate-90 hover:bg-[#dba33a] hover:text-[#082d19] sm:h-11 sm:w-11"
            >
              ×
            </button>
          </div>

          {/* HERO TITLE */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-10">
            <div className="max-w-3xl">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#dba33a] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[#082d19]">
                  Featured Journey
                </span>
                <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[9px] font-semibold text-white backdrop-blur-md">
                  {selectedSafari.displayDuration || "Duration on request"}
                </span>
              </div>

              <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.23em] text-[#f3c45d] sm:text-[10px]">
                {selectedSafari.displayLocation}
              </p>

              <h2
                id="safari-modal-title"
                className="font-serif text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                {selectedSafari.displayTitle}
              </h2>

              <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-white/80 sm:text-sm">
                <span className="text-[#f3c45d]">✦</span>
                <span>
                  {selectedSafari.displayDeparture ||
                    "Contact us to arrange your departure"}
                </span>
              </p>
            </div>
          </div>

          {/* PRICE LABEL */}
          <div className="absolute bottom-7 right-8 hidden min-w-[175px] rounded-xl border border-white/20 bg-[#082d19]/85 p-4 backdrop-blur-xl lg:block">
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/55">
              Starting price
            </p>
            <p className="mt-1 font-serif text-xl font-bold text-[#f3c45d]">
              {selectedSafari.prices?.citizens || "On request"}
            </p>
            <p className="mt-1 text-[9px] text-white/60">
              {t("safariPackages.citizens")} · {t("safariPackages.perPerson")}
            </p>
          </div>
        </div>

        {/* QUICK FACTS */}
        <div className="shrink-0 border-b border-[#e9e2d6] bg-white">
          <div className="grid grid-cols-3 divide-x divide-[#e9e2d6]">
            <div className="px-2 py-3 text-center sm:px-5 sm:py-4">
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#a77b2c]">
                Destination
              </p>
              <p className="mt-1 line-clamp-1 text-[11px] font-semibold text-[#082d19] sm:text-sm">
                {selectedSafari.displayLocation || "On request"}
              </p>
            </div>

            <div className="px-2 py-3 text-center sm:px-5 sm:py-4">
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#a77b2c]">
                Duration
              </p>
              <p className="mt-1 line-clamp-1 text-[11px] font-semibold text-[#082d19] sm:text-sm">
                {selectedSafari.displayDuration || "On request"}
              </p>
            </div>

            <div className="px-2 py-3 text-center sm:px-5 sm:py-4">
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#a77b2c]">
                Experience
              </p>
              <p className="mt-1 line-clamp-1 text-[11px] font-semibold text-[#082d19] sm:text-sm">
                Tailored adventure
              </p>
            </div>
          </div>
        </div>

        {/* SCROLLABLE DETAILS */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-[#fffdf8] px-4 py-6 sm:px-8 sm:py-8 lg:px-10">
          {/* OVERVIEW AND PRICING */}
          <div className="grid gap-7 lg:grid-cols-[1fr_290px]">
            <section>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#b98b38]" />
                <p className="text-[9px] font-bold uppercase tracking-[0.23em] text-[#a77b2c]">
                  Discover the Experience
                </p>
              </div>

              <h3 className="mt-3 font-serif text-2xl font-semibold text-[#082d19] sm:text-3xl">
                Discover something extraordinary.
              </h3>

              <p className="mt-4 whitespace-pre-line text-sm leading-7 text-gray-600">
                {selectedSafari.displayDescription ||
                  `Experience ${selectedSafari.displayTitle} with a journey filled with memorable moments, remarkable scenery and authentic travel experiences. Contact our team for a personalised itinerary.`}
              </p>

              <div className="mt-5 rounded-xl border border-[#e9e1d5] bg-white p-4 sm:p-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a77b2c]">
                  Departure & Logistics
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  {selectedSafari.displayDeparture ||
                    "Contact our team to arrange your departure."}
                </p>
              </div>
            </section>

            {/* PRICE BREAKDOWN */}
            <aside className="overflow-hidden rounded-2xl border border-[#e7dfd1] bg-white shadow-sm">
              <div className="bg-[#082d19] p-5 sm:p-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">
                  Your Safari Investment
                </p>
                <p className="mt-2 break-words font-serif text-2xl font-bold text-[#f3c45d]">
                  {selectedSafari.prices?.citizens || "On request"}
                </p>
                <p className="mt-1 text-xs text-white/60">
                  {t("safariPackages.citizens")} · {t("safariPackages.perPerson")}
                </p>
              </div>

              <div className="space-y-4 p-5">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                    Non-resident price
                  </p>
                  <p className="mt-1 break-words font-serif text-xl font-semibold text-[#082d19]">
                    {selectedSafari.prices?.nonResidents || "On request"}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {t("safariPackages.nonResidents")}
                  </p>
                </div>

                <div className="h-px bg-[#eee7dc]" />

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                    Accommodation
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {selectedSafari.displayAccommodation ||
                      "Accommodation available on request."}
                  </p>
                </div>

                <p className="rounded-lg bg-[#f7f3e9] p-3 text-[10px] leading-5 text-gray-600">
                  Confirm availability, final arrangements and applicable
                  charges with our team before booking.
                </p>
              </div>
            </aside>
          </div>

          {/* ACTIVITIES */}
          <section className="mt-9 border-t border-[#e9e1d5] pt-7">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a77b2c]">
              Make It Memorable
            </p>
            <h3 className="mt-2 font-serif text-2xl font-semibold text-[#082d19] sm:text-3xl">
              Activities & Trip Itinerary
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Explore the experiences planned for your journey.
            </p>

            {selectedSafari.displayActivities?.length > 0 ? (
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {selectedSafari.displayActivities.map((activity, i) => (
                  <div
                    key={i}
                    className="group flex gap-3 rounded-xl border border-[#eae2d4] bg-white p-4 transition duration-300 hover:border-[#c6a15d] hover:shadow-sm"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#082d19] font-serif text-xs font-bold text-[#f3c45d] transition group-hover:bg-[#dba33a] group-hover:text-[#082d19]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-6 text-gray-600">
                      {activity}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-5 rounded-xl bg-white p-4 text-sm text-gray-500">
                Contact our team for the full itinerary and available activities.
              </p>
            )}
          </section>

          {/* ACCOMMODATION */}
          <section className="mt-9 rounded-2xl bg-[#082d19] p-5 sm:p-7">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-xl text-[#f3c45d]">
                ⌂
              </span>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#f3c45d]">
                  Rest & Recharge
                </p>
                <h3 className="mt-2 font-serif text-xl font-semibold text-white sm:text-2xl">
                  Accommodation Arrangements
                </h3>
                <p className="mt-3 whitespace-pre-line text-sm leading-7 text-white/70">
                  {selectedSafari.displayAccommodation ||
                    "Contact us for accommodation options and availability."}
                </p>
              </div>
            </div>
          </section>

          {/* INCLUSIONS AND EXCLUSIONS */}
          <section className="mt-9 border-t border-[#e9e1d5] pt-7">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a77b2c]">
              Everything You Need to Know
            </p>
            <h3 className="mt-2 font-serif text-2xl font-semibold text-[#082d19] sm:text-3xl">
              Package Inclusions & Exclusions
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Review what is covered and what you may need to budget for separately.
            </p>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {/* INCLUDED */}
              <div className="rounded-2xl border border-green-200 bg-[#f5faf3] p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#dcebd8] text-base font-bold text-[#23633b]">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-serif text-xl font-semibold text-[#082d19]">
                      What's Included
                    </h4>
                    <p className="mt-1 text-[11px] text-gray-500">
                      Covered in this package
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {selectedSafari.displayIncluded?.length > 0 ? (
                    selectedSafari.displayIncluded.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="mt-0.5 text-sm font-bold text-green-700">
                          ✓
                        </span>
                        <p className="text-sm leading-6 text-gray-700">{item}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm leading-6 text-gray-600">
                      Please confirm the package inclusions with our team.
                    </p>
                  )}
                </div>
              </div>

              {/* EXCLUDED */}
              <div className="rounded-2xl border border-orange-200 bg-[#fff9f3] p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f8e7d7] text-base font-bold text-[#a75d27]">
                    ×
                  </span>
                  <div>
                    <h4 className="font-serif text-xl font-semibold text-[#082d19]">
                      What's Excluded
                    </h4>
                    <p className="mt-1 text-[11px] text-gray-500">
                      Additional costs to consider
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {selectedSafari.displayExcluded?.length > 0 ? (
                    selectedSafari.displayExcluded.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="mt-0.5 text-sm font-bold text-orange-700">
                          ×
                        </span>
                        <p className="text-sm leading-6 text-gray-700">{item}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm leading-6 text-gray-600">
                      Contact us to confirm exclusions and any optional extras.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* PERSONALIZED TRIP */}
          <section className="mt-8 rounded-2xl border border-[#e7dfd1] bg-white p-5 sm:p-6">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a77b2c]">
              Your Adventure, Your Way
            </p>
            <h3 className="mt-2 font-serif text-xl font-semibold text-[#082d19]">
              Need a personalised safari?
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Tell us your preferred travel dates, group size, accommodation
              preferences and activities. Our team can help you plan your trip.
            </p>
          </section>
        </div>

        {/* STICKY BOOKING FOOTER */}
        <div className="shrink-0 border-t border-[#e8e0d4] bg-white/95 px-3 py-3 backdrop-blur-xl sm:px-7 sm:py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="hidden min-w-0 sm:block">
              <p className="truncate font-serif text-base font-semibold text-[#082d19]">
                {selectedSafari.displayTitle}
              </p>
              <p className="mt-1 text-[11px] text-gray-500">
                From{" "}
                <span className="font-bold text-[#a77b2c]">
                  {selectedSafari.prices?.citizens || "Price on request"}
                </span>
                {" "}· Contact us to confirm availability
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:flex sm:shrink-0 sm:gap-3">
              <a
                href={`https://wa.me/254112277671?text=${encodeURIComponent(
                  `Hello! I am interested in booking ${selectedSafari.displayTitle}. Please share availability, payment details and the booking process.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#082d19] px-4 py-3 text-[10px] font-bold text-white transition hover:bg-[#124b2d] sm:px-6 sm:text-xs"
              >
                Book This Safari <span>↗</span>
              </a>

              <a
                href={`https://wa.me/254112277671?text=${encodeURIComponent(
                  `Hello! Please send me a detailed quotation for ${selectedSafari.displayTitle}, including pricing, availability, accommodation, itinerary, inclusions and exclusions.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#dba33a] px-4 py-3 text-[10px] font-bold text-[#082d19] transition hover:bg-[#efc15b] sm:px-6 sm:text-xs"
              >
                Request a Quote <span>→</span>
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setSelectedSafari(null)}
            className="mt-2 w-full py-1 text-[10px] font-medium text-gray-400 transition hover:text-[#082d19] sm:hidden"
          >
            Close package details
          </button>
        </div>
      </div>
    </div>
  )}
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

<section className="relative isolate overflow-hidden bg-[#070d09] py-20 text-white sm:py-24 lg:py-28">

  {/* BACKGROUND ATMOSPHERE */}
  <div className="pointer-events-none absolute -left-48 top-0 h-[600px] w-[600px] rounded-full bg-[#c69b43]/10 blur-[150px]" />
  <div className="pointer-events-none absolute -right-48 bottom-0 h-[600px] w-[600px] rounded-full bg-emerald-500/[0.09] blur-[150px]" />
  <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#ffffff_0.7px,transparent_0.7px)] [background-size:24px_24px]" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

    {/* SECTION HEADER */}
    <div className="mb-14 grid gap-8 lg:mb-16 lg:grid-cols-[1fr_0.7fr] lg:items-end">

      <div>
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-9 bg-[#d4af37]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4af37]">
            {t("unveilingTitle")}
          </span>
          <span className="h-px w-9 bg-[#d4af37]" />
        </div>

        <h2 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[64px]">
          {t("exploreAfrica")}
          <span className="mt-2 block font-normal italic text-[#d4af37]">
            {t("iconicDestinations")}
          </span>
        </h2>
      </div>

      <div className="lg:pb-2">
        <p className="max-w-lg text-sm leading-8 text-white/55 sm:text-base">
          {t("scrollDescription")}
        </p>

        <div className="mt-6 flex items-center gap-3">
          <span className="h-px w-10 bg-[#d4af37]" />
          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/45">
            Discover. Experience. Remember.
          </span>
        </div>
      </div>

    </div>

    {/* DESTINATION CAROUSEL */}
    <div className="relative">

      <div
        id="iconic-destinations-track"
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-7 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6"
      >

        {[
          {
            img: Wilderbeast,
            title: t("migrationTitle"),
            trips: t("migrationTrips"),
            desc: t("migrationDesc"),
            tag: t("premium"),
            number: "01"
          },
          {
            img: gorilla,
            title: t("gorillaTitle"),
            trips: t("gorillaTrips"),
            desc: t("gorillaDesc"),
            tag: t("adventure"),
            number: "02"
          },
          {
            img: kenya,
            title: t("kenyaTitle"),
            trips: t("kenyaTrips"),
            desc: t("kenyaDesc"),
            tag: t("popular"),
            number: "03"
          },
          {
            img: serengeti,
            title: t("serengetiTitle"),
            trips: t("serengetiTrips"),
            desc: t("serengetiDesc"),
            tag: t("iconic"),
            number: "04"
          },
          {
            img: climbinglongonot,
            title: t("rwenzoriTitle"),
            trips: t("rwenzoriTrips"),
            desc: t("rwenzoriDesc"),
            tag: t("hiking"),
            number: "05"
          },
          {
            img: tanzania,
            title: t("tanzaniaTitle"),
            trips: t("tanzaniaTrips"),
            desc: t("tanzaniaDesc"),
            tag: t("premium"),
            number: "06"
          }
        ].map((item, i) => (

          <article
            key={i}
            className="group relative min-w-[85%] snap-start overflow-hidden rounded-[22px] border border-white/10 bg-[#101b13] shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37]/40 sm:min-w-[390px] lg:min-w-[420px]"
          >

            {/* IMAGE */}
            <div className="relative h-[440px] overflow-hidden sm:h-[490px] lg:h-[510px]">

              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />

              {/* CINEMATIC OVERLAYS */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b07] via-black/25 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

              {/* HOVER LIGHT */}
              <div className="absolute inset-0 bg-[#d4af37]/0 transition-colors duration-700 group-hover:bg-[#d4af37]/[0.05]" />

              {/* CARD TOP */}
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-6">

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-[10px] font-semibold tracking-widest text-white backdrop-blur-md">
                  {item.number}
                </span>

                <span className="rounded-full border border-[#d4af37]/50 bg-black/30 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.17em] text-[#f0cd83] backdrop-blur-md">
                  {item.tag}
                </span>

              </div>

              {/* CARD CONTENT */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">

                <div className="mb-4">
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.15em] text-white/85 backdrop-blur-md">
                    {item.trips}
                  </span>
                </div>

                <h3 className="max-w-sm font-serif text-2xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-[#f0ca79] sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-sm text-xs leading-6 text-white/65 sm:text-sm">
                  {item.desc}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-5">

                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">
                    {t("swipeMore")}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/60 text-[#e7c579] transition-all duration-300 group-hover:border-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#07110b]">
                    <icon name="arrow-up-right" size="17" />
                  </span>

                </div>

              </div>
            </div>

          </article>

        ))}

      </div>

      {/* CAROUSEL CONTROLS */}
      <div className="mt-5 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-[#d4af37]" />
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
            East Africa Collection
          </span>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            aria-label="Scroll destinations left"
            onClick={() => {
              document.getElementById("iconic-destinations-track")?.scrollBy({
                left: -440,
                behavior: "smooth"
              });
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#07110b]"
          >
            <icon name="arrow-left" size="17" />
          </button>

          <button
            type="button"
            aria-label="Scroll destinations right"
            onClick={() => {
              document.getElementById("iconic-destinations-track")?.scrollBy({
                left: 440,
                behavior: "smooth"
              });
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#07110b]"
          >
            <icon name="arrow-right" size="17" />
          </button>
        </div>

      </div>

    </div>

    {/* BOTTOM EXPERIENCE STRIP */}
    <div className="mt-16 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3 sm:gap-8 lg:mt-20">

      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/30 text-[#d4af37]">
          <icon name="compass" size="19" />
        </div>
        <div>
          <p className="text-xs font-semibold text-white">Tailored Experiences</p>
          <p className="mt-1 text-[10px] text-white/45">Journeys designed around you</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/30 text-[#d4af37]">
          <icon name="globe" size="19" />
        </div>
        <div>
          <p className="text-xs font-semibold text-white">East African Destinations</p>
          <p className="mt-1 text-[10px] text-white/45">Explore remarkable landscapes</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/30 text-[#d4af37]">
          <icon name="binoculars" size="19" />
        </div>
        <div>
          <p className="text-xs font-semibold text-white">Memorable Adventures</p>
          <p className="mt-1 text-[10px] text-white/45">Discover the wild with confidence</p>
        </div>
      </div>

    </div>

  </div>
</section>







{/* DESTINATIONS & EXPERIENCES */}

<section className="relative isolate overflow-hidden bg-[#f5f4ed] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">

  {/* BACKGROUND DETAILS */}
  <div className="pointer-events-none absolute -right-48 top-20 h-[500px] w-[500px] rounded-full bg-[#d4af37]/10 blur-[140px]" />
  <div className="pointer-events-none absolute -left-48 bottom-20 h-[500px] w-[500px] rounded-full bg-[#0d4825]/10 blur-[140px]" />

  <div className="relative mx-auto max-w-7xl">

    {/* SECTION INTRO */}
    <div className="mb-14 grid gap-8 lg:mb-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-9 bg-[#b88c36]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#a77b2c]">
            {t("exploreEastAfrica") || "Explore East Africa"}
          </span>
        </div>

        <h2 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-[#102d1c] sm:text-5xl lg:text-[58px]">
          {t("destinationsTitlePart1") || "Destinations Crafted for"}{" "}
          <span className="font-normal italic text-[#b88c36]">
            {t("destinationsTitleHighlight") || "Unforgettable Adventure"}
          </span>
        </h2>
      </div>

      <div className="lg:pb-2">
        <p className="max-w-lg text-sm leading-8 text-[#687067] sm:text-base">
          {t("destinationsDesc")}
        </p>

        <div className="mt-6 flex items-center gap-3">
          <span className="h-px w-12 bg-[#b88c36]" />
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8a7955]">
            Kenya & Tanzania
          </span>
        </div>
      </div>

    </div>

    {/* DESTINATION SHOWCASE */}
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">

      {[
        {
          img: tanzania,
          title: t("maasaiMara") || "Maasai Mara",
          subtitle: "KENYA",
          number: "01",
          icon: "🦁",
          desc: t("maasaiMaraDesc"),
          featured: true,
          size: "lg:col-span-7 lg:row-span-2",
        },
        {
          img: amboseli,
          title: t("amboseli") || "Amboseli",
          subtitle: "KENYA",
          number: "02",
          icon: "🐘",
          desc: t("amboseliDesc"),
          size: "lg:col-span-5",
        },
        {
          img: nakuru,
          title: t("lakeNakuru") || "Lake Nakuru",
          subtitle: "KENYA",
          number: "03",
          icon: "🦩",
          desc: t("nakuruDesc"),
          size: "lg:col-span-5",
        },
        {
          img: west,
          title: t("tsavo") || "Tsavo",
          subtitle: "KENYA",
          number: "04",
          icon: "🐆",
          desc: t("tsavoDesc"),
          size: "lg:col-span-6",
        },
        {
          img: serengeti,
          title: t("serengeti") || "Serengeti",
          subtitle: "TANZANIA",
          number: "05",
          icon: "🌍",
          desc: t("serengetiDesc"),
          size: "lg:col-span-6",
        },
      ].map((place, index) => (

        <article
          key={index}
          className={`group relative isolate min-h-[320px] overflow-hidden rounded-[22px] bg-[#092b1a] shadow-[0_12px_35px_rgba(8,45,25,0.10)] transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(8,45,25,0.20)] ${
            place.size
          } ${
            place.featured
              ? "sm:col-span-2 lg:min-h-[670px]"
              : "lg:min-h-[320px]"
          }`}
        >

          {/* IMAGE */}
          <img
            src={place.img}
            alt={place.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
          />

          {/* IMAGE TREATMENT */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#03160c]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/15 to-transparent" />

          {/* HOVER LIGHT */}
          <div className="absolute inset-0 bg-[#d4af37]/0 transition-colors duration-700 group-hover:bg-[#d4af37]/[0.04]" />

          {/* TOP DETAILS */}
          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-6">

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-[10px] font-semibold tracking-widest text-white backdrop-blur-md">
              {place.number}
            </span>

            <span className="rounded-full border border-white/25 bg-black/20 px-4 py-2 text-[9px] font-bold tracking-[0.2em] text-white backdrop-blur-md">
              {place.subtitle}
            </span>

          </div>

          {/* BOTTOM CONTENT */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">

            <div className="mb-3 flex items-center gap-2">
              <span className="text-lg">{place.icon}</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#e7bb60]">
                {place.featured ? "Signature Destination" : "Discover East Africa"}
              </span>
            </div>

            <h3 className={`max-w-xl font-serif font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-[#f0ca79] ${
              place.featured
                ? "text-3xl sm:text-4xl lg:text-5xl"
                : "text-2xl sm:text-3xl"
            }`}>
              {place.title}
            </h3>

            <p className={`mt-3 max-w-lg text-xs leading-6 text-white/75 sm:text-sm ${
              place.featured ? "sm:max-w-md" : "max-w-md"
            }`}>
              {place.desc}
            </p>

            <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-5">

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#d4af37] transition-all duration-500 group-hover:w-14" />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#e7bb60]">
                  Discover the Wild
                </span>
              </div>

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-white transition-all duration-500 group-hover:border-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#092719]">
                <icon name="arrow-up-right" size="17" />
              </span>

            </div>

          </div>

        </article>

      ))}

    </div>

    {/* EXPERIENCE PROMISE */}
    <div className="relative mt-16 overflow-hidden rounded-[26px] bg-[#092719] shadow-[0_25px_60px_rgba(8,45,25,0.15)] sm:mt-20">

      {/* DECORATIVE ELEMENTS */}
      <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#d4af37]/15" />
      <div className="pointer-events-none absolute -right-12 -top-20 h-56 w-56 rounded-full border border-[#d4af37]/10" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-[90px]" />

      <div className="relative grid lg:grid-cols-[0.8fr_2.2fr]">

        {/* PANEL INTRO */}
        <div className="flex flex-col justify-center border-b border-white/10 px-7 py-9 sm:px-10 lg:border-b-0 lg:border-r lg:px-10">
          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#d4af37]">
            The Difference
          </span>

          <h3 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-4xl">
            Your Journey.
            <span className="block italic text-[#d4af37]">
              Our Expertise.
            </span>
          </h3>

          <p className="mt-4 max-w-xs text-xs leading-7 text-white/55">
            Thoughtfully designed journeys, local knowledge and unforgettable moments across East Africa.
          </p>
        </div>

        {/* THREE EXPERIENCE FEATURES */}
        <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">

          {/* FEATURE 1 */}
          <div className="group px-7 py-8 transition-colors duration-300 hover:bg-white/[0.035] sm:px-6 sm:py-10">
            <span className="text-[9px] font-bold tracking-[0.2em] text-[#d4af37]">
              01 / PERSONAL JOURNEYS
            </span>

            <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af37]/30 text-[#d4af37] transition-all duration-300 group-hover:bg-[#d4af37] group-hover:text-[#092719]">
              <icon name="compass" size="19" />
            </div>

            <h4 className="mt-5 font-serif text-xl font-semibold text-white">
              {t("tailoredSafaris")}
            </h4>

            <p className="mt-3 text-xs leading-6 text-white/55">
              {t("tailoredSafarisDesc")}
            </p>
          </div>

          {/* FEATURE 2 */}
          <div className="group px-7 py-8 transition-colors duration-300 hover:bg-white/[0.035] sm:px-6 sm:py-10">
            <span className="text-[9px] font-bold tracking-[0.2em] text-[#d4af37]">
              02 / EAST AFRICA
            </span>

            <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af37]/30 text-[#d4af37] transition-all duration-300 group-hover:bg-[#d4af37] group-hover:text-[#092719]">
              <icon name="globe" size="19" />
            </div>

            <h4 className="mt-5 font-serif text-xl font-semibold text-white">
              {t("kenyaTanzania")}
            </h4>

            <p className="mt-3 text-xs leading-6 text-white/55">
              {t("kenyaTanzaniaDesc")}
            </p>
          </div>

          {/* FEATURE 3 */}
          <div className="group px-7 py-8 transition-colors duration-300 hover:bg-white/[0.035] sm:px-6 sm:py-10">
            <span className="text-[9px] font-bold tracking-[0.2em] text-[#d4af37]">
              03 / LOCAL EXPERTISE
            </span>

            <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af37]/30 text-[#d4af37] transition-all duration-300 group-hover:bg-[#d4af37] group-hover:text-[#092719]">
              <icon name="binoculars" size="19" />
            </div>

            <h4 className="mt-5 font-serif text-xl font-semibold text-white">
              {t("expertGuides")}
            </h4>

            <p className="mt-3 text-xs leading-6 text-white/55">
              {t("expertGuidesDesc")}
            </p>
          </div>

        </div>
      </div>
    </div>

  </div>
</section>



{/*Treking and climbing*/}

<section className="relative overflow-hidden bg-[#050b08] py-20 text-white md:py-28">

  {/* Background atmosphere */}
  <div className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[130px]" />
  <div className="pointer-events-none absolute -bottom-40 -right-32 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[130px]" />

  <div className="relative mx-auto max-w-7xl px-5 md:px-10">

    {/* Section heading */}
    <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
      <span className="mb-5 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d5ad62]">
        <span className="h-px w-8 bg-[#d5ad62]" />
        Adventure Beyond the Ordinary
        <span className="h-px w-8 bg-[#d5ad62]" />
      </span>

      <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        {t("trekTitle") || "Trek & Climb"}{" "}
        <span className="font-serif italic text-[#d5ad62]">
          East Africa
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 md:text-base md:leading-8">
        {t("trekDesc")}
      </p>
    </div>

    {/* Adventure cards */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          image: "climbingkili.jpg",
          title: "kilimanjaro",
          desc: "Experience Africa’s highest peak with breathtaking landscapes, glaciers, and unforgettable sunrise views above the clouds.",
          location: "Tanzania",
          height: "5,895m",
          duration: "5 - 9 Days",
          level: "Challenging",
          season: "June - October",
          number: "01"
        },
        {
          image: "climbingkenya.jpg",
          title: "mountKenya",
          desc: "Explore Kenya’s legendary mountain with dramatic valleys, alpine scenery, and stunning views from Point Lenana.",
          location: "Kenya",
          height: "5,199m",
          duration: "4 - 6 Days",
          level: "Moderate",
          season: "January - March",
          number: "02"
        },
        {
          image: "climbinglongonot.jpg",
          title: "longonot",
          desc: "A perfect day adventure hiking through volcanic terrain, crater trails, and panoramic views of the Great Rift Valley.",
          location: "Naivasha, Kenya",
          height: "2,776m",
          duration: "1 Day",
          level: "Easy - Moderate",
          season: "All Year",
          number: "03"
        },
        {
          image: "hellsgate.jpg",
          title: "hellsGate",
          desc: "Enjoy an active outdoor adventure with hiking, cycling, cliffs, wildlife, and spectacular volcanic landscapes.",
          location: "Nakuru, Kenya",
          height: "2,190m",
          duration: "1 Day",
          level: "Easy",
          season: "All Year",
          number: "04"
        }
      ].map((item, index) => (

        <article
          key={index}
          className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition-all duration-500 hover:-translate-y-2 hover:border-[#d5ad62]/50 hover:bg-white/[0.06]"
        >

          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={require(`../assets/${item.image}`)}
              alt={t(item.title)}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050b08] via-black/10 to-black/10" />

            <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[10px] font-medium tracking-[0.2em] text-white/90 backdrop-blur-md">
              ADVENTURE {item.number}
            </span>

            <div className="absolute bottom-5 left-5 right-5">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e3bd78]">
                {item.location}
              </p>

              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {t(item.title)}
              </h3>
            </div>
          </div>

          {/* Card content */}
          <div className="p-5 md:p-6">

            <p className="mb-6 min-h-[100px] text-[13px] leading-6 text-white/60">
              {item.desc}
            </p>

            <div className="mb-5 h-px bg-white/10" />

            {/* Details */}
            <div className="space-y-3.5">

              <div className="flex items-center justify-between gap-3 text-xs">
                <span className="flex items-center gap-2 text-white/45">
                  <icon name="mountain" size="14" />
                  Elevation
                </span>
                <span className="font-medium text-white/90">{item.height}</span>
              </div>

              <div className="flex items-center justify-between gap-3 text-xs">
                <span className="flex items-center gap-2 text-white/45">
                  <icon name="clock" size="14" />
                  Duration
                </span>
                <span className="font-medium text-white/90">{item.duration}</span>
              </div>

              <div className="flex items-center justify-between gap-3 text-xs">
                <span className="flex items-center gap-2 text-white/45">
                  <icon name="footprints" size="14" />
                  Difficulty
                </span>
                <span className="rounded-full bg-[#d5ad62]/10 px-2.5 py-1 text-[10px] font-medium text-[#e4c17f]">
                  {item.level}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 text-xs">
                <span className="flex items-center gap-2 text-white/45">
                  <icon name="sun" size="14" />
                  Best time
                </span>
                <span className="text-right font-medium text-white/90">
                  {item.season}
                </span>
              </div>

            </div>

            <div className="mt-6 border-t border-white/10 pt-5">
              <a
                href={`https://wa.me/254112277671?text=${encodeURIComponent(
                  `Hello, I am interested in the ${t(item.title)} adventure. Please share more details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center justify-between text-xs font-semibold uppercase tracking-[0.15em] text-[#d5ad62] transition-colors hover:text-white"
              >
                Explore Adventure
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d5ad62]/40 transition-all group-hover/link:bg-[#d5ad62] group-hover/link:text-[#07110b]">
                  <icon name="arrow-up-right" size="15" />
                </span>
              </a>
            </div>

          </div>
        </article>

      ))}

    </div>

    {/* Bottom message */}
    <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
      <div>
        <p className="text-sm font-medium text-white">
          Ready to reach new heights?
        </p>
        <p className="mt-1 text-xs text-white/45">
          Let us help you plan your next East African adventure.
        </p>
      </div>

      <a
        href="https://wa.me/254112277671?text=Hello, I would like to plan a trekking adventure in East Africa."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 rounded-full bg-[#d5ad62] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#07110b] transition-all duration-300 hover:bg-white"
      >
        Plan Your Adventure
        <icon name="arrow-up-right" size="15" />
      </a>
    </div>

  </div>
</section>


{/* WHY TRAVEL WITH US */}





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
