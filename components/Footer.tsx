"use client";
import React, { useRef } from "react";
import { Mail, Twitter, Github, Linkedin, Globe } from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);

  // ✅ always defined, never conditional
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const blur = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <motion.footer
      ref={ref}
      style={{ y, opacity }}
      className="bg-white backdrop-blur border-t border-slate-200 relative z-10"
    >
      <motion.div
        style={{ scale, filter }}
        className="max-w-7xl  mx-auto px-6 py-8 md:py-12"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand + short */}
          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <h3 className="text-2xl font-extrabold font-serif text-slate-900">
                BMED
              </h3>
              <p className="mt-2 text-sm text-slate-600 max-w-md">
                Simple, thoughtful UI bits. Small footprint, big vibes —
                outfits, feeds, and tiny utilities to make the web feel less
                chaotic.
              </p>

              <div className="mt-4 flex items-center gap-3">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-slate-700"
                  aria-label="Subscribe via email"
                >
                  <Mail className="w-4 h-4" />
                  <span className="opacity-90">Subscribe</span>
                </a>

                <div className="h-6 w-px bg-slate-200" />

                <nav
                  aria-label="social links"
                  className="flex items-center gap-3"
                >
                  <a
                    href="#"
                    className="group p-2 rounded-md hover:bg-slate-100"
                    title="Twitter"
                  >
                    <Twitter className="w-4 h-4 text-slate-700" />
                  </a>
                  <a
                    href="#"
                    className="group p-2 rounded-md hover:bg-slate-100"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4 text-slate-700" />
                  </a>
                  <a
                    href="#"
                    className="group p-2 rounded-md hover:bg-slate-100"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 text-slate-700" />
                  </a>
                </nav>
              </div>
            </motion.div>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 flex-shrink-0">
            <div>
              <h4 className="text-sm font-semibold text-slate-700">Product</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Docs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-700">Company</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-700">
                Resources
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-700">Contact</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:hello@bmed.example"
                    className="hover:underline"
                  >
                    hello@bmed.example
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <a href="#" className="hover:underline">
                    Find us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* bottom row */}
        <div className="mt-8 border-t border-slate-100 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} BMED. Made with care.
          </p>

          <div className="flex items-center gap-4">
            {/* language selector */}
            <div className="flex items-center gap-2">
              <label className="sr-only">Language</label>
              <select
                aria-label="Select language"
                defaultValue="en"
                className="text-sm rounded-md border border-slate-200 bg-white px-2 py-1 shadow-sm"
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="ar">AR</option>
              </select>
            </div>

            {/* fake theme toggle */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-pressed="false"
                className="inline-flex items-center gap-2 text-sm rounded-md px-3 py-1 border border-slate-200 bg-white shadow-sm"
                title="Toggle theme (visual)"
              >
                <span className="sr-only">Toggle theme</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
                Theme
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
}
