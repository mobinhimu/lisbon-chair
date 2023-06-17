import Chair from "./components/Chair";
import Footer from "./components/Footer";
import GridThree from "./components/GridThree";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <Layout>
      <Hero />
      <GridThree />
      <Testimonial />
      <Chair />
      <Footer />
    </Layout>
  );
};

export default App;
