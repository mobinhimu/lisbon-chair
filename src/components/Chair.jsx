import Figure from "./Figure";

import ChairImage1 from "../assets/chair-1.jpg";
import ChairImage2 from "../assets/chair-2.jpg";
import ChairImage3 from "../assets/chair-3.jpg";

import { list1, list2, list3 } from "./list";

const Chair = () => {
  return (
    <section>
      <h2>Our bestselling chairs</h2>
      <div className="grid-3-cols">
        <Figure
          chairImage={ChairImage1}
          header="The Laid Back"
          price="250"
          list={list1}
        />
        <Figure
          chairImage={ChairImage2}
          header="The Worker Bee"
          price="525"
          list={list2}
        />
        <Figure
          chairImage={ChairImage3}
          header="The Chair 4/2"
          price="1456"
          list={list3}
        />
      </div>
    </section>
  );
};

export default Chair;
