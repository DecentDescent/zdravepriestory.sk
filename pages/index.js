import "../styles/global.scss";
import Head from "../components/Head";
import Hero from "../components/Hero";
import Reasons from "../components/Reasons";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Form from "../components/Form";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Head />
      <Hero />
      <Reasons />
      <About />
      <Form />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Index;
