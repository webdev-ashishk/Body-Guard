'use client';
import { useState } from 'react';
import _FAQS from '../../data/FAQS.json';
export default function FAQS() {
  const [activeId, setActiveId] = useState(null);
  const toggleAnswers = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };
  return (
    <div className="text-white bg-[#1d232a]">
      <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] p-3 font-extrabold text-center">
        TOP 14 Frequently Asked Questions
      </h1>
      <ul className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
        {_FAQS?.faqs.map((element) => (
          <li
            key={element.id}
            className="text-2xl bg-[#a87552] p-2 m-4 md:m-8 lg:m-10 rounded-2xl"
            onClick={() => toggleAnswers(element.id)}
          >
            <p className=" rounded-lg p-2 m-2 flex justify-between">
              <span>{element.question}</span>
              <span className="text-4xl">
                {activeId === element.id ? '-' : '+'}
              </span>
            </p>
            {activeId === element.id && (
              <i className="pl-2 m-2"> {element.answer}</i>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
