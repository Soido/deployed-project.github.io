import { useWindowSize } from "react-use";

import Footer from "../../Footer";

function Contacts() {
  const { width } = useWindowSize();
  return (
    <>
      <main className="w-screen">
        <div className=" h-screen min-h-full mt-[6rem] md:mt-[5rem] pr-0 pb-[80px] pt- md:pt-[6.5rem] lg:pt-[3rem] xl:pt-[3rem] md:pr-0 md:pb-[80px] overflow-hidden ">
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
                  <p className="mt-[1rem] lg:mt-0 font-light leading-snug tracking-wide text-[1.4rem] ">
                    Наш адрес: ул. Ленинская Слобода, 19, БЦ Омега Плаза, оф.
                    21.
                    <br />
                    Телефон для связи: +7 (499) 647-91-87
                    <br />
                    Электронная почта: info@rusmetrology.ru
                  </p>
                </div>
              </div>
            </div>
            <div className=" relative flex flex-col items-end justify-center  w-full ">
              <iframe
                className="md:mr-[5rem] lg:mr-0"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A0678584963e8e9617a21a0945554c292cd203b59e8859f361917e5d86fe2f3bc&amp;source=constructor"
                title="map"
                width="654"
                height="423"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="w-full h-full mb-[4rem] lg:max-w-[1340px] xl:max-w-[1340px] mx-auto flex justify-start xl:justify-center  items-center overflow-hidden">
          <div className="  mt-0 h-full">
            <script src="https://yastatic.net/s3/frontend/forms/_/embed.js"></script>
            <iframe
              className="md:ml-[1rem] ml-[.5rem] border-2 border-blue-900"
              src="https://forms.yandex.ru/u/6568ef10c769f14851aa4175/?iframe=1"
              title="form"
              frameborder="0"
              name="ya-form-6568ef10c769f14851aa4175"
              width="360"
              height="710"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contacts;
