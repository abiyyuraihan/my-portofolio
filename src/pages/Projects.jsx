import React from "react";
import { motion } from 'framer-motion';
import { FiEye } from 'react-icons/fi';

const topProjects = [
    { id: 1, title: 'Aturin', description: 'Pengelolaan Income dan Expense untuk UMKM Indonesia, Serta Terdapat Finy AI Yang Dapat Memberikan Solusi Dari Masalah Keuangan Anda.', image: '/images/aturin.png', lihat: 'https://aturin.vercel.app/' },
    { id: 2, title: 'Peredam Suara (GesanG)', description: 'Perhitungan dan Pembuatan Penawaran Otomatis untuk Pembuatan Ruangan Studio Musik, Karaoke, Ruangan Gaming.', image: '/images/peredam_suara.png', lihat: 'https://gesangmusic.com/peredam_suara' },
    { id: 3, title: 'Raihan GPT', description: 'Ini Merupakan Chat Berbasis AI, Yang Mampu Memberikan Solusi Dari Masalah-Masalah Anda.', image: '/images/raihangpt.png', lihat: 'https://abiyyuraihan.github.io/raihanGPT/?fbclid=PAZXh0bgNhZW0CMTEAAaYSnv5XrRihi6Phf_LUMvER56AkB9Me_ueLgxdfWYDu2hszmPXOGZrIPGI_aem_dQQdjiiXKaXmFWzLXCVDhw' },
];

const Projects = () => {
    return (
        <div className="container mx-auto justify-center mt-12 py-16">
            <motion.section className="mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.2, delay: 0.1 }}
            >
                <h2 className="text-3xl font-bold text-white mb-6">My Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {topProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.6 }}
                            className="bg-stone-900 shadow relative rounded-lg p-6"
                        >
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold text-gray-400 mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-16">{project.description}</p>
                            <div className="absolute bottom-3 right-4">
                                <a
                                    href={project.lihat}
                                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-400 bg-stone-800 hover:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900"
                                >
                                    <FiEye className="mr-2 h-5 w-5" />
                                    Lihat Project
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    )
}

export default Projects;