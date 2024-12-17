import MyCarousels from '@/components/MyCarousels';
import OurServices from '@/components/OurServices';
import WhyChooseOus from '@/components/WhyChooseOus';
import HomePageTestimonials from '../components/HomePageTestimonials';
export default function Home() {
  return (
    <div>
      <div>
        {/* carousel */}
        <div className="page1">
          <MyCarousels />
        </div>
        <div className="page2 our-services w-full bg-slate-800">
          <OurServices />
        </div>
        <div className="page3 why-choose-us w-full">
          <WhyChooseOus />
        </div>
        <div className="page4 testimonials w-full bg-[#1e293b]">
          <HomePageTestimonials />
        </div>
      </div>
    </div>
  );
}
