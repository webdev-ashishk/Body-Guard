import InsideOurServices from './InsideOurServices';
export default function OurServices() {
  return (
    <div
      className="bg-slate-800 w-11/12 m-auto text-white"
     
    >
      <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-center p-6 pt-20">
        OUR <span className="text-yellow-500"> SERVICES</span>
      </h1>
      <h2 className="text-center mt-2 text-[1.3rem] mb-5">
        We offer a wide range of security services with a customized security
        solution to protect the people and their valuable assets.
      </h2>
      <InsideOurServices />
    </div>
  );
}
