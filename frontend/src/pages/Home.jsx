import React from 'react';
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from '../assets/images/icon01.png';


const Home = () => {
  return (
    <>
      {/* hero section */}

    
    <section className="hero__section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
          {/* hero content */}

          <div>
            <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                  We help patients live a healthy, longer life.
                </h1>
                <p className='text__para'>Medicine, like most other fields, has undergone a rapid transformation, due to advancements in technology.
                 The usage of mobile medical applications has increased worldwide.
                 </p>

                 <button className="btn">Request an Appointment</button>
            </div>

            {/* hero counter */}
            <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>
                <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                <p className="text__para">Years of Experience</p>
              </div>


              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
                <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                <p className="text__para">Clinic Location</p>
              </div>


              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                <p className="text__para">Patient Satisfaction</p>
              </div>


            </div>

          </div>


          {/* HERO CONTENT */}

          <div className='flex gap-[30px] justify-end'>
             <div>
              <img src={heroImg01} alt="heroimg1" />
             </div>

             <div className='mt-[30px]'>
              <img src={heroImg02} className='w-full mb-[30px]' alt="heroing2" />
              <img src={heroImg03} className='w-full' alt="heroing3" />
             </div>
          </div>


        </div>
      </div>
    </section>

     {/* hero section end */}


   <section>
   <div className="container">
      <div className="lg:w-[470px] mx-auto">
        <h2 className="heading text-center">
          Providing the best medical services
        </h2>
        <p className="text__para text-center">World -class care for everyone. Our health system offers unmatched,
        expert health care.</p>
      </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      <div className='py-[30px] px-5'>
        <div className="flex items-center justify-center">
          <img src={icon01} alt="icon" />
        </div>


      <div className="mt-[30px]">
        <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Doctor</h2>
        <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>World-class care for everyone. Our health system offers unmatched. Expert health care. From the lab to the clinic </p>
      </div>


      </div>
    </div>
    
    </div>
   </section>

    
    </>

   
  );
}

export default Home;
