// pages/about.tsx

import Head from 'next/head';

const AboutSection = () => {
  return (
    <>
      <Head>
        <title>About Us - Royal Bouncer Group Gopalganj</title>
        <meta
          name="description"
          content="Learn more about Royal Bouncer Group Gopalganj, your trusted security service provider across India."
        />
      </Head>
      <main className="p-6 font-sans bg-gray-900">
        <section className="bg-gray-800 shadow-md rounded-lg p-8 mb-8">
          <h1 className="text-4xl text-center font-bold text-orange-500 mb-4">
            Welcome to Royal Bouncer Group Gopalganj
          </h1>
          <p className="text-gray-100 text-lg">
            At Royal Bouncer Group Gopalganj, we specialize in providing premier
            security services across India. Founded with a commitment to safety
            and professionalism, we are here to meet your unique security needs.
          </p>
        </section>

        <section className="bg-gray-800 shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            Our Services
          </h2>
          <ul className="list-disc list-inside text-gray-100">
            <li>
              Comprehensive Security Solutions for individuals, events, and
              properties
            </li>
            <li>Nationwide Availability for seamless service across India</li>
          </ul>
        </section>

        <section className="bg-gray-800 shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside text-gray-100">
            <li>
              <strong>Professional Team:</strong> Our highly trained
              professionals maintain the highest standards of security and
              professionalism.
            </li>
            <li>
              <strong>Proven Track Record:</strong> Trusted by clients,
              including collaborations with notable personalities like Bhojpuri
              actress Shubhi Sharma.
            </li>
            <li>
              <strong>Client-Centric Approach:</strong> We provide customized
              security solutions tailored to your specific requirements.
            </li>
          </ul>
        </section>

        <section className="bg-gray-800 shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-100 mb-4">
            For inquiries or to book our services, please contact us at:
            <br />
            <strong>Phone:</strong> 8789033303
          </p>
          <p className="text-gray-100 mb-4">
            Stay connected with us on social media:
          </p>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.instagram.com/royal_bouncer_group_gopalganj/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCXJz33AKaPVuXlrXh5qAUKQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
                YouTube
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default AboutSection;
