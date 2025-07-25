'use client';

import { motion } from 'framer-motion';
import productImg from '@/assets/product1.webp';
import productImg2 from '@/assets/product2.webp';

export const Product = () => {
  return (
    <section id='product' className=" max-2xl:h-full max-2xl:mt-28 my-20 max-2xl:mb-10">
      <div className="max-w-11/12 mx-auto">
        <div className="grid grid-cols-1 justify-center items-center lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-8">

          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, }}
            className="relative"
          >
            <div className="relative h-[500px] md:h-[600px] lg:h-[650px] rounded-[32px] overflow-hidden shadow-2xl group">
              <img
                src={productImg.src}
                alt="Modern minimalist living room interior"
                className="object-cover h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: false }}
                className="absolute top-8 left-8"
              >
                <div className="bg-transparent backdrop-blur-lg text-white px-6 py-3 rounded-full font-medium text-sm tracking-wide shadow-lg border border-white">
                  Gorgeous Interior
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: false }}
                className="absolute bottom-12 left-8 right-8"
              >
                <h2 className="text-[3.2rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem] font-bold text-neutral-100 leading-[0.9] tracking-tight">
                  Modern
                  <br />
                  <span className="text-neutral-300">Minimalist</span>
                </h2>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8">

              {/* Aesthetic Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="bg-[#F0E9E3] rounded-[28px] p-6 shadow-xl border border-gray-100 min-h-[200px] flex flex-col justify-between relative"
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: false }}
                  className="text-black absolute px-5 py-2.5 rounded-full font-medium text-sm tracking-wide backdrop-blur-md bg-transparent inline-block mb-8 border-black border-2"
                >
                  Aesthetic
                </motion.div>

                <p className="text-neutral-800 text-lg leading-relaxed my-16 mb-8 font-light text-balance">
                  Aesthetic furniture where every piece tells a story of style
                </p>

                <h2 className="text-[2.8rem] lg:text-[3.2rem] font-bold text-black leading-[0.95] tracking-tight">
                  Into a gallery
                  <br />
                  <span className="text-neutral-950">of elegance</span>
                </h2>
              </motion.div>

              {/* Best Furniture Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="relative"
              >
                <div className="relative rounded-[28px] overflow-hidden shadow-xl h-[320px] w-full group">
                  <img
                    src={productImg2.src}
                    alt="Outdoor wicker chair in natural setting"
                    className="object-cover h-full w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300" />

                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: false }}
                    className="absolute top-6 left-6"
                  >
                    <div className="bg-transparent backdrop-blur-sm text-black px-5 py-2.5 rounded-full font-medium text-sm tracking-wide shadow-lg border border-black">
                      Best Furniture
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: false }}
                    className="absolute bottom-6 left-6 right-20"
                  >
                    <p className="text-white text-lg font-light leading-relaxed">
                      Indulge in the artistry
                      <br />
                      of everyday living
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    viewport={{ once: false }}
                    className="absolute bottom-6 right-6"
                  >
                    <button className="cursor-pointer bg-white hover:text-white hover:bg-black/65  w-14 h-14  backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-xl">
                      <i className="ri-arrow-right-up-line text-3xl "></i>
                    </button>
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
