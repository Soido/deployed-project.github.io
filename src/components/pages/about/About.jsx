import { useNavigate } from "react-router-dom";
import { useWindowSize } from "react-use";

import Footer from "../../Footer";

import ButtonContact from "../../../UX/UI/ButtonContact";

import avatar from "../../../img/about/avatar.jpg";
import avatar1 from "../../../img/about/avatar1.jpg";
import team from "../../../img/about/team.jpg";
import titleteam from "../../../img/about/titleteam.jpg";
import aboutvid from "../../../img/Services/aboutvid.mp4";

function About() {
  const { width } = useWindowSize();
  const navigate = useNavigate();
  return (
    <>
      <main className="w-screen">
        <div className=" h-screen min-h-full pt-[6rem] pr-0 pb-[80px] md:pt-[6.5rem] lg:pt-[3rem] xl:pt-[3rem] md:pr-0 md:pb-[80px] overflow-hidden ">
          <div
            className={`${
              width < 821 ? null : ""
            } max-w-[1340px] mx-auto md:h-[] lg:h-[37.2rem] xl:h-[50.2rem] `}
          >
            <div className="flex flex-col-reverse lg:flex-row w-full h-full  px-[15px] lg:max-w-[1340px] xl:max-w-[1340px] mx-auto animate-fade-up animate-ease-linear">
              <div className=" flex lg:items-center lg:justify-center w-full h-full  ">
                <div className=" flex flex-col w-full  ">
                  <div className="text-left w-[80%] mb-[1rem]">
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
                      10 Лет на рынке метрологического обеспчения
                    </p>
                    {width < 450 ? (
                      <>
                        <p className=" font-light leading-snug tracking-wide text-[1.4rem] md:text-[1.6rem] xl:text-[1.6rem] lg:text-[1.4rem]">
                          Повседневный труд для достижения высокого качество
                          предоставления услуг - залог нашего успеха
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
                    src={titleteam}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-left pr-0 pb-[2rem] xl:pb-[100px] 2xl:pb-[69px] bg-white">
          <div className="w-full px-[15px] mx-auto max-w-[540px] md:max-w-[720px] lg:max-w-[996px] xl:max-w-[1094px]">
            <div className="mx-auto max-w-none my-0 xl:max-w-[960px] 2xl:max-w-[900px] text-justify">
              <h1 className="mt-0 mr-auto mb-[1.07em] w-fit font-bold text-2xl lg:text-4xl  pb-[.5rem]">
                Имея огромный опыт, квалифицированную команду и необходимые
                ресурсы, мы предоставляем все виды метрологического обеспечения.
              </h1>
              <p className="mb-[10px] md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.3rem] lg:text-[1.3rem]">
                Увеличение производства продукции для нужд разных отраслей
                деятельности Российской Федерации, увеличивает потребность в
                метрологическом обеспечении производственных организаций.
              </p>
              <div className=" mt-[6rem] lg:flex lg:flex-row lg:justify-center lg:items-start">
                <p className=" mr-[1.3rem] w-full text-[1.3rem] ">
                  Эти теднденции требуют бесперебойных, устойчивых, надежных
                  решений, которые обеспечат высокое качество продукции, изделий
                  и услуг. И эта среда будет стремиться к постоянному улучшению.
                </p>
                <p className=" mt-[1rem] lg:mt-0 lg:ml-[1.3rem] w-full text-[1.3rem]  ">
                  Метрологичекое обеспечение помогает осваивать эти тенденции и
                  постоянно совершенствовать любые инженерные решения. Поэтому
                  мы постоянно расширяем спектр предоставляемых услуг в части
                  метрологического обеспечения и проектов «под ключ» — чтобы
                  формировать будущее Вашего производства.
                </p>
              </div>
              <h1 className="mt-[6rem] lg:mt-[8rem] mr-auto mb-[2rem] w-fit  font-bold text-2xl lg:text-4xl  pb-[.5rem]">
                Краткое знакомство с Нашим Руководством
              </h1>
              <p className="mt-[1rem] mb-[10px] lg:mb-0 text-[1.3rem] lg:text-[1.3rem] ">
                Руководство компании разделяет ту же страсть к метрологическому
                обеспечению, также как и вся команда сотрудников Русметрологии.
                Чтобы узнать больше о Руководстве прочтите их биографию.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full h-full  px-[15px] lg:max-w-[1340px] xl:max-w-[1340px] mx-auto pb-[1rem]">
          <div className="relative flex flex-col items-start justify-center w-full mx-0 lg:mx-[1rem] ">
            <div className=" flex flex-wrap w-full h-[27rem] justify-start items-start mb-[1rem]">
              <img
                className="w-full h-full object-cover object-top"
                src={avatar1}
                alt="img"
              />
            </div>
            <div className="flex flex-col mx-0 lg:mx-[1rem]  w-full">
              <h1 className="font-semibold leading-snug tracking-wide text-[1.8rem] pb-[1rem] mt-[1rem] text-left">
                Жестовская Алевтина
              </h1>
              <p className=" text-[1.4rem] text-left">Главный бухгалтер</p>
              <p className="text-[1.1rem] mt-[1.2rem] text-left mb-[2rem] lg:mb-0">
                Прочитать биографию
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-start justify-center w-full mx-0 lg:mx-[1rem] ">
            <div className=" flex flex-wrap w-full h-[27rem]  justify-start items-start mb-[1rem]">
              <img
                className="w-full h-full object-cover object-top"
                src={avatar}
                alt="img"
              />
            </div>
            <div className="flex flex-col mx-0 lg:mx-[1rem] w-full">
              <h1 className="font-semibold leading-snug tracking-wide text-[1.8rem] pb-[1rem] mt-[1rem] text-left">
                Жестовкий Константин
              </h1>
              <p className="text-[1.4rem] text-left">Генеральный дирекор</p>
              <p className="text-[1.1rem] mt-[1.2rem] text-left">
                Прочитать биографию
              </p>
            </div>
          </div>
        </div>
        <div className=" text-left pr-0 pb-[2rem] bg-white">
          <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[996px] xl:max-w-[1094px]">
            <div className="mx-auto max-w-none my-0 xl:max-w-[960px] 2xl:max-w-[900px] text-justify">
              <div className="flex flex-col">
                <div className="mb-[2rem]">
                  <h1 className="mt-[6rem] lg:mt-[8rem] mr-auto mb-[2rem] w-fit  font-bold text-2xl lg:text-4xl  pb-[.5rem]">
                    Команда Русметология
                  </h1>
                  <p className="mt-[1rem] mb-[10px]  text-[1.3rem] lg:text-[1.3rem] ">
                    Для выполнения любых задач в области метрологического
                    обеспечения Мы подобрали квалифицированную команду
                    специалистов из разных отраслей. Все Наши специалисты имеют
                    многолетний опыт работы в самых передовых компаниях.
                  </p>
                </div>
                <div className="w-full h-[20rem] lg:h-full">
                  <img
                    className="w-full h-full object-cover object-top"
                    src={team}
                    alt="img"
                  />
                </div>
              </div>

              <div className=" mt-[6rem] lg:mt-[6rem] lg:flex lg:flex-row lg:justify-center lg:items-start">
                <div className="lg:mr-[1.3rem] w-full">
                  <h1 className=" mr-auto mb-[1.07em] w-fit font-bold  text-2xl  lg:text-4xl  pb-[.5rem]">
                    Наши ценности
                  </h1>
                  <p className="mt-[1rem] mb-[10px]  text-[1.3rem] lg:text-[1.3rem] ">
                    В Русметрология мы понимаем Нашу ответственность перед
                    клиентами и сотрудниками Нашей организацией. Благодаря нашим
                    устойчивым решениям мы помогаем нашим клиентам получить
                    конкурентное преимущество. Мы обеспечиваем безопасность,
                    образование и благополучие наших сотрудников. И, что не
                    менее важно, мы действуем на основе основных ценностей,
                    таких как честность, справедливость, прозрачность и
                    ответственность.
                  </p>
                </div>
                <div className="lg:ml-[1.3rem] w-full">
                  <h1 className=" mr-auto mb-[1.07em] w-fit font-bold  text-2xl lg:text-4xl  pb-[.5rem]">
                    Устойчивое развитие
                  </h1>
                  <p className="mt-[1rem] mb-[10px] text-[1.3rem]">
                    Наше понимание устойчивого развития полностью основано на
                    ценностях Русметрология – ответственности, совершенстве и
                    инновациях. Мы определяем устойчивое развитие как средство
                    достижения прибыльного и долгосрочного роста. И для нас это
                    основано на трех основных аспектах: окружающая среда, люди и
                    общество, а также ответственная практика ведения бизнеса.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row w-full h-full lg:max-w-[1340px] xl:max-w-[1340px] mt-[2rem]">
                <div className=" flex items-center justify-center w-full h-full mr-[1.3rem] ">
                  <div className=" flex flex-col w-full  ">
                    <div className="text-left  w-full mb-[1rem] ">
                      <h1 className=" mb-[1.07em] w-fit font-bold text-2xl lg:text-4xl pb-[.5rem] ">
                        Деятельность Русметрологии
                      </h1>
                      <p className="mt-[1rem] mb-[10px]  text-[1.3rem] text-justify">
                        Нашими основными направлениями деятельности является все
                        виды метрологического обеспечения, комплексный подход и
                        предотсавление услуг «под ключ», интеллектуальные, а
                        также сопутствующие услуги. Для наших клиентов мы
                        постоянно обновляем наше портфолио наших услуг.
                      </p>
                      <button
                        className=" border-[1px] max-[375px]:mt-[.5rem] border-black rounded-full w-[7rem]  mr-[.5rem] md:mr-[.5rem] lg:mr-[1rem] xl:mr-0 md:w-[110px] lg:w-[135px] px-[.3rem] py-[.7rem] text-[1rem] md:text-[1.2rem] lg:text-[.8rem] xl:text-[1.3rem] hover:bg-blue-950/90 hover:text-white hover:border-blue-950/90 "
                        onClick={() => navigate("/services")}
                      >
                        Услуги
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col items-start justify-start w-full lg:ml-[1.3rem]">
                  <div className="w-full h-full mb-[1rem]">
                    <video
                      className="w-full h-full object-cover"
                      loop
                      onMouseOver={(e) => e.target.play()}
                      onMouseOut={(e) => e.target.pause()}
                      src={aboutvid}
                    />
                  </div>
                </div>
              </div>

              <h1 className="mt-[6rem] lg:mt-[6rem] mr-auto mb-[2rem] w-fit  font-bold text-2xl lg:text-4xl  pb-[.5rem]">
                Значимые даты
              </h1>
              <p className="mt-[1rem] mb-[10px]  text-[1.3rem] lg:text-[1.3rem] ">
                Русметрология начала свою деятельность в 2014 году, и за это
                время завершила не один проект, чтобы подробнее узнать о
                проектах перейдите по ссылке.
              </p>
              <p className="mt-[1rem] mb-[10px]  text-[1.3rem] lg:text-[1.3rem] ">
                Мы подготовили график значимых дат для ознакомления с историей
                Нашей компании.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full h-full px-[15px] lg:max-w-[1340px] xl:max-w-[1340px] mx-auto mb-[4rem] lg:h-[8rem]">
          <div className="flex flex-col w-full text-left">
            <div className=" border-b-2 border-black h-full">
              <h1 className="mr-auto mb-0 font-bold text-2xl lg:text-4xl pl-[.5rem] pb-[.5rem] ">
                2014
              </h1>
            </div>
            <div>
              <p className="mt-[1rem] mb-[10px]  text-[1.3rem] lg:text-[1.3rem] ">
                Год создания ООО "Русметрология"
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full text-left">
            <div className=" border-b-2  border-black h-full">
              <h1 className="mr-auto mb-0 font-bold text-2xl lg:text-4xl pl-[.5rem] pb-[.5rem] ">
                2016
              </h1>
            </div>
            <p className="mt-[1rem] mb-[10px]  text-[1.3rem] lg:text-[1.3rem] ">
              Сотрудничество с компанией Siemens
            </p>
          </div>
          <div className="flex flex-col w-full text-left">
            <div className=" border-b-2  border-black h-full">
              <h1 className="mr-auto mb-0 font-bold text-2xl lg:text-4xl pl-[.5rem] pb-[.5rem] ">
                2018
              </h1>
            </div>
            <p className="mt-[1rem] mb-[10px]  text-[1.3rem] lg:text-[1.3rem] ">
              Проект с АО "Черномортранснефть"
            </p>
          </div>
          <div className="flex flex-col w-full text-left">
            <div className=" border-b-2 border-black h-full">
              <h1 className="mr-auto mb-0 font-bold text-2xl lg:text-4xl pl-[.5rem] pb-[.5rem] ">
                2020
              </h1>
            </div>
            <div>
              <p className="mt-[1rem] mb-[35px]  text-[1.3rem] lg:text-[1.3rem] ">
                Проект с АО "Научно-техническим центром "Дипром"
              </p>
            </div>
          </div>
        </div>
        <ButtonContact />
      </main>
      <Footer />
    </>
  );
}

export default About;
