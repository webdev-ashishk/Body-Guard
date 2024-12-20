import Image from 'next/image';
import chooseUsDatas from '../data/homePage3WhyChooseUs.json';
export default function WhyChooseOus() {
  console.log(chooseUsDatas);
  return (
    <div className="text-white w-11/12 md:w-11/12 lg:w-10/12 mx-auto my-4">
      <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-center p-6">
        WHY CHOOSE
        <span className="font-bold text-[#e6b008]"> ROYAL BOUNCER GROUP</span>
      </h2>
      <div className="flex justify-center items-center flex-wrap gap-4 lg:grid lg:grid-cols-2">
        {chooseUsDatas.map((data) => {
          return (
            <div
              key={data.id}
              className="w-[25rem] mx-auto hover:bg-gray-700 rounded-lg flex justify-center items-start p-2"
            >
              <div className="w-full" id="whyChooseUsImage">
                <Image
                  src={data.image_url}
                  alt="text"
                  width={100}
                  height={100}
                  id="OverWhyChooseUsImage"
                  className="w-[8rem]"
                />
              </div>
              <div className="text-left">
                <p className="text-2xl p-2 m-2 font-bold">{data.title}</p>
                <p>{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
