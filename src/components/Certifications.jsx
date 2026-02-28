import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import testimonial1 from "../assets/testimonial1.jpg";
import testimonial2 from "../assets/testimonial2.jpg";
import testimonial3 from "../assets/testimonial3.jpg";

const Certifications = () => {
  const { t } = useTranslation();
  const certs = [
    {
      name: "Jhon Doe",
      img: testimonial1,
      description: t("certs.desc1"),
    },
    {
      name: "Paula Vusy",
      img: testimonial3,
      description: t("certs.desc2"),
    },
    {
      name: "Sara Cill",
      img: testimonial2,
      description: t("certs.desc3"),
    },
  ];

  return (
    <section
      className="py-24 bg-container/20 overflow-hidden"
      id="Certifications"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-first font-black tracking-[5px] uppercase text-xs mb-4 block">
            {t("certs.subtitle")}
          </span>
          <h2 className="text-5xl md:text-8xl font-black text-title tracking-tighter bg-linear-to-b from-title to-first bg-clip-text text-transparent italic leading-[1.1] pb-2">
            {t("certs.title")}
          </h2>
        </motion.div>

        <div className="max-w-[800px] mx-auto pb-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            grabCursor={true}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {certs.map((cert, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-container border border-title/5 p-12 md:p-16 rounded-[3.5rem] text-center shadow-2xl relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-first rounded-full opacity-50"></div>
                  <img
                    src={cert.img}
                    alt={cert.name}
                    className="w-24 h-24 rounded-full mx-auto mb-8 border-4 border-first p-1 shadow-xl"
                  />
                  <i className="bx bxs-quote-alt-left text-4xl text-first/20 absolute top-12 left-12"></i>
                  <h3 className="text-2xl font-bold text-title mb-4">
                    {cert.name}
                  </h3>
                  <p className="text-text text-lg leading-relaxed opacity-80 font-medium italic">
                    {cert.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div id="Graduation" className="mt-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-first font-black tracking-[5px] uppercase text-xs mb-4 block">
              {t("certs.gradTitle")}
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-title tracking-tighter bg-linear-to-b from-title to-first bg-clip-text  italic leading-[1.1] pb-2">
              {t("certs.gradSub")}
            </h2>
          </motion.div>
          <div className="inline-block bg-container/50 border border-title/5 backdrop-blur-md px-12 py-6 rounded-[2rem]">
            <h3 className="text-xl font-bold text-textLight italic">
              {t("certs.comingSoon")}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
