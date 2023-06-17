import customerImage from "../assets/customers.jpg";
const Testimonial = () => {
  return (
    <section>
      <section className="testimonial-section">
        <div className="grid-3-cols">
          <img src={customerImage} alt="People sitting on chairs" />
          <div className="testimonial-box">
            <h2>
              &rdquo;We couldn&rsquo;t live without these chairs anymore&rdquo;
            </h2>
            <blockquote className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              repellat at, nesciunt quia cum minima ipsum culpa totam sapiente
              recusandae earum debitis doloribus in quasi voluptatibus!
            </blockquote>
            <p className="testimonial-author">&mdash; Mary and Sarah Johnson</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Testimonial;
