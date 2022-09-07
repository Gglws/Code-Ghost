import Header from "../robin/Header.js";
import Intro from "../robin/Intro.js";
import ProfileHighlights from "../ProfileHighlights.js";
import PlaceholderSqlBox from "../PlaceholderSqlBox.js";
import FormFooter from "../FormFooter.js";
import { motion, useScroll } from "framer-motion";
// import LoginForm from "../LoginForm.js";
import CG from "../robin/CG.PNG";
import HeaderMenu from "../robin/HeaderMenu.js";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <section>
      <Header />
      <HeaderMenu />
      <motion.div style={{ opacity: scrollYProgress }}>
        <img className="cgBig" src={CG} alt="CG" />
      </motion.div>
      <div>
        <div className="App">
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
        </div>
        <div className="innerApp">
          <Intro scroll={scrollYProgress} />
          <ProfileHighlights scroll={scrollYProgress} />
          <PlaceholderSqlBox scroll={scrollYProgress} />
        </div>
      </div>
      <FormFooter />
    </section>
  );
}
