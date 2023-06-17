// eslint-disable-next-line react/prop-types
const GridSingle = ({ svg, featuresText, featuresTitle }) => {
  return (
    <div>
      {svg}
      <p className="features-title">
        <strong>{featuresTitle}</strong>
      </p>
      <p className="features-text">{featuresText}</p>
    </div>
  );
};

export default GridSingle;
