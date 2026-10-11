export const ServiceCard = ({
  title,
  description,
  imageUrl,
  extra,
}: {
  title: string;
  description: string;
  imageUrl: string;
  extra: { title: string; description: string }[];
}) => {
  return (
    <div className="w-full p-4 md:p-6 bg-card-background rounded-xl border border-shiny-text">
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 xl:gap-20">
        <div className="flex-1 flex flex-col gap-4 sm:gap-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            {title}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-card-text font-light leading-relaxed">
            {description}
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover rounded-lg"
          />
          {extra.length > 0 && (
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {extra.map((item, index) => (
                <div key={index} className="text-center sm:text-left">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-400 mb-1 sm:mb-2">
                    {item.title}
                  </h4>
                  <p className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-medium">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
