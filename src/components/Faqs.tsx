import Faq from "./Faq.tsx";

const faqs_data = [
  {
    id: 1,
    ques: "What services do you provide?",
    ans: "We offer a wide range of home repair services including furniture repair, electrical work, modular kitchen maintenance, fittings installation, and general household fixes handled by trained professionals.",
  },
  {
    id: 2,
    ques: "How can I book a service?",
    ans: "You can easily book a service through our website by selecting the service you need and clicking the booking button. Our team will contact you shortly to confirm details and schedule your appointment.",
  },
  {
    id: 3,
    ques: "Do you provide same-day service?",
    ans: "Yes, same-day service is available for many repairs depending on your location and technician availability. We always try our best to resolve urgent issues as quickly as possible.",
  },
  {
    id: 4,
    ques: "Are your technicians experienced and verified?",
    ans: "Absolutely. All our technicians are skilled, background-verified, and experienced in their respective fields to ensure safe, reliable, and high-quality service every time.",
  },
];

const Faqs = () => {
  return (
    <div className="py-12  lg:py-24" id={"faqs"}>
      <div className="flex flex-col gap-10 pb-12 lg:pb-0">
        <div className="flex flex-col justify-center gap-5 max-w-[600px] mx-auto w-4/5  ">
          <h2 className="text-center text-xl font-medium font-rubik md:text-3xl text-Very-Dark-Blue">
            Frequently Asked Questions
          </h2>
          <p className="text-center max-w-[540px] leading-relaxed text-Grayish-Blue text-sm font-rubik md:text-lg mx-auto">
            Find answers to common questions about our repair services, booking
            process, pricing, and technician support. We're here to make your
            experience smooth and hassle-free.
          </p>
        </div>
        <ul className="max-w-2xl w-11/12 mx-auto ">
          {faqs_data.map((faq) => (
            <Faq key={faq.id} ques={faq.ques} ans={faq.ans} />
          ))}
        </ul>
        <button
          id={"contact"}
          className="font-rubik text-xs font-medium bg-Soft-Blue p-3 rounded-[6px] text-[hsl(200_100%_98%)] shadow-[0px_4px_10px_0px_rgb(228,229,246)] border-2 border-transparent hover:border-Soft-Blue hover:bg-[hsl(200_100%_98%)] hover:text-Soft-Blue lg:text-sm self-center"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Faqs;
