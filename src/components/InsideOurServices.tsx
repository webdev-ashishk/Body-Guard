import Image from 'next/image';
import services from '../data/homePageServices.json';
export default function InsideOurServices() {
  console.log(services);
  return (
    <div className="inside-our-services">
      <div className="flex gap-4 flex-wrap justify-center items-center">
        {services.map(({ id, icon, serviceName, serviceDescription }) => {
          return (
            <div
              key={id}
              className="shadow-inner w-[300px] h-[400px] rounded-lg bg-gray-700 hover:bg-gray-600"
            >
              <Image
                src={icon}
                alt="serviceImage"
                width={300}
                height={200}
                className="rounded-t-lg"
                id="OverServiceImage"
              />
              <ul>
                <li className="font-extrabold text-[1.2rem] text-[#ff914d] px-2">
                  {serviceName}
                </li>
                <li className="pl-3">{serviceDescription}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
