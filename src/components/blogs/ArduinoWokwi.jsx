import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
    'images/blogs/arduinowokwi/1.png',
    'images/blogs/arduinowokwi/2.png',
    'images/blogs/arduinowokwi/3.png',
];

const ArduinoWokwi = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const FeatureCard = ({ icon, title, description }) => {
        return (
            <div className="bg-stone-800 p-4 sm:p-6 rounded-lg">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm sm:text-base">{description}</p>
            </div>
        );
    };

    return (
        <div className="text-white min-h-screen w-full py-12 sm:py-24">
            <main className="container mx-auto px-4">
                <div className="mb-8 max-w-2xl mx-auto">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                        Belajar Arduino Lebih Mudah dengan Wokwi Platform
                    </h2>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                        Pengenalan Wokwi
                    </h3>
                    <p className="text-base sm:text-lg mb-4 sm:mb-6">
                        Di era digital saat ini, teknologi semakin berkembang pesat dan menjadi bagian yang tidak terpisahkan dari kehidupan sehari-hari. Salah satu teknologi yang banyak diminati adalah Arduino, sebuah platform elektronik yang berbasis open-source, yang memudahkan pembuatan proyek-proyek elektronik interaktif. Namun, kendala utama bagi banyak orang yang ingin belajar Arduino adalah biaya untuk membeli perangkat keras yang cukup mahal. Di sinilah Wokwi Platform hadir sebagai solusi.
                    </p>
                    
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                        Apa Itu Wokwi?
                    </h3>
                    <p className="text-base sm:text-lg mb-4 sm:mb-6">
                        Wokwi adalah sebuah platform simulasi Arduino online yang memungkinkan siapa saja untuk belajar dan bereksperimen dengan Arduino tanpa perlu membeli perangkat keras fisik. Dengan menggunakan Wokwi, pengguna dapat membuat, menguji, dan menjalankan proyek Arduino mereka secara virtual melalui browser.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <FeatureCard
                        icon="💰"
                        title="Biaya Efektif"
                        description="Dengan Wokwi, Anda tidak perlu mengeluarkan uang untuk membeli perangkat keras Arduino. Semua simulasi dapat dilakukan secara gratis melalui platform ini."
                    />
                    <FeatureCard
                        icon="🌐"
                        title="Aksesibilitas"
                        description="Wokwi dapat diakses dari mana saja dan kapan saja selama Anda memiliki koneksi internet dan perangkat seperti komputer atau laptop."
                    />
                    <FeatureCard
                        icon="🚀"
                        title="Kemudahan Penggunaan"
                        description="Antarmuka Wokwi dirancang agar mudah digunakan, bahkan bagi pemula. Platform ini menyediakan berbagai tutorial dan proyek contoh."
                    />
                </div>
            </main>
        </div>
    );
}

export default ArduinoWokwi;