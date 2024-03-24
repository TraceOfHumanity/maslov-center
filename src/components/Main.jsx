import React from 'react';

import { ContentBlock } from 'ui-elements/ContentBlock';

import { Banner } from './Banner';
import { WhyWeBlock } from './WhyWeBlock';

export const Main = () => {
  return (
    <div className="flex flex-auto flex-col gap-5">
      <Banner />
      <WhyWeBlock />¿{/* <ContentBlock></ContentBlock> */}
    </div>
  );
};
