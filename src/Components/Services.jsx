import Aos from "aos";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      id="Services"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500"
      >
        Services
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
         <h2
          data-aos="fade-down"
          className="text-[26px] flex text-center items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border border-fuchsia-800 b_glow"
        >
          CRM Development
        </h2>
        <h2
          data-aos="fade-up"
          className="text-[26px] flex text-center items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border border-fuchsia-800 b_glow"
        >
          Website Designing
        </h2>
        <h2
          data-aos="fade-up"
          className="text-[26px] flex text-center items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border border-fuchsia-800 b_glow"
        >
          Web Development
        </h2>
        <h2
          data-aos="fade-down"
          className="text-[26px] flex text-center items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border border-fuchsia-800 b_glow"
        >
          Mobile App Development
        </h2>
      </div>
    </div>
  );
};

export default Services;
