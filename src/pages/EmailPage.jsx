import React, { useRef, useState } from "react";
import "./EmailPage.scss";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import deletebtn from "../image/delete.png";
import colorPicker from "../image/colorPicker.jpg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { sendEmailRestAPI } from "../functions/sendEmail";

const EmailPage = () => {
  const [text, setText] = useState(() => EditorState.createEmpty());
  const emailRef = useRef();
  const sendEmailHandler = async () => {
    const email = emailRef.current.value;
    let message = "";
    convertToRaw(text.getCurrentContent()).blocks.forEach(
      (block) => (message += block.text)
    );
    try {
      await sendEmailRestAPI(email, message);

      alert("Email have been sent Successfully!!!");

      emailRef.current.value = "";
      setText(() => EditorState.createEmpty());
    } catch (error) {
      alert("Oops... " + error.message);
    }
  };

  const textDeleteHandler = () => {
    setText(() => EditorState.createEmpty());
  };

  return (
    <div className="outer">
      <div className="to">
        <span>To</span> <input type="email" ref={emailRef}></input>{" "}
        <span>Cc/Bcc</span>{" "}
      </div>
      <hr />
      <div className="tmail">Test Mail</div>
      <hr />
      <div className="tarea">
        <Editor
          editorState={text}
          onEditorStateChange={setText}
          placeholder="Start Typing..."
          toolbar={{
            options: [
              "inline",
              "fontSize",
              "colorPicker",
              "remove",
              "link",
              "emoji",
              "image",
              "list",
              "history",
            ],

            inline: { options: ["bold", "italic", "underline"] },
            list: { inDropdown: true },
            blockType: {
              inDropdown: false,
              options: ["Blockquote", "Code"],
            },
            link: { inDropdown: true },
            textAlign: { inDropdown: true },
            history: { inDropdown: true },
            colorPicker: { icon: colorPicker },
          }}
        ></Editor>
      </div>
      <hr />
      <div className="but">
        <button className="btn" onClick={sendEmailHandler}>
          Send
        </button>
        <button className="imgbtn" onClick={textDeleteHandler}>
          <img src={deletebtn} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default EmailPage;
