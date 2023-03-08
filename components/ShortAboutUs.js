export default function ShortAboutUs() {
  return (
    <section className="container mx-auto mt-[50px] px-[15px] py-[120px]">
      <div className="lg:flex lg:flex-wrap w-full max-w-full">
        <div className="lg:flex-[0_0_41.666667%] lg:max-w-[41.666667%] px-[15px]">
          <div
            className="font-playfair h-[500px] w-full relative bg-cover md:w-[90%]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(/images/home/application_wall.jpg)",
            }}
          >
            <div className="text-primary absolute right-[70px] top-[70px] z-[1]">
              <span className="text-[16px] tracking-[2px] font-semibold">
                SINCE
              </span>
              <span className="block text-[22px] font-bold">2011</span>
            </div>
            <div className="absolute top-[40px] left-[40px] bottom-[40px] right-[40px] bg-white/90 mix-blend-screen">
              <div className="absolute bottom-0 left-0 pl-[30px] pb-[30px]">
                <h2 className="font-extrabold text-[140px] leading-[1]">12</h2>
                <h5 className="text-[20px] text-primary tracking-[5px]">
                  Years Experiences
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="items-center lg:flex-[1_1_58.333333%] lg:max-w-[58.333333%]">
          <div className="mt-[50px] relative after:content-[''] after:w-[200px] after:h-[250px] after:absolute after:-top-[40px] after:right-[50px] after:border-[#fafafa] after:border-[10px] after:-z-[1]">
            <h6 className="uppercase mb-[15px] font-normal text-[12px] tracking-[4px] relative pl-[40px] text-[#b19777] before:content-[''] before:w-[25px] before:h-[1px] before:bg-[#b19777] before:absolute before:top-1/2 before:left-0">
              About Us
            </h6>
            <h2 className="font-playfair mb-[20px] text-[28px] font-semibold leading-[1.4]">
              Lorem ipsum dolor sit amet.
            </h2>

            <p className="text-[15px] font-medium text-[#888888] leading-[2]">
              Architecture bibendum pharetra eleifend. Suspendisse vel volutpat
              purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes,
              nec condimentum ipsum consequat. Mauris vitae consequat nibh,
              vitae interdum mi.
            </p>
          </div>

          <div className="flex flex-wrap -mx-[15px]">
            <div className="mt-[50px] px-[15px] relative w-full md:flex-[0_0_33.333333%] md:max-w-[33.333333%] before:content-[''] before:absolute before:right-[20%] before:-z-[1] before:border-t-[35px] before:border-r-[35px] before:bottom-[35px] before:border-t-transparent before:border-r-[#f7f7f7] before:w-0 before:h-0 after:content-[''] after:absolute after:right-[20%] after:-z-[1] after:w-[35px] after:h-[35px] after:bottom-0 after:bg-[#f7f7f7]">
              <h3 className="mb-[10px] text-primary font-semibold leading-[1.4]">
                <span className="font-playfair inline-block text-[50px]">
                  352
                </span>
              </h3>
              <h6 className="text-[12px] font-medium tracking-[2px] uppercase">
                PROJECTS COMPLETED
              </h6>
            </div>
            <div className="mt-[50px] px-[15px] relative w-full md:flex-[0_0_33.333333%] md:max-w-[33.333333%] before:content-[''] before:absolute before:right-[20%] before:-z-[1] before:border-t-[35px] before:border-r-[35px] before:bottom-[35px] before:border-t-transparent before:border-r-[#f7f7f7] before:w-0 before:h-0 after:content-[''] after:absolute after:right-[20%] after:-z-[1] after:w-[35px] after:h-[35px] after:bottom-0 after:bg-[#f7f7f7]">
              <h3 className="mb-[10px] text-primary font-semibold leading-[1.4]">
                <span className="font-playfair inline-block text-[50px]">
                  567
                </span>
              </h3>
              <h6 className="text-[12px] font-medium tracking-[2px] uppercase">
                SATISFIED CLIENTS
              </h6>
            </div>
            <div className="mt-[50px] px-[15px] relative w-full md:flex-[0_0_33.333333%] md:max-w-[33.333333%] before:content-[''] before:absolute before:right-[20%] before:-z-[1] before:border-t-[35px] before:border-r-[35px] before:bottom-[35px] before:border-t-transparent before:border-r-[#f7f7f7] before:w-0 before:h-0 after:content-[''] after:absolute after:right-[20%] after:-z-[1] after:w-[35px] after:h-[35px] after:bottom-0 after:bg-[#f7f7f7]">
              <h3 className="mb-[10px] text-primary font-semibold leading-[1.4]">
                <span className="font-playfair inline-block text-[50px]">
                  17
                </span>
              </h3>
              <h6 className="text-[12px] font-medium tracking-[2px] uppercase">
                AWARDS WON
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
