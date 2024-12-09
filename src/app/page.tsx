import OurServices from '@/components/OurServices';
import WhyChooseOus from '@/components/WhyChooseOus';
import WhyUs from '@/components/WhyUs';
import Image from 'next/image';
import welcomeImage from '../../public/images/welcomeImage.jpeg';
import homePageData from '../data/homePage2.json';
export default function Home() {
  return (
    <div>
      <div>
        {/* carousel */}
        <div className="page1">{/* <MyCarousels /> */}</div>
        <div className="page2 bg-yellow-600 dark:bg-gray-500 flex flex-wrap w-11/12 border-2 border-red-600 justify-center m-auto items-center overflow-hidden">
          {homePageData.map(({ id, title, description }) => {
            return (
              <div
                key={id}
                className="text-center max-w-md h-56 border-2 border-black m-2 flex flex-col justify-center items-center flex-wrap hover:bg-gray-400 hover:rounded-lg hover:text-black"
              >
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-left pl-8 mt-3">{description}</p>
              </div>
            );
          })}
        </div>
        <div className="page3 w-11/12  grid grid-cols-1 md:grid-cols-2 m-auto">
          <div className="image  border-2 border-white">
            <Image src={welcomeImage} alt="welcome" />
          </div>
          <div className="text  bg-blue-500 ">
            <h1 className="text-2xl font-bold text-center">
              Welcome to Bouncer
            </h1>
            <p className="px-4 mt-2">
              We, SS PATNA BOUNCER are incepted in 2019. Since the first day of
              our incorporation, we are rendering safety and security solutions
              to all housing and commercial area. Our company is the leading
              service provider of Bouncers Security Guard, Security Guard,
              Personal Security Officer, Security Supervisor, Security Gunman,
              Office Boys and Ladies Security Guard. All these rendered services
              are highly admired by the customers for providing complete safety
              and satisfaction to all clients. Our selected guards are highly
              experienced and show their lenient behavior to the clients.
              Keeping surrounding under control, these services are provided to
              the clients at low market prices. In addition to this, we render
              these services within assured time frame. We provide disciplined,
              well trained bodyguards, bouncers and armed security to our
              clients This is a specialized field which requires expert
              communication, management and thorough planning. Private security
              officers, bouncers, close protection officers, bodyguards and
              armed gunmen that maintain the protocol under the toughest
              situations. Female security guard and bouncer specially for women.
              Worked with foreigners, coming from different parts of world. We
              here to make them feel safe. Transferring or safely allocation of
              people, resources is becoming an increasing difficult task in the
              cosmopolitan of Patna, Delhi and many other cities of growing
              India.
            </p>
          </div>
        </div>
        <div className="page4">
          <OurServices />
        </div>
        <div className="page5"></div>
        <div className="page6">
          <WhyChooseOus />
        </div>
        <div className="page7">
          <WhyUs />
        </div>
      </div>
    </div>
  );
}
