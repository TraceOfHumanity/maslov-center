export const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-200 !text-sm font-extralight py-4">
      <p className="text-center sm:text-left">
        © Маслов Центр, 2016-{new Date().getFullYear()}. All Rights Reserved.
      </p>
      <div className="flex gap-4">
        <a
          className="hover:underline"
          href="https://www.instagram.com/maslov_centr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className="hover:underline"
          href="https://www.youtube.com/@maslovcenter"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
      </div>
    </div>
  );
};
