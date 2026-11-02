import CTA from "@/components/common/CTA";
import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <CTA />
    </>
  );
};

export default page;
