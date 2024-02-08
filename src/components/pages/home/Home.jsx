import React from "react";
import { useNavigate } from "react-router-dom";

import { useWindowSize } from "react-use";
import { motion } from "framer-motion";

import { HiChevronRight } from "react-icons/hi";

import Footer from "../../Footer";
import News from "./News";

import ButtonContact from "../../../UX/UI/ButtonContact";

import zernovoi from "../../../img/project/Zernovoi.jpg";
import titlepartners from "../../../img/Partners/title.jpg";

import rusmterol from "../../../img/rusmetrology10.png";
import deyat from "../../../img/deyat.jpg";

import meri from "../../../video/meri.mp4";

const Home = () => {
  const navigate = useNavigate();
  const { width } = useWindowSize();

  const blockAnimation = {
    hidden: {
      x: -150,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <>
      <main className="w-screen">
        <div
          className={` h-screen min-h-full pr-0 pb-[80px] pt-[2.5rem] md:pt-[10rem] lg:pt-[5rem] md:pr-0 md:pb-[80px] overflow-hidden  `}
        >
          <div
            className={`${
              width < 821 ? null : ""
            } max-w-[1340px]  mx-auto pb-[3.3rem] md:pb-[5rem]  lg:h-full`}
          >
            <div className="flex  w-full h-full xl:px-[15px] lg:max-w-[1340px] xl:max-w-[1340px] mx-auto animate-fade-up animate-ease-linear ">
              <div className=" flex flex-col-reverse lg:flex-row md:items-center md:justify-center  w-full h-full mt-[3.5rem] md:mt-0  xl:px-0">
                <div className=" flex flex-col w-full mr-0 mt-0 lg:mt-0 md:mt-[1rem] xl:mr-[6rem] lg:mr-[1rem] lg:py-[1rem]">
                  <div className="text-left w-full mb-[1rem] md:mt-[2rem] px-[15px]">
                    {width > 450 ? (
                      <h1 className="mb-[2rem]  leading-none tracking-[0.6rem] md:tracking-[0.8rem] text-black text-left  lg:text-left text-[1.3rem] md:text-[2rem] lg:text-[2.2rem]  xl:text-[3.5rem]  font-extralight">
                        РУСМЕТРОЛОГИЯ
                      </h1>
                    ) : null}
                    <p className=" md:mt-[2rem]  leading-snug tracking-wide text-left  lg:text-left  text-[2rem] md:text-[1.8rem] lg:text-[1.8rem] xl:text-[1.8rem]  text-black">
                      Любые виды метрологического обеспечения
                    </p>
                    <div className="flex lg:items-center xl:justify-between md:justify-start lg:justify-normal flex-row flex-wrap text-black mt-[3rem] md:mt-[2rem] align-middle ">
                      <button
                        className="border-[1px] border-black rounded-full w-[7rem] mr-[.5rem] md:mr-[.5rem] lg:mr-[1rem] xl:mr-0 md:w-[160px] lg:w-[135px] px-[.3rem] py-[.7rem] text-[1rem] md:text-[1.5rem] lg:text-[1rem] xl:text-[1.3rem] hover:bg-blue-950/90 hover:text-white hover:border-none"
                        onClick={() => navigate("/about")}
                      >
                        О компании
                      </button>
                      <button
                        className="border-[1px] border-black rounded-full w-[7rem] mr-[.5rem] md:mr-[.5rem] lg:mr-[1rem] xl:mr-0 md:w-[160px] lg:w-[135px] px-[.3rem] py-[.7rem] text-[1rem] md:text-[1.5rem] lg:text-[1rem] xl:text-[1.3rem] hover:bg-blue-950/90 hover:text-white hover:border-none"
                        onClick={() => navigate("/projects")}
                      >
                        Проекты
                      </button>
                      <button
                        className=" border-[1px] max-[375px]:mt-[.5rem] border-black rounded-full w-[7rem] mr-[.5rem] md:mr-[.5rem] lg:mr-[1rem] xl:mr-0 md:w-[160px] lg:w-[135px] px-[.3rem] py-[.7rem] text-[1rem] md:text-[1.5rem] lg:text-[1rem] xl:text-[1.3rem] hover:bg-blue-950/90 hover:text-white hover:border-none "
                        onClick={() => navigate("/services")}
                      >
                        Услуги
                      </button>

                      <button
                        className="md:mr-[.5rem] max-[450px]:mt-[.5rem] lg:mt-[1rem] mt-0 xl:mt-0 border-[1px] border-black rounded-full w-[7rem] md:w-[160px] lg:w-[135px] px-[.3rem] py-[.7rem] text-[1rem] md:text-[1.5rem] lg:text-[1rem] xl:text-[1.3rem] hover:bg-blue-950/90 hover:text-white hover:border-none"
                        onClick={() => navigate("/forpartners")}
                      >
                        Партнеры
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col items-end justify-center w-full md:mt-0">
                  <div className="  flex flex-wrap  xl:pl-[2rem] w-full justify-end items-end mb-[1rem] lg:mb-0 h-[14rem] md:h-[16rem] lg:h-[23rem] xl:h-[25rem]">
                    <video
                      className="xl:absolute object-cover w-full h-full"
                      autoPlay
                      loop
                      muted
                    >
                      <source src={meri} type="video/mp4 " />
                    </video>
                    <div className="absolute w-full h-full top-0 left-0 bg-white/20 z-8"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <News />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: true }}
          className="mx-auto w-screen h-fit px-[2rem] pb-[2rem] mt-[2rem] md:mt-[8rem]"
        >
          <div className=" flex flex-col md:flex-row max-w-none lg:max-w-[1310px] h-full mx-auto ">
            <motion.div
              custom={1}
              variants={blockAnimation}
              className=" cursor-pointer flex flex-col justify-between h-full w-full lg:mr-[3rem]"
              onClick={() => navigate("/about")}
            >
              <div className="lg:mr-[1.3rem] w-full md:h-[18rem] lg:h-[18rem]">
                <img
                  className="w-full h-full object-cover "
                  src={rusmterol}
                  alt="img"
                />
              </div>
              <div className=" pt-[4rem] text-left ">
                <h1 className=" mr-auto mb-[2rem] w-fit  font-bold text-2xl lg:text-4xl  pb-[.5rem]">
                  О компании
                </h1>
                <p className="mt-[1rem] mb-[1rem]  text-[1.3rem] lg:text-[1.3rem] lg:text-justify">
                  10 Лет на рынке метрологического обеспчения. Повседневный труд
                  для достижения высокого качество предоставления услуг - залог
                  нашего успеха.
                </p>
              </div>
              <div className="mt-[1rem]">
                <div className="flex justify-end items-center  mb-[2rem] text-4xl">
                  <HiChevronRight />
                </div>
              </div>
            </motion.div>
            <motion.div
              custom={3}
              variants={blockAnimation}
              className=" cursor-pointer flex flex-col justify-between h-full w-full mt-[2rem] md:mt-0 md:ml-[2rem]  "
              onClick={() => navigate("/projects")}
            >
              <div className=" w-full md:h-[18rem] lg:h-[18rem]  ">
                <img
                  className="w-full h-full object-cover "
                  src={zernovoi}
                  alt="img"
                />
              </div>
              <div className=" pt-[4rem] text-left  ">
                <h1 className=" mr-auto mb-[1.07em] w-fit font-bold  text-2xl  lg:text-4xl  pb-[.5rem]">
                  Наши проекты
                </h1>
                <p className="mt-[1rem] mb-[1rem]  text-[1.3rem] lg:text-[1.3rem] lg:text-justify">
                  Мы предоставляли или участвовали в предоставлении услуг для
                  многих крупных российских и мировых компаний.
                </p>
              </div>
              <div className="md:mt-[3.1rem] lg:mt-[2.5rem] mt-[2.5rem]">
                <div className="flex justify-end items-center  mb-[2rem] text-4xl">
                  <HiChevronRight />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}
          className="mx-auto w-screen h-fit px-[2rem] pb-[2rem] mt-[2rem] md:mt-[4rem] mb-[4rem]"
        >
          <div className=" flex flex-col md:flex-row  max-w-none lg:max-w-[1310px] h-full mx-auto ">
            <motion.div
              custom={1}
              variants={blockAnimation}
              className=" cursor-pointer flex flex-col justify-between h-full w-full lg:mr-[3rem] "
              onClick={() => navigate("/services")}
            >
              <div className="= w-full md:h-[18rem] lg:h-[18rem] ">
                <img
                  className="w-full h-full object-cover"
                  src={deyat}
                  alt="img"
                />
              </div>
              <div className=" pt-[4rem] text-left ">
                <h1 className=" mb-[1.07em] w-fit font-bold text-2xl lg:text-4xl pb-[.5rem] ">
                  Наша деятельность
                </h1>
                <p className="mt-[1rem] mb-[1rem]  text-[1.3rem] lg:text-justify">
                  Нашими основными направлениями деятельности является все виды
                  метрологического обеспечения, комплексный подход и
                  предотсавление услуг «под ключ».
                </p>
              </div>
              <div className="mt-[1rem]">
                <div className="flex justify-end items-center  mb-[2rem] text-4xl">
                  <HiChevronRight />
                </div>
              </div>
            </motion.div>
            <motion.div
              custom={3}
              variants={blockAnimation}
              className=" cursor-pointer flex flex-col justify-between h-full w-full mt-[2rem] md:mt-0 md:ml-[2rem] "
              onClick={() => navigate("/forpartners")}
            >
              <div className=" w-full md:h-[18rem] lg:h-[18rem]">
                <img
                  className="w-full h-full object-cover "
                  src={titlepartners}
                  alt="img"
                />
              </div>
              <div className=" pt-[4rem] text-left  ">
                <h1 className=" mr-auto mb-[1.07em] w-fit font-bold  text-2xl  lg:text-4xl  pb-[.5rem]">
                  Нам доверяют
                </h1>
                <p className="mt-[1rem] mb-[1rem]  text-[1.3rem] lg:text-[1.3rem] lg:text-justify">
                  Плодотворная работа в области метрологического обеспечения,
                  принесла Русметрологии большое количество партнерских
                  отношений.
                </p>
              </div>
              <div className="mt-[1rem] md:mt-[2.9rem] lg:mt-[1rem]">
                <div className="flex justify-end items-center  mb-[2rem] text-4xl">
                  <HiChevronRight />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <ButtonContact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
