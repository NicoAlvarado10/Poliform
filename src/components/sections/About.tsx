'use client';

import { motion } from 'framer-motion';
import aboutImg from '@/assets/about.webp';

export const About = () => {
  return (
    <section className='max-w-11/12 mx-auto py-10' id='lifestyle'>
      <div className='grid grid-cols-2 justify-between items-center max-md:grid-cols-1 max-md:gap-4'>

        {/* Imagen */}
        <motion.div
          className="relative h-full w-full rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false }}
        >
          <img
            src={aboutImg.src}
            alt="about image"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />
        </motion.div>

        {/* Contenido */}
        <div>
          <div className='p-10 max-md:p-0'>

            <motion.span
              className='font-semibold mb-4 flex items-center gap-2'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: false }}
            >
              Elegance <span>-</span> Timeless
            </motion.span>

            <motion.h2
              className='text-7xl max-md:text-5xl max-sm:text-4xl font-semibold my-4'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: false }}
            >
              Modern Style Timeless Charm
            </motion.h2>

            <motion.p
              className='leading-7 text-neutral-800 text-lg mb-8 text-balance'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: false}}
            >
             Discover Poliform&apos;s 2024 preview, featuring sofas, chairs, and armchairs embodying diverse lifestyle concepts, alongside striking tables, coffe tables, and sideboards.

            </motion.p>

            <motion.a
              href="#"
              className='text-white bg-black px-6 py-3 rounded-xl inline-block'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: false}}
            >
              About Us <i className="ri-arrow-right line"></i>
            </motion.a>

          </div>
        </div>
      </div>
    </section>
  );
};
