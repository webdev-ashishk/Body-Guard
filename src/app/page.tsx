import Achievements from '@/components/Achievement';
import Introduction from '@/components/Introduction';
import MyCarousels from '@/components/MyCarousels';
import OurCommunity from '@/components/OurComminity';
import OurServices from '@/components/OurServices';
import WhyChooseOus from '@/components/WhyChooseOus';
import HomePageTestimonials from '../components/HomePageTestimonials';
import FAQS from './FAQS/page';
import Director from './director/page';
export default function Home() {
  return (
    <>
      <div className="page1 hero-section">
        <MyCarousels />
        <Introduction />
      </div>

      <div className="page2 our-services w-full bg-slate-800" id="services">
        <OurServices />
      </div>
      <div className="page3 why-choose-us w-full">
        <WhyChooseOus />
      </div>
      <div className="page4 w-full bg-[#1d232a]">
        <Achievements />
      </div>
      <div className="page5 testimonials w-full bg-[#1e293b]">
        <HomePageTestimonials />
      </div>
      <div className="page6 py-5">
        <OurCommunity />
      </div>
      <div className="page7 py-20">
        <Director />
      </div>
      <div className="page8" id="page4FAQs">
        <FAQS />
      </div>
    </>
  );
}
