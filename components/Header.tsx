import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import Button from './misc/Button'


// Import react scroll
import { Link as LinkScroll } from "react-scroll";

export default function Header() {

    const [activeLink, setActiveLink] = useState<string>('');
    const [scrollActive, setScrollActive] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > 20);
        });
    }, []);
  return (
    <>
          <header className={"fixed top-0 w-full z-30 bg-gradient-to-r from-sky-blue to-white font-Poppins transition-all" +
              (scrollActive ? " shadow-md pt-0" : " pt-4")}>
          <nav className='max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4'>
              <div className="col-start-1 col-end-2  flex items-center">
                  <Image  src='/assets/images/logo.png' width={'207px'} height={'63px'} />
              </div>
            <ul className='hidden lg:flex col-start-4 text-primary col-end-8 items-center'>
                <LinkScroll
              activeClass="active"
              to="aboutme"
              spy={true}
              smooth={true}
              duration={1000}

              onSetActive={() => {
                setActiveLink("aboutme");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "aboutme"
                  ? " text-secondary animation-active "
                  : " text-black-500 hover:text-orange-400")
              }
            >
                      About me
            </LinkScroll>
                  <LinkScroll
                      activeClass="active"
                      to="resume"
                      spy={true}
                      smooth={true}
                      duration={1000}

                      onSetActive={() => {
                          setActiveLink("resume");
                      }}
                      className={
                          "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                          (activeLink === "resume"
                              ? " text-secondary animation-active "
                              : " text-black-500 hover:text-orange-400")
                      }
                  >
                      Resume
                  </LinkScroll>
                  <LinkScroll
                      activeClass="active"
                      to="portfolio"
                      spy={true}
                      smooth={true}
                      duration={1000}

                      onSetActive={() => {
                          setActiveLink("portfolio");
                      }}
                      className={
                          "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                          (activeLink === "portfolio"
                              ? " text-secondary animation-active "
                              : " text-black-500 hover:text-orange-400")
                      }
                  >
                      Porfolio
                  </LinkScroll>
                  <LinkScroll
                      activeClass="active"
                      to="contactme"
                      spy={true}
                      smooth={true}
                      duration={1000}

                      onSetActive={() => {
                          setActiveLink("contactme");
                      }}
                      className={
                          "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                          (activeLink === "contactme"
                              ? " text-secondary animation-active "
                              : " text-black-500 hover:text-orange-400")
                      }
                  >
                     Contact me
                  </LinkScroll>
            
            </ul>
                  <div className="hidden col-start-10 font-Poppins col-end-12 font-medium md:flex justify-end items-center">
                      <Button onClick={() => ''} addClass="text-secondary  bg-transparent hover:bg-secondary hover:text-primary">Resume </Button>

                  </div>
        </nav>
    </header>
    </>
  )
}
