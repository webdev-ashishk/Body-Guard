import successCount2 from '../data/successCount.json';
export default function SuccessCount2() {
  console.log(successCount2);
  return (
    <div className="text-white w-11/12 md:w-10/12 lg:w-10/12 mx-auto">
      <h1 className="text-4xl font-extrabold text-center py-8 my-3">
        Our <span className="text-orange-500"> Achievements </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-20">
        {successCount2.map((element) => (
          <div
            key={element.id}
            className="text-[] bg-[#384350] p-2 text-center rounded-lg m-2 hover:bg-slate-900"
          >
            <p className="text-5xl pb-3 pt-3">{element.icon}</p>
            <p className="font-bold text-4xl text-blue-400">{element.number}</p>
            <p className="text-[#9ca3af] text-[1.1rem]">{element.pname}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
