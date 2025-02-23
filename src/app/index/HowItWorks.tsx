'use client';

import { Tabs } from '@/components/ui/tabs';
import Image from 'next/image';

export function HowItWorks() {
  const tabs = [
    {
      title: 'Initial Consultation',
      value: 'product',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Initial Consultation</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Data Analysis & Strategy',
      value: 'services',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Data Analysis & Strategy</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Implementation',
      value: 'playground',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Implementation</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Ongoing Support & Optimization',
      value: 'content',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Ongoing Support & Optimization</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div id="howitworks">
      <h1 className="pt-36 text-pretty text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-balance font-sans text-center">
        How It Works
      </h1>

      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-between my-24 pb-28">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
