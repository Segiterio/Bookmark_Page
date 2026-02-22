import { useState } from "react";

const toggleFaq = (
  state: boolean,
  setState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setState(!state);
};

const Faq = ({ ques, ans }: { ques: string; ans: string }) => {
  const [showAns, setShowAns] = useState(false);
  return (
    <li className="text-sm md:text-lg border-b first-of-type:border-t ">
      <div
        className="flex justify-between gap-5 py-4 font-rubik items-start group cursor-pointer md:pr-4"
        onClick={() => toggleFaq(showAns, setShowAns)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleFaq(showAns, setShowAns);
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={showAns}
        aria-controls="faq-answer-id"
      >
        <p className=" text-Very-Dark-Blue group-hover:text-red-500 ">{ques}</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          className={` relative top-1 md:top-2 ${
            showAns ? "stroke-red-500 rotate-180" : "stroke-[#5267DF]"
          } `}
        >
          <path fill="none" strokeWidth="3" d="M1 1l8 8 8-8" />
        </svg>
      </div>
      {showAns && (
        <div className="text-Grayish-Blue font-rubik py-4 leading-loose">
          {ans}
        </div>
      )}
    </li>
  );
};

export default Faq;
