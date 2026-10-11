export const Header = () => {
  return (
    <header className="w-full flex justify-end items-center">
      <nav>
        <ul className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <li>
            <a href="#about" className="hover:underline text-sm sm:text-base">
              Про нас
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:underline text-sm sm:text-base"
            >
              Послуги
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
