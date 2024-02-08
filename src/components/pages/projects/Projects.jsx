import { useNavigate } from "react-router-dom";
import { useWindowSize } from "react-use";

import { HiChevronRight } from "react-icons/hi";

import Footer from "../../Footer";
import ButtonContact from "../../../UX/UI/ButtonContact";

import title from "../../../img/project/title.jpg";
import zernovoi from "../../../img/project/Zernovoi.jpg";
import pnb from "../../../img/project/PNB CHERTRANSNEFT.jpg";
import aes from "../../../img/project/AES.jpeg";

function Projects({ yScroll }) {
  const { width } = useWindowSize();
  const navigate = useNavigate();
  return (
    <>
      <main className="w-screen">
        <div className=" h-screen min-h-full pt-[6rem] pr-0 pb-[80px] md:pt-[6.5rem] lg:pt-[5rem] xl:pt-[3rem] md:pr-0 md:pb-[80px] overflow-hidden ">
          <div
            className={`${
              width < 821 ? null : ""
            } max-w-[1340px] mx-auto md:h-[] lg:h-[37.2rem] xl:h-[50.2rem] `}
          >
            <div className="flex flex-col-reverse lg:flex-row w-full h-full px-[15px] lg:max-w-[1340px] xl:max-w-[1340px] mx-auto animate-fade-up animate-ease-linear ">
              <div className=" flex items-center justify-center w-full h-full  ">
                <div className=" flex flex-col w-full  ">
                  <div className="text-left  w-[80%]  mb-[1rem]">
                    {width > 450 ? (
                      <>
                        {" "}
                        <h1 className="font-semibold leading-snug tracking-wide text-[1.8rem] pb-[1rem] mt-[1rem] xl:mt-0 text-left">
                          Русметрология предлагает <br /> любые виды
                          метрологического обеспечения
                        </h1>
                      </>
                    ) : null}

                    <p className="mt-[1rem] font-light leading-snug tracking-wide text-[1.4rem] md:text-[1.6rem] xl:text-[1.6rem] lg:text-[1.4rem]">
                      За время своей деятельности Нами проделана огромная работа
                    </p>
                    {width < 450 ? (
                      <>
                        <p className=" font-light leading-snug tracking-wide text-[1.4rem] md:text-[1.6rem] xl:text-[1.6rem] lg:text-[1.4rem]">
                          Мы предоставляли или участвовали в предоставлении
                          услуг для многих крупных российских и мировых компаний
                        </p>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col items-end justify-center w-full ">
                <div className=" flex flex-wrap w-full h-[20rem] lg:pl-[2rem] justify-end items-end lg:mb-[1rem]">
                  <img
                    className="w-full h-full object-cover"
                    src={title}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" pr-0 lg:pb-[140px] w-screen">
          <div className="max-w-[540px] md:max-w-[720px] lg:max-w-[1340px] mx-auto ">
            <div className="max-w-none mx-auto my-0 mb-[10px]">
              <div className="lg:max-w-[960px] mx-auto text-justify px-[15px] ">
                <h1 className="mt-0 mr-auto mb-[1.07em] w-fit font-bold text-2xl lg:text-3xl  pb-[.5rem]">
                  Предоставляем услуги по метрологическому обеспечению, для
                  наших клиентов, предлагая оптимальные решения и сроки. Мы
                  подобрали наиболее масштабные и значимые проекты для
                  ознакомления с Нашей деятельностью.
                </h1>
              </div>
              <div className="flex flex-col w-full mt-[6rem] px-[15px]">
                <div className="flex flex-col-reverse lg:flex-row ">
                  <div className="flex items-center justify-center w-full h-full  ">
                    <div className=" flex flex-col w-full  ">
                      <div className=" lg:w-[90%]  text-justify lg:text-left">
                        <h1 className="font-semibold leading-snug tracking-wide text-[1.8rem] pb-[1rem] ">
                          Новороссийский зерновой терминал
                        </h1>
                        <p className="mt-[1rem] mb-[1rem]  text-[1.3rem] lg:text-[1.3rem] ">
                          Русметрология ведет свою деятельность с 2014 года. За
                          этот период Нами проделана огромная работа. Мы
                          предоставляли или участвовали в предоставлении услуг
                          для многих крупных российских и мировых компаний.
                        </p>
                        <p className="mt-[1rem] mb-[1rem]  text-[1.3rem] lg:text-[1.3rem] ">
                          Русметрология ведет свою деятельность с 2014 года. За
                          этот период Нами проделана огромная работа. Мы
                          предоставляли или участвовали в предоставлении услуг
                          для многих крупных российских и мировых компаний.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex flex-col items-end justify-center w-full ">
                    <div className=" flex flex-wrap w-full lg:pl-[2rem] justify-end items-end mb-[1rem]">
                      <img
                        className="w-full h-full object-cover"
                        src={zernovoi}
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row mt-[6rem] ">
                  <div className="relative flex flex-col items-end justify-center w-full ">
                    <div className=" flex flex-wrap w-full lg:pr-[2rem] justify-end items-end mb-[1rem]">
                      <img
                        className="w-full h-full object-cover"
                        src={pnb}
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-full h-full  lg:ml-[2rem]">
                    <div className="lg:mx-[1rem] flex flex-col w-full  ">
                      <div className="lg:text-left w-full text-justify">
                        <h1 className="font-semibold leading-snug tracking-wide text-[1.8rem] pb-[1rem] text-left">
                          ПНБ Тихорецкая, АО "Черномортранснефть"
                        </h1>
                        <p className="mt-[1rem] mb-[1rem]  text-[1.3rem] lg:text-[1.3rem] ">
                          Русметрология ведет свою деятельность с 2014 года. За
                          этот период Нами проделана огромная работа. Мы
                          предоставляли или участвовали в предоставлении услуг
                          для многих крупных российских и мировых компаний.
                        </p>
                        <p className="mt-[1rem] mb-[1rem]  text-[1.3rem] lg:text-[1.3rem] ">
                          Русметрология ведет свою деятельность с 2014 года. За
                          этот период Нами проделана огромная работа. Мы
                          предоставляли или участвовали в предоставлении услуг
                          для многих крупных российских и мировых компаний.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col-reverse lg:flex-row mt-[6rem]  ">
                  <div className="flex items-center justify-center w-full h-full  ">
                    <div className=" flex flex-col w-full  ">
                      <div className="lg:text-left lg:w-[90%] text-justify">
                        <h1 className="font-semibold leading-snug tracking-wide text-[1.8rem] pb-[1rem]  text-left">
                          Комплексные услуги АО "НТЦ "ДИАПРОМ"
                        </h1>
                        <p className="mt-[1rem] mb-[1rem]  text-[1.3rem] lg:text-[1.3rem] ">
                          Русметрология ведет свою деятельность с 2014 года. За
                          этот период Нами проделана огромная работа. Мы
                          предоставляли или участвовали в предоставлении услуг
                          для многих крупных российских и мировых компаний.
                        </p>
                        <p className="mt-[1rem] mb-[1rem]  text-[1.3rem] lg:text-[1.3rem] ">
                          Русметрология ведет свою деятельность с 2014 года. За
                          этот период Нами проделана огромная работа. Мы
                          предоставляли или участвовали в предоставлении услуг
                          для многих крупных российских и мировых компаний.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex flex-col items-end justify-center w-full ">
                    <div className=" flex flex-wrap w-full lg:pl-[2rem] justify-end items-end mb-[1rem]">
                      <img
                        className="w-full h-full object-cover"
                        src={aes}
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className=" cursor-pointer xl:max-w-[960px] 2xl:max-w-[900px] mx-auto text-justify mt-[8rem]"
                onClick={() => navigate("/forpartners")}
              >
                <h1 className="mt-0 mr-auto mb-[1.07em] w-fit font-bold text-2xl lg:text-3xl px-[15px] pb-[.5rem]">
                  Среди наших партнеров и клиентов орагнизации из различных
                  сфер: нефте-газовый сектор, атомная энергетика, связь и
                  телекоммуникации, безопасность, производство различной
                  продукции.
                </h1>
                <div className="mt-[2rem] ">
                  <div className="flex justify-end items-center mb-[2rem] text-4xl p-0">
                    <HiChevronRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ButtonContact />
      </main>
      <Footer />
    </>
  );
}

export default Projects;
