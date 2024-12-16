import { ServicesType } from '../utils/Services';
export default function InsideOurServices(servicesData: ServicesType) {
  // TODO HERE IS LOGIC TO FIND DATA WRITE WAY !
  // console.log(servicesData?.servicesData[0]);
  // const { id, serviceImage, serviceName, serviceDescription } =
  //   servicesData?.servicesData[0];
  // console.log(id, serviceImage, serviceName, serviceDescription);
  const myServiceData = servicesData.servicesData;
  console.log(myServiceData);
  return (
    <div>
      <h1 className="bg-white text-black">Inside Our Services</h1>
      {/* TODO BOTH MAPS ARE GOOD ! */}
      {/* <div>
        {myServiceData.map((element: ServicesType) => (
          <div key={element.id}>{element.id}</div>
        ))}
      </div> */}
      <div>
        {myServiceData.map((service: ServicesType) => {
          return <div key={service.id}>{service.id}</div>;
        })}
      </div>
    </div>
  );
}
