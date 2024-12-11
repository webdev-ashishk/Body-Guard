import Image from 'next/image';
import gpayImage from '../../../public/images/GpayImage-removebg-preview.png';
import qrCode from '../../../public/images/qrcode.png';
import UPI from '../../../public/images/UPI.png';
export default function PayNow() {
  return (
    <>
      <h1 className="text-blue-400 text-center text-2xl md:text-3xl font-semibold m-2 p-2">
        Share the screenshot or Transaction ID at
        <span className="text-green-300"> 8789-0333-03</span> We Will Provide
        you a Receipt .
      </h1>
      <div className="w-[8/12] md:w-6/12 mx-auto">
        <div className="w-[8/12] md:w-[6/12] mx-auto flex justify-center items-center">
          <div>
            <Image src={gpayImage} alt="gpayImage" className="w-44" />
            <Image
              src={qrCode}
              alt="text"
              className="rounded-2xl text-center w-[300px]"
            />
          </div>
        </div>
        <div className="w-[8/12] md:w-[6/12] flex justify-center flex-col p-5 items-center">
          <Image src={UPI} alt="upi id" className="w-44" />
          <div className="px-4 py-3 lg:py-4 m-2  rounded-full border-2 text-2xl md:text-[2rem] lg:text-[3rem] font-bold text-orange-500 mt-5 hover:text-green-300 hover:border-green-500">
            7905101205
            <span className="text-green-400">@ybl</span>
          </div>
        </div>
      </div>
    </>
  );
}
