"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  {
    label: "Interior Design",
    href: "/service/interior-design",
  },
  {
    label: "Space Planning",
    href: "/service/space-planning",
  },
  {
    label: "Turnkey Project Execution",
    href: "/service/turn-key-project-execution",
  },
];

const about = [
  { label: "Overview", href: "/overview" },
  { label: "Our Team", href: "/our-team" },
  { label: "Our Values", href: "/our-values" },
  { label: "Our Operating Model", href: "/our-operating-model" },
  { label: "Testimonial", href: "/testimonial" },
  { label: "Events", href: "/events" },
  { label: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  // Mobile accordion state
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    function onScroll() {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;

        setScrolled(y > 40);

        if (openMenu || mobileOpen) {
          setHidden(false);
        } else if (y < 160) {
          setHidden(false);
        } else if (y > lastY.current + 4) {
          setHidden(true);
        } else if (y < lastY.current - 4) {
          setHidden(false);
        }

        lastY.current = y;
        ticking.current = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [openMenu, mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  useEffect(() => {
    if (openMenu) setHidden(false);
  }, [openMenu]);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      initial={false}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || openMenu
          ? "bg-paper/95 backdrop-blur-md border-b border-ink-900/10 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="relative inline-flex h-20 w-64 shrink-0 items-center"
        >
          {/* White logo */}
          <Image
            src="/images/brand/logo-white.png"
            alt="Yutori Designs — creating space for life"
            fill
            sizes="176px"
            className={`object-contain object-left transition-opacity duration-300 ${
              scrolled || openMenu ? "opacity-0" : "opacity-100"
            }`}
            priority
          />

          {/* Green logo */}
          <Image
            src="/images/brand/logo-green.png"
            alt="Yutori Designs — creating space for life"
            fill
            sizes="176px"
            className={`object-contain object-left transition-opacity duration-300 ${
              scrolled || openMenu ? "opacity-100" : "opacity-0"
            }`}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`hidden lg:flex items-center justify-center gap-9 text-[15px] transition-colors duration-300 ${
            scrolled || openMenu ? "text-ink-800" : "text-white"
          }`}
        >
          <Link
            href="/"
            className="hover:text-brand-500 transition-colors"
          >
            Home
          </Link>

          <Link
            href="/our-projects"
            className="hover:text-brand-500 transition-colors"
          >
            Our Projects
          </Link>

          {/* Desktop Services */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="flex items-center gap-1 hover:text-brand-500 transition-colors">
              Services
              <ChevronDown size={14} />
            </button>

            <AnimatePresence>
              {openMenu === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 pt-3 w-64"
                >
                  <div className="bg-white rounded-xl shadow-xl border border-ink-900/8 p-2">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2.5 rounded-lg text-sm text-ink-800 hover:bg-brand-50 hover:text-brand-600 transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop About Us */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("about")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="flex items-center gap-1 hover:text-brand-500 transition-colors">
              About Us
              <ChevronDown size={14} />
            </button>

            <AnimatePresence>
              {openMenu === "about" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 pt-3 w-60"
                >
                  <div className="bg-white rounded-xl shadow-xl border border-ink-900/8 p-2">
                    {about.map((a) => (
                      <Link
                        key={a.href}
                        href={a.href}
                        className="block px-4 py-2.5 rounded-lg text-sm text-ink-800 hover:bg-brand-50 hover:text-brand-600 transition-colors"
                      >
                        {a.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Desktop Contact */}
        <Link
          href="/contact-us"
          className={`hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${
            scrolled || openMenu
              ? "bg-ink-900 text-paper hover:bg-brand-600"
              : "bg-white text-ink-900 hover:bg-brand-500 hover:text-white"
          }`}
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden transition-colors duration-300 ${
            scrolled || openMenu ? "text-ink-900" : "text-white"
          }`}
          onClick={() => {
            setMobileOpen(true);
            setOpenMobileMenu(null);
          }}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink-900 text-paper z-[60] flex flex-col"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between px-6 h-20 shrink-0">
              <div className="relative h-11 w-36">
                <Image
                  src="/images/brand/logo-white.png"
                  alt="Yutori Designs"
                  fill
                  sizes="144px"
                  className="object-contain object-left"
                />
              </div>

              <button
                onClick={() => {
                  setMobileOpen(false);
                  setOpenMobileMenu(null);
                }}
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex-1 px-6 overflow-y-auto pb-10">

              {/* Home */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 }}
              >
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 text-xl font-display border-b border-paper/10"
                >
                  Home
                </Link>
              </motion.div>

              {/* Our Projects */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 }}
              >
                <Link
                  href="/our-projects"
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 text-xl font-display border-b border-paper/10"
                >
                  Our Projects
                </Link>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.12 }}
                className="border-b border-paper/10"
              >
                <button
                  onClick={() =>
                    setOpenMobileMenu(
                      openMobileMenu === "services"
                        ? null
                        : "services"
                    )
                  }
                  className="w-full flex items-center justify-between py-4 text-xl font-display"
                >
                  <span>Services</span>

                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-300 ${
                      openMobileMenu === "services"
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openMobileMenu === "services" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-3 pl-5">
                        {services.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-3 text-lg text-paper/70 border-l border-paper/20 pl-4 hover:text-paper transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* About Us */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.16 }}
                className="border-b border-paper/10"
              >
                <button
                  onClick={() =>
                    setOpenMobileMenu(
                      openMobileMenu === "about"
                        ? null
                        : "about"
                    )
                  }
                  className="w-full flex items-center justify-between py-4 text-xl font-display"
                >
                  <span>About Us</span>

                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-300 ${
                      openMobileMenu === "about"
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openMobileMenu === "about" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-3 pl-5">
                        {about.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-3 text-lg text-paper/70 border-l border-paper/20 pl-4 hover:text-paper transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Contact Us */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.20 }}
              >
                <Link
                  href="/contact-us"
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 text-xl font-display border-b border-paper/10"
                >
                  Contact Us
                </Link>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}