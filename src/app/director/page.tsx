'use client';
import Image from 'next/image';
import './directorStyle.css';
export default function Director() {
  return (
    <div className="bg-[#1d232a] text-white w-full md:w-[60rem]  lg:w-[50rem] mx-auto  p-2">
      <h1 id="h11">Meet the Directors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full mx-auto md:w-[90%]">
        <div id="firstDiv" className="inside-director">
          <Image
            src="https://drive.usercontent.google.com/download?id=1NUopFAS13S6LYvv0I3RkC_8Ps0SLZ14T&export=view&authuser=0"
            alt="text"
            width={100}
            height={100}
            className="w-[60%] md:w-[80%] lg:w-full h-full rounded-lg"
          />
        </div>
        <div id="secondDiv" className="">
          <p className="text-[1.4rem] font-bold text-orange-600 pl-3">
            <strong> Dear valuable partners, Founder & Ceo</strong>
          </p>
          <p className="p-2 ml-2">
            Royal Bouncer Group Pvt Ltd . We hereby take this opportunity to
            sincerely thank to all our existing and non-existing Clients and as
            well as our educated & experienced candidates for your trust and
            co-operation during more than 10 years with Royal Bouncer PVT. LTD.
            As a leading manpower company our company’s major commitment is to
            expand its capabilities. These capabilities include our expertise in
            supplying manpowers for the Construction, Engineering, Oil & Gas,
            Manufacturing, Agriculture, Information Technology, Mining, Retail,
            Hospitality, and Healthcare Industries... .
          </p>
        </div>
      </div>
    </div>
  );
}
