import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={poppins.className}>
      <section className="hero h-screen">
        <div
          className="w-full h-full bg-cover bg-center flex justify-center px-[15px] text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url(/images/home/hero_image_1.jpg)`,
          }}
        >
          <div className="relative my-auto after:content-[''] after:absolute after:left-0 after:top-0 after:h-[60px] after:w-[2px] after:bg-white">
            <h5 className="pl-[50px] mb-[15px] uppercase text-sm font-medium tracking-[4px]">
              Kandisky
            </h5>
            <h1 className="pl-[50px] text-4xl font-bold">WOOD MEET ART</h1>
            <p className="pl-[50px] mt-[10px] text-[#aaa] leading-8">
              Sustainable and ethically sourced, KANDINSKY offers engineered
              timber for walls, ceilings, stairs, and flooring.{" "}
            </p>
            <button className="border border-white py-[8px] px-[15px] text-[15px] ml-[50px] mt-[30px] text-[#b19777]">
              READ MORE
            </button>
          </div>
        </div>
      </section>

      <section className="mt-[50px] px-[15px]">
        <div>
          <h6 className="uppercase mb-[15px] font-normal text-[12px] tracking-[4px] relative pl-[40px] text-[#b19777] before:content-[''] before:w-[25px] before:h-[1px] before:bg-[#b19777] before:absolute before:top-1/2 before:left-0">
            About Us
          </h6>
        </div>
      </section>

      <section>
        <div className="py-[60px] px-[40px] bg-white">
          <h3 className="text-[40px] mb-[30px]">01</h3>
          <h2 className="font-semibold leading-6 text-base mb-[20px]">Floor</h2>
          <p className="text-[15px] font-normal text-[#eee] leading-8">
            Our wood floor installation service offers a custom design with a
            variety of wood types and finishes for a long-lasting flooring
            solution.
          </p>
          <button className="mt-[30px]">Read More</button>
        </div>
      </section>
    </main>
  );
}
