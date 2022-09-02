import {React, useState} from "react";
import profilePic from "./images.jpg";
import { motion } from "framer-motion";

function Robin(props) {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  return (
    <div className="robinProfile">

<div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div className="handle" layout transition={spring} />
    </div>




      <div className="profileHeader"> Robin </div>
      <div className="profileContent" >
        Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
      </div>
      <img
        src={profilePic}
        className="profilePicture"
        alt="Profile Pic"
        width="500"
        height="500"
      />
    </div>
  );
}

export default Robin;


// export default function App() {
//   const [isOn, setIsOn] = useState(false);

//   const toggleSwitch = () => setIsOn(!isOn);

//   return (
//     <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
//       <motion.div className="handle" layout transition={spring} />
//     </div>
//   );
// }

// const spring = {
//   type: "spring",
//   stiffness: 700,
//   damping: 30
// };
