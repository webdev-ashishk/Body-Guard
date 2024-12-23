'use client';
import { useState } from 'react';
import _FAQS from '../../data/FAQS.json';
export default function FAQS() {
  const [activeId, setActiveId] = useState(null);
  const toggleAnswers = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };
  return (
    <div className="text-white bg-[#1d232a] py-5">
      <h1 className="text-[1.4rem] md:text-[2rem] lg:text-[3rem] p-3  mb-16 font-extrabold text-center">
        Frequently Asked Questions
      </h1>
      <ul className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
        {_FAQS?.faqs.map((element) => (
          <li
            key={element.id}
            className="text-1xl md:text-2xl bg-gray-700 my-4 rounded-2xl"
            onClick={() => toggleAnswers(element.id)}
          >
            <p className=" rounded-lg p-2 m-2 text-[1.1rem] md:text-[1.5rem] flex justify-between">
              <span>{element.question}</span>
              <span className="text-2xl md:text-4xl">
                {activeId === element.id ? '-' : '+'}
              </span>
            </p>
            {activeId === element.id && (
              <p className="pl-5 text-green-400">
                ➥ <i> {element.answer} </i>
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
