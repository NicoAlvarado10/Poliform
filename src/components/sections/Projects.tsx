'use client';
import { motion } from 'framer-motion'
import project1 from '@/assets/bg-hero.webp'
import project2 from '@/assets/about.webp'
import project3 from '@/assets/project3.webp'
import project4 from '@/assets/project4.webp'
import project5 from '@/assets/project5.webp'
import project6 from '@/assets/project6.webp'

export const Projects = () => {
  return (
    <section className="pt-10 " id='projects'>
      <div className="max-w-11/12 mx-auto">
        {/* Título y texto superior */}
        <div className="grid grid-cols-2 mb-20 max-md:grid-cols-1  max-md:gap-6">
          <motion.h2
            className="text-5xl max-sm:text-4xl max-md:text-center font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Explore Our Proudly Collection
          </motion.h2>
          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <span className="flex justify-end max-md:justify-center max-md:order-2 mt-4">
              <a href="#" className="text-white py-2 px-4 rounded-xl  bg-black">
                View More
              </a>
            </span>
            <p className="text-right max-md:text-center text-lg leading-7 md:text-balance">
              Poliform will showcase its vision of contemporary architecture, interior design trends,
              and innovative living at Salone del Mobile.Milano 2024.
            </p>
          </motion.div>
        </div>

        {/* Grilla simple de 3 columnas */}
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">

          {/* Mondrian */}
          <motion.div
            className="relative cursor-pointer overflow-hidden rounded-3xl aspect-square group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            
          >
            <img
              src={project1.src}
              alt="Mondrian"
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 flex flex-col justify-end p-4 gap-3">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-xl font-semibold">Mondrian</h3>
                <a
                  href="#"
                  className="bg-white text-black text-sm font-medium px-2 py-1 rounded-full hover:bg-gray-200 transition"
                >
                  <i className="ri-arrow-right-up-line text-3xl text-gray-400"></i>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Nirnia */}
          <motion.div
            className="relative cursor-pointer overflow-hidden rounded-3xl aspect-[3/4] max-md:aspect-square group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            
          >
            <img
              src={project3.src}
              alt="Nirnia"
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 flex flex-col justify-end p-4 gap-3">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-xl font-semibold">Nirnia</h3>
                <a
                  href="#"
                  className="bg-white text-black text-sm font-medium px-2 py-1 rounded-full hover:bg-gray-200 transition"
                >
                  <i className="ri-arrow-right-up-line text-3xl text-gray-400"></i>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Artex */}
          <motion.div
            className="relative cursor-pointer overflow-hidden rounded-3xl aspect-square group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            
          >
            <img
              src={project4.src}
              alt="Artex"
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 flex flex-col justify-end p-4 gap-3">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-xl font-semibold">Artex</h3>
                <a
                  href="#"
                  className="bg-white text-black text-sm font-medium px-2 py-1 rounded-full hover:bg-gray-200 transition"
                >
                  <i className="ri-arrow-right-up-line text-3xl text-gray-400"></i>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Brera */}
          <motion.div
            className="relative cursor-pointer overflow-hidden rounded-3xl aspect-[3/4] max-md:aspect-square group md:-translate-y-1/4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            
          >
            <img
              src={project2.src}
              alt="Brera"
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 flex flex-col justify-end p-4 gap-3">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-xl font-semibold">Brera</h3>
                <a
                  href="#"
                  className="bg-white text-black text-sm font-medium px-2 py-1 rounded-full hover:bg-gray-200 transition"
                >
                  <i className="ri-arrow-right-up-line text-3xl text-gray-400"></i>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Alea Pro */}
          <motion.div
            className="relative cursor-pointer overflow-hidden rounded-3xl aspect-square group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            
          >
            <img
              src={project5.src}
              alt="Alea Pro"
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 flex flex-col justify-end p-4 gap-3">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-xl font-semibold">Alea Pro</h3>
                <a
                  href="#"
                  className="bg-white text-black text-sm font-medium px-2 py-1 rounded-full hover:bg-gray-200 transition"
                >
                  <i className="ri-arrow-right-up-line text-3xl text-gray-400"></i>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Nirnia 2 */}
          <motion.div
            className="relative cursor-pointer overflow-hidden rounded-3xl aspect-[3/4] max-md:aspect-square group md:-translate-y-1/4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            
          >
            <img
              src={project6.src}
              alt="Nirnia 2"
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 flex flex-col justify-end p-4 gap-3">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-xl font-semibold">Nirnia</h3>
                <a
                  href="#"
                  className="bg-white text-black text-sm font-medium px-2 py-1 rounded-full hover:bg-gray-200 transition"
                >
                  <i className="ri-arrow-right-up-line text-3xl text-gray-400"></i>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
