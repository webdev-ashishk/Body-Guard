'use client';
import _FAQS from '../../data/FAQS.json';
export default function FAQS() {
  const handleQA = (e) => {
    console.log(e.target.innerText);
  };
  return (
    <div className="text-white bg-[#1d232a]">
      <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] p-3 font-extrabold text-center">
        Frequently Asked Questions
      </h1>
      <ul onClick={handleQA} className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
        {_FAQS?.faqs.map((element) => (
          <li
            key={element.id}
            className="text-2xl bg-[#a87552] p-2 m-4 md:m-8 lg:m-10 rounded-2xl"
          >
            <p className=" rounded-lg p-2 m-2 flex justify-between">
              <div>
                <strong>{element.question}</strong>
              </div>
              <div className="text-4xl">+</div>
            </p>
            <p className="px-2 lg:px-3 py-2 rounded-lg">{element.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
