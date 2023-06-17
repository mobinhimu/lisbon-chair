import GridSingle from "./GridSingle";

const GridThree = () => {
  return (
    <section>
      <h2>What makes our chairs special</h2>
      <div className="grid-3-cols">
        <GridSingle
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="features-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              ></path>
            </svg>
          }
          featuresText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus similique adipisci praesentium."
          featuresTitle="Science meets design"
        />{" "}
        <GridSingle
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="features-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          }
          featuresText="Reprehenderit optio placeat quasi excepturi architecto, explicabo
        facilis perspiciatis error maxime magnam."
          featuresTitle="Maximal comfort"
        />
        <GridSingle
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="features-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          }
          featuresText=" Deleniti recusandae quidem nesciunt, eos dolorum iure, quaerat omnis
        est laudantium voluptatem voluptas!"
          featuresTitle="Ethical and sustainable"
        />
      </div>
    </section>
  );
};

export default GridThree;
