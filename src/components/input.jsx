import React from "react";

const Input = () => {
    return (
      <div className="input">
        <input
          type="text"
          placeholder="Type something..."
          onChange={(e) => setText(e.target.value)}
          value=""
        />
        <div className="send">
          <img src="" alt="" />
          <input
            type="file"
            style={{ display: "none" }}
            id="file"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label htmlFor="file">
            <img src="" alt="" />
          </label>
          <button>Send</button>
        </div>
      </div>
    );
}
 
export default Input;