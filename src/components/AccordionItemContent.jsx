import React from 'react';
import { useTranslation } from 'react-i18next';

import { cn } from 'utils/cn';

import { ContentBlock } from 'ui-elements/ContentBlock';

export const AccordionItemContent = ({
  title,
  serviceDescription,
  variants,
}) => {
  const { t } = useTranslation();
  return (
    <div className="accordionContent flex h-0 flex-col gap-5 overflow-hidden">
      <p>{serviceDescription}</p>
      {/* {variants?.map((variant, index) => (
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
      ))} */}
      {title === t('services.titles.phytotherapyTitle') ? (
        <ContentBlock className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <img className="lg:col-span-1" src="/assets/tea1.jpg" alt="" />
          <div className="lg:col-start-2 lg:col-end-4">
            {variants?.map((variant, index) => (
              <h4>{variant.title}</h4>
            ))}
          </div>
        </ContentBlock>
      ) : (
        variants?.map((variant, index) => (
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
        ))
      )}
    </div>
  );
};
