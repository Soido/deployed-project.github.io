import { useWindowSize } from "react-use";

import Footer from "../../Footer";
import ButtonContact from "../../../UX/UI/ButtonContact";

import title from "../../../img/Partners/title.jpg";

import IMG51 from "../../../img/Partners/5.1.png";
import IMG52 from "../../../img/Partners/5.2.png";
import IMG53 from "../../../img/Partners/5.3.png";
import IMG54 from "../../../img/Partners/5.4.png";
import IMG55 from "../../../img/Partners/5.5.png";
import IMG56 from "../../../img/Partners/5.6.png";
import IMG57 from "../../../img/Partners/5.7.png";
import IMG58 from "../../../img/Partners/5.8.png";
import IMG59 from "../../../img/Partners/5.9.png";

function Forpartners() {
  const { width } = useWindowSize();
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
              <div className=" flex items-center justify-center w-full h-full  ">
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
                    <p className="lg:mt-0 mt-[1rem] font-light leading-snug tracking-wide text-[1.4rem] ">
                      Плодотворная работа в области метрологического
                      обеспечения, принесла Русметрологии большое количество
                      партнерских отношений.
                    </p>
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

        <div className=" text-left pr-0 pb-[2rem] xl:pb-[100px] 2xl:pb-[69px] bg-white">
          <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[996px] xl:max-w-[1094px]">
            <div className="mx-auto max-w-none my-0 xl:max-w-[960px] 2xl:max-w-[900px] text-justify">
              <h1 className="mt-0 mr-auto mb-[1.07em] w-fit font-bold text-2xl lg:text-4xl  pb-[.5rem]">
                Имея огромный опыт, квалифицированную команду и необходимые
                ресурсы, мы предоставляем все виды метрологического обеспечения.
              </h1>
              <p className="mb-[10px] md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.3rem] lg:text-[1.3rem]">
                Среди наших партнеров и клиентов орагнизации из различных сфер:
                нефте-газовый сектор, атомная энергетика, связь и
                телекоммуникации, безопасность, производство различной
                продукции.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1340px] mx-auto px-[15px] ">
          <div className="relative flex flex-col lg:flex-row  p-[1rem]">
            <div className="relative cursor-pointer  w-full mr-[1rem] hover:scale-110">
              <a
                href="https://www.siemens.com/global/en.html"
                title="siemens.com"
              >
                <img
                  className="w-full h-full object-cover"
                  src={IMG51}
                  alt="img"
                />
              </a>
            </div>
            <div className="cursor-pointer  w-full mr-[1rem] hover:scale-110">
              <img
                className="w-full h-full object-cover"
                src={IMG52}
                alt="img"
              />
            </div>
            <div className=" cursor-pointer  w-full hover:scale-110">
              <img
                className="w-full h-full object-cover"
                src={IMG53}
                alt="img"
              />
            </div>{" "}
          </div>
        </div>
        <div className="max-w-[1340px] mx-auto px-[15px] ">
          <div className="flex flex-col lg:flex-row p-[1rem]">
            <div className="cursor-pointer  w-full mr-[1rem] hover:scale-110">
              <img
                className="w-full h-full object-cover"
                src={IMG54}
                alt="img"
              />
            </div>
            <div className="cursor-pointer w-full mr-[1rem] hover:scale-110">
              <img
                className="w-full h-full object-cover"
                src={IMG55}
                alt="img"
              />
            </div>
            <div className="cursor-pointer  w-full hover:scale-110">
              <img
                className="w-full h-full object-cover"
                src={IMG56}
                alt="img"
              />
            </div>{" "}
          </div>
        </div>
        <div className="max-w-[1340px] mx-auto px-[15px]  mb-[6rem]">
          <div className="flex flex-col lg:flex-row cursor-pointer p-[1rem]">
            <div className="cursor-pointer  w-full mr-[1rem] hover:scale-110">
              <img
                className="w-full h-full object-cover"
                src={IMG57}
                alt="img"
              />
            </div>
            <div className="cursor-pointer  w-full mr-[1rem] hover:scale-110">
              <img
                className="w-full h-full object-cover"
                src={IMG58}
                alt="img"
              />
            </div>
            <div className="cursor-pointer w-full hover:scale-110">
              <img
                className="w-full h-full object-cover"
                src={IMG59}
                alt="img"
              />
            </div>{" "}
          </div>
        </div>

        <ButtonContact />
      </main>
      <Footer />
    </>
  );
}

export default Forpartners;
