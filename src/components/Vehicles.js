/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable no-undef */
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Clock3,
  Fuel,
  Gauge,
  MapPin,
  MessageCircle,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Camera,
  CarFront,
  Star,
} from "lucide-react";

import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image0 from "../assets/image0.jpg";
import cruiser1 from "../assets/cruiser1.jpg";
import cruiser2 from "../assets/cruiser2.jpg";
import safarivan from "../assets/safarivan.jpg";

function FleetShowcase() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const fleet = [
    {
      name: "Toyota Land Cruiser",
      image: cruiser1,
      gallery: [cruiser1, image5, image6],
      seats: "7 Seats",
      type: "4x4 Safari Jeep",
      price: "270",
      category: ["4x4", "luxury"],
      rating: 4.9,
      transmission: "Automatic",
      fuel: "Diesel",
      location: "Amboseli & Tsavo",
      description:
        "Powerful 4x4 safari jeep designed for rugged terrain, wildlife photography, and premium comfort during long game drives.",
      features: [
        "Pop-up Roof",
        "Charging Ports",
        "Cool Box",
        "Professional Guide",
      ],
      highlight: "Premium Choice",
    },
    {
      name: "Safari Tour Van",
      image: safarivan,
      gallery: [safarivan, image6, image7],
      seats: "9 Seats",
      type: "Tour Van",
      price: "210",
      category: ["group"],
      rating: 4.7,
      transmission: "Manual",
      fuel: "Diesel",
      location: "Nairobi & Amboseli",
      description:
        "Affordable and comfortable safari van ideal for families and group adventures across Kenya’s top destinations.",
      features: [
        "Large Windows",
        "Air Conditioning",
        "Roof Hatch",
        "Group Friendly",
      ],
      highlight: "Great for Groups",
    },
    {
      name: "Extended Safari Van",
      image: cruiser2,
      gallery: [cruiser2, image5, image7],
      seats: "10 Seats",
      type: "Group Tour Vehicle",
      price: "270",
      category: ["group"],
      rating: 4.6,
      transmission: "Manual",
      fuel: "Diesel",
      location: "Group Safari Tours",
      description:
        "Large capacity safari van perfect for tour companies, school trips, and travel groups exploring Kenya.",
      features: [
        "Extra Luggage Space",
        "Comfort Seats",
        "Safari Roof",
        "Group Packages",
      ],
      highlight: "Extra Capacity",
    },
  ];

  const categories = [
    { id: "all", label: "All Vehicles" },
    { id: "4x4", label: "4x4 Safari" },
    { id: "luxury", label: "Luxury" },
    { id: "group", label: "Group Tours" },
  ];

  const filteredFleet = useMemo(() => {
    return fleet.filter((vehicle) => {
      const searchTerm = search.toLowerCase().trim();

      const matchesSearch =
        vehicle.name.toLowerCase().includes(searchTerm) ||
        vehicle.type.toLowerCase().includes(searchTerm) ||
        vehicle.location.toLowerCase().includes(searchTerm);

      const matchesFilter =
        filter === "all" || vehicle.category.includes(filter);

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const getWhatsAppLink = (vehicle) => {
    const message = `Hello, I am interested in booking the ${vehicle.name} (${vehicle.type}) at $${vehicle.price} per day. Please share more details about availability and booking.`;

    return `https://wa.me/254112277671?text=${encodeURIComponent(message)}`;
  };

  const openVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
    setActiveImage(0);
  };

  const closeVehicle = () => {
    setSelectedVehicle(null);
    setActiveImage(0);
  };

  const changeImage = (direction) => {
    if (!selectedVehicle) return;

    const gallery = selectedVehicle.gallery;
    setActiveImage((current) =>
      (current + direction + gallery.length) % gallery.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeVehicle();
      if (event.key === "ArrowRight") changeImage(1);
      if (event.key === "ArrowLeft") changeImage(-1);
    };

    if (selectedVehicle) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedVehicle]);

  return (
    <div className="overflow-hidden bg-[#fbfaf7] text-[#17251d]">

{/* HERO */}
<section className="relative flex min-h-[420px] items-center overflow-hidden bg-[#071d13] sm:min-h-[470px] lg:min-h-[520px]">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={image0}
      alt="Renlen Tours safari fleet"
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#061b11]/95 via-[#061b11]/75 to-[#061b11]/20" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#061b11]/70 via-transparent to-black/20" />
  </div>

  {/* Decorative Circles */}
  <div className="absolute -right-32 top-10 h-[400px] w-[400px] rounded-full border border-white/10" />
  <div className="absolute -right-16 top-24 h-[280px] w-[280px] rounded-full border border-white/10" />

  {/* Hero Content */}
  <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-20">
    <div className="max-w-4xl">

      <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#d4af37]/40 bg-white/5 px-5 py-2.5 backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
        <span className="text-xs font-semibold uppercase tracking-[3px] text-[#e8c76a]">
          Renlen Tours & Safaris
        </span>
      </div>

      <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        Your Journey.
        <span className="mt-1 block font-light italic text-[#d4af37]">
          Our Safari Fleet.
        </span>
      </h1>

      <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
        Discover Kenya in comfort and style. Choose from our carefully
        selected safari vehicles, built for memorable wildlife
        experiences, scenic road trips and unforgettable adventures.
      </p>

      {/* Buttons */}
      

      {/* Fleet Statistics */}
      <div className="mt-9 grid max-w-xl grid-cols-3 gap-4 border-t border-white/20 pt-5 sm:mt-10 sm:gap-6 sm:pt-6">
        <div>
          <p className="text-xl font-bold text-white sm:text-3xl">
            4x4
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-wider text-white/55 sm:text-xs">
            Safari Ready
          </p>
        </div>

        <div>
          <p className="text-xl font-bold text-white sm:text-3xl">
            7–10
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-wider text-white/55 sm:text-xs">
            Passenger Seats
          </p>
        </div>

        <div>
          <p className="text-xl font-bold text-white sm:text-3xl">
            Kenya
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-wider text-white/55 sm:text-xs">
            Safari Routes
          </p>
        </div>
      </div>

    </div>
  </div>

  {/* Bottom Label */}
  <div className="absolute bottom-6 right-10 hidden items-center gap-3 text-xs uppercase tracking-[3px] text-white/60 lg:flex">
    <span className="h-px w-12 bg-[#d4af37]" />
    Explore our collection
  </div>
</section>


      {/* INTRODUCTION */}
      <section className="relative bg-white px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[4px] text-[#a88727]">
              Travel with confidence
            </p>
            <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-[#123522] sm:text-5xl">
              The right vehicle makes every journey better.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-gray-600">
              Whether you are planning a private wildlife safari, a family
              getaway or a group adventure, find a vehicle that matches your
              journey. Explore our fleet and choose your ideal travel
              companion.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-2 gap-4 border-t border-gray-200 pt-8 md:grid-cols-4">
          {[
            { icon: ShieldCheck, title: "Reliable Fleet", text: "Travel with confidence" },
            { icon: Users, title: "Group Friendly", text: "Space for your people" },
            { icon: Camera, title: "Safari Ready", text: "Made for game viewing" },
            { icon: MapPin, title: "Kenya Routes", text: "Explore iconic destinations" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-3 py-3">
                <div className="rounded-xl bg-[#edf3ed] p-3 text-[#1b5835]">
                  <Icon size={21} />
                </div>
                <div>
                  <h3 className="font-bold text-[#173b27]">{item.title}</h3>
                  <p className="mt-1 text-xs text-gray-500">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FLEET COLLECTION */}
      <section className="bg-[#f5f5ef] px-6 py-24 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[4px] text-[#a88727]">
                The collection
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-[#123522] sm:text-5xl">
                Find your perfect
                <span className="block font-light italic text-[#a88727]">
                  safari companion.
                </span>
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-gray-600">
                Explore our range of safari vehicles, each selected to make
                your journey comfortable and memorable.
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-500">
              <CarFront size={20} className="text-[#a88727]" />
              <span>{filteredFleet.length} vehicles available</span>
            </div>
          </div>

          {/* SEARCH AND FILTER */}
    

          {/* VEHICLE CARDS */}
          {filteredFleet.length === 0 ? (
            <div className="rounded-3xl border border-gray-200 bg-white px-6 py-20 text-center">
              <Search size={35} className="mx-auto mb-5 text-gray-400" />
              <h3 className="text-2xl font-bold text-[#123522]">
                No vehicles found
              </h3>
              <p className="mt-3 text-gray-500">
                Try a different search or category.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setFilter("all");
                }}
                className="mt-6 font-semibold text-[#a88727] hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredFleet.map((item) => (
                <article
                  key={item.name}
                  className="group overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-[290px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071d13]/90 via-transparent to-black/10" />

                    <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#0c2b1b]/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[2px] text-[#e8c76a] backdrop-blur-md">
                      {item.highlight}
                    </div>

                    <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-white/95 px-3 py-2 text-xs font-bold text-[#173b27]">
                      <Star size={13} className="fill-[#d4af37] text-[#d4af37]" />
                      {item.rating}
                    </div>

                    <div className="absolute bottom-5 left-6 right-6 text-white">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[3px] text-[#e8c76a]">
                        {item.type}
                      </p>
                      <h3 className="text-2xl font-bold">{item.name}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-6 grid grid-cols-2 gap-3">
                      {[
                        { icon: Users, label: "Capacity", value: item.seats },
                        { icon: Settings2, label: "Transmission", value: item.transmission },
                        { icon: Fuel, label: "Fuel type", value: item.fuel },
                        { icon: MapPin, label: "Coverage", value: item.location },
                      ].map((detail) => {
                        const Icon = detail.icon;
                        return (
                          <div
                            key={detail.label}
                            className="flex items-start gap-3 rounded-xl bg-[#f6f7f3] p-3"
                          >
                            <Icon size={17} className="mt-0.5 shrink-0 text-[#a88727]" />
                            <div className="min-w-0">
                              <p className="text-[10px] uppercase tracking-wider text-gray-400">
                                {detail.label}
                              </p>
                              <p className="mt-1 truncate text-xs font-bold text-[#183c28]">
                                {detail.value}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <p className="mb-6 min-h-[72px] text-sm leading-7 text-gray-500">
                      {item.description}
                    </p>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {item.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full border border-[#e7e8df] bg-[#fbfaf7] px-3 py-1.5 text-[10px] font-medium text-gray-600"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-end justify-between border-t border-gray-100 pt-5">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[2px] text-gray-400">
                          Starting from
                        </p>
                        <p className="mt-1 text-3xl font-bold tracking-tight text-[#123522]">
                          ${item.price}
                          <span className="ml-1 text-xs font-medium text-gray-400">
                            / day
                          </span>
                        </p>
                      </div>
                      <span className="rounded-lg bg-[#f4f0e2] px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-[#98751e]">
                        {item.category[0]}
                      </span>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <button
                        onClick={() => openVehicle(item)}
                        className="flex items-center justify-center gap-2 rounded-xl bg-[#123522] px-3 py-3.5 text-xs font-bold text-white transition hover:bg-[#1c5033]"
                      >
                        View Details
                        <ArrowUpRight size={15} />
                      </button>

                      <a
                        href={getWhatsAppLink(item)}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 rounded-xl bg-[#e8c76a] px-3 py-3.5 text-xs font-bold text-[#173b27] transition hover:bg-[#d4af37]"
                      >
                        <MessageCircle size={15} />
                        Book Now
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* VEHICLE COMPARISON */}
      <section className="bg-white px-6 py-24 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[4px] text-[#a88727]">
              Make the right choice
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-[#123522] sm:text-5xl">
              Compare Our Vehicles
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-500">
              Find the right balance of space, capability and comfort for your
              next safari.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#123522] text-white">
                    <th className="p-6 text-xs font-bold uppercase tracking-wider text-[#e8c76a]">
                      Vehicle Details
                    </th>
                    <th className="p-6 text-sm font-bold">
                      Safari Van
                    </th>
                    <th className="bg-[#1b4930] p-6 text-sm font-bold">
                      Land Cruiser
                      <span className="ml-2 rounded-full bg-[#d4af37] px-2 py-1 text-[9px] text-[#123522]">
                        4x4
                      </span>
                    </th>
                    <th className="p-6 text-sm font-bold">
                      Extended Van
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ["Passenger Capacity", "9 Seats", "7 Seats", "10 Seats"],
                    ["4x4 Capability", "Moderate", "Full", "Moderate"],
                    ["Best For", "Families & Groups", "Wildlife Safaris", "Large Groups"],
                    ["Photography", "Good", "Excellent", "Good"],
                    ["Transmission", "Manual", "Automatic", "Manual"],
                    ["Starting Price", "$210/day", "$270/day", "$270/day"],
                  ].map((row, index) => (
                    <tr
                      key={row[0]}
                      className={`border-t border-gray-100 ${
                        index % 2 === 0 ? "bg-[#fbfaf7]" : "bg-white"
                      }`}
                    >
                      <td className="p-6 font-bold text-[#183c28]">
                        {row[0]}
                      </td>
                      <td className="p-6 text-gray-600">{row[1]}</td>
                      <td className="bg-[#f5f7f1] p-6 font-semibold text-[#123522]">
                        {row[2]}
                      </td>
                      <td className="p-6 text-gray-600">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Vehicle specifications and rates are indicative. Confirm details
            and availability when booking.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative overflow-hidden bg-[#092619] px-6 py-24 text-white sm:px-10 lg:px-12">
        <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full border border-white/5" />
        <div className="absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-5 text-xs font-bold uppercase tracking-[4px] text-[#d4af37]">
              The Renlen Difference
            </p>
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              More than transport.
              <span className="block font-light italic text-[#d4af37]">
                A better safari experience.
              </span>
            </h2>
            <p className="mt-6 leading-8 text-white/60">
              Every great safari begins with the right journey. We focus on
              comfort, dependable service and vehicles suited to your
              adventure.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: CarFront,
                number: "01",
                title: "A Fleet for Every Journey",
                description:
                  "From capable 4x4 Land Cruisers to spacious safari vans, choose a vehicle that suits your travel plans.",
              },
              {
                icon: ShieldCheck,
                number: "02",
                title: "Comfort & Confidence",
                description:
                  "Enjoy a comfortable travel experience with vehicles selected for safari journeys and group adventures.",
              },
              {
                icon: Sparkles,
                number: "03",
                title: "Personalised Service",
                description:
                  "We help you find the right vehicle and make arrangements around your destination and travel needs.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.number}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-9 transition duration-500 hover:-translate-y-2 hover:border-[#d4af37]/50 hover:bg-white/[0.07]"
                >
                  <div className="mb-10 flex items-center justify-between">
                    <div className="rounded-xl bg-[#d4af37]/10 p-4 text-[#d4af37] transition group-hover:bg-[#d4af37] group-hover:text-[#092619]">
                      <Icon size={27} />
                    </div>
                    <span className="text-sm font-semibold tracking-[3px] text-white/25">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="mb-4 text-xl font-bold">{item.title}</h3>
                  <p className="text-sm leading-8 text-white/55">
                    {item.description}
                  </p>
                  <div className="mt-8 h-px w-12 bg-[#d4af37] transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="relative overflow-hidden bg-[#f2efe5] px-6 py-24 sm:px-10 lg:px-12">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-[#c7b77e]/30" />
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full border border-[#c7b77e]/30" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[4px] text-[#a88727]">
              Your adventure awaits
            </p>
            <h2 className="text-4xl font-bold leading-tight text-[#123522] sm:text-5xl">
              Ready to explore Kenya?
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-gray-600">
              Let us help you choose the ideal safari vehicle for your next
              adventure. Get in touch with our team and start planning your
              journey.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="https://wa.me/254112277671"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#123522] px-8 py-4 font-bold text-white shadow-lg transition hover:bg-[#1c5033]"
            >
              <MessageCircle size={19} />
              Start Booking
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#123522]/20 px-8 py-4 font-bold text-[#123522] transition hover:bg-white"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* VEHICLE DETAILS MODAL */}
      {selectedVehicle && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#04150c]/90 p-3 backdrop-blur-sm sm:p-6"
          onClick={closeVehicle}
        >
          <div
            className="relative max-h-[94vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVehicle}
              aria-label="Close vehicle details"
              className="absolute right-4 top-4 z-20 rounded-full bg-black/70 p-3 text-white transition hover:bg-[#d4af37] hover:text-[#123522]"
            >
              <X size={19} />
            </button>

            <div className="grid lg:grid-cols-2">
              {/* GALLERY */}
              <div className="relative min-h-[320px] bg-[#092619] lg:min-h-[650px]">
                <img
                  src={selectedVehicle.gallery[activeImage]}
                  alt={`${selectedVehicle.name} gallery ${activeImage + 1}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <span className="rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                    <Camera size={14} className="mr-2 inline" />
                    {activeImage + 1} / {selectedVehicle.gallery.length}
                  </span>

                  <div className="flex gap-2">
                    <button
                      onClick={() => changeImage(-1)}
                      aria-label="Previous image"
                      className="rounded-full bg-white/90 p-3 text-[#123522] transition hover:bg-[#d4af37]"
                    >
                      <ChevronLeft size={19} />
                    </button>
                    <button
                      onClick={() => changeImage(1)}
                      aria-label="Next image"
                      className="rounded-full bg-white/90 p-3 text-[#123522] transition hover:bg-[#d4af37]"
                    >
                      <ChevronRight size={19} />
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-24 left-6 flex gap-2">
                  {selectedVehicle.gallery.map((image, index) => (
                    <button
                      key={`${image}-${index}`}
                      onClick={() => setActiveImage(index)}
                      aria-label={`View image ${index + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        activeImage === index
                          ? "w-8 bg-[#d4af37]"
                          : "w-2 bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* DETAILS */}
              <div className="p-7 sm:p-10 lg:p-12">
                <p className="mb-4 text-xs font-bold uppercase tracking-[4px] text-[#a88727]">
                  Vehicle Details
                </p>

                <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#a88727]">
                  <Star size={14} className="fill-[#d4af37]" />
                  {selectedVehicle.rating} Vehicle Rating
                </div>

                <h2 className="text-3xl font-bold leading-tight text-[#123522] sm:text-4xl">
                  {selectedVehicle.name}
                </h2>

                <p className="mt-2 text-sm font-medium text-gray-400">
                  {selectedVehicle.type}
                </p>

                <p className="mt-7 text-sm leading-8 text-gray-600">
                  {selectedVehicle.description}
                </p>

                <div className="my-8 border-y border-gray-100 py-6">
                  <p className="text-xs font-semibold uppercase tracking-[2px] text-gray-400">
                    Starting from
                  </p>
                  <p className="mt-2 text-4xl font-bold text-[#123522]">
                    ${selectedVehicle.price}
                    <span className="ml-2 text-sm font-medium text-gray-400">
                      / day
                    </span>
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Users, label: "Capacity", value: selectedVehicle.seats },
                    { icon: Settings2, label: "Transmission", value: selectedVehicle.transmission },
                    { icon: Fuel, label: "Fuel", value: selectedVehicle.fuel },
                    { icon: MapPin, label: "Location", value: selectedVehicle.location },
                  ].map((detail) => {
                    const Icon = detail.icon;
                    return (
                      <div
                        key={detail.label}
                        className="rounded-xl bg-[#f6f7f3] p-4"
                      >
                        <Icon size={18} className="mb-3 text-[#a88727]" />
                        <p className="text-[10px] uppercase tracking-wider text-gray-400">
                          {detail.label}
                        </p>
                        <p className="mt-1 text-sm font-bold text-[#123522]">
                          {detail.value}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8">
                  <h3 className="mb-4 font-bold text-[#123522]">
                    Vehicle Features
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedVehicle.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-xs text-gray-600"
                      >
                        <CircleCheck size={16} className="shrink-0 text-[#a88727]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={getWhatsAppLink(selectedVehicle)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#123522] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#1c5033]"
                  >
                    <MessageCircle size={18} />
                    Book on WhatsApp
                  </a>
                  <button
                    onClick={closeVehicle}
                    className="rounded-xl border border-gray-200 px-7 py-4 text-sm font-bold text-gray-600 transition hover:bg-gray-50"
                  >
                    Close
                  </button>
                </div>

                <p className="mt-5 text-center text-[11px] text-gray-400">
                  Contact our team to confirm availability and booking details.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
 
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
    </div>
  );
}

export default FleetShowcase;
