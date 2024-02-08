import { useNavigate } from "react-router-dom";

import { HiOutlineChevronUp } from "react-icons/hi";

function ButtonServises() {
  const navigate = useNavigate();

  return (
    <div className=" cursor-pointer " onClick={() => navigate("/services")}>
      <div className=" flex items-center justify-end text-xl px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1340px] xl:max-w-[1340px]">
        <div className=" flex items-center text-[1.8rem] px-[1rem] py-[1rem] md:mr-[22rem] lg:mr-[35rem] xl:mr-[1rem]">
          <HiOutlineChevronUp />
        </div>
      </div>
    </div>
  );
}

export default ButtonServises;
