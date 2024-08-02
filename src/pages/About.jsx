import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const [text, setText] = useState('');
    const fullText = "Hai, Perkenalkan Saya Muhammad Abiyyu Raihan, Lahir di Jakarta pada 6 Februari 2004, saya adalah seorang mahasiswa Computer Science di BINUS University. Saya memiliki minat yang mendalam di bidang teknologi dan bisnis. Dengan kombinasi pengetahuan teknis dan pemahaman bisnis, saya berusaha untuk menciptakan solusi inovatif yang dapat memberikan dampak positif bagi masyarakat. Saya selalu bersemangat untuk belajar hal baru dan menghadapi tantangan dalam dunia teknologi yang terus berkembang.";

    useEffect(() => {
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < fullText.length) {
                setText(prevText => prevText + fullText.charAt(i));
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 50);

        return () => clearInterval(typingEffect);
    }, []);

    return (
        <div className="min-h-screen bg-black text-gray-400 p-8 mt-14">
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-8 text-center"
                >
                </motion.h1>

                <div className="flex flex-col md:flex-row items-center justify-between">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        src="/images/raihan.jpg"
                        alt="Foto Profil"
                        className="w-64 h-64 rounded-md object-cover mb-8 md:mb-0"
                    />

                    <div className="md:w-1/2">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg mb-4"
                        >
                            {text}
                        </motion.p>
                    </div>
                </div>

                <motion.div
                    className="w-full py-12 mt-14 bg-stone-900 text-center text-white flex flex-col md:flex-row justify-around mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                >
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-4xl font-bold">2</h3>
                        <p className="text-lg">Years of experience</p>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-4xl font-bold">20k+</h3>
                        <p className="text-lg">Stars on GitHub</p>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-4xl font-bold">92%</h3>
                        <p className="text-lg">Positive feedback</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold">97%</h3>
                        <p className="text-lg">Projects completed</p>
                    </div>
                </motion.div>

                <motion.div
                    className="w-full py-8 mb-8 bg-stone-900 text-center text-white flex flex-col items-center space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.4 }}
                >
                    <h3 className="text-2xl font-bold mb-4">Technologies & Frameworks</h3>
                    <div className="flex flex-wrap justify-center space-x-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript Logo" className="h-12" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM8iiF75ThILLJrv00dUwloLDx34isk8A1Ww&s" alt="Flutter Logo" className="h-12" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8KQW_PcmefMM8IO05osReJCfY9mD5hvBqtw&s" alt="Arduino Logo" className="h-12" />
                        <img src="https://blogs.powercode.id/wp-content/uploads/2024/03/Python-Symbol-1.png" alt="Python Logo" className="h-12" />
                        <img src="https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F096baapsqqt9fks0us99.png" alt="React Logo" className="h-12" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" alt="Tailwind CSS Logo" className="h-12" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js Logo" className="h-12" />
                    </div>
                </motion.div>

                <motion.div
                    className="w-full py-8 bg-stone-900 text-center text-white flex flex-col items-center space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.4 }}
                >
                    <h3 className="text-2xl font-bold mb-4">Part Of Business</h3>
                    <div className="flex flex-wrap justify-center space-x-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFyvz_Fxz07jhWRzDs1eIBf52-g4i55-fEmg&s" alt="JavaScript Logo" className="h-12" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
