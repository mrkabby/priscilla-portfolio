"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaTiktok } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50 p-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">P.B.A</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-gray-400">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section with Background Image */}
      <section
        className="h-screen flex items-center justify-center text-center p-10 bg-cover bg-center"
        style={{ backgroundImage: "url(/sitting.jpg)" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold bg-opacity-50 p-6 rounded-lg"
        >
          Priscilla Boatemaa Antwi <br />
          <span className="text-3xl font-normal">
            |CSR | Fashion Model | Natural Hair Enthusiast
          </span>
        </motion.h1>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          About Me
        </motion.h2>
        <p className="max-w-2xl mx-auto text-lg">
          Brief bio about your work and expertise.
        </p>
      </section>

      {/* Portfolio Section with Images */}
      <section id="portfolio" className="py-20 px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-6"
        >
          Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "/back.jpg",
            "/ear.jpg",
            "/IMG-20250313-WA0090.jpg",
            "IMG-20250313-WA0093.jpg",
            "/IMG-20250313-WA0091.jpg",
            "/IMG-20250313-WA0092.jpg",
            "/IMG-20250313-WA0082.jpg",
            "/IMG-20250313-WA0083.jpg",
            "/IMG-20250313-WA0084.jpg",
            "/IMG-20250313-WA0085.jpg",
            "/bnw2.jpg",
            "/bnw.jpg",
            "/IMG-20250313-WA0088.jpg",
            "/IMG-20250313-WA0089.jpg",
            "/IMG-20250313-WA0094.jpg",
            "/IMG-20250313-WA0095.jpg",
            "/IMG-20250313-WA0096.jpg",
            "/sitting.jpg",
            "/IMG-20250313-WA0098.jpg",
            "/standingbw.jpg",
            "/standingcream.jpg",
          ].map((image, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <img
                src={image}
                alt={`Project ${i + 1}`}
                className="h-64 w-full object-cover rounded-md"
              />
              <p className="mt-4 text-center">Project {i + 1}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section with Social Media Links */}
      <section id="contact" className="py-20 px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Contact Me
        </motion.h2>
        <p className="max-w-lg mx-auto mb-6">
          Feel free to reach out via email or social media.
        </p>
        <div className="flex justify-center space-x-6 text-3xl">
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/yourwhatsappnumber"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-gray-400"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.tiktok.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaTiktok />
          </a>
        </div>
      </section>
    </div>
  );
}
