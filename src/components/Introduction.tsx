import Image from 'next/image';
import HeroImage from '../../public/images/heroImage.png';
export default function Introduction() {
  return (
    <section className="bg-[#1d232a] py-16 px-6 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-extrabold mb-6">
            Welcome to{' '}
            <span className="text-blue-500">Your Trusted Security Partner</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            At <span className="font-bold">[Your Business Name]</span>, we
            specialize in providing top-notch security solutions tailored to
            meet the needs of businesses, events, and individuals. With a team
            of highly trained professionals and years of experience, we ensure
            your safety is always our priority.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            From safeguarding your assets to managing large-scale events, we
            take pride in delivering reliable, efficient, and professional
            security services. Trust us to protect what matters most to you.
          </p>
          <div className="mt-8">
            <a
              href="#services"
              className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Explore Our Services
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src={HeroImage} // Replace with your image path
            alt="Professional Security Team"
            className="rounded-lg shadow-lg w-full max-w-md lg:max-w-full"
            width={100}
            height={100}
            unoptimized={true}
          />
        </div>
      </div>
    </section>
  );
}
