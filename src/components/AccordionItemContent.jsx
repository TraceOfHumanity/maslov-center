import React from 'react';

import { cn } from 'utils/cn';

import { ContentBlock } from 'ui-elements/ContentBlock';

export const AccordionItemContent = ({ serviceDescription, variants }) => {
  return (
    <div className="accordionContent flex h-0 flex-col gap-5 overflow-hidden">
      <p>{serviceDescription}</p>
      {variants?.map((variant, index) => (
        <div>
          <h4 className="mb-5 text-center" key={index}>
            {variant.title}
          </h4>
          <div className="relative">
            <ContentBlock
              className={cn(
                '',
                index % 2 === 0 ? 'flex-row-reverse ' : 'flex-row',
              )}
            >
              <div
                className={cn(
                  'z-10 inline-block sm:max-w-[400px]',
                  index % 2 === 0
                    ? 'sm:float-left sm:mr-5'
                    : 'sm:float-right sm:ml-5',
                )}
              >
                <img src={variant.image} alt={variant.title} />
              </div>
              {variant.description}
            </ContentBlock>
          </div>
        </div>
      ))}
    </div>
  );
};
