
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import img23 from "../assets/img23.jpg";

import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
  
  Send,
  ChevronDown,
  CheckCircle2,
  Compass,
  Sparkles,
  Headphones,
} from "lucide-react";

function Contact() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // WHATSAPP FORM SUBMISSION
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const phone = formData.get("phone")?.trim();
    const vehicle = formData.get("vehicle");
    const message = formData.get("message")?.trim();

    if (!name || !email || !phone || !vehicle) {
      alert("Please complete all required fields.");
      return;
    }

    setIsSubmitting(true);

    const whatsappMessage = `
Hello DenGrey Tours & Safaris!

I would like to request a safari quote.

*PERSONAL DETAILS*
Name: ${name}
Email: ${email}
Phone: ${phone}

*SAFARI DETAILS*
Safari Type: ${vehicle}

*ADDITIONAL INFORMATION*
${message || "I would like to discuss my safari plans and get more information."}

Please assist me with availability, pricing and booking details.

Thank you!
    `.trim();

    const whatsappURL = `https://wa.me/254112277671?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    const newWindow = window.open(whatsappURL, "_blank");

    if (newWindow) {
      newWindow.opener = null;
    }

    setIsSubmitting(false);
    form.reset();
  };

  const faqs = [
    {
      q: "Is East Africa safe to visit?",
      a: "Yes. Safari regions are well managed, and professional guides help ensure safe and enjoyable travel throughout your trip.",
    },
    {
      q: "When is the best time to go on safari?",
      a: "June to October is popular for wildlife viewing and the Great Migration. However, Kenya offers rewarding safari experiences throughout the year.",
    },
    {
      q: "What is included in your safari packages?",
      a: "Depending on your package, inclusions may cover transport, a professional guide, park fees, accommodation and game drives. We will clarify the inclusions when preparing your quote.",
    },
    {
      q: "How do I book and is a deposit required?",
      a: "Contact our team to discuss your preferred dates and package. We will guide you through the booking process and explain the applicable payment arrangements.",
    },
    {
      q: "Can I request a customised safari?",
      a: "Absolutely. Share your destination, preferred travel dates, group size and budget. We can discuss a safari experience suited to your needs.",
    },
  ];

  const contactDetails = [
    {
      icon: MapPin,
      title: "Our Location",
      detail: "Nairobi, Kenya",
      subtitle: "Serving safari destinations across Kenya",
    },
    {
      icon: Phone,
      title: "Call Our Team",
      detail: "+254 112 277 671",
      subtitle: "Speak with us about your journey",
      href: "tel:+254112277671",
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "dengrayadventures@gmail.com",
      subtitle: "Send us your safari enquiry",
      href: "mailto:dengrayadventures@gmail.com",
    },
  ];

  return (
    <div className="overflow-hidden bg-[#faf9f5] text-[#17251d]">

      
{/* HERO */}
<section className="relative flex min-h-[420px] items-center overflow-hidden bg-[#071d13] sm:min-h-[460px] lg:min-h-[500px]">
  {/* Background */}
  <div className="absolute inset-0">
    <img
      src={img23}
      alt="African safari landscape"
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#061b11]/95 via-[#061b11]/80 to-[#061b11]/30" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#061b11]/70 via-transparent to-black/20" />
  </div>

  {/* Decorative circles */}
  <div className="absolute -right-32 top-10 h-[400px] w-[400px] rounded-full border border-white/10" />
  <div className="absolute -right-16 top-24 h-[260px] w-[260px] rounded-full border border-white/10" />

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-20"
  >
    <div className="max-w-3xl">

      <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#d4af37]/40 bg-white/5 px-5 py-2.5 backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
        <span className="text-xs font-semibold uppercase tracking-[3px] text-[#e8c76a]">
          Get in touch
        </span>
      </div>

      <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
        Let's Plan Your
        <span className="mt-1 block font-light italic text-[#d4af37]">
          Next Adventure.
        </span>
      </h1>

      <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
        Every unforgettable safari starts with a conversation. Tell us
        what you have in mind, and let our team help you plan an
        extraordinary African experience.
      </p>

      
    </div>
  </motion.div>
</section>

{/* CONTACT INTRO */}
<section className="bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-20">
  <div className="mx-auto max-w-7xl">

    <div className="mb-10 max-w-2xl">
      <p className="mb-4 text-xs font-bold uppercase tracking-[4px] text-[#a88727]">
        We are here to help
      </p>

      <h2 className="text-3xl font-bold leading-tight text-[#123522] sm:text-4xl lg:text-5xl">
        Let's make your safari happen.
      </h2>

      <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
        Have a question, need a quotation or ready to book? Reach out
        through your preferred channel. Our team is ready to assist.
      </p>
    </div>

    <div className="grid gap-5 md:grid-cols-3">
      {contactDetails.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.a
            key={item.title}
            href={item.href || undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
            className="group rounded-2xl border border-gray-100 bg-[#faf9f5] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/50 hover:shadow-xl sm:p-7"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf0e9] text-[#17472c] transition group-hover:bg-[#123522] group-hover:text-[#d4af37]">
              <Icon size={23} />
            </div>

            <h3 className="font-bold text-[#123522]">
              {item.title}
            </h3>

            <p className="mt-2 break-words text-base font-semibold text-gray-800 sm:text-lg">
              {item.detail}
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              {item.subtitle}
            </p>

            {item.href && (
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a88727]">
                Contact us
                <ArrowRight size={15} />
              </span>
            )}
          </motion.a>
        );
      })}
    </div>

  </div>
</section>


      {/* CONTACT FORM */}
      <section
        id="contact-form"
        className="relative overflow-hidden bg-[#f2f1e9] px-6 py-24 sm:px-10 lg:px-12"
      >
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full border border-[#c7b77e]/30" />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

          {/* LEFT INFORMATION */}
          <div className="pt-5">
            <p className="mb-5 text-xs font-bold uppercase tracking-[4px] text-[#a88727]">
              Start your journey
            </p>

            <h2 className="text-4xl font-bold leading-tight text-[#123522] sm:text-5xl">
              Tell us about your
              <span className="block font-light italic text-[#a88727]">
                dream safari.
              </span>
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-gray-600">
              Complete the enquiry form and send your details directly to our
              WhatsApp. We will receive your safari requirements and help you
              with the next steps.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: CheckCircle2,
                  title: "Share your requirements",
                  text: "Tell us your preferred safari experience and travel plans.",
                },
                {
                  icon: MessageCircle,
                  title: "Connect directly",
                  text: "Your enquiry opens in WhatsApp for convenient communication.",
                },
                {
                  icon: Compass,
                  title: "Plan your adventure",
                  text: "Discuss destinations, pricing and the best options for your trip.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#123522] text-[#d4af37]">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3 className="font-bold text-[#123522]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-7 text-gray-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 rounded-2xl bg-[#123522] p-7 text-white">
              <div className="flex items-center gap-3">
                <Headphones className="text-[#d4af37]" size={25} />
                <h3 className="font-bold">Need immediate assistance?</h3>
              </div>

              <p className="mt-3 text-sm leading-7 text-white/65">
                Speak directly with our team about your safari plans.
              </p>

              <a
                href="https://wa.me/254112277671"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-bold text-[#e8c76a] transition hover:text-white"
              >
                Chat with us
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white bg-white p-7 shadow-xl sm:p-10"
          >
            <div className="mb-9">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf0e9] text-[#17472c]">
                <Send size={22} />
              </div>

              <h2 className="text-2xl font-bold text-[#123522] sm:text-3xl">
                Request a Safari Quote
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Fill in your details below. Your request will be prepared in
                WhatsApp so you can send it directly to our team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-600">
                    Full Name *
                  </label>

                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-[#fafaf8] px-4 py-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#b89636] focus:ring-2 focus:ring-[#d4af37]/15"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-600">
                    Email Address *
                  </label>

                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-[#fafaf8] px-4 py-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#b89636] focus:ring-2 focus:ring-[#d4af37]/15"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-600">
                  Phone Number *
                </label>

                <input
                  name="phone"
                  type="tel"
                  placeholder="+254 7XX XXX XXX"
                  autoComplete="tel"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-[#fafaf8] px-4 py-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#b89636] focus:ring-2 focus:ring-[#d4af37]/15"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-600">
                  Preferred Safari Experience *
                </label>

                <select
                  name="vehicle"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-gray-200 bg-[#fafaf8] px-4 py-4 text-sm text-gray-700 outline-none transition focus:border-[#b89636] focus:ring-2 focus:ring-[#d4af37]/15"
                >
                  <option value="" disabled>
                    Select your safari type
                  </option>
                  <option value="Private Safari">Private Safari</option>
                  <option value="Group Safari">Group Safari</option>
                  <option value="Luxury Safari">Luxury Safari</option>
                  <option value="Budget Safari">Budget Safari</option>
                  <option value="Family Safari">Family Safari</option>
                  <option value="Wildlife Photography Safari">
                    Wildlife Photography Safari
                  </option>
                  <option value="Safari Vehicle Hire">
                    Safari Vehicle Hire
                  </option>
                  <option value="Other">Other Enquiry</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-600">
                  Tell Us About Your Safari
                </label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Preferred destination, travel dates, number of people, budget or any other requirements..."
                  className="w-full resize-y rounded-xl border border-gray-200 bg-[#fafaf8] px-4 py-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#b89636] focus:ring-2 focus:ring-[#d4af37]/15"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#123522] px-6 py-5 font-bold text-white shadow-lg transition hover:bg-[#1c5033] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <MessageCircle size={20} />
                {isSubmitting ? "Preparing Request..." : "Send WhatsApp Request"}
                <ArrowUpRight size={18} />
              </button>

              <p className="text-center text-xs leading-6 text-gray-400">
                By submitting, WhatsApp will open with your enquiry ready to
                send. You will need to press Send in WhatsApp to deliver it.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="bg-white px-6 py-24 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[4px] text-[#a88727]">
              Find us
            </p>

            <h2 className="text-4xl font-bold text-[#123522] sm:text-5xl">
              Our Location
            </h2>

            <p className="mt-5 text-gray-500">
              Connect with DenGrey Tours & Safaris in Kenya.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
            <iframe
              title="DenGrey Adventures Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8121989644346!2d34.76524771073757!3d-0.10036579989821968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa50a19822da1%3A0xed5a397ac38f77eb!2sDENGRAY%20ADVENTURES!5e0!3m2!1sen!2ske!4v1785064870527!5m2!1sen!2ske"
              className="h-[400px] w-full sm:h-[500px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#092619] px-6 py-24 text-white sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[4px] text-[#d4af37]">
              Helpful information
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              Find answers to common questions about planning your next
              African safari.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border transition duration-300 ${
                  openFAQ === index
                    ? "border-[#d4af37]/50 bg-white/[0.08]"
                    : "border-white/10 bg-white/[0.035]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFAQ === index}
                  className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left"
                >
                  <span
                    className={`font-semibold transition ${
                      openFAQ === index
                        ? "text-[#e8c76a]"
                        : "text-white"
                    }`}
                  >
                    {item.q}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-[#d4af37] transition-transform duration-300 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-white/10 px-6 py-5 text-sm leading-8 text-white/60">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#f2efe5] px-6 py-24 text-center sm:px-10">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-[#c7b77e]/30" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full border border-[#c7b77e]/30" />

        <div className="relative mx-auto max-w-3xl">
          <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#123522] text-[#d4af37]">
            <Sparkles size={28} />
          </div>

          <p className="mb-5 text-xs font-bold uppercase tracking-[4px] text-[#a88727]">
            Your next adventure starts here
          </p>

          <h2 className="text-4xl font-bold leading-tight text-[#123522] sm:text-5xl">
            Ready for Your African Adventure?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600">
            Let us help you create a safari experience worth remembering.
            Reach out today and let's start planning.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/254112277671"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#123522] px-8 py-4 font-bold text-white transition hover:bg-[#1c5033]"
            >
              <MessageCircle size={19} />
              Get Your Free Quote
            </a>

            <a
              href="tel:+254112277671"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#123522]/20 px-8 py-4 font-bold text-[#123522] transition hover:bg-white"
            >
              <Phone size={18} />
              Call Our Team
            </a>
          </div>

          <p className="mt-7 text-xs text-gray-400">
            Personalised safari enquiries · Direct WhatsApp communication
          </p>
        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/254112277671"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110 hover:bg-[#1ebe5d]"
      >
        <MessageCircle size={27} />
      </a>

      {/* ================= FOOTER ================= */}
    
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

export default Contact;
