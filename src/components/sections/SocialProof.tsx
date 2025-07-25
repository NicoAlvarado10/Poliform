'use client';

import { motion } from 'framer-motion';

const socialProof = {
  Products: 'Products',
  Projects: 'Projects',
  SatisfiedCustomers: 'Satisfied customers',
  TopParis: 'Top 1 in Paris',
};

const socialProofValues = {
  Products: '500+',
  Projects: '20+',
  SatisfiedCustomers: '50+',
  TopParis: '1st',
};

export const SocialProof = () => {
  return (
    <section className="max-w-11/12 py-20 mx-auto">
      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 justify-center gap-4 justify-items-center px-4 items-center">
        {(Object.keys(socialProof) as Array<keyof typeof socialProof>).map((key, index) => (
          <motion.div
            key={key}
            className="flex gap-2 flex-col-reverse items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <strong className="text-neutral-600 font-normal">
              {socialProof[key]}
            </strong>
            <h3 className="text-8xl max-md:text-6xl">{socialProofValues[key]}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
