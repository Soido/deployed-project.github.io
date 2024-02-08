import { useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";
import { useWindowSize } from "react-use";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { HiChevronRight } from "react-icons/hi";

import priem from "../../../img/News/priemnarabotu2.jpg";
import site from "../../../img/News/priemnarabotu1.jpg";
import komplex from "../../../img/News/komplex.jpg";
import akkred from "../../../img/News/akkred.jpg";

function News() {
  const { width } = useWindowSize();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [openFirst, setOpenfirst] = useState(false);
  const [openSecond, setOpensecond] = useState(false);
  const [openThird, setOpenthird] = useState(false);
  const [openFourth, setOpenfourth] = useState(false);
  const handleClickAway = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickfirst = () => {
    setOpenfirst(!openFirst);
  };

  const handleClickAwayfirst = () => {
    setOpenfirst(false);
  };
  const handleClicksecond = () => {
    setOpensecond(!openSecond);
  };

  const handleClickAwaysecond = () => {
    setOpensecond(false);
  };
  const handleClickthird = () => {
    setOpenthird(!openThird);
  };

  const handleClickAwaythird = () => {
    setOpenthird(false);
  };

  const handleClickfourth = () => {
    setOpenfourth(!openFourth);
  };

  const handleClickAwayfourth = () => {
    setOpenfourth(false);
  };

  const blockAnimation = {
    hidden: {
      y: -150,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <>
      <div className=" pr-0 block ">
        <div className=" mx-auto w-screen h-fit px-[15px] pb-[2rem] my-[2rem]">
          <div className="  max-w-none lg:max-w-[1310px] h-full mx-auto ">
            <div className=" text-black flex flex-col  h-full   ">
              <div className="w-full h-[12rem] lg:h-[21rem] mr-[1rem]  overflow-auto ">
                <Scrollbar style={{ width: "100%", height: "100%" }}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.4, once: true }}
                    className="flex flex-row h-full w-fit"
                  >
                    {width < 821 ? (
                      <>
                        <div
                          className="flex flex-col mr-[1rem]"
                          onClick={() => {
                            handleClick();
                            handleClickAway();
                            handleClickAwayfirst();
                            handleClickAwaysecond();
                            handleClickAwaythird();
                            handleClickAwayfourth();
                          }}
                        >
                          <div
                            className={`border-2 ${
                              open || openFirst || openSecond || openThird
                                ? "border-blue-950"
                                : "border-white"
                            }  w-[7rem] h-[7rem] rounded-full flex justify-center items-center`}
                          >
                            <div className=" w-[6.5rem] h-[6.5rem] rounded-full">
                              <img
                                className="w-full h-full object-cover rounded-full"
                                src={site}
                                alt="img"
                              />
                            </div>
                          </div>
                          <div>
                            <h2 className="mt-[1rem]">Разработка сайта</h2>
                          </div>
                        </div>
                        <div
                          className="flex flex-col mr-[1rem]"
                          onClick={() => {
                            handleClickfirst();
                            handleClickAway();
                            handleClickAwaysecond();
                            handleClickAwaythird();
                            handleClickAwayfourth();
                          }}
                        >
                          <div
                            className={`border-2 ${
                              openFirst ? "border-white" : "border-blue-950"
                            }  w-[7rem] h-[7rem] rounded-full flex justify-center items-center`}
                          >
                            <div className=" w-[6.5rem] h-[6.5rem] rounded-full">
                              <img
                                className="w-full h-full object-cover rounded-full"
                                src={akkred}
                                alt="img"
                              />
                            </div>
                          </div>
                          <div className="w-[6.5rem]">
                            <h2 className="mt-[1rem]">
                              Аккредитация АО "НТЦД"
                            </h2>
                          </div>
                        </div>
                        <div
                          className="flex flex-col mr-[1rem]"
                          onClick={() => {
                            handleClicksecond();
                            handleClickAway();
                            handleClickAwayfirst();
                            handleClickAwaythird();
                            handleClickAwayfourth();
                          }}
                        >
                          <div
                            className={`border-2 ${
                              openSecond ? "border-white" : "border-blue-950"
                            }  w-[7rem] h-[7rem] rounded-full flex justify-center items-center`}
                          >
                            <div className=" w-[6.5rem] h-[6.5rem] rounded-full">
                              <img
                                className="w-full h-full object-cover rounded-full"
                                src={komplex}
                                alt="img"
                              />
                            </div>
                          </div>
                          <div>
                            <h2 className="mt-[1rem]">Комплекс услуг</h2>
                          </div>
                        </div>
                        <div
                          className="flex flex-col mr-[1rem]"
                          onClick={() => {
                            handleClickthird();
                            handleClickAway();
                            handleClickAwayfirst();
                            handleClickAwaysecond();
                            handleClickAwayfourth();
                          }}
                        >
                          <div
                            className={`border-2 ${
                              openThird ? "border-white" : "border-blue-950"
                            }  w-[7rem] h-[7rem] rounded-full flex justify-center items-center`}
                          >
                            <div className=" w-[6.5rem] h-[6.5rem] rounded-full">
                              <img
                                className="w-full h-full object-cover rounded-full"
                                src={priem}
                                alt="img"
                              />
                            </div>
                          </div>
                          <div className="w-[6.5rem]">
                            <h2 className="mt-[1rem]">Набираем сотрудников</h2>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <motion.div
                          custom={1}
                          variants={blockAnimation}
                          className={`cursor-pointer flex flex-col w-[18rem] h-[18rem] mr-[3.2rem]  border-2 border-blue-950 bg-blue-950 justify-between ${
                            open || openFirst || openSecond || openThird
                              ? "text-white"
                              : "bg-white text-black"
                          } `}
                          onClick={() => {
                            handleClick();
                            handleClickAway();
                            handleClickAwayfirst();
                            handleClickAwaysecond();
                            handleClickAwaythird();
                            handleClickAwayfourth();
                          }}
                        >
                          <div className=" flex flex-col h-full px-[1rem] pt-[1rem]">
                            <h1 className="font-semibold leading-snug tracking-wide text-[1.5rem] pb-[1rem] mt-[1rem] text-left">
                              Разработка сайта компании
                            </h1>
                            <div className="flex flex-col text-left">
                              <p className="mt-[1rem]  text-[1rem]">
                                15.01.2024
                              </p>
                            </div>
                          </div>
                          <div className="flex justify-end items-center pr-[1rem] mb-[2rem] text-4xl">
                            <HiChevronRight />
                          </div>
                        </motion.div>
                        <motion.div
                          custom={2}
                          variants={blockAnimation}
                          className={`cursor-pointer flex flex-col w-[18rem] h-[18rem] mr-[3.2rem]  border-2 border-blue-950 bg-blue-950 justify-between ${
                            openFirst ? "bg-white text-black" : "text-white"
                          } `}
                          onClick={() => {
                            handleClickfirst();
                            handleClickAway();
                            handleClickAwaysecond();
                            handleClickAwaythird();
                            handleClickAwayfourth();
                          }}
                        >
                          <div className=" flex flex-col h-full px-[1rem] pt-[1rem]">
                            <h1 className="font-semibold leading-snug tracking-wide text-[1.5rem] pb-[1rem] mt-[1rem] text-left">
                              Аккредитация АО "НТЦД"
                            </h1>
                            <div className="flex flex-col text-left">
                              <p className="mt-[1rem]  text-[1rem]">
                                30.12.2023
                              </p>
                            </div>
                          </div>
                          <div className="flex justify-end items-center pr-[1rem] mb-[2rem] text-4xl">
                            <HiChevronRight />
                          </div>
                        </motion.div>
                        <motion.div
                          custom={3}
                          variants={blockAnimation}
                          className={`cursor-pointer flex flex-col w-[18rem] h-[18rem] mr-[3.2rem]  border-2 border-blue-950 bg-blue-950  ${
                            openSecond ? "bg-white text-black" : "text-white"
                          } `}
                          onClick={() => {
                            handleClicksecond();
                            handleClickAway();
                            handleClickAwayfirst();
                            handleClickAwaythird();
                            handleClickAwayfourth();
                          }}
                        >
                          <div className=" flex flex-col h-full px-[1rem] pt-[1rem] ">
                            <h1 className="font-semibold leading-snug tracking-wide text-[1.5rem] pb-[1rem] mt-[1rem] text-left">
                              Комплекс метрологических услуг <br /> для АО
                              "НТЦД"
                            </h1>
                            <div className="flex flex-col text-left">
                              <p className="mt-[1rem]  text-[1rem]">
                                30.11.2023
                              </p>
                            </div>
                          </div>
                          <div className="flex justify-end items-center pr-[1rem] mb-[2rem] text-4xl">
                            <HiChevronRight />
                          </div>
                        </motion.div>
                        <motion.div
                          custom={4}
                          variants={blockAnimation}
                          className={`cursor-pointer flex flex-col w-[18rem] h-[18rem]  border-2 border-blue-950 bg-blue-950  ${
                            openThird ? "bg-white text-black" : "text-white"
                          } `}
                          onClick={() => {
                            handleClickthird();
                            handleClickAway();
                            handleClickAwayfirst();
                            handleClickAwaysecond();
                            handleClickAwayfourth();
                          }}
                        >
                          <div className=" flex flex-col h-full px-[1rem] pt-[1rem]">
                            <h1 className="font-semibold leading-snug tracking-wide text-[1.5rem] pb-[1rem] mt-[1rem] text-left">
                              Русметрология набрает сотрудников
                            </h1>
                            <div className="flex flex-col text-left">
                              <p className="mt-[1rem]  text-[1rem]">
                                04.12.2023
                              </p>
                            </div>
                          </div>
                          <div className="flex justify-end items-center pr-[1rem] mb-[2rem] text-4xl">
                            <HiChevronRight />
                          </div>
                        </motion.div>{" "}
                      </>
                    )}
                  </motion.div>
                </Scrollbar>
              </div>
              <div className="relative h-[28rem] ">
                {!open ? (
                  <div className="overflow-hidden h-full">
                    <div className="flex flex-row h-full">
                      {width > 450 ? (
                        <div className="relative w-[26.5rem] ">
                          <div className=" w-full h-full lg:pr-[2rem] ">
                            <img
                              className="w-full h-full object-cover"
                              src={site}
                              alt="img"
                            />
                          </div>
                        </div>
                      ) : null}

                      <div className=" flex flex-col w-full  h-full ml-[1rem]">
                        <div className="text-left w-[90%]  h-full">
                          <h1 className="font-semibold leading-snug tracking-wide text-[1.5rem]  lg:text-[1.8rem] pb-[1rem] pt-0 text-left">
                            Разработка нового сайта Русметрологии
                          </h1>
                          <p className="mt-[1rem] mb-[1rem]  text-[1rem] lg:text-[1.3rem] lg:text-justify">
                            Совместными услилиями специалистов Русметрологии и
                            веб-разработчиком Артемом Суржко разработан проект
                            нового сайт компании Русметрология.
                          </p>
                          <p className="mt-[1rem] mb-[1rem]  text-[1rem] lg:text-[1.3rem] lg:text-justify">
                            Компания выражает благодарноть за индивидуальный
                            подход в разработке дизайна и функциоальных блоков
                            сайта.
                          </p>
                          <p className="mt-[1rem] mb-[1rem]  text-[1rem] lg:text-[1.3rem] lg:text-justify">
                            В настоящий момент ведется работа по подготовке
                            медиаматериалов и запуску сайта на хостинге.
                          </p>
                        </div>
                        <div>
                          <p className=" font-light leading-snug tracking-wide text-[1rem] pt-[1rem] text-left lg:text-right">
                            15.01.2024
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                {openFirst ? (
                  <>
                    <div className=" absolute h-full w-full bg-white top-0 ">
                      <div className="relative w-full h-full bg-white">
                        <div className="flex flex-row h-full">
                          {width > 450 ? (
                            <div className="relative w-[26.5rem] ">
                              <div className=" w-full h-full lg:pr-[2rem] ">
                                <img
                                  className="w-full h-full object-cover"
                                  src={akkred}
                                  alt="img"
                                />
                              </div>
                            </div>
                          ) : null}

                          <div className=" flex flex-col w-full  h-full ml-[1rem]">
                            <div className="text-left w-full h-full">
                              {width > 450 ? (
                                <h1 className="font-semibold leading-snug tracking-wide text-[1.5rem]  lg:text-[1.8rem] pb-[1rem] pt-0 text-left">
                                  Аккредитация АО "НТЦД"
                                </h1>
                              ) : null}
                              <p className="mt-[2rem] mb-[1rem]  text-[1rem] lg:text-[1.3rem] text-justify">
                                В период с июля по декабрь ООО "Русметрология"
                                совметсно с АО "НТЦД" проведена подготовка АО
                                "НТЦД" к аккредитации.
                              </p>
                              <p className="mt-[1rem] mb-[1rem]  text-[1rem] lg:text-[1.3rem] text-justify">
                                За этот период подоброн парк эталоннов и средств
                                измерений, проведена кадровая работа по подбору
                                персонала, разработана и утверждена документация
                                системы менеджмента, подготовлена заявка в ФСА
                                Росаккредитация с комплектом документов.
                                Проведена консультативная помощь по проведению
                                выездной проверки по подвтерждению
                                компетентности.
                              </p>
                              <p className="mt-[1rem] mb-[1rem]  text-[1rem] lg:text-[1.3rem] text-justify">
                                Заказчик выражает благодорнаость в связи с
                                проделанной работой.
                              </p>
                            </div>
                            <div>
                              <p className=" font-light leading-snug tracking-wide text-[1rem] pt-[1rem] text-left lg:text-right">
                                30.12.2023
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
                {openSecond ? (
                  <>
                    <div className=" absolute h-full w-full bg-white top-0 ">
                      <div className="relative w-full h-full bg-white">
                        <div className="flex flex-row h-full">
                          {width > 450 ? (
                            <div className="relative w-[26.5rem] ">
                              <div className=" w-full h-full lg:pr-[2rem] ">
                                <img
                                  className="w-full h-full object-cover"
                                  src={komplex}
                                  alt="img"
                                />
                              </div>
                            </div>
                          ) : null}

                          <div className=" flex flex-col w-full  h-full ml-[1rem]">
                            <div className="text-left w-full  h-full">
                              {width > 450 ? (
                                <h1 className="font-semibold leading-snug tracking-wide text-[1.5rem] lg:text-[1.8rem] pb-[1rem] pt-0 text-left">
                                  Окончен этап предоставления комплекса
                                  метрологических услуг для АО "НТЦД"
                                </h1>
                              ) : null}
                              <p className="mt-[1rem] mb-[1rem]  text-[1rem] lg:text-[1.3rem] text-justify">
                                За 2023 год ООО "Русметрология" предоставила
                                комплекс метрологических услуг АО "НТЦД".
                                Специалисты ООО "Русметрология" проводили
                                подготовку комплектов метрологической
                                документации органрзовывали взаимодействия
                                специалистов АО "НТЦД" с метрологичекими
                                центрами и подрядными организациями, оказывали
                                консультативные услуги.
                              </p>
                              <p className="mt-[1rem] mb-[1rem]  text-[1rem] lg:text-[1.3rem] text-justify">
                                За этот период проведена организовано работ по
                                поверке 120 ед. средств измерений, по
                                утверждению типа 5 ед. средств измерений.
                              </p>
                              <p className="mt-[1rem] mb-[1rem]  text-[1rem] lg:text-[1.3rem] text-justify">
                                Заказчик выражает благодорнаость в связи с
                                проделанной работой.
                              </p>
                            </div>
                            <div>
                              <p className=" font-light leading-snug tracking-wide text-[1rem] pt-[1rem] text-left lg:text-right">
                                30.11.2023
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
                {openThird ? (
                  <>
                    <div className=" absolute h-full w-full bg-white top-0 ">
                      <div className="relative w-full h-full bg-white">
                        <div className="flex flex-row h-full">
                          {width > 450 ? (
                            <div className="relative w-[26.5rem] ">
                              <div className=" w-full h-full lg:pr-[2rem] ">
                                <img
                                  className="w-full h-full object-cover"
                                  src={priem}
                                  alt="img"
                                />
                              </div>
                            </div>
                          ) : null}
                          <div className=" flex flex-col w-full h-full ml-[1rem]">
                            <div className="text-left w-full ">
                              {width > 450 ? (
                                <h1 className="font-semibold leading-snug tracking-wide text-[1.5rem] lg:text-[1.8rem] pb-[1rem] pt-0 text-left">
                                  Русметрология набирает сотрудников
                                </h1>
                              ) : null}
                              <p className="mt-[2rem] mb-[1rem]  text-[1rem] lg:text-[1.3rem] text-justify">
                                Русметрология открыла вакансии и набирает штат
                                сотрудников из разных направлений.
                              </p>
                              <p className="mt-[2rem] mb-[1rem]  text-[1rem] lg:text-[1.3rem] text-justify">
                                Если вы хотите стать частью нашей команды вы
                                можете отправить нам резюме, через форму
                                обратной связи или перейти на сайт hh.ru.
                              </p>
                              <div className="ml-[2rem] md:ml-0 md:mr-[1rem] lg:mr-0 md:mt-[4rem] lg:mt-[2rem] flex justify-start overflow-visible">
                                <button
                                  className="px-[1rem] py-[1rem] text-white bg-blue-950 border-[1px] border-white rounded-full text-[1rem] md:text-[1rem] hover:bg-white hover:text-black hover:border-[1px] hover:border-black "
                                  onClick={() => navigate("/contacts")}
                                >
                                  Отправить заявку
                                </button>
                              </div>
                            </div>
                            <div>
                              <p className="pt-[4rem] font-light leading-snug tracking-wide text-[1rem] lg:pt-[8.5rem] text-left lg:text-right">
                                10.11.2023
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
