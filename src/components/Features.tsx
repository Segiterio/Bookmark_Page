import { useState } from "react";
const featureData = [
  {
    id: 1,
    heading: "Furniture Repair & Assembly",
    para: "From broken chairs and damaged tables to complete furniture assembly, our experts restore strength, stability, and finish so your furniture looks and works like new again.",
    tag: "Furniture Services",
    imgPath: "/images/carpenter.jpg",
  },
  {
    id: 2,
    heading: "Electrical Repair & Installation",
    para: "We handle wiring issues, switch replacements, fan installations, lighting fixes, and all electrical maintenance safely and efficiently by certified technicians.",
    tag: "Electrical Work",
    imgPath: "/images/kitchen.jpg",
  },
  {
    id: 3,
    heading: "Modular Kitchen Fix & Maintenance",
    para: "Get professional help for cabinet repairs, hinge replacement, drawer alignment, fittings adjustment, and complete modular kitchen maintenance services.",
    tag: "Kitchen Solutions",
    imgPath: "/images/electrical.jpg",
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(featureData[0]);
  return (
    <div className="py-10 lg:py-16" id={"services"}>
      <div className="">
        <div className="flex flex-col justify-center gap-5 max-w-[600px] mx-auto w-4/5  ">
          <h2 className="text-center text-xl font-medium font-rubik md:text-3xl text-Very-Dark-Blue">
            Our Services
          </h2>
          <p className="text-center max-w-[540px] leading-relaxed text-Grayish-Blue text-sm font-rubik md:text-lg mx-auto">
            We provide reliable and professional home repair solutions designed
            to keep your home safe, functional, and comfortable. From small
            fixes to major repairs, our skilled team is ready to help.
          </p>
        </div>
        <div>
          <div className="flex flex-col py-8 px-4 md:flex-row md:justify-center ">
            {featureData.map((feature) => (
              <div
                key={feature.id}
                className="w-full border-b flex justify-center hover:cursor-pointer md:w-fit first-of-type:border-t md:first-of-type:border-t-0"
              >
                <div
                  onClick={() => {
                    setActiveFeature(feature);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveFeature(feature);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className={`${
                    activeFeature.id === feature.id
                      ? "border-b-4 border-Soft-Red text-Very-Dark-Blue"
                      : "border-b-4 border-transparent text-Grayish-Blue hover:text-Soft-Red"
                  } py-3 px-3 md:px-6 font-rubik`}
                >
                  {feature.tag}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row gap-5 items-center overflow-hidden lg:justify-between">
            <div className="w-full relative ">
              <div className="relative py-10 lg:px-5 lg:py-14 max-w-[640px] w-11/12 mx-auto lg:mr-0 lg:ml-auto z-20 ">
                <img
                  src={activeFeature.imgPath}
                  alt={activeFeature.heading}
                  className=" w-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute h-[70%] bg-Soft-Blue left-0 right-[20%] lg:right-[100px] bottom-0 z-10 rounded-e-full"></div>
            </div>
            <div className="w-full ">
              <div className="py-8 flex flex-col gap-6 items-center lg:mr-auto lg:ml-0 mx-auto max-w-[600px] w-11/12 lg:items-start ">
                <div className="flex flex-col gap-6 items-center  lg:items-start lg:ml-auto">
                  <h3 className="text-center text-xl font-medium font-rubik md:text-3xl text-Very-Dark-Blue">
                    {activeFeature.heading}
                  </h3>
                  <p className="text-center max-w-md leading-relaxed text-Grayish-Blue text-sm lg:text-start font-rubik md:text-lg">
                    {activeFeature.para}
                  </p>
                  {/* <button className="font-rubik text-xs font-medium bg-Soft-Blue p-3 rounded-[6px] text-[hsl(200_100%_98%)] shadow-[0px_4px_10px_0px_rgb(228,229,246)] border-2 border-transparent hover:border-Soft-Blue hover:bg-[hsl(200_100%_98%)] hover:text-Soft-Blue lg:text-sm">
                    More Info
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
