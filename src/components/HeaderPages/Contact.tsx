import Link from 'next/link';

const Contact = () => {
  return (
    <>
      <div className="page1">
        <div className="p-16 bg-customGray text-white flex justify-around items-center currentPageOne">
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
    </>
  );
};

export default Contact;
