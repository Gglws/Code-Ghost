
import { Link } from 'react-router-dom'
// import PlaceholderSqlBox from '../PlaceholderSqlBox.js'
import Header from '../robin/Header.js'
import HeaderMenu from '../robin/HeaderMenu.js'
import './About.css'
import  {useState, useEffect} from 'react'
import BodyAbout from './BodyAbout.js'
import FooterAbout from './FooterAbout.js'
import HeaderAbout from './HeaderAbout.js'
import FormFooter from "../FormFooter.js";
import { motion, useScroll } from "framer-motion";
import $ from "jquery";


export default function About() {

    const { scrollYProgress } = useScroll();

    const [scroller, setScroller] = useState(1);

    let menuHidden = false;
  
    useEffect(
      () =>
        scrollYProgress.onChange(() => {
          if (scrollYProgress.get() > 0 && menuHidden === false) {
            $(".header").animate({ top: "0" }, "fast");
            menuHidden = true;
          } else if (scrollYProgress.get() === 0 && menuHidden === true) {
            $(".header").animate({ top: "30px" }, "fast");
            menuHidden = false;
          }
  
          setScroller(scrollYProgress.get());
        }),
      []
    );
    return (
        <div>
            <div className='about-page'>
            <div className='about'>
                    <Header />
                    <HeaderMenu />
                </div>
            </div >
            <HeaderAbout className="hAbout"/>
            <BodyAbout />
            <FooterAbout />
            <FormFooter />
            {/* <PlaceholderSqlBox className=“sqlbox-about-page”/> */}
            {/* <Link to='/' className='nav-btn'>Go to Home BTN</Link> */}
        </div>
    )
  }
