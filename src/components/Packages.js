import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import img27 from "../assets/img27.jpg";

import diani5 from "../assets/diani5.jpg";
import nakuru3 from "../assets/nakuru3.jpg";
import nakuru2 from "../assets/nakuru2.jpg";
import east from "../assets/east.jpg";
import mara from "../assets/mara.jpg";
import kili4 from "../assets/kili4.jpg";
import bird from "../assets/bird.jpg";
import forest from "../assets/forest.jpg";

import {
  
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Compass,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "254112277671";

// =====================================================
// SAFARI PACKAGES
// =====================================================

const packages = [
  {
    id: 1,
    name: "Maasai Mara Big Five Safari",
    location: "Maasai Mara",
    category: "Wildlife Safari",
    duration: "3 Days / 2 Nights",
    image: mara,
    imageAlt: "African wildlife in the Maasai Mara",
    description:
      "Experience the incredible wildlife of the Maasai Mara with exciting game drives across its open savannah.",
    highlights: [
      "Guided game drives",
      "Big Five wildlife viewing",
      "Professional safari guide",
      "Scenic savannah landscapes",
    ],
    accommodation: "Mara Serena Safari Lodge",
    accommodationUrl: "https://www.serenahotels.com/mara",
    type: "Luxury",
    featured: true,
  },
  {
    id: 2,
    name: "Amboseli Kilimanjaro Safari",
    location: "Amboseli",
    category: "Wildlife Safari",
    duration: "2 Days / 1 Night",
    image: kili4,
    imageAlt: "Elephants on an African safari",
    description:
      "Discover Amboseli's remarkable elephant herds and enjoy spectacular views of Mount Kilimanjaro.",
    highlights: [
      "Elephant encounters",
      "Kilimanjaro views",
      "Guided game drives",
      "Photography opportunities",
    ],
    accommodation: "Amboseli Serena Lodge",
    accommodationUrl: "https://www.serenahotels.com/amboseli",
    type: "Adventure",
    featured: true,
  },
  {
    id: 3,
    name: "Lake Nakuru Flamingo Safari",
    location: "Lake Nakuru",
    category: "Wildlife Safari",
    duration: "2 Days / 1 Night",
    image: nakuru2,
    imageAlt: "Wildlife in a natural African landscape",
    description:
      "Explore Lake Nakuru National Park, known for its birdlife, beautiful scenery and diverse wildlife.",
    highlights: [
      "Wildlife game drives",
      "Bird watching",
      "Scenic lake views",
      "Photography stops",
    ],
    accommodation: "Sarova Lion Hill Lodge",
    accommodationUrl: "https://www.sarovahotels.com/lionhill-nakuru",
    type: "Family",
    featured: false,
  },
  {
    id: 4,
    name: "Tsavo East Red Elephant Safari",
    location: "Tsavo East",
    category: "Wildlife Safari",
    duration: "3 Days / 2 Nights",
    image: east,
    imageAlt: "African elephant in the wild",
    description:
      "Explore the vast wilderness of Tsavo East and encounter its famous red elephants and dramatic landscapes.",
    highlights: [
      "Red elephant sightings",
      "Extensive game drives",
      "Open wilderness landscapes",
      "Experienced safari guide",
    ],
    accommodation: "Ashnil Aruba Lodge",
    accommodationUrl: "https://www.ashnilhotels.com/aruba",
    type: "Adventure",
    featured: false,
  },
  {
    id: 5,
    name: "Lake Naivasha Boat Safari",
    location: "Lake Naivasha",
    category: "Nature Escape",
    duration: "2 Days / 1 Night",
    image: nakuru3,
    imageAlt: "Wildlife in a natural lakeside environment",
    description:
      "Enjoy a relaxing nature escape with beautiful lake scenery, boat excursions and opportunities to observe wildlife.",
    highlights: [
      "Boat excursion",
      "Bird watching",
      "Scenic lake views",
      "Nature experiences",
    ],
    accommodation: "Enashipai Resort",
    accommodationUrl: "https://www.enashipairesort.com",
    type: "Relaxation",
    featured: false,
  },
  {
    id: 6,
    name: "Diani Beach Safari Escape",
    location: "Diani Beach",
    category: "Beach Holiday",
    duration: "4 Days / 3 Nights",
    image: diani5,
    imageAlt: "Beautiful tropical ocean and beach",
    description:
      "Combine relaxation and coastal adventure with a memorable getaway along Kenya's beautiful Indian Ocean coastline.",
    highlights: [
      "White sandy beaches",
      "Ocean experiences",
      "Coastal relaxation",
      "Optional excursions",
    ],
    accommodation: "Baobab Beach Resort",
    accommodationUrl: "https://www.baobab-beach-resort.com",
    type: "Beach",
    featured: false,
  },
  {
    id: 7,
    name: "Wildebeest Crossing Safari",
    location: "Masai Mara National Reserve",
    category: "Safari Experience",
    duration: "2 Nights / 3 Days",
    departure: "Departure from Kisumu",
    image: mara,
    imageAlt: "Wildebeest and wildlife in the Masai Mara",
    description:
      "Experience the legendary Masai Mara on a three-day safari, with opportunities to explore its remarkable wildlife and seasonal wildebeest migration.",
    highlights: [
      "Explore Masai Mara National Reserve",
      "Wildlife viewing and game drives",
      "Departure from Kisumu",
      "Full-board accommodation",
    ],
    accommodation: "Budget camp on full board",
    citizensPrice: "KSh. 30,860",
    nonResidentsPrice: "USD 693",
    type: "Wildlife Safari",
    featured: true,
  },
  {
    id: 8,
    name: "Lake Nakuru Overnight Safari",
    location: "Lake Nakuru National Park",
    category: "Safari Experience",
    duration: "1 Night / 2 Days",
    departure: "Departure from Kisumu",
    image: nakuru2,
    imageAlt: "Lake Nakuru National Park landscape and wildlife",
    description:
      "Enjoy an overnight safari at Lake Nakuru National Park, known for its diverse wildlife, birdlife and beautiful Rift Valley scenery.",
    highlights: [
      "Explore Lake Nakuru National Park",
      "Wildlife and bird watching",
      "Departure from Kisumu",
      "Full-board accommodation",
    ],
    accommodation: "Buraha Zenoni on full board",
    citizensPrice: "KSh. 19,700",
    nonResidentsPrice: "USD 273",
    type: "Wildlife Safari",
    featured: true,
  },
  {
    id: 9,
    name: "Your Next Safari Awaits",
    location: "Kenya Safari Adventures",
    category: "Safari Experience",
    duration: "Departures on request",
    departure: "Departures Available on Request",
    image: east,
    imageAlt: "Kenyan safari landscape",
    description:
      "Looking for a safari tailored to your interests? Get in touch and let us help plan your next Kenya safari adventure.",
    highlights: [
      "Customised safari planning",
      "Flexible departure arrangements",
      "Experiences across Kenya",
      "Accommodation options on request",
    ],
    accommodation: "Customised accommodation options available on request",
    citizensPrice: "Contact Us",
    nonResidentsPrice: "Contact Us",
    type: "Custom Safari",
    featured: true,
  },
  {
    id: 10,
    name: "Bird Watching at Kakamega Forest",
    location: "Kakamega Forest, Western Kenya",
    category: "Safari Experience",
    duration: "1 Day Trip",
    departure: "Every Friday · United Mall, Kisumu · 6:30 AM",
    image: bird,
    imageAlt: "Lush forest habitat for bird watching",
    description:
      "Spend a day discovering the birdlife and rich natural environment of Kakamega Forest in Western Kenya.",
    highlights: [
      "Bird-watching experience",
      "Explore Kakamega Forest",
      "Friday departure from United Mall, Kisumu",
      "Departure time: 6:30 AM",
    ],
    accommodation:
      "Day trip; overnight accommodation is not included in the supplied package details.",
    citizensPrice: "KSh. 3,945",
    nonResidentsPrice: "USD 83",
    type: "Nature & Birding",
    featured: false,
  },
  {
    id: 11,
    name: "Day Trip to Ruma National Park",
    location: "Ruma National Park, Homa Bay County",
    category: "Safari Experience",
    duration: "1 Day Trip",
    departure: "Every Sunday · United Mall, Kisumu · 6:30 AM",
    image: forest,
    imageAlt: "Kenyan national park wilderness",
    description:
      "Join a day trip to Ruma National Park in Homa Bay County and discover one of Kenya's distinctive wildlife destinations.",
    highlights: [
      "Explore Ruma National Park",
      "Wildlife viewing",
      "Sunday departure from United Mall, Kisumu",
      "Departure time: 6:30 AM",
    ],
    accommodation:
      "Day trip; no overnight accommodation specified.",
    citizensPrice: "KSh. 3,750",
    nonResidentsPrice: "USD 75",
    type: "Day Trip",
    featured: false,
  },
  {
    id: 12,
    name: "Park and Chill at Dunga Hill Camp",
    location: "Dunga Hill Camp, Kisumu",
    category: "Safari Experience",
    duration: "4:30 PM – 9:00 PM",
    departure: "Every Saturday · Kisumu CBD",
    image: img27,
    imageAlt: "Relaxing lakeside leisure experience",
    description:
      "Enjoy a relaxed Saturday evening at Dunga Hill Camp in Kisumu, with time to unwind and enjoy the lakeside atmosphere.",
    highlights: [
      "Saturday evening experience",
      "Dunga Hill Camp, Kisumu",
      "4:30 PM to 9:00 PM",
      "Leisure and relaxation",
    ],
    accommodation:
      "Not applicable; this is an evening leisure experience.",
    citizensPrice: "KSh. 1,500",
    nonResidentsPrice: "KSh. 1,500",
    type: "Leisure Experience",
    featured: false,
  },
];

// =====================================================
// FILTER CATEGORIES
// =====================================================

const filters = [
  "All Packages",
  "Wildlife Safari",
  "Nature Escape",
  "Beach Holiday",
  "Safari Experience",
];

// =====================================================
// WHATSAPP BOOKING LINK
// =====================================================

function getBookingLink(pkg) {
  const message = `Hello DENGRAY Tours & Safaris, I am interested in the ${pkg.name} package (${pkg.duration}). ${
    pkg.departure ? `Departure: ${pkg.departure}. ` : ""
  }${
    pkg.citizensPrice ? `Citizens: ${pkg.citizensPrice}. ` : ""
  }${
    pkg.nonResidentsPrice
      ? `Non Residents: ${pkg.nonResidentsPrice}. `
      : ""
  }${
    pkg.accommodation
      ? `Accommodation: ${pkg.accommodation}. `
      : ""
  }Kindly share more details and availability.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

// =====================================================
// SECTION LABEL
// =====================================================

function SectionLabel({ children }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-8 bg-[#C49A5A]" />

      <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A47D45]">
        {children}
      </span>
    </div>
  );
}

// =====================================================
// PACKAGE CARD
// =====================================================

function PackageCard({ pkg, onViewDetails }) {
  return (
    <article className="group overflow-hidden rounded-[3px] border border-[#e9e4d9] bg-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(18,48,32,0.12)]">

      {/* Package image */}
      <div className="relative h-[260px] overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#081c13]/80 via-transparent to-black/10" />

        <div className="absolute left-5 top-5">
          <span className="border border-white/40 bg-[#10291d]/80 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            {pkg.category}
          </span>
        </div>

        {pkg.featured && (
          <div className="absolute right-5 top-5 flex items-center gap-1 bg-[#D6B77C] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[#183323]">
            <Star size={11} fill="currentColor" />
            Featured
          </div>
        )}

        <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs text-white/90">
          <MapPin size={13} className="text-[#D6B77C]" />
          {pkg.location}
        </div>
      </div>

      {/* Package information */}
      <div className="p-6 sm:p-7">
        <div className="mb-4 flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8B8B7D]">
          <span className="flex items-center gap-2">
            <Clock3 size={13} className="text-[#A47D45]" />
            {pkg.duration}
          </span>

          <span>{pkg.type}</span>
        </div>

        <h3 className="min-h-[58px] font-serif text-[23px] leading-tight text-[#173526] transition group-hover:text-[#A47D45]">
          {pkg.name}
        </h3>

        <p className="mt-3 min-h-[72px] text-sm leading-7 text-[#77796F]">
          {pkg.description}
        </p>

        {/* Departure */}
        {pkg.departure && (
          <div className="mt-4 flex items-start gap-2 text-xs leading-6 text-[#77796F]">
            <MapPin
              size={14}
              className="mt-1 shrink-0 text-[#A47D45]"
            />
            <span>{pkg.departure}</span>
          </div>
        )}

        {/* Accommodation */}
        {pkg.accommodation && (
          <div className="mt-4 border-t border-[#ece8df] pt-4">
            <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#A47D45]">
              Accommodation
            </p>

            <p className="mt-1 text-xs leading-6 text-[#77796F]">
              {pkg.accommodation}
            </p>
          </div>
        )}

        {/* Pricing */}
        {(pkg.citizensPrice || pkg.nonResidentsPrice) && (
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="bg-[#F5F3ED] p-3">
              <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#858579]">
                Citizens
              </p>

              <p className="mt-1 text-sm font-semibold text-[#173526]">
                {pkg.citizensPrice || "Contact Us"}
              </p>

              <p className="mt-1 text-[10px] text-[#858579]">
                Per person
              </p>
            </div>

            <div className="bg-[#F5F3ED] p-3">
              <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#858579]">
                Non Residents
              </p>

              <p className="mt-1 text-sm font-semibold text-[#173526]">
                {pkg.nonResidentsPrice || "Contact Us"}
              </p>

              <p className="mt-1 text-[10px] text-[#858579]">
                Per person
              </p>
            </div>
          </div>
        )}

        <div className="my-6 border-t border-[#ece8df]" />

        {/* Card actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#ece8df] pt-5">
          <button
            onClick={() => onViewDetails(pkg)}
            className="flex items-center gap-2 border border-[#173526] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-[#173526] transition hover:bg-[#173526] hover:text-white"
          >
            View Full Package
            <ArrowUpRight size={14} />
          </button>

          <a
            href={getBookingLink(pkg)}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-[#173526] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition hover:bg-[#A47D45]"
          >
            Book Now
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}

// =====================================================
// PACKAGE DETAILS MODAL
// =====================================================

function PackageModal({ pkg, onClose }) {
  if (!pkg) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#07170f]/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-3xl overflow-hidden rounded-sm bg-[#FAF9F5] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close package details"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center bg-[#10291d] text-white transition hover:bg-[#C49A5A]"
        >
          <X size={18} />
        </button>

        {/* Modal image */}
        <div className="relative h-[260px] sm:h-[320px]">
          <img
            src={pkg.image}
            alt={pkg.imageAlt}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#081c13]/80 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 text-white sm:left-9">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D6B77C]">
              {pkg.location} · {pkg.duration}
            </p>

            <h2 className="max-w-xl font-serif text-3xl sm:text-4xl">
              {pkg.name}
            </h2>
          </div>
        </div>

        {/* Modal content */}
        <div className="grid gap-8 p-6 sm:grid-cols-[1fr_220px] sm:p-9">
          <div>
            <SectionLabel>About this experience</SectionLabel>

            <p className="text-sm leading-8 text-[#77796F]">
              {pkg.description}
            </p>

            <h3 className="mb-4 mt-8 font-serif text-xl text-[#173526]">
              Experience highlights
            </h3>

            <div className="grid gap-3 sm:grid-cols-2">
              {pkg.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-sm text-[#62685F]"
                >
                  <Check
                    size={15}
                    className="mt-0.5 shrink-0 text-[#A47D45]"
                  />
                  {item}
                </div>
              ))}
            </div>

            {/* Accommodation information */}
            {pkg.accommodation && (
              <div className="mt-8 border-t border-[#e8e3d9] pt-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#A47D45]">
                  Suggested accommodation
                </p>

                {pkg.accommodationUrl ? (
                  <a
                    href={pkg.accommodationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-sm text-[#173526] hover:text-[#A47D45]"
                  >
                    {pkg.accommodation}
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <p className="mt-2 text-sm leading-7 text-[#77796F]">
                    {pkg.accommodation}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Booking details sidebar */}
          <aside className="h-fit bg-[#173526] p-6 text-white">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#D6B77C]">
              Your safari details
            </span>

            <div className="my-6 border-t border-white/15" />

            <div className="space-y-4 text-xs text-white/75">
              <p className="flex items-center gap-2">
                <Clock3 size={14} className="text-[#D6B77C]" />
                {pkg.duration}
              </p>

              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-[#D6B77C]" />
                {pkg.location}
              </p>

              <p className="flex items-center gap-2">
                <Compass size={14} className="text-[#D6B77C]" />
                {pkg.type}
              </p>

              {pkg.departure && (
                <p className="flex items-start gap-2 leading-5">
                  <MapPin
                    size={14}
                    className="mt-0.5 shrink-0 text-[#D6B77C]"
                  />
                  {pkg.departure}
                </p>
              )}
            </div>

            {/* Prices */}
            {(pkg.citizensPrice || pkg.nonResidentsPrice) && (
              <div className="mt-6 border-t border-white/15 pt-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#D6B77C]">
                  Per person
                </p>

                <div className="mt-3 space-y-3 text-xs">
                  <div>
                    <p className="text-white/55">Citizens</p>
                    <p className="mt-1 font-semibold text-white">
                      {pkg.citizensPrice || "Contact Us"}
                    </p>
                  </div>

                  <div>
                    <p className="text-white/55">Non Residents</p>
                    <p className="mt-1 font-semibold text-white">
                      {pkg.nonResidentsPrice || "Contact Us"}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Enquiry button */}
            <a
              href={getBookingLink(pkg)}
              target="_blank"
              rel="noreferrer"
              className="mt-7 flex items-center justify-center gap-2 bg-[#D6B77C] px-4 py-4 text-[10px] font-bold uppercase tracking-[0.13em] text-[#173526] transition hover:bg-white"
            >
              <MessageCircle size={15} />
              Enquire now
            </a>
          </aside>
        </div>
      </div>
    </div>
  );
}

// =====================================================
// MAIN PACKAGES PAGE
// =====================================================

export default function Packages() {
  const [activeFilter, setActiveFilter] = useState("All Packages");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("featured");
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Filter, search and sort packages
  const filteredPackages = useMemo(() => {
    let result = [...packages];

    if (activeFilter !== "All Packages") {
      result = result.filter(
        (pkg) => pkg.category === activeFilter
      );
    }

    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase();

      result = result.filter(
        (pkg) =>
          pkg.name.toLowerCase().includes(search) ||
          pkg.location.toLowerCase().includes(search) ||
          pkg.category.toLowerCase().includes(search)
      );
    }

    if (sortOrder === "duration") {
      result.sort((a, b) =>
        a.duration.localeCompare(b.duration)
      );
    } else {
      result.sort(
        (a, b) => Number(b.featured) - Number(a.featured)
      );
    }

    return result;
  }, [activeFilter, searchTerm, sortOrder]);

  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#173526]">

      {/* =================================================
          HERO SECTION
      ================================================= */}

      <section className="relative flex min-h-[410px] items-center overflow-hidden bg-[#10291d] md:min-h-[455px]">
        <img
          src={img27}
          alt="African safari landscape with wildlife"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071a11]/95 via-[#0b2418]/75 to-[#0b2418]/25" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071a11]/40 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D6B77C]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E5C58F]">
                DENGRAY Tours & Safaris
              </span>
            </div>

            <h1 className="font-serif text-5xl leading-[1.08] text-white sm:text-6xl lg:text-[68px]">
              Discover Your Next
              <br />

              <span className="italic text-[#D6B77C]">
                African Adventure.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/75 sm:text-base">
              Carefully crafted safari experiences combining incredible
              wildlife, authentic culture, beautiful landscapes and
              unforgettable moments.
            </p>

            
          </div>
        </div>

        <div className="absolute bottom-7 right-7 hidden items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/60 md:flex">
          <span className="h-px w-10 bg-[#D6B77C]" />
          Explore Kenya with us
        </div>
      </section>

      {/* =================================================
          INTRODUCTION
      ================================================= */}

      <section className="px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <SectionLabel>Our safari collection</SectionLabel>

            <h2 className="max-w-xl font-serif text-4xl leading-tight text-[#173526] sm:text-5xl">
              Journeys shaped by
              <span className="italic text-[#A47D45]">
                {" "}nature.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-sm leading-8 text-[#77796F]">
              From the sweeping plains of the Maasai Mara to the
              elephant-filled landscapes of Amboseli and the beautiful
              Kenyan coast, discover experiences designed to bring you
              closer to Africa.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#77796F]">
              Browse our featured journeys and contact our team to
              discuss your preferred dates, accommodation and travel
              arrangements.
            </p>
          </div>
        </div>
      </section>

      {/* =================================================
          EXPERIENCE STRIP
      ================================================= */}

      <section className="border-y border-[#e9e4d9] bg-[#F2F0E9] px-6 py-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-7 md:grid-cols-4">
          {[
            {
              icon: Compass,
              title: "Curated journeys",
              text: "Experiences across Kenya",
            },
            {
              icon: ShieldCheck,
              title: "Personal service",
              text: "Travel planning support",
            },
            {
              icon: Users,
              title: "Private & group",
              text: "Flexible travel options",
            },
            {
              icon: Sparkles,
              title: "Memorable moments",
              text: "Discover Africa differently",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center gap-3"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#d9c9ac] text-[#A47D45]">
                  <Icon size={19} />
                </div>

                <div>
                  <h3 className="text-xs font-bold text-[#173526]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[10px] leading-5 text-[#858579]">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =================================================
          PACKAGES SECTION
      ================================================= */}

      <section
        id="safari-packages"
        className="scroll-mt-20 px-6 py-16 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">

          {/* Section heading */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel>Find your experience</SectionLabel>

              <h2 className="font-serif text-4xl text-[#173526] sm:text-5xl">
                Explore our packages
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#77796F]">
                Discover carefully selected safari and holiday
                experiences. Find a journey that matches your interests.
              </p>
            </div>

            <div className="text-xs text-[#858579]">
              <span className="font-serif text-3xl text-[#A47D45]">
                {filteredPackages.length.toString().padStart(2, "0")}
              </span>

              <span className="ml-2 uppercase tracking-[0.13em]">
                Experiences available
              </span>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-10 flex flex-col gap-5 border-y border-[#e7e2d8] py-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              {/* Category buttons */}
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-3 text-[9px] font-bold uppercase tracking-[0.12em] transition sm:text-[10px] ${
                      activeFilter === filter
                        ? "bg-[#173526] text-white"
                        : "border border-[#e4dfd5] bg-white text-[#77796F] hover:border-[#173526] hover:text-[#173526]"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Search and sorting */}
              <div className="flex flex-col gap-3 sm:flex-row">

                {/* Search */}
                <div className="relative">
                  <Search
                    size={15}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A47D45]"
                  />

                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(event) =>
                      setSearchTerm(event.target.value)
                    }
                    placeholder="Search destinations..."
                    className="h-11 w-full border border-[#e4dfd5] bg-white pl-10 pr-4 text-xs outline-none transition placeholder:text-[#a4a397] focus:border-[#A47D45] sm:w-56"
                  />
                </div>

                {/* Sorting */}
                <div className="relative">
                  <SlidersHorizontal
                    size={14}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#A47D45]"
                  />

                  <select
                    value={sortOrder}
                    onChange={(event) =>
                      setSortOrder(event.target.value)
                    }
                    className="h-11 w-full appearance-none border border-[#e4dfd5] bg-white pl-10 pr-10 text-xs text-[#62685F] outline-none focus:border-[#A47D45] sm:w-48"
                  >
                    <option value="featured">Featured first</option>
                    <option value="duration">Duration</option>
                  </select>

                  <ChevronDown
                    size={14}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#A47D45]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Package grid */}
          {filteredPackages.length > 0 ? (
            <div className="mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  onViewDetails={setSelectedPackage}
                />
              ))}
            </div>
          ) : (
            <div className="mt-10 border border-[#e9e4d9] bg-white px-6 py-16 text-center">
              <Search
                size={30}
                className="mx-auto text-[#A47D45]"
              />

              <h3 className="mt-5 font-serif text-2xl text-[#173526]">
                No packages found
              </h3>

              <p className="mt-3 text-sm text-[#858579]">
                Try another destination or category.
              </p>

              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveFilter("All Packages");
                }}
                className="mt-6 inline-flex items-center gap-2 bg-[#173526] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-white hover:bg-[#A47D45]"
              >
                Clear filters
                <X size={13} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =================================================
          FEATURED WILDLIFE BANNER
      ================================================= */}

      <section className="relative overflow-hidden bg-[#10291d]">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[300px] md:min-h-[410px]">
            <img
              src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1400&q=90"
              alt="Elephants in the African wilderness"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#10291d]/30" />
          </div>

          <div className="flex items-center px-7 py-14 sm:px-12 lg:px-16">
            <div className="max-w-lg">
              <SectionLabel>Beyond the ordinary</SectionLabel>

              <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
                The wild is calling.
              </h2>

              <p className="mt-5 text-sm leading-8 text-white/65">
                Every safari has a story. Let us help you discover
                the landscapes, wildlife and experiences that make
                Kenya an extraordinary destination.
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hello DENGRAY, I would like to plan a personalised safari."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 border border-[#D6B77C] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#D6B77C] transition hover:bg-[#D6B77C] hover:text-[#173526]"
              >
                Create your safari
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          BOOKING PROCESS
      ================================================= */}

      <section className="px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Simple and personal</SectionLabel>

            <h2 className="font-serif text-4xl text-[#173526] sm:text-5xl">
              How to book your safari
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#77796F]">
              A straightforward process to help you plan your next
              African adventure.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Choose your journey",
                description:
                  "Browse our packages and select the experience that interests you.",
              },
              {
                number: "02",
                title: "Talk to our team",
                description:
                  "Contact us to discuss travel dates, availability and your preferences.",
              },
              {
                number: "03",
                title: "Confirm your adventure",
                description:
                  "Finalise your arrangements with our team before your journey begins.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="border-t border-[#d8c9ae] pt-6"
              >
                <span className="font-serif text-4xl text-[#C49A5A]">
                  {step.number}
                </span>

                <h3 className="mt-5 font-serif text-2xl text-[#173526]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#77796F]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          CUSTOM SAFARI CTA
      ================================================= */}

      <section className="bg-[#EDE9DF] px-6 py-14 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A47D45]">
              Your adventure, your way
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight text-[#173526] sm:text-4xl">
              Looking for something different?
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#77796F]">
              Tell us what you have in mind. We can discuss a
              personalised safari experience around your interests.
            </p>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hello DENGRAY, I would like to enquire about a customised safari."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-3 bg-[#173526] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#A47D45]"
          >
            Enquire on WhatsApp
            <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      {/* =================================================
          FOOTER
      ================================================= */}

     
     {/* FOOTER */}
     <footer className="relative overflow-hidden bg-black text-white py-16">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
       
           {/* Brand */}
           <div>
             <h2 className="text-3xl font-bold text-yellow-500 mb-2">
               DenGrey Tours & Safaris
             </h2>
       
             <p className="text-xs text-gray-500 mb-1">
               Website designed & developed by Dennis Musa
             </p>
       
             <p className="text-gray-400 leading-8 mb-3">
               Professional safari vehicle hire services in Nairobi ,kenya. Safe, comfortable, and unforgettable safari experiences.
             </p>
       
             <a
               href="https://dennismusa.netlify.app/"
               target="_blank"
               rel="noreferrer"
               className="text-yellow-500 hover:underline text-sm font-semibold"
             >
               View Developer Portfolio
             </a>
           </div>
       
           {/* Links */}
           <div>
             <h3 className="text-xl font-bold mb-5">Quick Links</h3>
       
             <ul className="space-y-4 text-gray-400">
               <li>
                 <Link to="/" className="hover:text-yellow-500 transition">
                   Home
                 </Link>
               </li>
       
               <li>
                 <Link to="/vehicles" className="hover:text-yellow-500 transition">
                   Fleet
                 </Link>
               </li>
       
               <li>
                 <Link to="/gallery" className="hover:text-yellow-500 transition">
                   Gallery
                 </Link>
               </li>
       
               <li>
                 <Link to="/contact" className="hover:text-yellow-500 transition">
                   Contact
                 </Link>
               </li>
             </ul>
           </div>
       
           {/* Services */}
           <div>
             <h3 className="text-xl font-bold mb-5">Services</h3>
       
             <ul className="space-y-4 text-gray-400">
               <li>Safari Vehicle Hire</li>
               <li>Airport Transfers</li>
               <li>Group Tours</li>
               <li>Private Safari Trips</li>
             </ul>
           </div>
       
           {/* Contact */}
           <div>
             <h3 className="text-xl font-bold mb-5">Contact Info</h3>
       
             <ul className="space-y-4 text-gray-400">
               <li>📍 Nairobi, Kenya</li>
               <li>📞 +254112277671</li>
               <li>✉ dengrayadventures@gmail.com</li>
             </ul>
       
             <a
               href="https://wa.me/+254112277671"
               target="_blank"
               rel="noreferrer"
               className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-lg transition"
             >
               WhatsApp Booking
             </a>
           </div>
         </div>
       
         {/* Bottom */}
         <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
           © 2026 DenGrey Tours & Safaris . All Rights Reserved.
         </div>
       </footer>

      {/* =================================================
          PACKAGE DETAILS MODAL
      ================================================= */}

      <PackageModal
        pkg={selectedPackage}
        onClose={() => setSelectedPackage(null)}
      />

    </main>
  );
}