'use client';
import { MdOutlineClose } from 'react-icons/md';

export default function Offers() {
  const handleClicked = () => {
    const offerDiv = document.getElementById('offer');
    offerDiv!.style.display = 'none';
  };
  return (
    <div
      className="text-[#54473f] text-[1.25rem] font-extrabold bg-[#cbd2a4]"
      id="offer"
    >
      <div className="flex justify-between items-center mx-16 p-3">
        <div>
          <p>Grab the Winter sale offer now ......</p>
        </div>
        <div className="text-4xl cursor-pointer text-[#54473f]">
          <MdOutlineClose onClick={handleClicked} />
        </div>
      </div>
    </div>
  );
}
