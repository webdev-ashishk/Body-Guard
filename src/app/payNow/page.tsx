import Image from 'next/image';
import qrCode from '../../../public/images/qrcode.png';
export default function PayNow() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="text-2xl font-extralight m-10">
          Pay By Scanning || UPI ID 7905101205@ybl
        </h1>
        <Image src={qrCode} alt="text" className="rounded-2xl" />
      </div>
    </div>
  );
}
