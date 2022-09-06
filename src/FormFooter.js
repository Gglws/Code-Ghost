import React, { useState } from "react";
import $ from "jquery";
import { motion } from "framer-motion";

const FormFooter = () => {
  const [contactPressed, setContactPressed] = useState(false);

  let showForm = () => {
    if (!contactPressed) {
      setContactPressed(true);
      $(".formFooter").css("height", "22%");
      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    } else {
      setContactPressed(false);
      $(".formFooter").css("height", "5%");
    }
  };

  let submitForm = () => {
    let messageObj = {};
    messageObj.name = $('select[class="select"]').val();
    console.log(messageObj.name);
    messageObj.email = $('input[class="email"]').val();
    messageObj.subject = $('input[class="subject"]').val();
    messageObj.message = $('textarea[class="message"]').val();

    console.log(messageObj);

    window.alert("Message sent to " + messageObj.name);
    //FETCH POST :START
    fetch("http://localhost:5000/api/member", {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description: messageObj,
        name: messageObj.name,
        email: messageObj.email,
        subject: messageObj.subject,
        message: messageObj.message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    // FETCH POST :END
  };

  return (
    <footer className="formFooter">
      {contactPressed ? (
        <motion.div
          className="formContainer"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}
            // action="https://public.herotofu.com/v1/d7808b70-2894-11ed-a7a0-3f26160640a2"
            // method="post"
          >
            <div className="labelContainer">
              <label className="formLabel">
                Who would you like to contact?
              </label>
              <button className="xButton" onClick={showForm}>
                X
              </button>
            </div>

            <div>
              <select className="select">
                <option>Daeyeon Cho</option>
                <option>Gage Lewis</option>
                <option>Jeremy Linder</option>
                <option>Robin Kluis</option>
              </select>
            </div>
            <div className="email">
              <input
                className="email"
                type="email"
                placeholder="email@example.com"
                name="email"
                required
              />
            </div>

            <div className="subject">
              <input
                className="subject"
                type="text"
                placeholder="Subject"
                name="subject"
                required
              />
            </div>
            <div className="message">
              <textarea
                className="message"
                placeholder="Your message"
                name="body"
                required
              ></textarea>
            </div>
            <div>
              <button className="submit" type="submit">
                Send a message
              </button>
            </div>
          </form>
        </motion.div>
      ) : (
        <div className="contactUs" onClick={showForm}>
          Contact Us!
        </div>
      )}
    </footer>
  );
};

export default FormFooter;
