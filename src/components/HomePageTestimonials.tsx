import testimonials from '../data/homePageTestimonials.json';
export default function HomePageTestimonials() {
  console.log(testimonials);
  return (
    <div className="bg-[#1e293b] w-11/12 md:w-10/12 lg:9/12 mx-auto pb-10">
      <h1 className="text-center text-[2rem] font-extrabold text-white pt-10 md:pt-15 lg:pt-20">
        What <span className="text-[#ff914d]"> Clients Say </span>
      </h1>
      <p className="text-center text-[1.2rem] font-extrabold text-white my-2">
        Our clients trust Royal Bouncer Group for top-notch security services.
        See what they have to say about their experience with us
      </p>
      <div className="flex justify-center items-center flex-wrap">
        {/* <div>
          <div className="i"></div>
          <div className="writerName"></div>
          <div className="quotIcons"></div>
          <div className="clientText"></div>
          <div className="ratting" ></div>
        </div> */}
        {testimonials.map((testimonial) => {
          return (
            <div
              key={testimonial.id}
              className="w-[400px] rounded-lg p-4 text-white m-3 bg-[#1d232a]"
            >
              <ul className="">
                <li className="text-[1.4rem] font-bold text-orange-600">
                  {testimonial.userName}
                </li>
                <li className="text-[1.1rem] pl-5 pb-2 text-gray-300 font-bold">
                  - {testimonial.serviceName}
                </li>
                <li className="text-gray-400">{testimonial.description}</li>
                <li className="text-4xl tracking-widest">
                  {testimonial.rating}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
