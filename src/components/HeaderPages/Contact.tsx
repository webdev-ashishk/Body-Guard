import Image from 'next/image';
import Link from 'next/link';
import contactData from '../../data/homePageContact.json';
const Contact = () => {
  console.log(contactData);
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
      <div className="w-full bg-[#1d232a]">
        <div className="bg-[#1d232a]  flex flex-wrap w-full md:w-10/12 lg:w-9/12 justify-center items-center mx-auto text-white my-2">
          {contactData?.map((element) => (
            <div
              key={element?.id}
              className="border-2 border-[#ff914d] border-dotted w-[400px] h-[200px] m-2 p-2 rounded-lg hover:bg-[#363f4a]"
            >
              <div className="w-[300px] flex justify-center items-center">
                <Image
                  src={element.icons}
                  alt="task icons"
                  width={100}
                  height={100}
                  className="text-orange-400"
                />
                <span className="font-bold ml-3">{element.title}</span>
              </div>
              <div className="text-center text-1rem font-bold">
                {element.description}
                <span className="text-[1.1rem] font-bold mx-6 text-white">
                  {element?.hours}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
