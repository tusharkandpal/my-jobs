import { FeatureCard } from "../feature-card/FeatureCard";

const AboutUs = () => {
  const features = [
    "Get More Visibility",
    "Organize Your Candidates",
    "Verify Their Abilities",
  ];

  const images = [
    "goldline",
    "kanba",
    "ideaa",
    "liva",
    "lighting",
    "kanba-two",
    "solaytic",
    "velocity-nine",
    "ztos",
  ];

  return (
    <div className="px-36 bg-sky-100 min-h-[28rem] pt-32">
      <div className="pb-8 mb-8">
        <p className="text-neutral-600 font-bold text-xl">Why Us</p>
        <div className="flex justify-around gap-5 mt-5">
          {features.map((feature) => (
            <FeatureCard title={feature} key={feature}></FeatureCard>
          ))}
        </div>
      </div>
      <div className="pb-8">
        <p className="text-neutral-600 font-bold text-xl">
          Companies Who Trust Us
        </p>
        <div className="flex justify-around flex-wrap gap-5 mt-5">
          {images.map((image) => (
            <img src={`./assets/${image}.png`} loading="lazy" alt={image} width="190px" key={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { AboutUs };
