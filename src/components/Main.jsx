import React from 'react';

import { ContentBlock } from 'ui-elements/ContentBlock';

import { Banner } from './Banner';
import { Services } from './Services';
import { WhyWeBlock } from './WhyWeBlock';

export const Main = () => {
  return (
    <div className="flex flex-auto flex-col gap-5">
      <Banner />
      <WhyWeBlock />
      <Services />
      {/* <ContentBlock></ContentBlock> */}
    </div>
  );
};
