import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React,{useState} from 'react'
import Slider from "react-slick";
import ArrowBack from "../public/assets/icons/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icons/eva_arrow-next-fill.svg";

const experiences = [
    {
        
        company_name: "Stetis",
        role: "React Developer",
        period: "Warsaw",
        technology: "Poland",
        rating: "4.5",
        description: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
    {
        
        company_name: "Nigerco",
        role: "Nodejs Developer",
        period: "Warsaw",
        technology: "Poland",
        rating: "4.5",
        description: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
    {
        
        company_name: "Pioneer Programmers",
        role: "Nodejs Developer",
        period: "Warsaw",
        technology: "Poland",
        rating: "4.5",
        description: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
    {
        
        company_name: "Feed the poor",
        role: "React Developer",
        period: "Warsaw",
        technology: "Poland",
        rating: "4.5",
        description: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
]


export default function ReactSlick() {
    const [sliderRef, setSliderRef] = useState<any>(null);

    const settings = {
        dots: true,
        customPaging: function () {
            return (
                <a className="">
                    <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
                </a>
            );
        },
        dotsClass: "slick-dots w-max absolute mt-10  ",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
  return (
    <>
      <Slider
          {...settings}
          arrows={false}
          ref={setSliderRef}
              className="flex items-stretch justify-items-stretch"
      >
             {experiences.map((ex, i)=>{
                return (
                    <div key={i} className="px-3 text-left font-Poppins text-sm md:text-md lg:text-lg">
                        <div className="border-2 border-gray-500 hover:border-secondary transition-all rounded-lg p-5 flex flex-col">
                    <div className=' md:text-xl font-bold '>{ex.company_name}</div>
                    <div className=' text-secondary'>
                     <div className='font-medium'>{ex.role}</div>
                    <div>{ex.period}</div>   
                    </div>
                    
                    <div>{ex.description}</div>
                    
                    </div>
                 
              </div>  
                ) 
             })} 
            
              
    
        </Slider>
          <div className="flex w-full items-center justify-center">
            {/* <hr className='bg-secondary border-2 w-full' /> */}
              <div className="flex flex-none justify-between w-auto mt-14">
                  <div
                      className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-secondary border hover:bg-secondary hover:text-white-500 transition-all text-secondary cursor-pointer"
                      onClick={sliderRef?.slickPrev}
                  >
                      <ArrowBack className="h-6 w-6 " />
                  </div>
                  
                  <div
                      className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-secondary border hover:bg-secondary hover:text-white-500 transition-all text-secondary cursor-pointer"
                      onClick={sliderRef?.slickNext}
                  >
                      <ArrowNext className="h-6 w-6" />

                  </div>
                  {/* <hr className='bg-secondary border-2 w-full' /> */}
              </div>
          </div>
      </>
  )
}
