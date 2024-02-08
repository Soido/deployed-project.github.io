import { useNavigate } from "react-router-dom";
import { useWindowSize } from "react-use";

import { HiOutlineMail } from "react-icons/hi";

function ButtonContact() {
  const navigate = useNavigate();
  const { width } = useWindowSize();
  return (
    <div className="fixed z-6 bottom-[2rem] right-[1rem] md:bottom-[2.5rem] lg:bottom-[4rem] lg:right-[3rem] xl:bottom-[5.2rem] xl:right-[5rem] 2xl:right-[10rem] 2xl:bottom-[4.2rem] 3xl:right-[24rem] 3xl:bottom-[5.2rem] mx-auto py-0 px-[15px]">
      <button
        className=" px-[1rem] py-[1rem] text-white bg-blue-950 border-2 border-white rounded-full text-[2rem] lg:text-[1rem] xl:text-[1.1rem] hover:bg-white hover:text-blue-950 hover:border-2 hover:border-blue-950 "
        onClick={() => navigate("/contacts")}
      >
        {width < 900 ? <HiOutlineMail /> : "Напишите нам"}
      </button>
    </div>
  );
}

export default ButtonContact;
