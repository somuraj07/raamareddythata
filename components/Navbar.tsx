"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import logoImg from "../public/logo.png"; // update filename if different


const aboutDropdown = [
  { label: "About RamiReddy Thata", href: "/thata" },
  { label: "Samadhi Mandir", href: "/samadhi-mandir" },
  { label: "Gurusthan", href: "/gurusthan" },
  { label: "Dhuni", href: "/dhuni" },
  { label: "Bhakta Nivas", href: "/bhakta-nivas" },
  { label: "Amma Samadhi", href: "/amma-samadhi" },
  { label: "Anugonda", href: "/anugonda" },
  { label: "Thata Sai Mandir", href: "/thata-sai-mandir" },
  { label: "Jeevitha Charita", href: "/book" },
  { label: "Leelamrutham", href: "/leelamrutham" },
  { label: "Goshala", href: "/goshala" },
  { label: "Daily Sevas", href: "/daily-sevas" },
  { label: "Special Events", href: "/special-events" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Videos", href: "/videos" },
  { label: "Products", href: "/product" },
  { label: "Contact", href: "/contact" },
  { label: "Management", href: "/manage" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [stickyAbout, setStickyAbout] = useState(false);


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 isolate
      ${isScrolled ? "bg-white/90 backdrop-blur-md shadow" : "bg-transparent"}`}>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* Logo */}
         <Link href="/" className="flex items-center gap-3">
  <Image
    src={logoImg}
    alt="Samsthan Logo"
    width={55}
    height={55}
    className="rounded-full object-cover shadow"
  />

  <div className="hidden sm:block">
    <h1 className="font-serif text-lg md:text-xl font-semibold text-black leading-tight">
      Sri Rami Reddy Thata
    </h1>
    <p className="text-xs text-gray-500 tracking-wider">SAMASTHAN</p>
  </div>
</Link>


          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">

            {/* Home */}
            <Link href="/" className="text-sm text-gray-700 hover:text-orange-600 transition">
              Home
            </Link>

           {/* About Dropdown */}
<div
  className="relative"
  onMouseEnter={() => !stickyAbout && setAboutOpen(true)}
  onMouseLeave={() => !stickyAbout && setAboutOpen(false)}
>
  <button
    onClick={() => setStickyAbout(!stickyAbout)}
    className="flex items-center gap-1 text-sm text-gray-700 hover:text-orange-600"
  >
    About <ChevronDown className="w-4 h-4" />
  </button>

  {(aboutOpen || stickyAbout) && (
    <div className="absolute top-full left-0 mt-2 w-56 bg-white border rounded-xl shadow py-2 max-h-[70vh] overflow-y-auto">
      {aboutDropdown.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
          onClick={() => setStickyAbout(false)} // closes after clicking a link
        >
          {item.label}
        </Link>
      ))}
    </div>
  )}
</div>



            {/* Other Links */}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-700 hover:text-orange-600 transition"
              >
                {link.label}
              </Link>
            ))}

            {/* Donate Button */}
            <a
              href="#donate"
              className="px-4 py-2 bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700 transition text-sm"
            >
              Donate Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-black z-[10000] relative"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </nav>

    {/* Mobile Sidebar Overlay - Outside nav */}
    {isOpen && (
      <div
        className="lg:hidden fixed inset-0 bg-black/50 z-[9998]"
        onClick={() => setIsOpen(false)}
        style={{ pointerEvents: 'auto' }}
      />
    )}

    {/* Mobile Sidebar - Outside nav */}
    <div
      className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-[9999] transform transition-transform duration-300 ease-in-out overflow-y-auto
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
    >
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold text-lg text-gray-800">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-700 hover:text-orange-600"
          >
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col gap-2 p-4 flex-1">
          <Link 
            href="/" 
            className="py-3 px-4 text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-lg transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          {/* Mobile About */}
          <div className="py-2">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-lg transition"
            >
              About
              <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
            </button>

            {aboutOpen && (
              <div className="pl-4 mt-2 space-y-1 border-l-2 border-gray-200">
                {aboutDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 px-4 text-sm text-gray-600 hover:text-orange-600 hover:bg-gray-50 rounded-lg transition"
                    onClick={() => {
                      setIsOpen(false);
                      setAboutOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other Mobile Links */}
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 px-4 text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-lg transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="#donate"
            className="mt-4 px-4 py-3 bg-orange-600 text-white rounded-lg text-sm shadow hover:bg-orange-700 transition text-center"
            onClick={() => setIsOpen(false)}
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
