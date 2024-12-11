'use client';
import { ImWhatsapp } from 'react-icons/im';

export default function ChatWithUs() {
  function handleOpenWhatsapp() {
    const phoneNumber = '+918604600914';
    const url = `whatsapp://send?phone=${phoneNumber}&text=hi`;

    window.location.href = url;
  }
  return (
    <div
      className="text-white border-2 bg-[#8a4319] px-3 py-2 m-2 font-extrabold rounded-full"
      onClick={handleOpenWhatsapp}
    >
      <ImWhatsapp className="align-middle inline-block bg-green-500 rounded-full" />
      <button className="ml-2 align-middle inline-block">Chat With Us</button>
    </div>
  );
}
