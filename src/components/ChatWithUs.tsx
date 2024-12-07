'use client';
import { ImWhatsapp } from 'react-icons/im';

export default function ChatWithUs() {
  function handleOpenWhatsapp() {
    console.log('whatsapp opened!');
    const phoneNumber = '7905101204';
    const url = `whatsapp://send?phone=${phoneNumber}&text=${'hi'}`;

    window.location.href = url;
  }
  return (
    <div
      className="bg-red-300 px-3 py-2 m-2 font-extrabold rounded-2xl flex items-center justify-center"
      onClick={handleOpenWhatsapp}
    >
      <div className="bg-green-500 rounded-lg">
        <ImWhatsapp />
      </div>
      <button className="ml-1">Chat With Us</button>
    </div>
  );
}
