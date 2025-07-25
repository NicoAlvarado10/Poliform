'use client';
import { useState } from "react";
import CircularText from "../ui/CircularText";
import { motion } from 'framer-motion';

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Mapeo de items con su id para href
  const menuItems = [
    { label: "Product", id: "product" },
    { label: "Lifestyle", id: "lifestyle" },
    { label: "News", id: "news" },
    { label: "Projects", id: "projects" }
  ];

  return (
    <section className="overflow-hidden h-screen max-2xl:h-full" id="hero">
      {/* Navbar fijo */}
      <header className="bg-white shadow-sm max-md:fixed top-0 left-0 w-full z-50">
        <nav className="flex items-center  mx-auto justify-between max-w-11/12 py-6 relative">
          {/* Logo */}
          <a className="text-4xl font-black tracking-tighter" href="#hero">
            Poliform
          </a>

          {/* Menú escritorio */}
          <ul className="hidden md:flex items-center gap-6">
            {menuItems.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-lg transition duration-150 hover:text-gray-600"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Botón hamburguesa */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>

          {/* Menú mobile */}
          {isOpen && (
            <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-6 gap-4 md:hidden z-50">
              {menuItems.map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-lg transition duration-150 hover:text-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </header>

      {/* Contenido principal */}
      <div className="relative flex flex-col h-screen max-2xl:h-full justify-center  items-center gap-20 max-w-11/12 mx-auto rounded-3xl overflow-hidden pb-20 px-4 pt-[96px]">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 bg-[url(../assets/bg-hero.webp)] bg-center bg-cover bg-no-repeat z-[-1] rounded-3xl" />

        {/* Gradiente oscuro */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-0 rounded-3xl" />

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-sm:text-4xl backdrop-blur-xl px-2 py-4 rounded-2xl max-md:text-6xl md:text-7xl lg:text-9xl mt-12 max-md:pt-5 text-white font-bold text-center z-10"
        >
          Contemporary
        </motion.h1>

        {/* Texto y CircularText */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-6xl w-full z-10">
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl text-white p-6 md:p-8 rounded-2xl max-md:max-w-md text-center md:text-left"
            >
              <p className="mb-4 text-base md:text-lg">
                Crafting spaces that harmonize modern aesthetics with timeless
                elegance, our contemporary interior designs breathe life into
                every room, redefining the essence of chic living.
              </p>
              <a
                className="bg-black transition duration-150 hover:bg-black/85 px-4 py-2 rounded-xl inline-block mt-2 text-sm md:text-base"
                href="#product"
              >
                View More <i className="ri-arrow-right-line"></i>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start items-center"
          >
            <CircularText
              text="Minimalist.Modern.Minimalist.Modern "
              onHover="speedUp"
              spinDuration={20}
              className="text-white w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
