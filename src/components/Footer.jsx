import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGoogle } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-black py-6 w-full relative z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-4">
          <a href="https://instagram.com/_abiyyuu" className="text-gray-400 hover:text-white mx-2" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com/in/abiyyu-raihan-196540210" className="text-gray-400 hover:text-white mx-2" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/abiyyuraihan" className="text-gray-400 hover:text-white mx-2" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://your-website.com/" className="text-gray-400 hover:text-white mx-2" target="_blank" rel="noopener noreferrer">
            <SiGoogle size={24} />
          </a>
        </div>
        <p className="text-center text-gray-400">
          {'Copyright © '}
          <a
            href="https://your-website.com/"
            className="text-white hover:text-stone-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Your Website
          </a>{' '}
          {new Date().getFullYear()}
          {'.'}
        </p>
      </div>
    </footer>
  );
};

export default Footer;