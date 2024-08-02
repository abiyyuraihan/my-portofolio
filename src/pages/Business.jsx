import React from "react";
import { motion } from 'framer-motion';
import { FiEye } from 'react-icons/fi';

const Business = () => {

    const topBusinesses = [
        { id: 1, title: 'Gesang Contractors', description: 'Gesang Contractors adalah Perusahaan yang bergerak dalam bidang instalasi peredam suara berkualitas tinggi untuk berbagai kebutuhan, termasuk studio musik, ruang karaoke, dan gaming room.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFyvz_Fxz07jhWRzDs1eIBf52-g4i55-fEmg&s', lihat: 'https://gesangmusic.com/jasa-peredam-suara/' },
    ];

    return (
        <div className="container px-4 mx-auto justify-center mt-12 py-16">
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
        </div>
    )
}

export default Business;