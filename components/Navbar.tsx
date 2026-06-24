"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { label: "Interior Design", href: "/service/interior-design" },
  { label: "Space Planning", href: "/service/space-planning" },
  { label: "Turnkey Project Execution", href: "/service/turn-key-project-execution" },

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
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      initial={false}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || openMenu
          ? "bg-paper/95 backdrop-blur-md border-b border-ink-900/10 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="relative inline-flex h-20 w-64 shrink-0 items-center">
          {/* White logo -- visible over the transparent/dark hero */}
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
          {/* Green logo -- visible once the navbar background turns white */}
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

        <nav className={`hidden lg:flex items-center justify-center gap-9 text-[15px] transition-colors duration-300 ${
          scrolled || openMenu ? "text-ink-800" : "text-white"
        }`}>
          <Link href="/" className="hover:text-brand-500 transition-colors">
            Home
          </Link>
          <Link href="/our-projects" className="hover:text-brand-500 transition-colors">
            Our Projects
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="flex items-center gap-1 hover:text-brand-500 transition-colors">
              Services <ChevronDown size={14} />
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

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("about")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="flex items-center gap-1 hover:text-brand-500 transition-colors">
              About Us <ChevronDown size={14} />
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

        <button
          className={`lg:hidden transition-colors duration-300 ${scrolled || openMenu ? "text-ink-900" : "text-white"}`}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink-900 text-paper z-[60] flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-20">
              <div className="relative h-11 w-36">
                <Image
                  src="/images/brand/logo-white.png"
                  alt="Yutori Designs"
                  fill
                  sizes="144px"
                  className="object-contain object-left"
                />
              </div>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={26} />
              </button>
            </div>
            <div className="flex-1 flex flex-col gap-1 px-6 overflow-y-auto pb-10">
              {[
                { label: "Home", href: "/" },
                { label: "Our Projects", href: "/our-projects" },
                ...services,
                ...about,
                { label: "Contact Us", href: "/contact-us" },
              ].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-xl font-display border-b border-paper/10"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}