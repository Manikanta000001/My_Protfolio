import React, { useState, useEffect, useRef } from "react";
import img from "../public/image1.png";

const Icon = ({ name, className = "w-4 h-4", ...props }) => {
  switch (name) {
    case "arrow-right":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      );
    case "arrow-left":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      );
    case "arrow-up-right":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      );
    case "arrow-down-right":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M7 7l10 10M17 7v10H7" />
        </svg>
      );
    case "sparkles":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
      );
    case "github":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "twitter":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      );
    case "mail":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case "copy":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
      );
    case "menu":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      );
    case "x":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      );
    case "external-link":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        </svg>
      );
    case "check":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      );
    default:
      return null;
  }
};

const SHOWCASE_PROJECTS = [
  {
    id: "yoga-stories",
    appName: "Yoga Stories",
    title: "Yoga Stories",
    type: "live",
    url: "https://yogastories.vercel.app/",
    category: "BOOKING PLATFORM",

    tagline: "A personal organization and class booking platform.",

    description:
      "A full-stack platform designed for managing yoga classes and bookings, with a focus on a simple user experience and practical organization.",

    tabletPreview: {
      type: "video",
      src: "../public/previews/yoga-stories.mp4",
    },

    mobilePreview: {
      type: "image",
      src: "../public/previews/yoga-stories-mobile.png",
    },

    badgeColor: "bg-[#fef08a]",

    metrics: [
      "Booking Platform",
      "Responsive Interface",
      "Full Stack Application",
    ],

    tech: ["React", "Node.js", "Express", "MongoDB"],

    stats: {
      stars: "—",
      forks: "—",
    },

    env: "Web Application",
    buildTool: "Vite",
  },

  {
    id: "oxduel",
    appName: "OxDuel",
    title: "OxDuel",
    type: "live",
    url: "https://oxduel.site/",
    category: "MULTIPLAYER WEB APPLICATION",

    tagline: "An interactive multiplayer web application.",

    description:
      "A live multiplayer web application built around an interactive gaming experience.",

    tabletPreview: {
      type: "image",
      src: "../public/previews/oxduel.png",
    },

    mobilePreview: {
      type: "image",
      src: "../public/previews/oxduel-mobile.png",
    },

    badgeColor: "bg-[#a7f3d0]",

    metrics: [
      "Interactive Web Application",
      "Multiplayer Experience",
      "Responsive Interface",
    ],

    tech: [],

    stats: {
      stars: "—",
      forks: "—",
    },

    env: "Web Application",
    buildTool: "Vite",
  },

  {
    id: "evalon",
    appName: "Evalon",
    title: "Evalon",
    type: "live",
    url: "https://evalonsystems.vercel.app/",
    category: "SOFTWARE PROJECT",

    tagline: "A complete software project built around a practical solution.",

    description:
      "A software project developed with a focus on creating a practical, usable, and complete digital solution.",

    tabletPreview: {
      type: "image",
      src: "../public/previews/evalon.png",
    },

    mobilePreview: {
      type: "image",
      src: "../public/previews/evalon-mobile.png",
    },

    badgeColor: "bg-[#c7d2fe]",

    metrics: [
      "Software Application",
      "Full Stack Development",
      "Practical Solution",
    ],

    tech: [],

    stats: {
      stars: "—",
      forks: "—",
    },

    env: "Web Application",
    buildTool: "Vite",
  },

  {
    id: "infinity-ai-pro",
    appName: "Infinity AI Pro",
    title: "Infinity AI Pro",
    type: "image",
    url: null,
    category: "AI PROJECT",

    tagline: "An AI-focused project built around practical functionality.",

    description:
      "A project focused on exploring and building practical software experiences around AI.",

    tabletPreview: {
      type: "image",
      src: "../public/previews/infinity-ai-pro.png",
    },

    mobilePreview: {
      type: "image",
      src: "../public/previews/infinity-ai-pro.png",
    },

    badgeColor: "bg-[#93cbfb]",

    metrics: ["AI Project", "Software Development", "Practical Application"],

    tech: [],

    stats: {
      stars: "—",
      forks: "—",
    },

    env: "Web Application",
    buildTool: "Vite",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    phase: "PHASE 01 • UNDERSTAND",
    title: "Understand the Problem",
    description:
      "Understanding the requirements, identifying the problem to solve, and defining what the application needs to achieve before development begins.",
    image:
      "https://es-blog.files.wordpress.com/2025/11/disenar-con-ia-iterar.png",
    tags: ["Requirements", "Problem Analysis", "User Needs"],
  },

  {
    step: "02",
    phase: "PHASE 02 • PLAN",
    title: "Plan & Design",
    description:
      "Planning the application structure, user flow, database, and interface to create a clear direction before writing the main code.",
    image:
      "https://aostasoftware.com/wp-content/uploads/2025/01/Illustration.png",
    tags: ["UI Planning", "User Flow", "Database Design"],
  },

  {
    step: "03",
    phase: "PHASE 03 • BUILD",
    title: "Develop the Solution",
    description:
      "Building the frontend, backend, APIs, and database while focusing on responsive interfaces, practical functionality, and maintainable code.",
    image:
      "https://unsplash.com/illustrations/team-working-on-seo-strategy-and-development-63fOcZH7-rk.png",
    tags: ["Frontend", "Backend", "APIs"],
  },

  {
    step: "04",
    phase: "PHASE 04 • TEST",
    title: "Test & Improve",
    description:
      "Testing the application, identifying issues, improving the user experience, and making sure the final product works reliably across different devices.",
    image: "https://sdettech.com/services/service1.png",
    tags: ["Testing", "Bug Fixing", "Deployment"],
  },
];

const PROJECTS = [
  {
    number: "01",
    title: "MEDIA",
    category: "WEB APPLICATION",
    description:
      "A modern web application built to provide a practical and engaging digital experience.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    tags: ["Frontend", "Backend", "Database"],
  },
  {
    number: "02",
    title: "OXQL",
    category: "SOFTWARE PROJECT",
    description:
      "A software project focused on solving a practical problem through a structured and user-friendly application.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "APIs", "Database"],
  },
  {
    number: "03",
    title: "AVALON",
    category: "FINAL YEAR PROJECT",
    description:
      "A final year project developed as a complete software solution with a focus on functionality, usability, and implementation.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    tags: ["Full Stack", "Web App", "Development"],
  },
  {
    number: "04",
    title: "YOGA STORIES",
    category: "BOOKING PLATFORM",
    description:
      "A platform designed to organize yoga classes and provide users with a simple way to explore and book sessions.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Node.js", "Booking"],
  },
];
function AnimatedCounter({ target, prefix = "", decimals = 0 }) {
  const [val, setVal] = useState(0);
  const elemRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const duration = 1600;

          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = easeOut * target;
            setVal(current);

            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setVal(target);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.2 },
    );

    if (elemRef.current) observer.observe(elemRef.current);
    return () => observer.disconnect();
  }, [target]);

  let displayStr = "";
  if (decimals > 0) {
    displayStr = val.toFixed(decimals);
  } else {
    const intVal = Math.floor(val);
    displayStr = prefix && intVal < 10 ? `${prefix}${intVal}` : `${intVal}`;
  }

  return <span ref={elemRef}>{displayStr}</span>;
}

function ProjectPreview({ preview, title }) {
  if (!preview) {
    return (
      <div className="w-full h-full bg-slate-100 flex items-center justify-center">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
          Preview unavailable
        </span>
      </div>
    );
  }

  if (preview.type === "video") {
    return (
      <video
        src={preview.src}
        autoPlay
        muted
        loop
        playsInline
        
        preload="metadata"
        aria-label={`${title} preview`}
        className="w-full h-full object-cover"
      />
    );
  }

  return (
    <img
      src={preview.src}
      alt={`${title} preview`}
      loading="eager"
      className="w-full h-full object-cover"
    />
  );
}

function LiveProjectPreview({ url, title, mode = "tablet" }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setFailed(false);
  }, [url]);

  if (!url) {
    return (
      <div className="w-full h-full bg-slate-950 flex items-center justify-center text-white">
        <span className="text-[10px] uppercase tracking-widest text-white/40">
          Preview unavailable
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-white">
      {/* Loading */}
      {!loaded && !failed && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-slate-950 text-white">
          <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin mb-3" />

          <span className="text-[9px] tracking-[0.18em] uppercase text-white/50">
            Loading {title}
          </span>
        </div>
      )}

      {/* Fallback */}
      {failed && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-slate-950 text-white px-6 text-center">
          <span className="text-xs font-medium mb-2">Preview unavailable</span>

          <span className="text-[10px] text-white/50 mb-4">
            Open the project directly to explore it.
          </span>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-white text-slate-950 text-[10px] font-semibold"
          >
            Open Project ↗
          </a>
        </div>
      )}

      {/* Live Website */}
      {!failed && (
        <iframe
          key={url}
          src={url}
          title={`${title} ${mode} live preview`}
          loading="eager"
          allow="fullscreen"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`absolute inset-0 w-full h-full border-0 bg-white transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}

export default function App() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [selectedCaseModal, setSelectedCaseModal] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    scope: "Full-Stack Web App Development",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (docHeight > 0) {
        setScrollPercent(
          Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)),
        );
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Scroll reveal observer for elements with .reveal-elem
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
    );

    const elements = document.querySelectorAll(".reveal-elem");
    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Animations useEffect

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-elem");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const copyEmailToClipboard = () => {
    const email = "vulavapatimanikanta@gmail.com";
    navigator.clipboard
      ?.writeText(email)
      .then(() => {
        triggerToast(`Copied ${email} to clipboard!`);
      })
      .catch(() => {
        triggerToast(`Email: ${email}`);
      });
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElem = document.getElementById(targetId);
    if (targetElem) {
      targetElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsContactModalOpen(false);
      triggerToast("Transmission sent! Alex will get back to you within 24h.");
      setContactForm({
        name: "",
        email: "",
        scope: "Full-Stack Web App Development",
        message: "",
      });
    }, 800);
  };

  const currentProject = SHOWCASE_PROJECTS[activeProjectIdx];

  const mobileScale = 0.90;
const mobileRight = -20;
const mobileBottom = 0;

  return (
    <div className="bg-slate-100 text-slate-900 font-sans antialiased min-h-screen selection:bg-[#ffe600] selection:text-black overflow-x-hidden">
      {/* Global CSS for Hardware-Accelerated Smooth Marquees and Reveals */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        /* Continuous Left Marquee */
        @keyframes marqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        /* Continuous Right Marquee */
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }

        .marquee-track-left {
          display: flex;
          width: max-content;
          animation: marqueeLeft 26s linear infinite;
        }

        .marquee-track-fast {
          display: flex;
          width: max-content;
          animation: marqueeLeft 18s linear infinite;
        }

        .marquee-track-right {
          display: flex;
          width: max-content;
          animation: marqueeRight 26s linear infinite;
        }

        .marquee-wrapper:hover .marquee-track-left,
        .marquee-wrapper:hover .marquee-track-fast,
        .marquee-wrapper:hover .marquee-track-right {
          animation-play-state: paused;
        }

        /* Ghost Typography Stroke */
        .text-stroke-white {
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.4);
          color: transparent;
          transition: all 0.3s ease;
        }
        .text-stroke-white:hover {
          -webkit-text-stroke: 1.5px #ffe600;
          color: #ffe600;
        }

        /* Scroll Reveal Utility */
    /* ========================================
   Base Reveal
======================================== */

.reveal-elem {
  opacity: 0;
  filter: blur(10px);
  transition:
    opacity 1s cubic-bezier(0.22, 1, 0.36, 1),
    transform 1s cubic-bezier(0.22, 1, 0.36, 1),
    filter 1s cubic-bezier(0.22, 1, 0.36, 1);
}

/* Left content */
.reveal-left {
  transform: translateX(-60px);
}

/* Right content */
.reveal-right {
  transform: translateX(100px);
}

/* Normal reveal */
.reveal-elem:not(.reveal-left):not(.reveal-right) {
  transform: translateY(50px);
}

/* Visible state */
.reveal-elem.is-visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  filter: blur(0);
}

/* Delays */
.reveal-delay-2 {
  transition-delay: 0.2s;
}

        /* Angled Strip */
        .angled-banner {
          width: 110vw;
          margin-left: -5vw;
          transform: rotate(-2.2deg);
        }
      `}</style>

      {/* Top Scroll Indicator */}
      <div
        className="fixed top-0 left-0 h-[3.5px] bg-gradient-to-r from-[#ffe600] via-[#ffffff] to-[#ffe600] z-50 transition-all duration-75"
        style={{ width: `${scrollPercent}%` }}
      />

      {}
      <div className="w-full min-h-screen p-0 m-0">
        <section className="relative w-full min-h-screen bg-[#4162ff] text-white overflow-hidden p-0 m-0 shadow-none">
          {/* Top Header / Navigation */}
          <header className="relative z-30 flex items-center justify-between px-5 sm:px-8 md:px-12 lg:px-16 pt-6 sm:pt-8 pb-5 sm:pb-6 border-b border-white/15">
            <a
              href="#hero"
              onClick={(e) => handleSmoothScroll(e, "hero")}
              className="flex items-center gap-1 font-['Bebas_Neue',sans-serif] text-2xl sm:text-3xl lg:text-4xl tracking-wider text-white hover:opacity-90 transition-opacity"
            >
              V<span className="text-[#ffe600]">.DEV</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-['Oswald',sans-serif] uppercase text-xs lg:text-sm tracking-widest text-white/90">
              {[
                "services",
                "works",
                "experience",
                "process",
                "workstation",
                "contact",
              ].map((sec) => (
                <a
                  key={sec}
                  href={`#${sec}`}
                  onClick={(e) => handleSmoothScroll(e, sec)}
                  className="hover:text-[#ffe600] transition-colors py-1"
                >
                  {sec}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#ffe600] text-slate-950 font-['Oswald',sans-serif] text-xs sm:text-sm tracking-wider uppercase font-bold hover:bg-white hover:text-[#4162ff] transition-all duration-300 active:scale-95"
              >
                <span>Hire Me</span>
                <Icon
                  name="arrow-right"
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Toggle Navigation"
              >
                <Icon
                  name={mobileMenuOpen ? "x" : "menu"}
                  className="w-5 h-5"
                />
              </button>
            </div>
          </header>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="relative z-30 md:hidden px-5 pt-5 pb-3 border-b border-white/15 flex flex-col gap-2 font-['Oswald',sans-serif] uppercase text-sm tracking-wider">
              {[
                "services",
                "works",
                "experience",
                "process",
                "workstation",
                "contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => handleSmoothScroll(e, item)}
                  className="py-2 px-3 rounded-lg hover:bg-white/10 hover:text-[#ffe600] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          )}

          {/* ================= HERO ================= */}
          <div
            id="hero"
            className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center w-full min-h-[calc(100vh-110px)] px-5 sm:px-8 md:px-12 lg:px-8 xl:px-10 pt-8 lg:pt-0 pb-0"
          >
            {/* ================= LEFT ================= */}
            <div className="lg:col-span-4 flex flex-col justify-center order-1 z-20">
              <div className="reveal-elem reveal-left">
                <h1 className="font-['Bebas_Neue',sans-serif] text-[58px] sm:text-[82px] md:text-[96px] lg:text-[82px] xl:text-[100px] leading-[0.82] tracking-tight uppercase">
                  Full stack
                  <br />
                  Developer
                </h1>
              </div>
              <div className="reveal-elem reveal-left reveal-delay-2 space-y-4 max-w-[510px] mt-12 lg:mt-14">
                <div className="h-px w-full max-w-[480px] bg-white/20" />

                <div className="font-['Oswald',sans-serif] uppercase text-xs sm:text-sm tracking-widest text-white/80 flex items-center gap-2">
                  <Icon
                    name="sparkles"
                    className="w-3.5 h-3.5 text-[#ffe600]"
                  />
                  Hi, I'm V Manikanta
                </div>

                <p className="text-sm sm:text-base lg:text-[17px] text-white/90 leading-relaxed max-w-[500px]">
                  Software Engineer and Full Stack Developer, recently graduated
                  from Narayana Engineering College. I build modern, practical
                  web applications and enjoy turning ideas into complete
                  products.
                </p>

                <div className="pt-2">
                  <a
                    href="#works"
                    onClick={(e) => handleSmoothScroll(e, "works")}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-['Oswald',sans-serif] tracking-widest uppercase text-[#ffe600] hover:text-white transition-colors group"
                  >
                    <span>View Selected Portfolio</span>

                    <Icon
                      name="arrow-up-right"
                      className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* ================= CENTER PORTRAIT ================= */}
            <div className="lg:col-span-4 flex justify-center items-end relative order-2 self-end h-[380px] sm:h-[480px] lg:h-full min-h-0 lg:min-h-[650px] mt-8 lg:mt-0">
              {/* Circular glow */}
              {/* Main circle behind head */}
              <div className="absolute z-0 w-[330px] h-[330px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] rounded-full bg-white/10 top-[5%] lg:top-[8%] left-1/2 -translate-x-1/2" />

              {/* Soft outer glow */}
              <div className="absolute z-0 w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] lg:w-[600px] lg:h-[600px] rounded-full bg-white/5 blur-3xl top-[2%] lg:top-[4%] left-1/2 -translate-x-1/2" />

              {/* Larger soft glow */}
              <div className="absolute z-0 w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] lg:w-[600px] lg:h-[600px] rounded-full bg-white/5 blur-3xl top-1/2 -translate-y-[45%]" />

              {/* Decorative orbit */}
              <div className="absolute z-[1] w-[520px] h-[180px] lg:w-[700px] lg:h-[240px] border border-white/20 rounded-[50%] rotate-[-18deg] top-[52%]" />

              <div className="relative z-10 w-full h-full flex items-end justify-center">
                <img
                  src={img}
                  alt="V Manikanta - Full Stack Engineer"
                  className="
    hero-portrait
    relative
    z-10
    w-[340px]
    sm:w-[430px]
    md:w-[500px]
    lg:w-[560px]
    xl:w-[620px]
    max-w-none
    h-auto
    object-contain
    object-bottom
    [mask-image:linear-gradient(to_bottom,black_0%,black_85%,transparent_100%)]
[-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_85%,transparent_100%)]
lg:[mask-image:none]
lg:[-webkit-mask-image:none]
  "
                />
              </div>
            </div>

            {/* ================= RIGHT ================= */}
            <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end order-3 h-full py-8 lg:py-16 z-20 text-left lg:text-right">
              {/* Socials */}
              <div className="reveal-elem reveal-right flex flex-col items-start lg:items-end space-y-3">
                <span className="font-['Oswald',sans-serif] uppercase text-xs sm:text-sm tracking-widest text-white/80">
                  Follow Me
                </span>

                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#4162ff] flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Icon name="github" className="w-5 h-5" />
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#4162ff] flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Icon name="linkedin" className="w-5 h-5" />
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#4162ff] flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Twitter"
                  >
                    <Icon name="twitter" className="w-5 h-5" />
                  </a>

                  <button
                    onClick={copyEmailToClipboard}
                    className="w-10 h-10 rounded-full bg-[#ffe600] text-slate-950 hover:bg-white hover:text-[#4162ff] flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Copy Email"
                  >
                    <Icon name="mail" className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Right Typography */}
              <div className="reveal-elem reveal-right reveal-delay-2">
                <h2 className="font-['Bebas_Neue',sans-serif] text-[58px] sm:text-[82px] md:text-[96px] lg:text-[82px] xl:text-[100px] leading-[0.82] tracking-tight uppercase text-white">
                  Software
                  <br />
                  Engineer
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>

      {}
      <div className="w-full bg-slate-900 text-white py-3.5 overflow-hidden border-y border-slate-800 select-none marquee-wrapper">
        <div className="marquee-track-left">
          {[0, 1].map((copyIdx) => (
            <div
              key={copyIdx}
              className="flex items-center gap-8 font-['Oswald',sans-serif] text-xs sm:text-sm uppercase tracking-widest text-slate-300 pr-8"
            >
              <span>SOFTWARE ENGINEERING</span>{" "}
              <span className="text-[#ffe600]">✦</span>
              <span>FULL STACK DEVELOPMENT</span>{" "}
              <span className="text-[#ffe600]">✦</span>
              <span>REACT &amp; NODE.JS</span>{" "}
              <span className="text-[#ffe600]">✦</span>
              <span>SQL &amp; MONGO DB</span>{" "}
              <span className="text-[#ffe600]">✦</span>
              <span>REST APIs</span> <span className="text-[#ffe600]">✦</span>
              <span>GIT &amp; GITHUB</span>{" "}
              <span className="text-[#ffe600]">✦</span>
            </div>
          ))}
        </div>
      </div>

      {}
      <section
        id="services"
        className="py-16 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="mb-10 sm:mb-14 reveal-elem">
          <h2 className="font-['Bebas_Neue',sans-serif] text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-slate-900">
            My Services
          </h2>
          <div className="h-1.5 w-16 sm:w-20 bg-[#4162ff] mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="reveal-elem p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-4">
              <img
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80"
                alt="UI UX Design Service"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <span className="text-[11px] font-mono font-bold text-[#4162ff] uppercase tracking-widest mb-1">
              Service 01
            </span>
            <h3 className="font-['Oswald',sans-serif] text-xl font-bold uppercase text-slate-900 mb-2 group-hover:text-[#4162ff] transition-colors">
              FULL STACK DEVELOPMENT
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Building complete web applications from frontend interfaces to
              backend APIs and databases, with a focus on clean, maintainable
              and practical solutions.
            </p>
          </article>

          <article
            className="reveal-elem p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-4">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80"
                alt="App Design Service"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <span className="text-[11px] font-mono font-bold text-[#4162ff] uppercase tracking-widest mb-1">
              Service 02
            </span>
            <h3 className="font-['Oswald',sans-serif] text-xl font-bold uppercase text-slate-900 mb-2 group-hover:text-[#4162ff] transition-colors">
              SOFTWARE ENGINEERING
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Developing reliable software by combining problem solving, clean
              code and thoughtful architecture to turn ideas into functional
              products.
            </p>
          </article>

          <article
            className="reveal-elem p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-4">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Web Development Service"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <span className="text-[11px] font-mono font-bold text-[#4162ff] uppercase tracking-widest mb-1">
              Service 03
            </span>
            <h3 className="font-['Oswald',sans-serif] text-xl font-bold uppercase text-slate-900 mb-2 group-hover:text-[#4162ff] transition-colors">
              PROBLEM SOLVING & DEVELOPMENT
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Turning real-world problems into practical software solutions
              through thoughtful problem solving, efficient development and a
              focus on building things that work.
            </p>
          </article>
        </div>
      </section>

      {}
      <div className="overflow-hidden py-8 select-none marquee-wrapper">
        <div className="angled-banner bg-[#ffe600] text-slate-950 py-3.5 sm:py-4 border-y-2 border-slate-950 shadow-xl overflow-hidden">
          <div className="marquee-track-fast">
            {[0, 1].map((copyIdx) => (
              <div
                key={copyIdx}
                className="flex items-center gap-8 font-['Bebas_Neue',sans-serif] text-2xl sm:text-4xl uppercase tracking-wider pr-8"
              >
                <span>SOFTWARE ENGINEER</span>{" "}
                <span className="text-[#4162ff]">★</span>
                <span>SYSTEM ARCHITECTURE</span>{" "}
                <span className="text-[#4162ff]">★</span>
                <span>RESPONSIVE WEB DESIGN</span>{" "}
                <span className="text-[#4162ff]">★</span>
                <span>REACT DEVELOPER</span>{" "}
                <span className="text-[#4162ff]">★</span>
                <span>NODE.JS DEVELOPER</span>{" "}
                <span className="text-[#4162ff]">★</span>
                <span>HIGH PERFORMANCE</span>{" "}
                <span className="text-[#4162ff]">★</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {}
      <section
        id="works"
        className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#4162ff] text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4 reveal-elem">
            <div>
              <div className="text-xs font-mono text-[#ffe600] uppercase tracking-widest font-semibold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ffe600] animate-pulse"></span>
                Featured Interactive Showcase
              </div>
              <h2 className="font-['Bebas_Neue',sans-serif] text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
                My Recent Works
              </h2>
              <div className="h-1.5 w-16 sm:w-20 bg-[#ffe600] mt-2 rounded-full"></div>
            </div>
            <p className="text-white/80 max-w-md text-xs sm:text-sm">
              Explore interactive software architectures, responsive
              multi-device systems, and battle-tested developer tools.
            </p>
          </div>

          {/* Device Showcase: Tablet + Overlapping Phone Matching Reference */}
          <div className="bg-slate-950/90 rounded-[28px] sm:rounded-[36px] p-4 sm:p-8 border border-white/20 shadow-2xl mb-12 reveal-elem">
            {/* Top Showcase Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-[11px] font-mono text-[#ffe600] uppercase tracking-wider font-semibold">
                  {currentProject.category}
                </span>
                <h3 className="font-['Oswald',sans-serif] text-2xl sm:text-3xl font-bold uppercase text-white mt-0.5">
                  {currentProject.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={() => {
                    setPreviewOpen(false);

                    setActiveProjectIdx(
                      (prev) =>
                        (prev - 1 + SHOWCASE_PROJECTS.length) %
                        SHOWCASE_PROJECTS.length,
                    );
                  }}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#ffe600] hover:text-slate-950 text-white flex items-center justify-center transition-all active:scale-95"
                  aria-label="Previous Project"
                >
                  <Icon name="arrow-left" className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setPreviewOpen(false);

                    setActiveProjectIdx(
                      (prev) => (prev + 1) % SHOWCASE_PROJECTS.length,
                    );
                  }}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#ffe600] text-slate-950 hover:bg-white hover:text-[#4162ff] flex items-center justify-center transition-all active:scale-95 shadow-md"
                  aria-label="Next Project"
                >
                  <Icon name="arrow-right" className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedCaseModal(currentProject)}
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-['Oswald',sans-serif] uppercase tracking-wider text-white transition-colors ml-2"
                >
                  <span>View Spec</span>
                  <Icon name="external-link" className="w-3.5 h-3.5" />
                </button>
                {currentProject.type === "live" && !previewOpen && (
                  <button
                    onClick={() => setPreviewOpen(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ffe600] text-slate-950 text-xs font-['Oswald',sans-serif] uppercase tracking-wider font-bold hover:bg-white transition-all duration-300 active:scale-95 shadow-md"
                  >
                    <span>Open Preview</span>

                    <Icon name="arrow-up-right" className="w-3.5 h-3.5" />
                  </button>
                )}

                {previewOpen && (
                  <button
                    onClick={() => setPreviewOpen(false)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-['Oswald',sans-serif] uppercase tracking-wider transition-all duration-300"
                  >
                    <span>Close Preview</span>

                    <Icon name="x" className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Dual Device Emulator Stage */}
            <div className="relative py-6 sm:py-10 flex justify-center items-center">
              {/* Tablet Frame */}
              {/* Tablet Frame */}
              {/* <div className="w-full max-w-4xl bg-slate-900 border-[6px] sm:border-[10px] border-slate-800 rounded-[24px] sm:rounded-[32px] shadow-2xl overflow-hidden relative">
                <div className="h-[360px] sm:h-[440px] bg-white">
                  {currentProject.type === "live" ? (
                    <LiveProjectPreview
                      url={currentProject.url}
                      title={currentProject.title}
                      mode="tablet"
                    />
                  ) : (
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div> */}
              {/* <div className="w-full max-w-6xl bg-slate-900 border-[6px] sm:border-[10px] border-slate-800 rounded-[24px] sm:rounded-[32px] shadow-2xl overflow-hidden relative">
                <div className="h-[440px] sm:h-[560px] lg:h-[620px] bg-white">
                  {currentProject.type === "live" ? (
                    <LiveProjectPreview
                      url={currentProject.url}
                      title={currentProject.title}
                      mode="tablet"
                    />
                  ) : (
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div> */}
              <div className="w-full max-w-6xl bg-slate-900 border-[6px] sm:border-[10px] border-slate-800 rounded-[24px] sm:rounded-[32px] shadow-2xl overflow-hidden relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                <div className="h-[440px] sm:h-[560px] lg:h-[620px] bg-white relative overflow-hidden">
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      previewOpen ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <ProjectPreview
                      preview={currentProject.tabletPreview}
                      title={currentProject.title}
                    />
                  </div>

                  {previewOpen && currentProject.type === "live" && (
                    <div className="absolute inset-0 animate-[previewFadeIn_500ms_ease-out]">
                      <LiveProjectPreview
                        url={currentProject.url}
                        title={currentProject.title}
                        mode="tablet"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Overlapping Phone Mockup */}
        {/* ================= MOBILE PHONE ================= */}

{/* EASY MOBILE PHONE CONTROLS
    Change these 3 values to adjust it:
    mobileScale  → overall size
    mobileRight  → move left/right
    mobileBottom → move up/down
*/}


<div
  className={`hidden sm:block absolute z-20
    w-[260px] md:w-[300px] lg:w-[320px]
    bg-slate-900
    border-[5px] sm:border-[7px] border-slate-800
    rounded-[28px] sm:rounded-[32px]
    shadow-2xl
    overflow-hidden
    transition-all duration-700
    ease-[cubic-bezier(0.22,1,0.36,1)]
    ${
      previewOpen
        ? "opacity-0 pointer-events-none"
        : "opacity-100"
    }
  `}
  style={{
    right: `${mobileRight}px`,
    bottom: `${mobileBottom}px`,
    transform: `scale(${mobileScale})`,
    transformOrigin: "bottom right",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = `scale(${mobileScale * 1.05})`;
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = `scale(${mobileScale})`;
  }}
>
  {/* Phone speaker / notch */}
  <div className="w-14 h-2.5 bg-slate-800 rounded-full mx-auto my-1.5" />

  {/* Mobile screen */}
  <div className="relative w-full h-[480px] md:h-[540px] overflow-hidden bg-white">
    <ProjectPreview
      key={`${currentProject.id}-mobile`}
      preview={currentProject.mobilePreview}
      title={currentProject.title}
    />
  </div>
</div>
            </div>

            {/* Bottom Showcase Thumbnail Selector */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center justify-between mb-3 text-xs font-['Oswald',sans-serif] uppercase tracking-wider text-white/70">
                <span>Explore Showcase Catalog</span>
                <span className="font-mono text-[#ffe600]">
                  0{activeProjectIdx + 1} / 04
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {SHOWCASE_PROJECTS.map((proj, idx) => (
                  <button
                    key={proj.id}
                    onClick={() => {
                      setPreviewOpen(false);
                      setActiveProjectIdx(idx);
                    }}
                    className={`text-left p-2.5 rounded-xl transition-all duration-300 ${
                      idx === activeProjectIdx
                        ? "bg-white/20 ring-2 ring-[#ffe600] shadow-lg"
                        : "bg-white/5 hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    <div className="font-['Oswald',sans-serif] uppercase text-xs font-bold text-white truncate">
                      {proj.appName}
                    </div>
                    <div className="text-[10px] text-white/70 font-mono truncate">
                      {proj.category.split("•")[0]}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section
        id="experience"
        className="py-16 sm:py-20 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#2e4de6] text-white border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 reveal-elem">
            <h2 className="font-['Bebas_Neue',sans-serif] text-4xl sm:text-6xl uppercase tracking-tight text-white">
              My Journey
            </h2>
            <div className="h-1 w-16 bg-[#ffe600] mt-2 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            <div
              className="border-l-4 border-[#ffe600] pl-4 sm:pl-6 reveal-elem"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="font-['Bebas_Neue',sans-serif] text-4xl sm:text-6xl lg:text-7xl font-bold flex items-baseline">
                <AnimatedCounter target={4} prefix="0" />
                <span className="text-[#ffe600]">+</span>
              </div>
              <div className="font-['Oswald',sans-serif] uppercase text-xs sm:text-sm tracking-widest text-white/80 mt-1">
                Featured Projects
              </div>
            </div>

            <div
              className="border-l-4 border-[#ffe600] pl-4 sm:pl-6 reveal-elem"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="font-['Bebas_Neue',sans-serif] text-4xl sm:text-6xl lg:text-7xl font-bold flex items-baseline">
                <AnimatedCounter target={9.0} decimals={1} />
                <span className="text-[#ffe600]">+</span>
              </div>
              <div className="font-['Oswald',sans-serif] uppercase text-xs sm:text-sm tracking-widest text-white/80 mt-1">
                CGPA
              </div>
            </div>

            <div className="border-l-4 border-[#ffe600] pl-4 sm:pl-6 reveal-elem">
              <div className="font-['Bebas_Neue',sans-serif] text-4xl sm:text-6xl lg:text-7xl font-bold flex items-baseline">
                <AnimatedCounter target={2026} prefix="" />
                <span className="text-[#ffe600]">.</span>
              </div>
              <div className="font-['Oswald',sans-serif] uppercase text-xs sm:text-sm tracking-widest text-white/80 mt-1">
                Graduate
              </div>
            </div>

            <div
              className="border-l-4 border-[#ffe600] pl-4 sm:pl-6 reveal-elem"
              style={{ transitionDelay: "300ms" }}
            >
              <div className="font-['Bebas_Neue',sans-serif] text-4xl sm:text-6xl lg:text-7xl font-bold text-[#ffe600] flex items-baseline">
                <AnimatedCounter target={99.8} decimals={1} />
                <span className="text-white text-2xl sm:text-3xl ml-1">%</span>
              </div>
              <div className="font-['Oswald',sans-serif] uppercase text-xs sm:text-sm tracking-widest text-white/80 mt-1">
                Commitment
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section
        id="process"
        className="py-16 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <div className="mb-12 reveal-elem">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono font-bold text-[#4162ff] uppercase tracking-widest block mb-1">
                ENGINEERING LIFECYCLE • 04 PHASES
              </span>
              <h2 className="font-['Bebas_Neue',sans-serif] text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-slate-900 leading-none">
                My Work Process
              </h2>
              <div className="h-1.5 w-16 sm:w-20 bg-[#4162ff] mt-2 rounded-full"></div>
            </div>
            <p className="text-slate-600 max-w-md text-xs sm:text-sm leading-relaxed">
              A disciplined, battle-tested engineering lifecycle from technical
              scoping and systems planning to production-grade deployment.
            </p>
          </div>

          {/* Sequential Step Timeline Ribbon */}
          <div className="hidden lg:grid grid-cols-4 gap-6 pt-6">
            {["01", "02", "03", "04"].map((num, i) => (
              <div key={num} className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#4162ff] text-white font-mono text-xs font-bold flex items-center justify-center shadow-md">
                  {num}
                </span>
                <div
                  className={`h-0.5 flex-1 ${i === 3 ? "bg-emerald-400" : "bg-gradient-to-r from-[#4162ff] to-slate-200"}`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Process Cards (Structured with clean Flexbox to eliminate collisions) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((item, idx) => (
            <article
              key={item.step}
              className="reveal-elem bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div>
                {/* Visual Image with Step Badge */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative mb-4 shadow-inner">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md text-[#ffe600] font-['Bebas_Neue',sans-serif] text-xs tracking-wider shadow border border-white/10 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ffe600] animate-ping"></span>
                    <span>STEP {item.step}</span>
                  </div>
                </div>

                {/* Clear Typographic Hierarchy */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono text-[#4162ff] font-bold uppercase tracking-wider">
                    {item.phase}
                  </div>

                  <h3 className="font-['Oswald',sans-serif] text-xl font-bold uppercase text-slate-900 leading-snug group-hover:text-[#4162ff] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Technical Deliverables */}
              <div className="pt-4 mt-5 border-t border-slate-100 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 text-[10px] font-mono text-slate-700 font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {}
      {/* ================= PROJECTS ================= */}
      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="relative overflow-hidden py-20 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-slate-50 border-y border-slate-200"
      >
        <div className="max-w-7xl mx-auto">
          {/* ================= HEADER ================= */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-12 reveal-elem">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-[#4162ff]">
                  04 / WORK
                </span>

                <span className="h-px w-8 sm:w-10 bg-[#4162ff]/40"></span>
              </div>

              <h2 className="font-['Bebas_Neue',sans-serif] text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-slate-900 leading-none">
                Selected Projects
              </h2>

              <div className="h-1.5 w-16 sm:w-20 bg-[#4162ff] mt-3 rounded-full"></div>
            </div>

            <div className="flex items-center gap-3 text-slate-400">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                Scroll to explore
              </span>

              <span className="text-lg animate-pulse">→</span>
            </div>
          </div>

          {/* ================= HORIZONTAL PROJECT RAIL ================= */}
          {/* ================= INFINITE PROJECT SLIDER ================= */}
          <div className="projects-slider-wrapper reveal-elem">
            <div className="projects-slider">
              <div className="projects-track">
                {[...PROJECTS, ...PROJECTS].map((project, idx) => (
                  <article
                    key={`${project.number}-${idx}`}
                    className="
            project-card
            group
            relative
            flex-none
            w-[78vw]
            sm:w-[48vw]
            md:w-[36vw]
            lg:w-[30vw]
            xl:w-[28vw]
            max-w-[420px]
            overflow-hidden
            rounded-2xl
            bg-white
            border
            border-slate-200
            shadow-sm
            transition-all
            duration-500
            hover:-translate-y-2
            hover:shadow-xl
          "
                  >
                    {/* ================= IMAGE ================= */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-105
              "
                      />

                      {/* Overlay */}
                      <div
                        className="
                absolute
                inset-0
                bg-gradient-to-t
                from-slate-950/75
                via-slate-950/10
                to-transparent
                opacity-80
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
                      />

                      {/* Number */}
                      <div className="absolute top-4 left-4">
                        <span
                          className="
                  inline-flex
                  items-center
                  justify-center
                  min-w-10
                  h-8
                  px-3
                  rounded-full
                  bg-white/90
                  backdrop-blur-md
                  text-slate-900
                  font-mono
                  text-[10px]
                  font-bold
                  tracking-widest
                "
                        >
                          {project.number}
                        </span>
                      </div>

                      {/* Hover Arrow */}
                      <div
                        className="
                absolute
                top-4
                right-4
                w-9
                h-9
                rounded-full
                bg-[#4162ff]
                text-white
                flex
                items-center
                justify-center
                opacity-0
                translate-y-2
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all
                duration-400
              "
                      >
                        <span className="transition-transform duration-300 group-hover:rotate-45">
                          ↗
                        </span>
                      </div>

                      {/* Category */}
                      <div className="absolute bottom-4 left-5">
                        <span
                          className="
                  font-mono
                  text-[9px]
                  sm:text-[10px]
                  tracking-[0.2em]
                  text-white
                  uppercase
                "
                        >
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* ================= CONTENT ================= */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3
                            className="
                    font-['Bebas_Neue',sans-serif]
                    text-3xl
                    sm:text-4xl
                    uppercase
                    tracking-tight
                    leading-none
                    text-slate-900
                    transition-colors
                    duration-300
                    group-hover:text-[#4162ff]
                  "
                          >
                            {project.title}
                          </h3>

                          <p
                            className="
                    mt-3
                    text-xs
                    sm:text-sm
                    leading-relaxed
                    text-slate-500
                    line-clamp-3
                  "
                          >
                            {project.description}
                          </p>
                        </div>

                        <span
                          className="
                  hidden sm:block
                  font-mono
                  text-[10px]
                  text-slate-300
                  tracking-widest
                "
                        >
                          /{project.number}
                        </span>
                      </div>

                      {/* ================= TAGS ================= */}
                      <div className="flex flex-wrap gap-1.5 mt-5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="
                    px-2.5
                    py-1
                    rounded-full
                    border
                    border-slate-200
                    bg-slate-50
                    text-[9px]
                    sm:text-[10px]
                    font-mono
                    uppercase
                    tracking-wide
                    text-slate-500
                    transition-all
                    duration-300
                    group-hover:border-[#4162ff]/30
                    group-hover:bg-[#4162ff]/5
                  "
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* ================= FOOTER ================= */}
                      <div
                        className="
                mt-5
                pt-4
                border-t
                border-slate-100
                flex
                items-center
                justify-between
              "
                      >
                        <span
                          className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-slate-400
                "
                        >
                          Project {project.number}
                        </span>

                        <button
                          className="
                  flex
                  items-center
                  gap-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-slate-800
                  transition-colors
                  duration-300
                  hover:text-[#4162ff]
                "
                        >
                          View Project
                          <span
                            className="
                    text-sm
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                          >
                            →
                          </span>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* ================= SCROLL INDICATOR ================= */}
          <div className="mt-3 flex items-center gap-4 reveal-elem">
            <span className="font-mono text-[9px] tracking-[0.2em] text-slate-400">
              01
            </span>

            <div className="h-px w-24 sm:w-40 bg-slate-200 overflow-hidden">
              <div className="h-full w-1/3 bg-[#4162ff] animate-[projectScroll_3s_ease-in-out_infinite]"></div>
            </div>

            <span className="font-mono text-[9px] tracking-[0.2em] text-slate-400">
              04
            </span>
          </div>
        </div>
      </section>

      {}
      {/* <section
        id="workstation"
        className="py-16 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#4162ff] text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-14 reveal-elem">
            <h2 className="font-['Bebas_Neue',sans-serif] text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
              My Workstation
            </h2>
            <div className="h-1.5 w-16 sm:w-20 bg-[#ffe600] mt-2 rounded-full"></div>
            <p className="text-white/80 max-w-md text-xs sm:text-sm mt-2">
              The tools &amp; development environment I use to design, build, test, and deploy modern web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="reveal-elem md:col-span-6 flex flex-col group">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900/40 border border-white/20 mb-3 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                  alt="Primary Development Rig"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-['Oswald',sans-serif] text-lg font-bold uppercase tracking-wider text-white">
                Primary Development Rig
              </h3>
              <p className="text-xs text-white/75 font-mono mt-0.5">
                Dual 4K Studio Displays • Custom Ergonomic Split Mechanical
                Keyboard
              </p>
            </div>

            <div
              className="reveal-elem md:col-span-6 flex flex-col group"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900/40 border border-white/20 mb-3 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80"
                  alt="iPad Pro Wireframing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-['Oswald',sans-serif] text-lg font-bold uppercase tracking-wider text-white">
                iPad Pro Wireframing &amp; Touch QA
              </h3>
              <p className="text-xs text-white/75 font-mono mt-0.5">
                Apple Pencil 2 • Native iOS Touch &amp; Gesture Debugging •
                Figma Mirror
              </p>
            </div>

            <div className="reveal-elem md:col-span-8 flex flex-col group">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900/40 border border-white/20 mb-3 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80"
                  alt="MacBook Pro M-Series"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-['Oswald',sans-serif] text-lg font-bold uppercase tracking-wider text-white">
                MacBook Pro M-Series Max
              </h3>
              <p className="text-xs text-white/75 font-mono mt-0.5">
                64GB Unified Memory • Docker Linux Virtualization • Microservice
                Containers
              </p>
            </div>

            <div
              className="reveal-elem md:col-span-4 flex flex-col group"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="aspect-[4/3] md:aspect-[16/17] rounded-2xl overflow-hidden bg-slate-900/40 border border-white/20 mb-3 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
                  alt="Audio & Test Devices"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-['Oswald',sans-serif] text-lg font-bold uppercase tracking-wider text-white">
                Audio &amp; Test Devices
              </h3>
              <p className="text-xs text-white/75 font-mono mt-0.5">
                Sony WH-1000XM5 ANC • Pixel &amp; iPhone Real Device Lab
              </p>
            </div>
          </div>
        </div>
      </section> */}
      {/* ================= WORKSTATION ================= */}
      <section
        id="workstation"
        className="py-16 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#4162ff] text-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* ================= HEADER ================= */}
          <div className="mb-10 sm:mb-14 reveal-elem">
            <h2 className="font-['Bebas_Neue',sans-serif] text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
              My Workstation
            </h2>

            <div className="h-1.5 w-16 sm:w-20 bg-[#ffe600] mt-2 rounded-full"></div>

            <p className="text-white/80 max-w-md text-xs sm:text-sm mt-2">
              The tools and development environment I use to design, build,
              test, and deploy modern web applications.
            </p>
          </div>

          {/* ================= WORKSTATION GRID ================= */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* ================= 01 — DEVELOPMENT ENVIRONMENT ================= */}
            <div className="reveal-elem md:col-span-6 flex flex-col group">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900/40 border border-white/20 mb-3 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
                  alt="Development environment with code editor"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="font-['Oswald',sans-serif] text-lg font-bold uppercase tracking-wider text-white">
                Development Environment
              </h3>

              <p className="text-xs text-white/75 font-mono mt-0.5">
                React • Vite • JavaScript • VS Code
              </p>
            </div>

            {/* ================= 02 — BACKEND & APIS ================= */}
            <div
              className="reveal-elem md:col-span-6 flex flex-col group"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900/40 border border-white/20 mb-3 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80"
                  alt="Backend server and API infrastructure"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="font-['Oswald',sans-serif] text-lg font-bold uppercase tracking-wider text-white">
                Backend &amp; APIs
              </h3>

              <p className="text-xs text-white/75 font-mono mt-0.5">
                Node.js • Express • REST APIs • Database
              </p>
            </div>

            {/* ================= 03 — DEVELOPMENT WORKFLOW ================= */}
            <div className="reveal-elem md:col-span-8 flex flex-col group">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900/40 border border-white/20 mb-3 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1200&q=80"
                  alt="Git version control and software development workflow"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="font-['Oswald',sans-serif] text-lg font-bold uppercase tracking-wider text-white">
                Development Workflow
              </h3>

              <p className="text-xs text-white/75 font-mono mt-0.5">
                Git • GitHub • Version Control • Project Development
              </p>
            </div>

            {/* ================= 04 — TESTING & RESPONSIVE DEVELOPMENT ================= */}
            <div
              className="reveal-elem md:col-span-4 flex flex-col group"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="aspect-[4/3] md:aspect-[16/17] rounded-2xl overflow-hidden bg-slate-900/40 border border-white/20 mb-3 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80"
                  alt="Responsive web development and testing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="font-['Oswald',sans-serif] text-lg font-bold uppercase tracking-wider text-white">
                Testing &amp; Responsive Development
              </h3>

              <p className="text-xs text-white/75 font-mono mt-0.5">
                Responsive UI • Testing • Debugging • Cross-Device Development
              </p>
            </div>
          </div>
        </div>
      </section>

      {}
      <div className="w-full bg-slate-950 text-white py-4 sm:py-6 overflow-hidden border-y border-slate-800 select-none marquee-wrapper">
        <div className="marquee-track-right">
          {[0, 1].map((copyIdx) => (
            <div
              key={copyIdx}
              className="flex items-center gap-8 sm:gap-12 font-['Bebas_Neue',sans-serif] text-3xl sm:text-5xl md:text-6xl tracking-wider pr-8"
            >
              <span className="text-white">THOUGHTFUL BY DESIGN</span>{" "}
              <span className="text-[#ffe600]">✦</span>
              <span className="text-stroke-white">BUILT TO SCALE</span>{" "}
              <span className="text-[#ffe600]">✦</span>
              <span className="text-white">LOGIC MEETS CRAFT</span>{" "}
              <span className="text-[#ffe600]">✦</span>
              <span className="text-stroke-white">
                FROM IDEA TO INTERFACE
              </span>{" "}
              <span className="text-[#ffe600]">✦</span>
              <span className="text-white">ENGINEERED WITH INTENT</span>{" "}
              <span className="text-[#ffe600]">✦</span>
              <span className="text-stroke-white">
                MAKE IT WORK. MAKE IT MATTER.
              </span>{" "}
              <span className="text-[#ffe600]">✦</span>
            </div>
          ))}
        </div>
      </div>

      {}
      <section
        id="contact"
        className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 lg:px-16 bg-white text-slate-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 reveal-elem">
              <h2 className="font-['Bebas_Neue',sans-serif] text-5xl sm:text-7xl md:text-8xl leading-[0.88] tracking-tight uppercase text-slate-900">
                Have A Project?
                <br />
                <span className="text-[#4162ff]">Let’s Talk</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-xl pt-2 leading-relaxed">
                Have an ambitious vision, a critical systems refactor, or a
                startup that needs battle-tested engineering leadership? Send a
                transmission and let's craft something remarkable.
              </p>
            </div>

            {/* Circular Yellow Stamp Button */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end reveal-elem">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#ffe600] hover:bg-slate-900 hover:text-white text-slate-950 flex flex-col items-center justify-center font-['Oswald',sans-serif] uppercase text-lg sm:text-xl font-bold tracking-wider shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group"
                aria-label="Hire Me"
              >
                <span>Hire Me</span>
                <Icon
                  name="arrow-up-right"
                  className="w-6 h-6 sm:w-7 sm:h-7 mt-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {}
      <footer className="bg-[#4162ff] text-white py-14 sm:py-18 px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-white/20">
            <div>
              <div className="font-['Oswald',sans-serif] uppercase text-xs tracking-widest text-white/75 mb-1">
                Direct Transmission
              </div>
              <button
                onClick={copyEmailToClipboard}
                className="font-['Bebas_Neue',sans-serif] text-xl sm:text-3xl md:text-4xl tracking-wider text-white hover:text-[#ffe600] transition-colors text-left break-all"
              >
                vulavaptimanikanta@gmail.com
              </button>
            </div>
            <button
              onClick={copyEmailToClipboard}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ffe600] text-slate-950 font-['Oswald',sans-serif] text-xs sm:text-sm uppercase tracking-wider font-bold hover:bg-white transition-all transform active:scale-95 self-start md:self-auto shadow-md"
            >
              <Icon name="copy" className="w-4 h-4" />
              <span>Copy Email</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs sm:text-sm">
            <div className="space-y-2 col-span-2 sm:col-span-1">
              <div className="font-['Bebas_Neue',sans-serif] text-2xl tracking-wider text-white">
                V<span className="text-[#ffe600]">.DEV</span>
              </div>
              <p className="text-white/70 text-xs leading-relaxed max-w-xs">
                Engineering with empathy, architecting for high durability and
                performance.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-['Oswald',sans-serif] uppercase font-bold text-[#ffe600] tracking-widest text-xs mb-2">
                Navigation
              </div>
              <div>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, "services")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Services
                </a>
              </div>
              <div>
                <a
                  href="#works"
                  onClick={(e) => handleSmoothScroll(e, "works")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Selected Works
                </a>
              </div>
              <div>
                <a
                  href="#experience"
                  onClick={(e) => handleSmoothScroll(e, "experience")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Experience
                </a>
              </div>
              <div>
                <a
                  href="#process"
                  onClick={(e) => handleSmoothScroll(e, "process")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Process
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-['Oswald',sans-serif] uppercase font-bold text-[#ffe600] tracking-widest text-xs mb-2">
                Social
              </div>
              <div>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
              <div>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
              <div>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Twitter / X
                </a>
              </div>
            </div>

            <div className="space-y-2 col-span-2 sm:col-span-1">
              <div className="font-['Oswald',sans-serif] uppercase font-bold text-[#ffe600] tracking-widest text-xs mb-2">
                Location
              </div>
              <p className="text-white/80">Andhra Pradesh, India</p>
              <p className="text-white/70 text-xs">Remote Available</p>
              <div className="pt-1 text-emerald-300 flex items-center gap-1.5 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Available for Hire</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/60">
            <div>© 2026 V MANIKANTA. ALL RIGHTS RESERVED.</div>
            <a
              href="#hero"
              onClick={(e) => handleSmoothScroll(e, "hero")}
              className="hover:text-[#ffe600] transition-colors"
            >
              BACK TO TOP ↑
            </a>
          </div>
        </div>
      </footer>

      {}
      {selectedCaseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-2xl rounded-3xl p-6 sm:p-8 bg-white text-slate-900 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
              <span className="text-xs font-mono uppercase tracking-widest text-[#4162ff] font-bold">
                {selectedCaseModal.category}
              </span>
              <button
                onClick={() => setSelectedCaseModal(null)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
                aria-label="Close modal"
              >
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-5">
              <h3 className="font-['Oswald',sans-serif] text-2xl sm:text-3xl font-bold uppercase text-slate-900">
                {selectedCaseModal.title}
              </h3>

              <div>
                <h4 className="text-xs font-mono uppercase text-[#4162ff] font-bold mb-1">
                  Architecture Overview
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedCaseModal.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-[#4162ff] font-bold mb-2">
                  Verified Metrics
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {selectedCaseModal.metrics.map((m, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-100 text-xs font-mono text-slate-800 flex items-center gap-1.5"
                    >
                      <span className="text-[#4162ff]">✦</span> {m}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-[#4162ff] font-bold mb-2">
                  Tech Footprint
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseModal.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-blue-50 text-[#4162ff] font-semibold border border-blue-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedCaseModal(null)}
                className="px-6 py-2.5 rounded-full text-xs font-['Oswald',sans-serif] uppercase tracking-wider bg-[#ffe600] text-slate-950 font-bold hover:bg-slate-900 hover:text-white transition-colors"
              >
                Close Spec
              </button>
            </div>
          </div>
        </div>
      )}

      {}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-lg rounded-3xl p-6 sm:p-8 bg-white text-slate-900 shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
              <div>
                <h3 className="font-['Oswald',sans-serif] text-xl sm:text-2xl font-bold uppercase tracking-wider text-slate-900">
                  Start A Project
                </h3>
                <span className="text-xs text-slate-500">
                  Alex typically responds within 24 hours.
                </span>
              </div>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
                aria-label="Close modal"
              >
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-['Oswald',sans-serif] uppercase tracking-wider text-slate-600 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={contactForm.name}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, name: e.target.value })
                  }
                  placeholder="e.g. Sarah Connor"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#4162ff]"
                />
              </div>

              <div>
                <label className="block text-xs font-['Oswald',sans-serif] uppercase tracking-wider text-slate-600 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={contactForm.email}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, email: e.target.value })
                  }
                  placeholder="sarah@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#4162ff]"
                />
              </div>

              <div>
                <label className="block text-xs font-['Oswald',sans-serif] uppercase tracking-wider text-slate-600 mb-1">
                  Project Scope
                </label>
                <select
                  value={contactForm.scope}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, scope: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#4162ff]"
                >
                  <option>Full-Stack Web App Development</option>
                  <option>UI/UX Design System &amp; Product Design</option>
                  <option>Mobile App (iOS / Android)</option>
                  <option>Technical Consultation / Advisory</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-['Oswald',sans-serif] uppercase tracking-wider text-slate-600 mb-1">
                  Message
                </label>
                <textarea
                  rows="3"
                  required
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, message: e.target.value })
                  }
                  placeholder="Tell me about what you are looking to build..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#4162ff] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-full bg-[#ffe600] text-slate-950 font-['Oswald',sans-serif] uppercase font-bold tracking-wider hover:bg-slate-900 hover:text-white transition-all shadow-md disabled:opacity-50"
              >
                {isSubmitting ? "Transmitting..." : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      )}

      {}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-slate-950 text-white shadow-2xl border border-slate-800 text-xs animate-bounce font-mono">
          <span className="w-2 h-2 rounded-full bg-[#ffe600] animate-ping"></span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
