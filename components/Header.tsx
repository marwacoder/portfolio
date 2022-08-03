import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import Button from './misc/Button'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GoCloudDownload, } from 'react-icons/go'
import { VscChromeClose }  from 'react-icons/vsc'


// Import react scroll
import { Link as LinkScroll, Button as ButtonScroll } from "react-scroll";

export default function Header() {

    const [activeLink, setActiveLink] = useState<string>('');
    const [scrollActive, setScrollActive] = useState(false);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > 5);
        });
    }, []);

    const handleDrawer=()=> setOpen(!open)
    
  return (
    <>
          
          <header className={`fixed top-5 md:backdrop-blur-none backdrop-blur-sm bg-white/30 ${open && 'bottom-0'} left-10 right-10 border rounded-3xl md:bottom-auto z-30 font-Poppins transition-all` +
              (scrollActive ? " shadow-md pt-0" : " pt-4")}>
          <nav className='max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4'>
              <div className=" w-32 md:w-40 h-auto">
                      <Image alt='logo' layout='responsive'  src='/assets/images/logo.png' width={'207px'} height={'63px'} />
              </div>
              
                  
                  <ul className={`${open ? 'block': 'hidden'} text-xl md:text-base md:flex absolute font-bold md:font-bold md:relative top-48 md:top-auto lg:flex md:col-start-4 text-primary col-end-3 md:items-center`}>
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
                "px-4 py-2 mx-2 cursor-pointer animation-hover list-item relative" +
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
                          "px-4 py-2 mx-2 cursor-pointer animation-hover list-item relative" +
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
                          "px-4 py-2 mx-2 cursor-pointer animation-hover list-item relative" +
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
                          "px-4 py-2 mx-2 cursor-pointer animation-hover list-item relative" +
                          (activeLink === "contactme"
                              ? " text-secondary animation-active "
                              : " text-black-500 hover:text-orange-400")
                      }
                  >
                     Contact me
                  </LinkScroll>
                  
                      <div className='md:hidden list-item px-4 text-primary py-9 mx-2 cursor-pointer animation-hover  relative'>
                          <p><span className='text-secondary py-2'>Say </span> Hello!</p>
                          <p className='py-2'>jibrilmohammed39@gmail.com</p>
                          <div className='  my-10'>
                              <Button icon={<GoCloudDownload width={35} height={35} className='mx-2' />} addClass=' rounded-none bg-primary  text-secondary' onClick={() => ''}>My Resume</Button>

                          </div>
            </div>
                      
            </ul>
            
                  <div className="hidden col-start-10   font-medium md:flex ">
                      <Button icon={<GoCloudDownload width={35} height={35} />} addClass='rounded-full' onClick={() => ''}>My Resume</Button>

                  </div>
                  <div className='md:hidden right-0 col-start-10 font-Poppins col-end-12 font-medium flex justify-end items-center'>
                      {open ? <VscChromeClose onClick={handleDrawer} className=' cursor-pointer  text-secondary w-6 md:w-44 h-auto' /> : <GiHamburgerMenu onClick={handleDrawer} className=' cursor-pointer text-secondary w-6 md:w-44 h-auto' />}

                  </div>
               
                      
              
        </nav>
        {/* mobile Navigation */}
            
    </header>
    </>
  )
}
