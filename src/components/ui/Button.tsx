interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: React.ElementType;
  className?: string;
  speed?: string;
  thickness?: number;
  children: React.ReactNode;
};

export const Button = ({
  className = "",
  speed = "6s",
  thickness = 1,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`relative inline-block overflow-hidden rounded-full cursor-pointer ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...rest.style,
      }}
      {...rest}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, var(--color-primary), transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, var(--color-primary), transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="relative z-1 bg-black border border-neutral-800 text-white text-center text-sm sm:text-base md:text-lg py-2 px-8 rounded-full">
        {children}
      </div>
    </button>
  );
};
