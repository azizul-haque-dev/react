import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import NewsLaterBox from "../components/NewsLaterBox";

const Contact = () => {
  return(
    <div>
    <div className="border-t pt-8 text-2xl text-center">
      <Title text1={"CONTACT"} text2={"US"} />
    </div>
    <div className="flex my-10 gap-16 flex-col md:flex-row mb-20">
      <img
        src={assets.about_img}
        alt="about-img"
        className="w-full md:max-w-[450px] "
      />
      <div className="flex flex-col items-start justify-center gap-6 md:w-2/4 text-gray-600">
        <b className="text-xl font-semibold text-gray-600">Our Store</b>
        <p>
        54709 Willms Station <br />
Suite 350, Washington, USA
        </p>
        <p>
        Tel: (415) 555-0132 <br />
        Email: admin@forever.com
        </p>
        <b className="text-xl font-semibold text-gray-600">Careers at Forever</b>
        <p>
        Learn more about our teams and job openings.
        </p>
        <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500"> Explore Jobs</button>
      </div>
    </div>
  
   
    <NewsLaterBox/>
  </div>
  )
};

export default Contact;
