import Image from 'next/image';

export default function OurCommunity() {
  return (
    <div>
      <h1 className="text-2xl md:text-3x lg:text-4xl text-orange-600 font-extrabold text-center">
        Our community
      </h1>
      <div className="w-11/12 md:w-10/12 lg:w-10/12 mx-auto flex justify-center lg:justify-between md:justify-between p-16 flex-wrap gap-4">
        <button className="flex items-center justify-between p-2 rounded-full w-80 bg-[#322433]">
          <div>
            <p className="pl-7 text-2xl text-white">Instagram</p>
            <p className="pl-5 text-5xl font-extrabold text-white">34.2K+</p>
            <p className="pl-3 text-white">Subscribers</p>
          </div>
          <div>
            <Image
              src="https://do6gp1uxl3luu.cloudfront.net/assets/instagram_landing.webp"
              alt="youtube"
              width={100}
              height={100}
            />
          </div>
        </button>

        <button className="flex items-center justify-between p-2 rounded-full w-80 bg-[#17202e]">
          <div>
            <p className="pl-7 text-2xl text-white">Facebook</p>
            <p className="pl-5 text-5xl font-extrabold text-white">767+</p>
            <p className="pl-3 text-white">Subscribers</p>
          </div>
          <div>
            <Image
              src="https://png.pngtree.com/png-clipart/20221019/original/pngtree-facebook-social-media-icon-png-image_8704814.png"
              alt="youtube"
              width={100}
              height={100}
            />
          </div>
        </button>
        <button className="flex items-center justify-between p-2 rounded-full w-80 bg-[#2e232a]">
          <div>
            <p className="pl-7 text-2xl text-white">Youtube</p>
            <p className="pl-5 text-5xl font-extrabold text-white">181+</p>
            <p className="pl-3 text-white">Subscribers</p>
          </div>
          <div>
            <Image
              src="https://do6gp1uxl3luu.cloudfront.net/assets/youtube_landing.webp"
              alt="youtube"
              width={100}
              height={100}
            />
          </div>
        </button>
      </div>
    </div>
  );
}
