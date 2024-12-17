import Image from 'next/image';
import chooseUsDatas from '../data/homePage3WhyChooseUs.json';
export default function WhyChooseOus() {
  console.log(chooseUsDatas);
  return (
    <div className="text-white w-10/12 mx-auto my-4">
      <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-center p-6">
        WHY CHOOSE
        <span className="font-bold text-[#e6b008]"> ROYAL BOUNCER GROUP</span>
      </h2>
      <div className="flex gap-4 flex-wrap mx-auto">
        {chooseUsDatas.map((data) => {
          return (
            <div
              key={data.id}
              className="w-1/3 mx-auto border-2 flex justify-center items-start"
            >
              <div className="bg-black" id="whyChooseUsImage">
                <Image
                  src={data.image_url}
                  alt="text"
                  width={100}
                  height={100}
                />
              </div>
              <div className="">
                <p className="text-2xl font-bold">{data.title}</p>
                <p>{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
