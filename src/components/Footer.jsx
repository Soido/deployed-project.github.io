import { useNavigate } from "react-router-dom";

import MedpromlabLogo from "../img/rusmetrologiya-logo.png";

function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <footer className=" bg-blue-950 w-screen">
        <div className=" text-white w-full max-w-[1340px] h-fit mx-auto px-[15px] pt-[4rem]">
          <div className="flex flex-col lg:flex-row justify-between border-b-2 pb-[2rem]">
            <div className="flex flex-col w-full">
              <div className="w-full h-full md:w-[20rem] lg:w-full">
                <img
                  className="cursor-pointer h-full w-full object-contain pr-[4rem]"
                  src={MedpromlabLogo}
                  alt="logo"
                />
              </div>
            </div>
            <div className="flex justify-start  w-full">
              {" "}
              <ul className="text-left">
                <li
                  className="hover:underline underline-offset-4 cursor-pointer mt-[2rem]  text-[1.1rem] "
                  onClick={() => navigate("/")}
                >
                  Главная
                </li>
                <li
                  className="hover:underline underline-offset-4 cursor-pointer  text-[1.1rem] "
                  onClick={() => navigate("/about")}
                >
                  О компании
                </li>

                <li
                  className="hover:underline underline-offset-4 cursor-pointer text-[1.1rem]"
                  onClick={() => navigate("/projects")}
                >
                  Проекты
                </li>
                <li
                  className="hover:underline underline-offset-4 cursor-pointer text-[1.1rem] "
                  onClick={() => navigate("/services")}
                >
                  Услуги
                </li>
                <li
                  className="hover:underline underline-offset-4 cursor-pointer text-[1.1rem] "
                  onClick={() => navigate("/forpartners")}
                >
                  Нам доверяют
                </li>
                <li
                  className="hover:underline underline-offset-4 cursor-pointer text-[1.1rem] "
                  onClick={() => navigate("/contacts")}
                >
                  Контакты
                </li>
              </ul>
            </div>
            <div className="cursor-pointer text-left w-full">
              <h1 className="mr-auto text-3xl  my-[1rem] lg:mt-0">Услуги</h1>
              <div className="w-full">
                <ul>
                  <li
                    className="hover:underline underline-offset-4 cursor-pointer text-[1.1rem] "
                    onClick={() => navigate("/services/typeassertion")}
                  >
                    Утверждение типа средств измерений
                  </li>
                  <li
                    className=" hover:underline underline-offset-4 cursor-pointer text-[1.1rem] "
                    onClick={() => navigate("/services/verification")}
                  >
                    Поверка средств измерений
                  </li>
                  <li
                    className="hover:underline underline-offset-4 cursor-pointer text-[1.1rem] "
                    onClick={() => navigate("/services/certificationmi")}
                  >
                    Аттестация методик измерений
                  </li>
                  <li
                    className="hover:underline underline-offset-4 cursor-pointertext-[1.1rem] "
                    onClick={() => navigate("/services/examination")}
                  >
                    Метрологическая экспертиза
                  </li>
                  <li
                    className="hover:underline underline-offset-4 cursor-pointer text-[1.1rem] "
                    onClick={() =>
                      navigate("/services/accreditationcertification")
                    }
                  >
                    Подготовка к аккредитации
                  </li>
                  <li
                    className="hover:underline underline-offset-4 cursor-pointer text-[1.1rem] "
                    onClick={() => navigate("/services/safety")}
                  >
                    Получение сертификатов безопасности
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center text-left my-[1rem]">
            <div className="w-full pr-[1rem]">
              <h1 className="mt-0 mb-[.5rem] text-[1rem] ">
                Общество с ограниченной ответственностью "Русметрология"
                <br />
                Адрес: ул. Ленинская Слобода, 19, БЦ Омега Плаза, оф. 21.
                <br />
                Телефон: +7 (499) 647-91-87
                <br />
                e-mail: info@rusmetrology.ru
              </h1>
            </div>
            <div className="w-full">
              <h1 className="hover:no-underline underline underline-offset-4 cursor-pointer mt-0 mb-[.5rem] text-[1rem] ">
                Политика конфеденциальности
              </h1>
            </div>
            <div className="w-full">
              <h1 className="mt-0 mb-[.5rem] text-[1rem] ">
                Данный сайт носит информационный характер и не является
                публичной офертой (ст. 435 ГК РФ). Перепечатка материалов с
                сайта разрешается с письменного согласия владельца сайта
              </h1>
            </div>{" "}
          </div>
          <div className="border-t-2 py-[2rem] flex flex-col lg:flex-row justify-between items-center text-left mt-[1rem] ">
            <div className="w-full">
              {" "}
              <h1 className="mt-0 mb-[.5rem] text-[1rem] ">ИНН: / ОГРН:</h1>
            </div>
            <div className="w-full">
              {" "}
              <h1 className="mt-0 mb-[.5rem] text-[1rem] ">
                © 2021-2023 Все права защищены
              </h1>
            </div>
            <div className="w-full">
              {" "}
              <p> Разработка сайта: Artem Surzhko</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
