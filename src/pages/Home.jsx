import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDownCircle, FiEye } from 'react-icons/fi';

const Home = () => {
    const topBusinesses = [
        { id: 1, title: 'Gesang Contractors', description: 'Description of Business 1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFyvz_Fxz07jhWRzDs1eIBf52-g4i55-fEmg&s', lihat: 'https://gesangmusic.com/jasa-peredam-suara/'},
    ];

    const topProjects = [
        { id: 1, title: 'Aturin', description: 'Pengelolaan Income dan Expense untuk UMKM Indonesia, Serta Terdapat Finy AI Yang Dapat Memberikan Solusi Dari Masalah Keuangan Anda.', image: '/images/aturin.png', lihat: 'https://aturin.vercel.app/'  },
        { id: 2, title: 'Peredam Suara (GesanG Contractors)', description: 'Perhitungan dan Pembuatan Penawaran Otomatis untuk Pembuatan Ruangan Studio Musik, Karaoke, Ruangan Gaming.', image: '/images/peredam_suara.png', lihat: 'https://gesangmusic.com/peredam_suara'  },
        { id: 3, title: 'Raihan GPT', description: 'Ini Merupakan Chat Berbasis AI, Yang Mampu Memberikan Solusi Dari Masalah-Masalah Anda.', image: '/images/raihangpt.png', lihat: 'https://abiyyuraihan.github.io/raihanGPT/?fbclid=PAZXh0bgNhZW0CMTEAAaYSnv5XrRihi6Phf_LUMvER56AkB9Me_ueLgxdfWYDu2hszmPXOGZrIPGI_aem_dQQdjiiXKaXmFWzLXCVDhw'},
    ];

    const topBlogs = [
        { id: 1, title: 'Coming Soon', description: 'ComingSoon', image: '/images/blog1.jpg' },
        { id: 2, title: 'Blog 2', description: 'Description of Blog 2', image: '/images/blog2.jpg' },
        // { id: 3, title: 'Blog 3', description: 'Description of Blog 3', image: '/images/blog3.jpg' },
    ];

    return (
        <div className="container justify-center mx-auto px-8 mt-12 py-16 bg-black text-gray-400 w-screen">
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-between mb-12 relative z-10"
            >
                <div className="w-full md:w-1/2 text-left mb-8 sm:mb-0">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-bold text-gray-400 mb-4"
                    >
                        Hi, I'm Raihan
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                        className="text-xl text-gray-500 mb-6"
                    >
                        An Entrepreneur & Tech Enthusiast
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.3 }}
                    >
                        <a
                            href="/files/cv_raihan.pdf"
                            download
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-400 bg-stone-800 hover:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900"
                        >
                            <FiArrowDownCircle className="mr-2 h-5 w-5" />
                            Download CV
                        </a>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                    className="w-full md:w-1/2"
                >
                    <img
                        src="/images/homeban.png"
                        alt="Developer"
                        className="w-full h-auto"
                    />
                </motion.div>
            </motion.section>

            <motion.section
                className="mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-white mb-6">My Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {topProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.6 }}
                            className="bg-stone-900 shadow rounded-lg p-6 relative"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
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


            <motion.section className="mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.4 }}
            >
                <h2 className="text-3xl font-bold text-white mb-6">Part Of Businesses</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {topBusinesses.map((business) => (
                        <motion.div
                            key={business.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.4 }}
                            className="bg-stone-900 shadow relative rounded-lg p-6"
                        >
                            <img src={business.image} alt={business.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold text-gray-400 mb-2">{business.title}</h3>
                            <p className="text-gray-400 mb-16">{business.description}</p>
                            <div className="absolute bottom-3 right-4">
                                <a
                                    href={business.lihat}
                                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-400 bg-stone-800 hover:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900"
                                >
                                    <FiEye className="mr-2 h-5 w-5" />
                                    Lihat Business
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <motion.section className="mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.7 }}
            >
                <h2 className="text-3xl font-bold text-white mb-6">My Blogs</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {topBlogs.map((blog) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.8 }}
                            className="bg-stone-900 shadow rounded-lg p-6"
                        >
                            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold text-gray-400 mb-2">{blog.title}</h3>
                            <p className="text-gray-400">{blog.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
};

export default Home;
