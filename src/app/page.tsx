import OurServices from '@/components/OurServices';
import WhyChooseOus from '@/components/WhyChooseOus';
import WhyUs from '@/components/WhyUs';
export default function Home() {
  return (
    <div>
      <div>
        {/* carousel */}
        <div className="page1">{/* <MyCarousels /> */}</div>
        <div className="page2OurServices w-full bg-gray-400">
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
