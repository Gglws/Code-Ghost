import Header from "../robin/Header.js";
import { motion, useScroll } from "framer-motion";
import CG from "../assets/CG.PNG";
import HeaderMenu from "../robin/HeaderMenu.js";
import { React, useEffect, useState } from "react";
import $ from "jquery";

export default function Messages() {
<<<<<<< HEAD
  const [scroller, setScroller] = useState(0);
=======
  const [scroller, setScroller] = useState();
>>>>>>> main
  let [messages, setMessages] = useState([]);
  let [numberOfMessages, setNumberOfMessages] = useState(0);

  const { scrollYProgress } = useScroll();
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

  let currentUser = localStorage.getItem("name");
  currentUser = currentUser.split(" ");
  currentUser = currentUser[0].toLowerCase();

  useEffect(() => {
    $.get(`/api/messages/${currentUser}`, (data) => {
      numberOfMessages = data.length;
      setNumberOfMessages(numberOfMessages);
      messages = data;
      setMessages(messages);
    }).fail(() => {
      console.log("failed");
    });
  }, []);

  let capitalizer = (str) => {
    let result = str.charAt(0).toUpperCase();
    let rest = str.slice(1);

    result += rest;

    return result;
  };

  return (
    <section>
      <HeaderMenu />
      <Header />
<<<<<<< HEAD

=======
>>>>>>> main
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
          <div className="numberOfMessages">Messages ({numberOfMessages})</div>
          <div className="outerMessageContainer">
            {messages
              .slice(0)
              .reverse()
              .map((message) => {
                return (
                  <div className="messageContainer">
                    <div className="messageDate">{message.date}</div>
                    <div className="messageFrom">{message.email}</div>
                    <div className="messageSubject">
                      {message.subject}
                    </div>
                    <div className="messageMessage">{message.message}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <footer className="messagesFooter">
        {" "}
        Logged in as: {capitalizer(currentUser)}
      </footer>
    </section>
  );
}
