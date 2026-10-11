import yog from "../assets/yog.svg";
import tea from "../assets/tea.svg";
import wellness from "../assets/wellness.svg";
import yogaMat from "../assets/yoga-mat.svg";
import workoutStretching from "../assets/workout-stretching.svg";
import muscle from "../assets/muscle.svg";

const slides = [muscle, wellness, yog, tea, workoutStretching, yogaMat];

export const Ticker = () => {
  return (
    <section className="w-full py-2 sm:py-4 md:py-6">
      <div
        className="mx-auto w-full max-w-4xl min-h-16 sm:min-h-20 overflow-hidden flex gap-[5vw]"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
        }}
      >
        <div className="flex animate-infinite-slider gap-[5vw]">
          {slides.map((slide, index) => (
            <div
              className="flex items-center mx-5 sm:mx-0 "
              key={`first-${index}`}
            >
              <div className="flex size-16 sm:size-20 items-center justify-center rounded-2xl sm:rounded-3xl bg-neutral-900 p-3 sm:p-4 transition-all duration-300">
                <img
                  src={slide}
                  className="h-full w-full object-contain"
                  alt={slide}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex animate-infinite-slider gap-[5vw]">
          {slides.map((slide, index) => (
            <div
              className="flex items-center mx-5 sm:mx-0"
              key={`first-${index}`}
            >
              <div className="flex size-16 sm:size-20 items-center justify-center rounded-2xl sm:rounded-3xl bg-neutral-900 p-3 sm:p-4 transition-all duration-300">
                <img
                  src={slide}
                  className="h-full w-full object-contain"
                  alt={slide}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
