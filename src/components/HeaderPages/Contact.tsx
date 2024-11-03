import Link from 'next/link';

const Contact = () => {
  return (
    <>
      <div className="page1">
        <div className="p-16 bg-customGray text-white flex justify-around items-center">
          <h1 className="text-2xl">CONTACT</h1>
          <h2>
            <Link href="/">HOME</Link> /
            <strong className="text-yellow-600"> CONTACT</strong>
          </h2>
        </div>
      </div>
      <div
        className="sm:bg-green-400 md:bg-red-400 lg:bg-blue-300 xl:bg-yellow-700 bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url('https://www.shutterstock.com/image-vector/funny-cartoon-character-strong-bodyguard-vector-714575038')",
        }}
      >
        Content here
      </div>
      <div className="page2 mt-12 text-gray-700">
        <p>📍 Address: 1234 Security Lane, Suite 100, City, State, Zip</p>
        <p>📞 Phone: (123) 456-7890</p>
        <p>✉️ Email: info@yourcompany.com</p>
      </div>
    </>
  );
};

export default Contact;
