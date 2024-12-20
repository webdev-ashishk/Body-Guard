import MyCarousels from '@/components/MyCarousels';
import OurCommunity from '@/components/OurComminity';
import OurServices from '@/components/OurServices';
import SuccessCount from '@/components/SuccessCount';
import WhyChooseOus from '@/components/WhyChooseOus';
import HomePageTestimonials from '../components/HomePageTestimonials';
import FAQS from './FAQS/page';
import Director from './director/page';
export default function Home() {
  return (
    <div>
      <div>
        <div className="page1">
          <MyCarousels />
        </div>
        <div className="page2 our-services w-full bg-slate-800">
          <OurServices />
        </div>
        <div className="page2.2 w-full bg-slate-700">
          <SuccessCount />
        </div>
        <div className="page3 why-choose-us w-full">
          <WhyChooseOus />
        </div>
        <div className="page4 py-20">
          <OurCommunity />
          <Director />
        </div>
        <div className="page5 testimonials w-full bg-[#1e293b]">
          <HomePageTestimonials />
        </div>
        <div className="page6" id="page4FAQs">
          <FAQS />
        </div>
      </div>
    </div>
  );
}
