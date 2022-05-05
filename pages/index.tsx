/* This example requires Tailwind CSS v2.0+ */
import type, { NextPage } from "next";
import Footer from "components/elements/footer";
import { HomeHero, HomeProduct } from "components/sections";

const Homepage: NextPage = () => {
  return (
    <>
      <HomeHero />
      <HomeProduct />
      <Footer />
    </>
  );
};

export default Homepage;
