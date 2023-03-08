import Image from "next/image";
import applicationData from "../data/application.json";

console.log(applicationData);

const ApplicationCard = ({ data }) => {
  return (
    <div className="group bg-white relative py-[60px] px-[40px] border border-r-0 border-solid border-[#eee] md:flex-[1_1_50%] md:max-w-1/2 lg:basis-1/4 lg:max-w-1/4">
      <div className="w-full h-full absolute top-0 left-0 opacity-0 z-0 transition-all ease-in-out duration-300 group-hover:opacity-100 after:content-[''] after:h-full after:w-full after:absolute after:top-0 after:left-0 after:bg-opacity-60 after:bg-gradient-to-r after:from-black/70 after:to-black/50">
        <Image
          src={data.image.src}
          alt={data.image.alt}
          width="900"
          height="600"
          className="w-full h-full object-fill"
        />
      </div>
      <div className="z-[1] relative">
        <h3 className="text-with-stroke text-[40px] mb-[30px] text-transparent font-bold">
          {data.index}
        </h3>
        <h2 className="font-semibold leading-6 text-base mb-[20px] group-hover:text-[#ffffff]">
          {data.application}
        </h2>
        <p className="text-[15px] font-normal text-[#888888] leading-8 group-hover:text-[#eeeeee]">
          {data.description}
        </p>
        <button className="mt-[30px] text-[12px] uppercase text-primary">
          Read More
        </button>
      </div>
    </div>
  );
};

export default function Application() {
  return (
    <section className="mt-[50px] px-[15px] py-[120px] bg-[#f8f4f3]">
      <div className="container mx-auto">
        <div>
          <h6 className="uppercase mb-[15px] font-normal text-[12px] tracking-[4px] relative pl-[40px] text-[#b19777] before:content-[''] before:w-[25px] before:h-[1px] before:bg-[#b19777] before:absolute before:top-1/2 before:left-0">
            Application
          </h6>
          <h2 className="font-semibold text-[28px] md:text-[40px] leading-[1.4] mb-[20px]">
            Handcrafted European Wood
          </h2>
        </div>
        <div className="md:flex md:flex-wrap md:mx-[-15px]">
          {applicationData.map((data, index) => {
            return <ApplicationCard key={index} data={data} />;
          })}
        </div>
      </div>
    </section>
  );
}
