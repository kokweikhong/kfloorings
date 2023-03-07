import Image from "next/image";

export default function Application() {
  return (
    <section className="container mx-auto mt-[50px] px-[15px] py-[120px] bg-[#f8f4f3]">
      <div>
        <h6 className="uppercase mb-[15px] font-normal text-[12px] tracking-[4px] relative pl-[40px] text-[#b19777] before:content-[''] before:w-[25px] before:h-[1px] before:bg-[#b19777] before:absolute before:top-1/2 before:left-0">
          Application
        </h6>
        <h2 className="font-semibold text-[28px] md:text-[40px] leading-[1.4] mb-[20px]">
          Handcrafted European Wood
        </h2>
      </div>
      <div className="md:flex md:flex-wrap md:mx-[-15px]">
        <div className="group bg-white hover-background-applicattion bg-cover hover:bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/images/home/application_stair.jpeg')] relative py-[60px] px-[40px] border border-r-0 border-solid border-[#eee] md:flex-[1_1_50%] md:max-w-1/2 lg:basis-1/4 lg:max-w-1/4">
          {/*         <div className="group bg-white bg-center bg-cover transition-all delay-300 duration-300 ease-in-out hover:duration-300 hover:delay-300 hover:ease-in-out hover:transition-all hover:bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/images/home/application_stair.jpeg')] bg-[linear-gradient(to_right_bottom,rgba(0,0,0,1),rgba(0,0,0,1)),url('/images/home/application_stair.jpeg')] relative py-[60px] px-[40px] border border-r-0 border-solid border-[#eee] md:flex-[1_1_50%] md:max-w-1/2 lg:basis-1/4 lg:max-w-1/4">
           */}
          {/* <div className="z-10"> */}
          <h3 className="text-with-stroke text-[40px] mb-[30px] text-transparent font-bold">
            01
          </h3>
          <h2 className="font-semibold leading-6 text-base mb-[20px]">Floor</h2>
          <p className="text-[15px] font-normal text-[#888888] leading-8">
            Our natural wood flooring services are both durable and
            aesthetically pleasing.
          </p>
          <button className="mt-[30px] text-[12px] uppercase">Read More</button>
          {/* </div> */}
          {/* <div className="absolute top-0 left-0 h-full w-full z-0">
            <Image
              src="/images/home/application_stair.jpeg"
              alt=""
              width="900"
              height="600"
              className="h-full w-full object-cover"
            />
          </div> */}
        </div>
        <div className="py-[60px] px-[40px] bg-gray-600 text-white border border-r-0 border-solid border-[#eee] transition-all duration-300 md:flex-[1_1_50%] md:max-w-1/2 lg:basis-1/4 lg:max-w-1/4">
          <h3 className="text-[40px] mb-[30px]">02</h3>
          <h2 className="font-semibold leading-6 text-base mb-[20px]">
            Ceiling
          </h2>
          <p className="text-[15px] font-normal text-[#eee] leading-8">
            Transform your space with our beautiful and elegant wood ceiling
            installation services.
          </p>
          <button className="mt-[30px]">Read More</button>
        </div>
        <div className="py-[60px] px-[40px] bg-gray-600 text-white border border-r-0 border-solid border-[#eee] transition-all duration-300 md:flex-[1_1_50%] md:max-w-1/2 lg:basis-1/4 lg:max-w-1/4">
          <h3 className="text-[40px] mb-[30px]">01</h3>
          <h2 className="font-semibold leading-6 text-base mb-[20px]">Stair</h2>
          <p className="text-[15px] font-normal text-[#eee] leading-8">
            We offer expert design and installation services to make your wooden
            stairs a stunning focal point.
          </p>
          <button className="mt-[30px]">Read More</button>
        </div>
        <div className="py-[60px] px-[40px] bg-gray-600 text-white border border-r-0 border-solid border-[#eee] transition-all duration-300 md:flex-[1_1_50%] md:max-w-1/2 lg:basis-1/4 lg:max-w-1/4">
          <h3 className="text-[40px] mb-[30px]">01</h3>
          <h2 className="font-semibold leading-6 text-base mb-[20px]">Wall</h2>
          <p className="text-[15px] font-normal text-[#eee] leading-8">
            Add warmth and charm to your space with our rustic wood wall
            installation services.
          </p>
          <button className="mt-[30px]">Read More</button>
        </div>
      </div>
    </section>
  );
}
