"use client";
import { FaInstagram, FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

const footerLinks = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/skouz4/",
    icon: <FaInstagram className="size-6" />,
    hoverColor:
      "hover:text-pink-500 hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]",
  },
  {
    title: "X (Twitter)",
    href: "https://x.com/skouza_101",
    icon: <FaXTwitter className="size-6" />,
    hoverColor:
      "hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]",
  },
  {
    title: "GitHub",
    href: "https://github.com/skouza101",
    icon: <FaGithub className="size-6" />,
    hoverColor:
      "hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/marwane-oraiche-6a109826a/",
    icon: <FaLinkedin className="size-6" />,
    hoverColor:
      "hover:text-blue-600 hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip z-10 py-6">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 pointer-events-none"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className={`text-white/40 transition-all duration-300 hover:scale-125 hover:-translate-y-1 ${link.hoverColor}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.title}
              >
                {link.icon}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
