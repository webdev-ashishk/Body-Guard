import successCount from '../data/successCount.json';
export default function SuccessCount() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {successCount.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 hover:scale-105 transform transition duration-300 ease-in-out "
            >
              <div className="text-6xl mb-4 text-blue-500">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-800">
                {stat.number}
              </div>
              <p className="text-lg text-gray-600">{stat.pname}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
