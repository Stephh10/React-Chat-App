import React from "react";
import "./Chat.css";
import { Paperclip, Smiley, PaperPlaneRight } from "phosphor-react";

export default function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Enter your message here" />
      <div className="inputActions">
        <button>
          <Paperclip size={25} />
        </button>
        <button>
          <Smiley size={25} />
        </button>
        <button>
          <PaperPlaneRight size={28} color="#433259" weight="fill" />
        </button>
      </div>
    </div>
  );
}
