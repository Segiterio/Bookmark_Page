import { useState } from "react";

const faqs_data = [
  {
    id: 1,
    ques: "What is Bookmark?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    id: 2,
    ques: "How can I request a new browser?",
    ans: "  Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    id: 3,
    ques: "Is there a mobile app?",
    ans: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    id: 4,
    ques: "What about other Chromium browsers?",
    ans: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

const toggleFaq = (
  state: boolean,
  setState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setState(!state);
};

const FAQ = () => {
  return (
    <div className="py-12  lg:py-24">
      <div className="flex flex-col gap-10 pb-12 lg:pb-0">
        <div className="flex flex-col justify-center gap-5 max-w-[600px] mx-auto w-4/5  ">
          <h2 className="text-center text-xl font-medium font-rubik md:text-3xl text-Very-Dark-Blue">
            Frequently Asked Questions
          </h2>
          <p className="text-center max-w-[540px] leading-relaxed text-Grayish-Blue text-sm font-rubik md:text-lg mx-auto">
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>
        <div className="max-w-2xl w-11/12 mx-auto ">
          {faqs_data.map((faq) => {
            const [showAns, setShowAns] = useState(false);
            return (
              <div
                key={faq.id}
                className="text-sm md:text-lg border-b first-of-type:border-t "
              >
                <div
                  className="flex justify-between gap-5 py-4 font-rubik items-start group cursor-pointer md:pr-4"
                  onClick={() => toggleFaq(showAns, setShowAns)}
                >
                  <p className=" text-Very-Dark-Blue group-hover:text-red-500 ">
                    {faq.ques}
                  </p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                    className={` relative top-1 md:top-2 ${
                      showAns ? "stroke-red-500 rotate-180" : "stroke-[#5267DF]"
                    } `}
                  >
                    <path fill="none" stroke-width="3" d="M1 1l8 8 8-8" />
                  </svg>
                </div>
                {showAns && (
                  <div className="text-Grayish-Blue font-rubik py-4 leading-loose">
                    {faq.ans}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <button className="font-rubik text-xs font-medium bg-Soft-Blue p-3 rounded-[6px] text-[hsl(200_100%_98%)] shadow-[0px_4px_10px_0px_rgb(228,229,246)] border-2 border-transparent hover:border-Soft-Blue hover:bg-[hsl(200_100%_98%)] hover:text-Soft-Blue lg:text-sm self-center">
          More Info
        </button>
      </div>
    </div>
  );
};

export default FAQ;
