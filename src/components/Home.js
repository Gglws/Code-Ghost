import { Link } from 'react-router-dom'
import Header from "../robin/Header.js";
import HeaderMenu from "../robin/HeaderMenu.js"

import Intro from '../robin/Intro.js';
import ProfileHighlights from '../ProfileHighlights.js';
import PlaceholderSqlBox from '../PlaceholderSqlBox.js';
import FormFooter from '../FormFooter.js';
import { motion, useScroll } from "framer-motion";
import LoginForm from '../LoginForm.js';

export default function Home() {
    const { scrollYProgress } = useScroll();
    return (
        <section>
            <Header />
            <HeaderMenu />
            <div>
                <div className="App">
                    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }}/>
                </div>
                <div className="innerApp">
                    <Intro scroll={scrollYProgress}/>
                    <ProfileHighlights />
                    <PlaceholderSqlBox />
                </div>
            </div> 
            <LoginForm />
            <FormFooter />
        </section>
    )
  }