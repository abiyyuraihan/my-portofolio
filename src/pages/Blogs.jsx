import React from "react";
import { motion } from 'framer-motion';
import { FiEye } from 'react-icons/fi';

const Blogs = () => {

    const topBlogs = [
        { id: 1, title: 'Wokwi Arduino Simulator', description: 'Belajar Arduino lebih mudah dengan wokwi', image: '/images/blogs/arduinowokwi/1.png', lihat: "/arduinowokwi" },
        
    ];

    return (
        <div className="container px-4 mx-auto justify-center mt-12 py-16">
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
                            className="bg-stone-900 shadow rounded-lg p-6 relative"
                        >
                            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold text-gray-400 mb-2">{blog.title}</h3>
                            <p className="text-gray-400 mb-16">{blog.description}</p>
                            <div className="absolute bottom-3 right-4">
                                <a
                                    href={blog.lihat}
                                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-400 bg-stone-800 hover:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900"
                                >
                                    <FiEye className="mr-2 h-5 w-5" />
                                    Baca Blog
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    )
}

export default Blogs;