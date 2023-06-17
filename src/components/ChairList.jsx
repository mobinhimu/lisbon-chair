// eslint-disable-next-line react/prop-types
const ChairList = ({ svg, title }) => {
  return (
    <>
      <li>
        {/* Span is a generic INLINE text element, it doesn't have any meaning. It's like a div element, but inline */}
        {svg}
        <span> {title}</span>
      </li>
    </>
  );
};

export default ChairList;
