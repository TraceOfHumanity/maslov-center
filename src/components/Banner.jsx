import React from 'react';

import { Button } from 'ui-elements/Button';

export const Banner = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2 pt-[5vw] pb-[5vw] md:gap-3 lg:gap-4">
        <h1 className="text-center">
          Ваш шлях до повного оздоровлення починається тут!
        </h1>
        <h4 className="max-w-3xl text-center">
          Відновлення здоров'я - це процес, який вимагає часу та терпіння. Наші
          експерти знають, як допомогти вам пройти цей шлях, щоб ви знову могли
          насолоджуватися повноцінним життям.
        </h4>
      </div>
    </div>
  );
};
