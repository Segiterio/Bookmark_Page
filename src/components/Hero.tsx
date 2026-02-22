function Hero() {
  return (
    <div className="py-8">
      <div className=" flex flex-col-reverse lg:flex-row gap-5 items-center lg:justify-between ">
        <div className="font-rubik w-full ">
          <div className="max-w-[600px] mx-auto w-4/5 lg:ml-auto lg:mr-0 flex gap-6 flex-col">
            <h1 className="text-2xl font-medium text-Very-Dark-Blue text-center md:text-4xl lg:text-left lg:max-w-md ">
              Reliable Home Repair & Maintenance Services
            </h1>
            <p className="text-sm text-center leading-relaxed text-Grayish-Blue lg:text-left md:text-lg max-w-lg mx-auto lg:mx-0">
              We provide trusted solutions for furniture repair, electrical
              work, modular kitchen fixes, and all types of home maintenance.
              Fast, affordable, and handled by skilled professionals you can
              rely on.
            </p>
            <div className="flex gap-4 text-xs font-medium flex-wrap lg:text-sm justify-center lg:justify-start">
              <a
                href="#contact"
                className=" bg-Soft-Blue p-3 rounded-[6px] text-[hsl(200_100%_98%)] shadow-[0px_4px_10px_0px_rgb(228,229,246)] border-2 border-transparent hover:border-Soft-Blue hover:bg-[hsl(200_100%_98%)] hover:text-Soft-Blue "
              >
                Book a Service
              </a>
              <a
                href="#services"
                className="bg-[hsl(0_0%_97%)] text-[hsl(231_6%_43%)] p-3 rounded-[6px] shadow-[0px_4px_10px_0px_rgb(228,229,246)] border-2 border-transparent hover:border-[hsl(230_6%_39%)] hover:bg-[hsl(200_100%_98%)] hover:text-[hsl(230_6%_39%)]"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
        <div className="relative w-full flex">
          <div className="z-20 max-w-[660px] mx-auto lg:mr-auto lg:ml-0">
            <img
              src="/images/burst.png"
              alt="hero"
              className="w-full object-cover"
            />
          </div>
          <div className="absolute h-3/4 bg-Soft-Blue left-1/3 lg:left-[150px] right-0 bottom-0 z-10 rounded-s-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
