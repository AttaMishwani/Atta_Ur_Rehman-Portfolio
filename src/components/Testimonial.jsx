import React from "react";
import SplitText from "./SplitText";
import ahmedWajid from "../assets/images/ahmedwajid2.png";

import maazKhan from "../assets/images/maaz khan.webp";

const Testimonial = () => {
  return (
    <div className="w-full py-[30px] pt-[8rem] px-[10px] relative ">
      <div className=" w-[300px]  lg:w-full max-w-[1100px] mx-auto border-2 border-[#0092ca4D] border-t-0 border-b-0 ">
        <div
          className="section-heading text-clip
        flex flex-col justify-center items-center"
        >
          <SplitText
            text="WHAT MY CLIENTS SAY"
            className="text-[20px]  lg:text-5xl font-bold text-white mb-5 mx-4 "
            delay={50}
            duration={0.3}
          />
          <SplitText
            text="Lets Hear What My Satisfied Clients Say"
            delay={100}
            duration={0.6}
            className="text-[13px] lg:text-2xl mx-4"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center ">
          <div className="testimonial-container mt-20 mb-20 flex flex-col lg:flex-row items-center justify-center border-[#0092ca4D] border-2 border-l-0 border-r-0">
            <div className="testimonial-card w-full lg:w-[49%] py-10 px-4 flex items-center min-h-[50vh] border-2 border-[#0092ca4D] border-l-0 lg:border-b-0 border-t-0 border-r-0 lg:border-r-2">
              <div className="testimonial-card-content flex items-center gap-4 flex-col">
                <div className="testimonial-card-content-image w-[100px] h-[100px] rounded-full overflow-hidden">
                  <img
                    src={ahmedWajid}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="testimonial-card-content-name">
                  <h3 className="text-2xl font-bold text-white text-center">
                    AHMED WAJID
                  </h3>
                  <p className="text-[#0092ca] text-center text-sm">
                    EMAIL MARKETING EXPERT
                  </p>
                </div>
                <p className="text-textLight text-justify">
                  I hired a web designer before Atta who charged more but didn’t
                  deliver what I wanted. Felt like the vision I had for the
                  website was completely off. Then I found Atta, and he nailed
                  it. The RevLoft website is clean, modern, and exactly what I
                  had in my vision. He was quick, super responsive, and made the
                  whole process easy. Wish I’d found him sooner.
                </p>
              </div>
            </div>

            <div className="testimonial-card w-full lg:w-[49%] py-10 px-4 flex items-center min-h-[50vh] border-2 border-[#0092ca] border-l-0 border-b-0 lg:border-l-0 border-t-0 lg:border-b-0 border-r-0">
              <div className="testimonial-card-content flex items-center gap-4 flex-col">
                <div className="testimonial-card-content-image w-[100px] h-[100px] rounded-full overflow-hidden">
                  <img
                    src={maazKhan}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="testimonial-card-content-name">
                  <h3 className="text-2xl font-bold text-white text-center">
                    MAAZ KHAN
                  </h3>
                  <p className="text-[#0092ca] text-center text-sm">
                    WEB SEO EXPERT
                  </p>
                </div>
                <p className="text-textLight text-justify">
                  Atta helped me with some quick PHP work on my website through
                  cPanel. It wasn’t a big project, but he understood what I
                  needed right away, created the necessary files, and added the
                  basic code really fast. Honestly, I didn’t have to explain
                  much, he just got it done. Super responsive and smooth to work
                  with. Thanks, bro!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
