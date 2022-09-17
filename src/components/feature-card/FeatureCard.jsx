const FeatureCard = ({ title }) => {
  
  return (
    <div className="p-5 rounded-lg bg-neutral-100 drop-shadow-md">
      <p className="text-sky-400 m-3 font-medium text-2xl">{title}</p>
      <p className="m-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
    </div>
  );
};

export { FeatureCard };
