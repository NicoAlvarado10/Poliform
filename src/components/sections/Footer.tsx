'use client'
import { motion } from 'framer-motion';
import preFooter from '../../assets/footer.webp';

export const Footer = () => {
  return (
    <footer className="text-white pt-20 pb-14 max-md:mt-10 bg-black" id='news'>
      <div className="max-w-11/12 mx-auto flex flex-col gap-20 max-md:gap-10 max-sm:px-4">
        <div className="grid lg:grid-cols-2 justify-between gap-20 max-md:gap-10">
          <div
            className="flex flex-col max-sm:gap-8 gap-12"
          >
            <motion.h2 
             initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-7xl max-md:text-5xl max-sm:text-4xl font-semibold">
              Engage with Us in Convertation
            </motion.h2>
            <motion.p 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay:0.3 }}
            viewport={{ once: false }}
            className="leading-7 max-md:text-base text-lg text-neutral-400">
              In a global world based on communication, a brand must look beyond its borders, open
              up to new experiences, and dare to be different. Meeting the brightest minds of one´s
              time is the most effective way to nurture creativity.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
            className="relative w-11/12 max-sm:w-full mx-auto h-[300px] max-md:h-[300px] rounded-3xl overflow-hidden"
          >
            <img src={preFooter.src} alt="image" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          </motion.div>
        </div>

        <div className="flex flex-wrap max-md:gap-6 max-sm:flex-col justify-between">
          {[
            {
              title: 'About',
              links: ['Our Story', 'Store Locator', 'Sustainability', 'Careers', 'Contact'],
            },
            {
              title: 'Customer Service',
              links: [
                'Price and Payments',
                'Shipping',
                'Return Policy',
                'Terms of Service',
                'Privacy Policy',
              ],
            },
            {
              title: 'Social Media',
              links: ['Instagram', 'Facebook', 'Linkedin'],
            },
          ].map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 * i }}
              viewport={{ once: false }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-2xl">{section.title}</h3>
              <ul className="flex flex-col gap-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <span className="text-neutral-400 transition duration-150 hover:text-white cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            
            className="flex justify-center items-end text-8xl max-sm:text-6xl font-semibold"
          >
            <h2>Poliform</h2>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
