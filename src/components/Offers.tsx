'use client';
import { MdOutlineClose } from 'react-icons/md';

export default function Offers() {
  const handleClicked = () => {
    const offerDiv = document.getElementById('offer');
    offerDiv!.style.display = 'none';
  };
  return (
    <div
      className="text-[#54473f] text-[1rem] md:text-[1.25rem] font-extrabold bg-[#cbd2a4] w-full md:w-10/12 m-auto"
      id="offer"
    >
      <div className="flex w-full justify-between items-center p-3">
        <div>
          <p>Grab the Winter sale offer now ......</p>
        </div>
        <div className="text-1xl md:text-2xl cursor-pointer text-[#54473f]">
          <MdOutlineClose onClick={handleClicked} />
        </div>
      </div>
    </div>
  );
}
