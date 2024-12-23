import { Link } from 'lucide-react';
import Image from 'next/image';
import image1 from '../../../public/images/gallery/image1.png';
import image10 from '../../../public/images/gallery/image10.png';
import image2 from '../../../public/images/gallery/image2.png';
import image3 from '../../../public/images/gallery/image3.png';
import image4 from '../../../public/images/gallery/image4.png';
import image5 from '../../../public/images/gallery/image5.png';
import image6 from '../../../public/images/gallery/image6.png';
import image7 from '../../../public/images/gallery/image7.png';
import image8 from '../../../public/images/gallery/image8.png';
import image9 from '../../../public/images/gallery/image9.png';

export default function Gallery() {
  return (
    <section>
      <div className="page1">
        <div className="p-10 bg-customGray text-white flex justify-around items-center currentPageOne">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Our Photo Gallery
          </h1>
          <h2>
            <Link href="/" className="inline-block mr-2">
              Home
            </Link>
            /<span className="text-yellow-600"> GALLERY</span>
          </h2>
        </div>
      </div>
      <div className="w-11/12 md:w-9/12 lg:w-8/12 mx-auto flex justify-center flex-wrap items-center">
        <Image
          src={image1} // Replace with your image path
          alt="Professional Security Team"
          className="rounded-lg shadow-lg w-full max-w-md lg:max-w-full"
          width={100}
          height={100}
          unoptimized={true}
          id="image1"
        />
        <Image
          src={image2} // Replace with your image path
          alt="Professional Security Team"
          className="rounded-lg shadow-lg w-full max-w-md lg:max-w-full"
          width={100}
          height={100}
          unoptimized={true}
          id="image2"
        />
        <Image
          src={image3} // Replace with your image path
          alt="Professional Security Team"
          className="rounded-lg shadow-lg w-full max-w-md lg:max-w-full"
          width={100}
          height={100}
          unoptimized={true}
          id="image3"
        />
        <Image
          src={image4} // Replace with your image path
          alt="Professional Security Team"
          className="rounded-lg shadow-lg w-full max-w-md lg:max-w-full"
          width={100}
          height={100}
          unoptimized={true}
          id="image4"
        />
        <Image
          src={image5} // Replace with your image path
          alt="Professional Security Team"
          className="rounded-lg shadow-lg w-full max-w-md lg:max-w-full"
          width={100}
          height={100}
          unoptimized={true}
          id="image5"
        />
        <Image
          src={image6} // Replace with your image path
          alt="Professional Security Team"
          className="rounded-lg shadow-lg w-full max-w-md lg:max-w-full"
          width={100}
          height={100}
          unoptimized={true}
          id="image6"
        />
        <Image
          src={image7} // Replace with your image path
          alt="Professional Security Team"
          className="rounded-lg shadow-lg w-full max-w-md lg:max-w-full"
          width={100}
          height={100}
          unoptimized={true}
          id="image7"
        />{' '}
        <Image
          src={image8} // Replace with your image path
          alt="Professional Security Team"
          className="rounded-lg shadow-lg w-full max-w-md lg:max-w-full"
          width={100}
          height={100}
          unoptimized={true}
          id="image8"
        />{' '}
        <Image
          src={image9} // Replace with your image path
          alt="Professional Security Team"
          className="rounded-lg shadow-lg w-full max-w-md lg:max-w-full"
          width={100}
          height={100}
          unoptimized={true}
          id="image9"
        />{' '}
        <Image
          src={image10} // Replace with your image path
          alt="Professional Security Team"
          className="rounded-lg shadow-lg w-full max-w-md lg:max-w-full"
          width={100}
          height={100}
          unoptimized={true}
          id="image10"
        />
      </div>
    </section>
  );
}
