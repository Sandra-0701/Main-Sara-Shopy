import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

const Footer = () => {
  // State for mobile accordion toggle
  const [openSection, setOpenSection] = useState(null);

  // Toggle function for mobile accordion
  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  // Footer sections data
  const footerSections = [
    {
      id: "about",
      title: "About Us",
      links: [
        { href: "/about", text: "Our Story" },
        { href: "/team", text: "Our Team" },
        { href: "/careers", text: "Careers" },
      ],
    },
    {
      id: "quick1",
      title: "Quick Links",
      links: [
        { href: "/services", text: "Services" },
        { href: "/blog", text: "Blog" },
        { href: "/contact", text: "Contact Us" },
      ],
    },
    {
      id: "quick2",
      title: "Quick Links",
      links: [
        { href: "/services", text: "Services" },
        { href: "/blog", text: "Blog" },
        { href: "/contact", text: "Contact Us" },
      ],
    },
  ];

  return (
    <footer className="footer pt-5 bg-gradient-to-br from-[#1a1c23] to-[#242730] text-white">
      <div className="container mx-auto px-4">
        {/* Desktop and Tablet Footer (md and above) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* First 3 columns - Links */}
          {footerSections.map((section) => (
            <div key={section.id}>
              <h3 className="footer-title text-white font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-8 after:h-0.5 after:bg-[#ffd400]">
                {section.title}
              </h3>
              <ul className="footer-links list-none p-0">
                {section.links.map((link, index) => (
                  <li key={index} className="mb-4">
                    <Link
                      to={link.href}
                      className="text-[#b4b6bb] hover:text-white hover:pl-2 transition-all duration-300"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4 - Social */}
          <div className="text-center lg:text-left">
            <h3 className="footer-title text-white font-semibold mb-6 relative md:after:content-[''] md:after:absolute md:after:left-0 md:after:-bottom-2 md:after:w-8 md:after:h-0.5 md:after:bg-[#ffd400] md:mx-auto lg:mx-0">
              Follow Us
            </h3>
            <div className="social-links flex justify-center lg:justify-start space-x-3">
              <Link
                to="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#ffd400] hover:-translate-y-1 transition-all duration-300"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#ffd400] hover:-translate-y-1 transition-all duration-300"
              >
                <FaXTwitter />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#ffd400] hover:-translate-y-1 transition-all duration-300"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Footer Accordion (sm and below) */}
        <div className="md:hidden">
          {/* Mobile Accordion Sections */}
          {footerSections.map((section) => (
            <div key={section.id} className="border-b border-gray-700 py-3">
              <button
                onClick={() => toggleSection(section.id)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="footer-title text-white font-semibold">
                  {section.title}
                </h3>
                <span className="text-xl">
                  {openSection === section.id ? "−" : "+"}
                </span>
              </button>
              {openSection === section.id && (
                <ul className="footer-links list-none p-0 mt-4 pl-2">
                  {section.links.map((link, index) => (
                    <li key={index} className="mb-3">
                      <Link
                        to={link.href}
                        className="text-[#b4b6bb] hover:text-white transition-all duration-300"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Mobile Social Links - Always Visible */}
          <div className="py-6 text-center">
            <h3 className="footer-title text-white font-semibold mb-4">
              Follow Us
            </h3>
            <div className="social-links flex justify-center space-x-5">
              <Link
                to="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#ffd400] transition-all duration-300"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#ffd400] transition-all duration-300"
              >
                <FaXTwitter />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#ffd400] transition-all duration-300"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Same for all screen sizes */}
        <div className="footer-bottom mt-6 py-4 text-center bg-black/20">
          <p className="text-sm">
            © 2025 Sara Shopy. All rights reserved. |{" "}
            <Link
              to="/privacy"
              className="text-[#ffd400] hover:text-white transition-all duration-300"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;