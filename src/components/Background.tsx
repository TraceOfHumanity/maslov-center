import { Silk } from "./Silk";

export const Background = () => {
  return (
    <Silk
      speed={4}
      scale={0.7}
      color="#655247"
      noiseIntensity={0.7}
      rotation={2}
      minBrightness={0.5}
    />
  );
};
