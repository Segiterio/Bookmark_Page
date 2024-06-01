const Newsletter = () => {
  return (
    <div className="bg-Soft-Blue">
      <div className="py-14 flex flex-col gap-3">
        <h3 className="text-center tracking-[0.3em] uppercase text-xs font-rubik text-white md:pb-5">
          35,000+ already joined
        </h3>
        <h2 className="text-center text-xl font-medium font-rubik md:text-3xl text-white max-w-[400px] mx-auto w-4/5 leading-tight pb-5 ">
          Stay up-to-date with what we're doing
        </h2>
        <form className="flex flex-col max-w-[400px] w-4/5 mx-auto font-rubik gap-4 md:flex-row">
          <input type="email" className="py-3 px-5 rounded-[4px] text-sm placeholder:text-gray-300 flex-grow focus:outline-none invalid:border-Soft-Red border-2 border-transparent" placeholder="Enter your email address" />
          <button className="bg-Soft-Red p-3  text-[hsl(200_100%_98%)] border-2 border-transparent hover:border-Soft-Red hover:bg-[hsl(200_100%_98%)] hover:text-Soft-Red py-3 px-5 text-sm font-medium rounded-[4px]"> Contact Us</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
