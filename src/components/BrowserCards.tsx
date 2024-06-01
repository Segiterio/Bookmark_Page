function Card({
  Heading,
  version,
  icon,
  StyleClasses,
}: {
  Heading: String;
  version: number;
  icon: String;
  StyleClasses?: String;
}) {
  return (
    <div
      className={`shadow-custom rounded-md max-w-[340px] w-11/12 flex flex-col gap-6 justify-center items-center py-6 ${StyleClasses} `}
    >
      <div className="flex flex-col gap-6 justify-center items-center ">
        <img src={"./images/" + icon} alt="chrome" className="w-28 h-28" />
        <div className="flex flex-col gap-1 items-center">
          <h3 className="text-xl font-rubik font-medium text-Very-Dark-Blue">
            {Heading}
          </h3>
          <p className="text-Grayish-Blue text-sm font-rubik">
            Minimum version {version}
          </p>
        </div>
      </div>

      <img src="./images/bg-dots.svg" alt="bg-dots" className="w-full" />

      <button className=" bg-Soft-Blue py-3 px-8 rounded-[6px] text-[hsl(200_100%_98%)] shadow-[0px_4px_10px_0px_rgb(228,229,246)] border-2 border-transparent hover:border-Soft-Blue hover:bg-[hsl(200_100%_98%)] hover:text-Soft-Blue ">
        Add & Install Extention
      </button>
    </div>
  );
}

const BrowserCards = () => {
  return (
    <div className="py-10 lg:py-16">
      <div className="">
        <div className="flex flex-col justify-center gap-5 max-w-[600px] mx-auto w-4/5 ">
          <h2 className="text-center text-xl font-medium font-rubik md:text-3xl text-Very-Dark-Blue">
            Download the extension
          </h2>
          <p className="text-center max-w-[540px] leading-relaxed text-Grayish-Blue text-sm font-rubik md:text-lg mx-auto">
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>
      </div>

      <div className="py-10 flex flex-col max-w-4xl w-11/12 mx-auto justify-between items-center lg:flex-row gap-12 lg:gap-8 ">
        <Card Heading={"Add to Chrome"} version={62} icon={"logo-chrome.svg"} />
        <Card
          Heading={"Add to FireFox"}
          version={55}
          icon={"logo-firefox.svg"}
          StyleClasses={"relative top-0 lg:top-10 "}
        />
        <Card
          Heading={"Add to Opera"}
          version={46}
          icon={"logo-opera.svg"}
          StyleClasses={"relative top-0 lg:top-20 "}
        />
      </div>
    </div>
  );
};

export default BrowserCards;
