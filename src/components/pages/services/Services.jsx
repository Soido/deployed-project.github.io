import { useNavigate } from "react-router-dom";
import { useWindowSize } from "react-use";
import { motion } from "framer-motion";

import { HiChevronRight, HiChevronDoubleUp } from "react-icons/hi";

import Footer from "../../Footer";

import pnb from "../../../img/project/AES.jpeg";
import lab from "../../../img/Services/lab.jpg";
import team from "../../../img/Services/team.jpg";
import man from "../../../img/Services/menegment.jpg";
import process from "../../../img/Services/Process.jpg";

function Services({ yScroll }) {
  const { width } = useWindowSize();
  const navigate = useNavigate();

  const blockAnimationleft = {
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

  const blockAnimationRight = {
    hidden: {
      x: 150,
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
      <main className="w-screen ">
        <div className=" h-screen lg:h-fit xl:h-screen md:min-h-full min-h-full pt-[5rem] md:pt-[6.5rem] lg:pt-[6rem] xl:pt-[12rem]  pr-0 pb-[80px]  md:pr-0 md:pb-[80px] overflow-hidden px-[15px] ">
          <div
            className={`${
              width < 821 ? null : "border-b-2 border-blue-950"
            } max-w-[1340px] mx-auto pb-[3.3rem] md:pb-[5rem] md:h-[] lg:h-[37.2rem] xl:h-[41.2rem]`}
          >
            <div className="flex flex-col-reverse md:flex-col lg:flex-row w-full h-full  px-[15px] lg:max-w-[1340px] xl:max-w-[1340px] mx-auto animate-fade-up animate-ease-linear ">
              <div className="flex items-center justify-center w-full h-full  ">
                <div className=" flex flex-col w-full  ">
                  <div className="text-left  lg:w-[80%]  mb-[1rem]">
                    {width > 450 ? (
                      <>
                        <h1 className="font-semibold leading-snug tracking-wide text-[1.8rem] pb-[1rem]  text-left">
                          Русметрология предлагает <br /> любые виды
                          метрологического обеспечения
                        </h1>
                        <p className=" font-light leading-snug tracking-wide text-[1.4rem] ">
                          В числе наших клиентов орагнизации из различных сфер:
                          нефте-газовый сектор, атомная энергетика, связь и
                          телекоммуникации, безопасность, производство различной
                          продукции
                        </p>
                      </>
                    ) : null}

                    <div className="ml-[2rem] md:ml-0 md:mr-[1rem] lg:mr-0 md:mt-[4rem] lg:mt-[1.2rem] flex justify-end overflow-visible">
                      <button
                        className="px-[1rem] py-[1rem] text-white bg-blue-950 border-[1px] border-white rounded-full text-[1rem] md:text-[1rem] hover:bg-white hover:text-black hover:border-[1px] hover:border-black "
                        onClick={() => navigate("/contacts")}
                      >
                        Отправить заявку
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col lg:items-end justify-center w-full h-full ">
                <h1 className=" font-semibold leading-snug tracking-wide text-[1.8rem] pt-[1rem] pb-[1rem] md:pb-[2rem] lg:pb-[4rem]  pr-[.9rem] text-left">
                  Выберите вид услуг{" "}
                </h1>

                <div className=" flex flex-wrap w-full lg:pl-[2rem] lg:justify-end md:items-end mb-[1rem]">
                  <button
                    className="border-[1px] border-black bg-white rounded-full px-[1rem] py-[1rem]  mr-[.9rem] mt-[1rem] text-[.9rem] md:text-[1.1rem] lg:text-[.8rem] xl:text-[1.1rem] hover:bg-blue-950 hover:text-white hover:border-blue-950"
                    onClick={() => navigate("/services/typeassertion")}
                  >
                    Утверждение типа средств измерений
                  </button>
                  <button
                    className=" border-[1px] border-black bg-white rounded-full px-[1rem] py-[1rem]  mr-[.9rem] mt-[1rem] text-[.9rem] md:text-[1.1rem] lg:text-[.8rem] xl:text-[1.1rem] hover:bg-blue-950 hover:text-white hover:border-blue-950"
                    onClick={() => navigate("/services/verification")}
                  >
                    Поверка средств измерений
                  </button>
                  <button
                    className=" border-[1px] border-black bg-white rounded-full px-[1rem] py-[1rem]  mr-[.9rem] mt-[1rem] text-[.9rem] md:text-[1.1rem] lg:text-[.8rem] xl:text-[1.1rem] hover:bg-blue-950 hover:text-white hover:border-blue-950"
                    onClick={() => navigate("/services/examination")}
                  >
                    Метрологическая экспертиза
                  </button>
                  <button
                    className=" border-[1px] border-black bg-white rounded-full px-[1rem] py-[1rem]  mr-[.9rem] mt-[1rem] text-[.9rem] md:text-[1.1rem] lg:text-[.8rem] xl:text-[1.1rem] hover:bg-blue-950 hover:text-white hover:border-blue-950"
                    onClick={() => navigate("/services/certificationmi")}
                  >
                    Аттестация методик измерений
                  </button>
                  <button
                    className=" border-[1px] border-black bg-white rounded-full px-[1rem] py-[1rem]  mr-[.9rem] mt-[1rem] text-[.9rem] md:text-[1.1rem] lg:text-[.8rem] xl:text-[1.1rem] hover:bg-blue-950 hover:text-white hover:border-blue-950"
                    onClick={() =>
                      navigate("/services/accreditationcertification")
                    }
                  >
                    Подготовка к аккредитации
                  </button>
                  <button
                    className=" border-[1px] border-black bg-white rounded-full px-[1rem] py-[1rem]  mr-[.9rem] mt-[1rem] text-[.9rem] md:text-[1.1rem] lg:text-[.8rem] xl:text-[1.1rem] hover:bg-blue-950 hover:text-white hover:border-blue-950"
                    onClick={() => navigate("/services/safety")}
                  >
                    Получение сертификата соответствия
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end  ">
            <button
              className=" fixed right-[1rem] md:right-[2rem] xl:right-[5rem]  md:bottom-[2rem] bg-white/20 p-[1rem] "
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <HiChevronDoubleUp />
            </button>
          </div>
        </div>

        <div className=" text-left pr-0 pb-[2rem] bg-white ">
          <div className=" text-left pr-0 pb-[2rem] xl:pb-[100px] 2xl:pb-[69px] bg-white">
            <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[996px] xl:max-w-[1094px]">
              <div className="mx-auto max-w-none my-0 xl:max-w-[960px] 2xl:max-w-[900px] lg:text-justify px-[15px]">
                <h1 className="mt-0 mr-auto mb-[1.07em] w-fit font-bold text-2xl lg:text-4xl  pb-[.5rem] ">
                  Предотавление услуг в области метрологического обеспечения на
                  высоком уровне.
                </h1>
                <p className="mb-[10px] md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.3rem] lg:text-[1.3rem]">
                  Добиться постоянного улучшения нашей системы управления и в
                  конечном итоге повышения качества предоставляемых услгу и
                  сокращения сроков их предоставления удается благодоря
                  поддержанию на высоком уровне основных составляющих нашей
                  работы.
                </p>
              </div>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[996px] xl:max-w-[1340px]"
          >
            <div className="mx-auto max-w-none mt-[1rem] mb-[6rem] xl:max-w-[1340px] 2xl:max-w-[900px] text-justify justify-center flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap">
              <motion.div
                custom={4}
                variants={blockAnimationleft}
                className="  flex flex-col items-end w-full mr-[2rem]  md:w-[20rem] "
              >
                <div>
                  <img
                    className="w-full h-full object-cover"
                    src={team}
                    alt="img"
                  />
                </div>
                <div className="px-[1rem]  ">
                  <h1 className=" mr-auto my-[2rem] md:my-[3rem]  lg:my-[2rem] w-fit font-bold  text-2xl text-left  lg:text-xl xl:text-3xl pb-[.5rem]">
                    Подбор команды специалистов
                  </h1>
                  <p className="mb-[3rem] lg:mb-[1rem]  text-[1.3rem] lg:text-[1.1rem] xl:text-[1.3rem] lg:text-left text-justify">
                    Для проведения работ по предоставлению услуг, мы подобрали
                    опитимальную команду специалистов.
                  </p>
                </div>
              </motion.div>

              <motion.div
                custom={1}
                variants={blockAnimationleft}
                className=" flex flex-col w-full mr-[2rem]  md:mr-0 lg:mr-[2rem] md:w-[20rem] "
              >
                <div>
                  <img
                    className="w-full h-full object-cover"
                    src={lab}
                    alt="img"
                  />
                </div>
                <div className=" w-full px-[1rem]">
                  <h1 className=" mr-auto my-[2rem] md:my-[3rem]  lg:my-[2rem] w-fit font-bold  text-2xl  lg:text-xl xl:text-3xl pb-[.5rem]">
                    Собственная лаборотория
                  </h1>
                  <p className="mt-[1rem] mb-[3rem] md:mb-[1rem] text-[1.3rem] lg:text-[1.1rem] xl:text-[1.3rem] lg:text-left text-justify">
                    Оснащенная необходимыми эталоными, средствами измерений и
                    испытательным оборудованием.
                  </p>
                </div>
              </motion.div>
              <motion.div
                custom={1}
                variants={blockAnimationRight}
                className=" flex flex-col w-full mr-[2rem]  md:w-[20rem]  "
              >
                <div>
                  <img
                    className="w-full h-full object-cover"
                    src={man}
                    alt="img"
                  />
                </div>

                <div className="lg:mr-[1.3rem] w-full px-[1rem]">
                  <h1 className=" mr-auto my-[2rem] md:my-[3rem]  lg:my-[2rem] w-fit font-bold  text-2xl  lg:text-xl xl:text-3xl pb-[.5rem]">
                    Cистема управления
                  </h1>
                  <p className="mt-[1rem] text-[1.3rem] lg:text-[1.1rem] xl:text-[1.3rem] mb-[3rem] md:mb-[1rem]  lg:text-left text-justify">
                    Интегрированная в деятельность Нашей орагниазации, с
                    применением процессного подхода и риск ориентированого
                    мышления.
                  </p>
                </div>
              </motion.div>
              <motion.div
                custom={4}
                variants={blockAnimationRight}
                className="  flex flex-col w-full items-end md:w-[20rem] "
              >
                <div>
                  <img
                    className="w-full h-full object-cover"
                    src={process}
                    alt="img"
                  />
                </div>
                <div className=" w-full px-[1rem]">
                  <h1 className=" mr-auto my-[2rem] md:my-[3rem] lg:my-[2rem] w-fit font-bold  text-2xl  lg:text-xl xl:text-3xl pb-[.5rem]">
                    Автоматизация процессов
                  </h1>
                  <p className="mt-[1rem] text-[1.3rem] lg:text-[1.1rem] xl:text-[1.3rem] mb-[3rem] md:mb-[1rem] lg:text-left text-justify">
                    Внедренные информацонные системы, позволяют не упуcкать и
                    своевременно доводить до исполнителей измения в ходе
                    исполнения задач и сроков.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="mx-auto max-w-none my-0 xl:max-w-[960px] 2xl:max-w-[900px] md:text-justify px-[15px]">
              <h1 className="mt-0 mr-auto mb-[1.07em] w-fit font-bold text-2xl lg:text-4xl  pb-[.5rem]">
                В числе наших клиентов орагнизации из различных сфер:
                нефте-газовый сектор, атомная энергетика, связь и
                телекоммуникации, безопасность, производство различной
                продукции.
              </h1>
              <p className="mb-[10px] md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.3rem] lg:text-[1.3rem]">
                Многие организации выражают благодарность за плодотворный
                своместный труд. Наши партнеры доверяют Нам, а мы предоставлеям
                лояльных подход к каждому запросу.
              </p>
              <div className="mt-[1rem]">
                <div className="flex justify-end items-center  mb-[2rem] text-4xl">
                  <button
                    className="mr-[.5rem] border-[1px] border-black rounded-full w-[135px] px-[1rem] py-[.7rem] text-[1rem] md:text-[1.3rem] hover:bg-blue-950 hover:text-white hover:border-white"
                    onClick={() => navigate("/forpartners")}
                  >
                    Партнеры
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="w-full my-[6rem] px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[996px] xl:max-w-[1260px]">
            <div className="flex flex-col md:flex-row">
              <div className="h-[22rem] md:mt-[.5rem] lg:w-[80%]">
                <img
                  className="w-full h-full object-cover"
                  src={pnb}
                  alt="img"
                />
              </div>
              <div
                className=" cursor-pointer mt-[2rem] md:mt-0 md:ml-[2rem] lg:ml-[6rem] w-full px-[15px]"
                onClick={() => navigate("/about")}
              >
                <p className=" text-[1.3rem] lg:text-[1.3rem] w-full text-justify">
                  Увеличение производства продукции для нужд разных отраслей
                  деятельности Российской Федерации, увеличивает потребность в
                  метрологическом обеспечении производственных организаций.
                </p>
                <p className=" mt-[2rem] text-[1.3rem] lg:text-[1.3rem] w-full text-justify">
                  Эти теднденции требуют бесперебойных, устойчивых, надежных
                  решений, которые обеспечат высокое качество продукции, изделий
                  и услуг. Метрологичекое обеспечение помогает осваивать эти
                  тенденции и постоянно совершенствовать любые инженерные
                  решения.
                </p>

                <div className="mt-[2rem] ">
                  <div className="flex justify-end items-center  mb-[2rem] text-2xl xl:text-4xl">
                    <HiChevronRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Services;
