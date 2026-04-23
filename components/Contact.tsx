"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 mb-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-syne font-bold text-white mb-6">
            Get In <span className="text-gold">Touch</span>
          </h2>
          <p className="text-gray-400 font-inter max-w-xl mx-auto mb-12">
            Have a question or want to work together? Feel free to reach out to me!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.a
            href="mailto:muhammedkb156@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center p-6 bg-dark rounded-xl border border-white/5 hover:border-gold transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <span className="text-gray-300 font-inter text-sm break-all">muhammedkb156@gmail.com</span>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/Muhammed K B"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center p-6 bg-dark rounded-xl border border-white/5 hover:border-gold transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </div>
            <span className="text-gray-300 font-inter text-sm">Muhammed K B</span>
          </motion.a>

          <motion.a
            href="tel:+919645497235"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center p-6 bg-dark rounded-xl border border-white/5 hover:border-gold transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <span className="text-gray-300 font-inter text-sm">+91 9645497235</span>
          </motion.a>
        </div>

        {/* Contact Form UI */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-[#0d0d0d] p-8 rounded-2xl border border-white/5 shadow-2xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col text-left">
              <label htmlFor="name" className="text-gray-400 font-inter text-sm mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="bg-dark px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-gold text-white font-inter"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col text-left">
              <label htmlFor="email" className="text-gray-400 font-inter text-sm mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="bg-dark px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-gold text-white font-inter"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="flex flex-col text-left mb-8">
            <label htmlFor="message" className="text-gray-400 font-inter text-sm mb-2">Message</label>
            <textarea
              id="message"
              rows={5}
              className="bg-dark px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-gold text-white font-inter resize-none"
              placeholder="Your message here..."
            ></textarea>
          </div>
          
          <button
            type="button"
            className="w-full md:w-auto px-8 py-3 bg-gold text-dark font-syne font-bold rounded-lg transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
