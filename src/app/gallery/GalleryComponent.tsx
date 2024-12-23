import Image from 'next/image';
import Link from 'next/link';
import { IoHomeOutline } from 'react-icons/io5';
import gallerys from '../../data/galleryData.json';
export default function Gallery() {
  console.log(gallerys);
  return (
    <div className="text-white text-2xl">
      <div className="page1">
        <div className="p-10 bg-customGray text-white flex justify-around items-center currentPageOne">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Our Photo Gallery
          </h1>
          <h2>
            <Link href="/" className="inline-block mr-2">
              <IoHomeOutline />
            </Link>
            / <span className="text-yellow-600"> GALLERY</span>
          </h2>
        </div>
      </div>
      <div className="page2 p-3">
        <div className="w-full md:w-11/12 lg:10/12 flex justify-center items-center flex-wrap gap-2 mx-auto">
          {gallerys.map(({ id, imageUrl }) => {
            return (
              <div key={id} className="border-2 rounded-lg">
                <Image
                  src={imageUrl}
                  alt="gImage"
                  width={100}
                  height={100}
                  id="insideGallery"
                  className="rounded-lg hover:zoom-in-50"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
