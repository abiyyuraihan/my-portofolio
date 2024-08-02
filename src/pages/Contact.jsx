import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_EMAIL_SERVICE_ID,
      process.env.REACT_APP_EMAIL_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAIL_PUBLIC_KEY,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      }
    )
      .then((result) => {
        alert('Message Sent Successfully');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, (error) => {
        alert('Message Failed to Send');
      });
  };

  return (
    <div className="flex items-center px-4 justify-center min-h-screen lg:mt-20 md:mt-20 sm:mt-14 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
        className="bg-stone-800 shadow-lg rounded-lg p-8 max-w-md w-full absolute"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-200">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.3 }}
          >
            <label className="block text-sm font-medium text-gray-400">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-800 focus:border-gray-800"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.4 }}
          >
            <label className="block text-sm font-medium text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-800 focus:border-gray-800"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.5 }}
          >
            <label className="block text-sm font-medium text-gray-400">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-800 focus:border-gray-800"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.6 }}
          >
            <label className="block text-sm font-medium text-gray-400">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-800 focus:border-gray-800"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.7 }}
          >
            <label className="block text-sm font-medium text-gray-400">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-800 focus:border-gray-800"
              rows="4"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.8 }}
          >
            <button
              type="submit"
              className="w-full flex items-center justify-center px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
            >
              <FiSend className="mr-2" />
              Send Message
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;