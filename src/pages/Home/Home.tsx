import React from "react";
import Navbar from "../../components/Header/Navbar/Navbar";
import Hero from "../../components/Header/Home/Hero/Hero";
import Feature from "../../components/Header/Home/Hero/Feature";
import CTA from "../../components/Header/Home/Hero/CTA";
import SinglePricing from "../../components/Header/Home/Hero/SinglePricing";
import { Pricing } from "../../components/Header/Home/Hero/Pricing";

const Home: React.FC = () => {
  return (
    <div >
  
      <Hero />
      <Feature />
      <SinglePricing />
      <Pricing />
      <CTA />
    </div>
  );
};

export default Home;

// schema for the home page

/*firstly navbar and then the main content
//1.in the nav bar , logo  on the left and then the links on the center, and then the login and signup buttons on the right
2. main content : Short upper tagline , heading , subheading , 2 buttons , all on the left
3. on the right : image 

*/
