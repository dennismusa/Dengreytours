/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ============================================
// IMAGE IMPORTS
// ============================================
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";
import img19 from "../assets/img19.jpg";
import img20 from "../assets/img20.jpg";
import img21 from "../assets/img21.jpg";
import img22 from "../assets/img22.jpg";
import img23 from "../assets/img23.jpg";
import img24 from "../assets/img24.jpg";
import img25 from "../assets/img25.jpg";
import img26 from "../assets/img26.jpg";
import img27 from "../assets/img27.jpg";

// ============================================
// IMAGE COLLECTION
// ============================================
const gallery = [
  { image: img1, title: "The African Wilderness", category: "Adventure" },
  { image: img2, title: "Giants of the Savannah", category: "Wildlife" },
  { image: img3, title: "Beyond the Horizon", category: "Landscapes" },
  { image: img4, title: "Nature in Its Purest Form", category: "Wildlife" },
  { image: img5, title: "Golden African Plains", category: "Landscapes" },
  { image: img6, title: "A Journey into the Wild", category: "Adventure" },
  { image: img7, title: "Wild Encounters", category: "Wildlife" },
  { image: img8, title: "The Beauty of Africa", category: "Landscapes" },
  { image: img9, title: "Unforgettable Journeys", category: "Adventure" },
  { image: img10, title: "Into the Wild", category: "Wildlife" },
  { image: img11, title: "Open African Horizons", category: "Landscapes" },
  { image: img12, title: "The Safari Experience", category: "Adventure" },
  { image: img13, title: "Life in the Wild", category: "Wildlife" },
  { image: img14, title: "African Wilderness", category: "Landscapes" },
  { image: img15, title: "Chasing the Golden Light", category: "Adventure" },
  { image: img16, title: "Wildlife Encounters", category: "Wildlife" },
  { image: img17, title: "The Endless Plains", category: "Landscapes" },
  { image: img18, title: "Safari Trails", category: "Adventure" },
  { image: img19, title: "Nature's Finest Moments", category: "Wildlife" },
  { image: img20, title: "The African Landscape", category: "Landscapes" },
  { image: img21, title: "First Light in Africa", category: "Adventure" },
  { image: img22, title: "Elephant Country", category: "Wildlife" },
  { image: img23, title: "A Different Perspective", category: "Landscapes" },
  { image: img24, title: "Untamed Africa", category: "Wildlife" },
  { image: img25, title: "Discover the Extraordinary", category: "Adventure" },
  { image: img26, title: "Africa in Motion", category: "Landscapes" },
  { image: img27, title: "Stories Worth Remembering", category: "Adventure" },
];

const heroImages = [img1, img2, img3];

const categories = ["All Stories", "Wildlife", "Landscapes", "Adventure"];

const experiences = [
  {
    number: "01",
    title: "Wildlife Encounters",
    subtitle: "Closer to the extraordinary",
    image: img22,
    description:
      "Discover Kenya's incredible wildlife, from magnificent elephant herds to the iconic predators of the African savannah.",
  },
  {
    number: "02",
    title: "The Open Savannah",
    subtitle: "Where nature takes centre stage",
    image: img8,
    description:
      "Experience breathtaking horizons, dramatic scenery and the untouched beauty of Africa's wilderness.",
  },
  {
    number: "03",
    title: "Safari Adventures",
    subtitle: "Every journey has a story",
    image: img15,
    description:
      "Explore the wild through unforgettable game drives, remarkable discoveries and extraordinary moments.",
  },
];

function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All Stories");
  const [selectedImage, setSelectedImage] = useState(null);

  // HERO SLIDER
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  // FILTERING
  const filteredGallery =
    activeCategory === "All Stories"
      ? gallery
      : gallery.filter((item) => item.category === activeCategory);

  // LIGHTBOX
  const selectedIndex = gallery.findIndex(
    (item) => item.image === selectedImage
  );

  const changeImage = (direction) => {
    const nextIndex =
      (selectedIndex + direction + gallery.length) % gallery.length;

    setSelectedImage(gallery[nextIndex].image);
  };

  // KEYBOARD CONTROLS
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedImage(null);
      if (event.key === "ArrowRight") changeImage(1);
      if (event.key === "ArrowLeft") changeImage(-1);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage, selectedIndex]);

  return (
    <main className="bg-[#F5F3EE] text-[#24231F] min-h-screen overflow-hidden">

      {/* ========================================
          HERO - EDITORIAL STYLE
      ======================================== */}
      
{/* HERO */}
<section className="relative h-[65vh] min-h-[430px] max-h-[560px] bg-[#171713] overflow-hidden">

  {heroImages.map((image, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-[1800ms] ${
        currentSlide === index ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={image}
        alt="DenGrey African safari"
        className="w-full h-full object-cover scale-[1.03]"
      />
    </div>
  ))}

  <div className="absolute inset-0 bg-black/35" />
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

  <div className="relative z-10 max-w-[1500px] mx-auto h-full px-6 sm:px-12 lg:px-20 flex flex-col justify-center">

    <div className="max-w-4xl">

      <div className="flex items-center gap-4 mb-5">
        <span className="w-10 h-[1px] bg-[#C6A36A]" />
        <span className="text-[#D6BD91] uppercase tracking-[5px] text-[10px] sm:text-xs">
          DenGrey Tours & Safaris
        </span>
      </div>

      <p className="text-white/70 uppercase tracking-[4px] text-[10px] sm:text-xs mb-4">
        A visual journey through Africa
      </p>

      <h1 className="font-serif text-4xl sm:text-6xl lg:text-[76px] leading-[0.98] text-white tracking-tight">
        Africa,
        <br />
        <span className="italic text-[#D6BD91]">
          Untamed.
        </span>
      </h1>

      <p className="max-w-lg text-white/75 leading-7 mt-5 text-sm sm:text-base">
        Discover the extraordinary beauty of Kenya through
        remarkable landscapes, wildlife encounters and
        unforgettable safari journeys.
      </p>

      

    </div>

    {/* SLIDE INFORMATION */}
    <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-12 lg:left-20 right-6 sm:right-12 lg:right-20 flex items-end justify-between">

      <div>
        <p className="text-white/50 uppercase tracking-[3px] text-[9px]">
          Explore the extraordinary
        </p>
        <p className="text-white text-xs tracking-[2px] mt-2">
          KENYA · EAST AFRICA
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-white text-sm font-serif">
          0{currentSlide + 1}
        </span>

        <div className="flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-[2px] transition-all duration-500 ${
                currentSlide === index
                  ? "w-10 bg-[#C6A36A]"
                  : "w-4 bg-white/40"
              }`}
            />
          ))}
        </div>

        <span className="text-white/50 text-sm font-serif">
          0{heroImages.length}
        </span>
      </div>

    </div>

  </div>
</section>



      {/* ========================================
          INTRODUCTION
      ======================================== */}
      <section className="py-24 sm:py-32 px-6 sm:px-12">

        <div className="max-w-[1200px] mx-auto grid md:grid-cols-12 gap-12 items-center">

          <div className="md:col-span-5">

            <span className="text-[#A17B42] text-[10px] uppercase tracking-[5px] font-semibold">
              The Art of Discovery
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight mt-7">
              Not just a
              <br />
              destination.
              <br />
              <span className="italic text-[#A17B42]">
                An experience.
              </span>
            </h2>

          </div>

          <div className="md:col-span-7 md:pl-16">

            <p className="text-gray-600 leading-9 text-base sm:text-lg">
              Africa is a world of extraordinary contrasts.
              Vast open landscapes, fascinating wildlife and
              moments that stay with you long after the journey ends.
            </p>

            <p className="text-gray-500 leading-8 text-sm mt-6">
              At DenGrey Tours & Safaris, we celebrate the beauty
              of these experiences through every destination,
              every adventure and every unforgettable encounter.
            </p>

            <div className="flex gap-12 mt-12 border-t border-[#D9D4C9] pt-7">

              <div>
                <h3 className="font-serif text-4xl text-[#A17B42]">
                  27
                </h3>
                <p className="uppercase tracking-[2px] text-[9px] text-gray-500 mt-2">
                  Visual Stories
                </p>
              </div>

              <div>
                <h3 className="font-serif text-4xl text-[#A17B42]">
                  01
                </h3>
                <p className="uppercase tracking-[2px] text-[9px] text-gray-500 mt-2">
                  Wild Continent
                </p>
              </div>

              <div>
                <h3 className="font-serif text-4xl text-[#A17B42]">
                  ∞
                </h3>
                <p className="uppercase tracking-[2px] text-[9px] text-gray-500 mt-2">
                  Memories
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ========================================
          FEATURED EDITORIAL PHOTOGRAPHY
      ======================================== */}
      <section className="px-5 sm:px-10 lg:px-16 pb-28">

        <div className="max-w-[1500px] mx-auto">

          <div className="flex items-end justify-between mb-10">

            <div>
              <span className="text-[#A17B42] uppercase tracking-[4px] text-[10px] font-semibold">
                Featured Photography
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl mt-4">
                The Wild Collection
              </h2>
            </div>

            <span className="hidden sm:block text-xs text-gray-400 tracking-[3px]">
              COLLECTION / 001
            </span>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

            {/* FEATURE IMAGE */}
            <div
              className="md:col-span-7 relative h-[420px] sm:h-[600px] overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(img4)}
            >

              <img
                src={img4}
                alt="African wildlife"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-1000"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 sm:left-12 text-white">

                <span className="uppercase tracking-[4px] text-[10px] text-[#D6BD91]">
                  The wilderness
                </span>

                <h3 className="font-serif text-3xl sm:text-5xl mt-3">
                  The Wild, Unfiltered.
                </h3>

                <p className="text-white/70 text-sm mt-3">
                  Discover the extraordinary.
                </p>

              </div>

            </div>


            {/* SECONDARY IMAGES */}
            <div className="md:col-span-5 grid grid-cols-2 gap-4">

              <div
                className="relative overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(img5)}
              >
                <img
                  src={img5}
                  alt="African landscape"
                  className="w-full h-full min-h-[200px] object-cover group-hover:scale-110 transition duration-700"
                />

                <span className="absolute bottom-5 left-5 text-white text-xs tracking-wider">
                  01 / LANDSCAPES
                </span>
              </div>

              <div
                className="relative overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(img6)}
              >
                <img
                  src={img6}
                  alt="Safari adventure"
                  className="w-full h-full min-h-[200px] object-cover group-hover:scale-110 transition duration-700"
                />

                <span className="absolute bottom-5 left-5 text-white text-xs tracking-wider">
                  02 / JOURNEYS
                </span>
              </div>

              <div
                className="col-span-2 relative h-[220px] sm:h-[280px] overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(img7)}
              >

                <img
                  src={img7}
                  alt="Wildlife photography"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/20" />

                <span className="absolute bottom-6 left-7 text-white font-serif text-2xl">
                  Moments that Matter.
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ========================================
          FULL PHOTOGRAPHY COLLECTION
      ======================================== */}
      <section id="collection" className="bg-[#EAE7DF] py-24 sm:py-32 px-5 sm:px-10 lg:px-16">

        <div className="max-w-[1500px] mx-auto">

          {/* SECTION HEADER */}
          <div className="grid md:grid-cols-2 gap-8 items-end mb-14">

            <div>
              <span className="text-[#A17B42] uppercase tracking-[5px] text-[10px] font-semibold">
                The Complete Collection
              </span>

              <h2 className="font-serif text-4xl sm:text-6xl mt-5 leading-tight">
                A World Worth
                <br />
                <span className="italic text-[#A17B42]">
                  Exploring.
                </span>
              </h2>
            </div>

            <p className="text-gray-500 text-sm leading-8 max-w-lg md:ml-auto">
              Explore our collection of safari photographs.
              From the smallest details of nature to the grandeur
              of the African wilderness, every image captures
              a different perspective.
            </p>

          </div>


          {/* FILTER NAVIGATION */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-7 border-b border-[#CFC9BD] pb-6 mb-10">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-[10px] sm:text-xs uppercase tracking-[2px] pb-2 transition-all duration-300 ${
                  activeCategory === category
                    ? "text-[#A17B42] border-b-2 border-[#A17B42] font-bold"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}

            <span className="ml-auto text-[10px] text-gray-400 tracking-wider">
              {filteredGallery.length} PHOTOGRAPHS
            </span>

          </div>


          {/* EDITORIAL GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">

            {filteredGallery.map((item, index) => {

              const featured = index % 9 === 0;
              const tall = index % 7 === 3;

              return (
                <button
                  key={item.title}
                  onClick={() => setSelectedImage(item.image)}
                  className={`relative text-left overflow-hidden group bg-[#D6D1C7] ${
                    featured
                      ? "col-span-2 row-span-2"
                      : tall
                      ? "row-span-2"
                      : ""
                  }`}
                >

                  <div className={`relative overflow-hidden ${
                    featured
                      ? "h-[340px] sm:h-[510px] lg:h-[560px]"
                      : tall
                      ? "h-[340px] sm:h-[510px]"
                      : "h-[165px] sm:h-[245px] lg:h-[270px]"
                  }`}>

                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition duration-500" />

                    <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-6 bg-gradient-to-t from-black/75 via-transparent to-transparent">

                      <span className="text-[#E0C391] text-[8px] sm:text-[10px] uppercase tracking-[2px]">
                        {item.category}
                      </span>

                      <h3 className="text-white font-serif text-sm sm:text-xl mt-2">
                        {item.title}
                      </h3>

                      <span className="text-white/70 text-[9px] sm:text-xs mt-3 opacity-0 group-hover:opacity-100 transition duration-500">
                        VIEW PHOTOGRAPH ↗
                      </span>

                    </div>

                    <span className="absolute top-3 left-3 sm:top-5 sm:left-5 text-white/80 text-[9px] tracking-widest">
                      {String(gallery.indexOf(item) + 1).padStart(2, "0")}
                    </span>

                  </div>

                </button>
              );
            })}

          </div>

        </div>

      </section>


      {/* ========================================
          EXPERIENCE COLLECTION
      ======================================== */}
      <section className="py-28 sm:py-36 px-6 sm:px-12">

        <div className="max-w-[1350px] mx-auto">

          <div className="text-center mb-20">

            <span className="text-[#A17B42] uppercase tracking-[5px] text-[10px] font-semibold">
              More Than A Destination
            </span>

            <h2 className="font-serif text-4xl sm:text-6xl mt-5">
              Experience Africa.
            </h2>

            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-8 mt-5">
              Beyond the photographs lies a world of experiences
              waiting to be discovered.
            </p>

          </div>


          <div className="space-y-20">

            {experiences.map((item, index) => (
              <div
                key={item.number}
                className={`grid md:grid-cols-2 gap-10 lg:gap-20 items-center ${
                  index % 2 !== 0 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >

                <div className="relative overflow-hidden h-[330px] sm:h-[480px]">

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition duration-1000"
                  />

                  <span className="absolute bottom-5 left-6 text-white text-xs tracking-[4px]">
                    COLLECTION / {item.number}
                  </span>

                </div>


                <div className="max-w-lg">

                  <span className="text-[#A17B42] text-xs tracking-[4px] uppercase">
                    {item.subtitle}
                  </span>

                  <h3 className="font-serif text-4xl sm:text-5xl mt-6 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-8 mt-7">
                    {item.description}
                  </p>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-5 mt-9 text-[10px] font-bold tracking-[3px] text-[#A17B42] border-b border-[#A17B42] pb-3 hover:gap-8 transition-all duration-300"
                  >
                    DISCOVER MORE
                    <span>↗</span>
                  </Link>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ========================================
          BOOKING FEATURE
      ======================================== */}
      <section className="relative bg-[#1B1B18] py-28 sm:py-36 px-6 overflow-hidden">

        <div className="absolute inset-0 opacity-20">
          <img
            src={img27}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#171713] via-[#171713]/90 to-[#171713]/60" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">

          <span className="text-[#D6BD91] uppercase tracking-[5px] text-[10px] font-semibold">
            Your Story Begins Here
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white mt-7 leading-tight">
            The Wild Is
            <br />
            <span className="italic text-[#D6BD91]">
              Calling.
            </span>
          </h2>

          <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base leading-8 mt-8">
            Let us take you beyond the ordinary. Discover the
            magic of Kenya with DenGrey Tours & Safaris.
          </p>

          <a
            href="https://wa.me/254112277671"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-5 bg-[#C6A36A] hover:bg-white text-black px-10 py-5 mt-11 text-[10px] font-bold tracking-[3px] transition duration-500"
          >
            RESERVE YOUR EXPERIENCE
            <span>↗</span>
          </a>

        </div>

      </section>


      {/* ========================================
          PROFESSIONAL FOOTER
      ======================================== */}

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

    </main>
  );
}

export default Gallery;
