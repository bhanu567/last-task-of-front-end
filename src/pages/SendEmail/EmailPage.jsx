import React, { useRef, useState } from "react";
import "./EmailPage.scss";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js"; //, convertToRaw
import deletebtn from "../../image/delete.png";
import colorPicker from "../../image/colorPicker.jpg";
import { emailActions } from "../../store/reducer/emailSlice";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { sendEmailRestAPI } from "../../store/functions/sendEmail";
import { useDispatch } from "react-redux";

const EmailPage = () => {
  const [text, setText] = useState(() => EditorState.createEmpty());
  const dispatch = useDispatch();
  const emailIDRef = useRef();
  const sendEmailHandler = async () => {
    const emailID = emailIDRef.current.value;
    const message = text.getCurrentContent().getPlainText();
    // convertToRaw(text.getCurrentContent()).blocks.forEach(
    //   (block) => (message += block.text)
    // );
    try {
      // await sendEmailRestAPI(emailID, message);

      dispatch(emailActions.addEmail({ emailID: emailID, message: message }));

      alert("Email have been sent Successfully!!!");

      emailIDRef.current.value = "";
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
        <span>To</span> <input type="email" ref={emailIDRef}></input>{" "}
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
