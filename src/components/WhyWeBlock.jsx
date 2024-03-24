import React from 'react';

import { ContentBlock } from 'ui-elements/ContentBlock';

export const WhyWeBlock = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <ContentBlock className="col-start-1 col-end-3">
        <h2 className="text-center">Чому саме ми?</h2>
      </ContentBlock>
      <img src="/assets/whyWe.jpg" alt="" />
    </div>
  );
};
