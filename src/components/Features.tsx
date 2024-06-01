import { useState } from "react";

const featureData = [
  {
    id: 1,
    heading: "Bookmark in one click",
    para: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    tag: "Simple Booking",
    imgPath: "/images/illustration-features-tab-1.svg",
  },
  {
    id: 2,
    heading: "Intelligent search",
    para: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    tag: "Speedy Searching",
    imgPath: "/images/illustration-features-tab-2.svg",
  },
  {
    id: 3,
    heading: "Share your bookmarks",
    para: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    tag: "Easy Sharing",
    imgPath: "/images/illustration-features-tab-3.svg",
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(featureData[0]);
  return (
    <div className="py-10 lg:py-16">
      <div className="">
        <div className="flex flex-col justify-center gap-5 max-w-[600px] mx-auto w-4/5  ">
          <h2 className="text-center text-xl font-medium font-rubik md:text-3xl text-Very-Dark-Blue">
            Features
          </h2>
          <p className="text-center max-w-[540px] leading-relaxed text-Grayish-Blue text-sm font-rubik md:text-lg mx-auto">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
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
              <div className="relative py-10 lg:px-5 lg:py-14 max-w-[640px] w-11/12 mx-auto lg:mr-0 lg:ml-auto z-20">
                <img
                  src={activeFeature.imgPath}
                  alt={activeFeature.heading}
                  className=" w-full object-cover"
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
                  <button className="font-rubik text-xs font-medium bg-Soft-Blue p-3 rounded-[6px] text-[hsl(200_100%_98%)] shadow-[0px_4px_10px_0px_rgb(228,229,246)] border-2 border-transparent hover:border-Soft-Blue hover:bg-[hsl(200_100%_98%)] hover:text-Soft-Blue lg:text-sm">
                    More Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
