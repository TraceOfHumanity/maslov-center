import React from 'react';

import { Banner } from './Banner';
import { Services } from './Services';
import { GallerySlider } from './Slider';
import { WhyWeBlock } from './WhyWeBlock';

export const Main = () => {
  return (
    <div className="flex flex-auto flex-col gap-5">
      <Banner />
      <WhyWeBlock />
      <Services />
      <GallerySlider />
      {/* <ContentBlock></ContentBlock> */}
    </div>
  );
};
