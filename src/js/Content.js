import React from "react";

const emojis = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "😂",
  "🤣",
  "😊",
  "😇",
  "🙂",
  "🙃",
  "😉",
  "😌",
  "😍",
  "🥰",
  "😘",
  "😗",
  "😙",
  "😚",
  "😋",
  "😛",
  "😝",
  "😜",
  "🤪",
  "🤨",
  "🧐",
  "🤓",
  "😎",
];

export default function Content() {
  return (
    <div className="content">
      <div className="content-header">Smileys</div>
      <div className="search">
        <input type="text" name="emoji" placeholder="Enter emoji or text..." />
        <button type="submit">Search Emoji</button>
      </div>
      <div className="meaning">
        Meaning(
        <span className="query" role="img" aria-label="searched emoji or query">
          😀
        </span>
        ):&nbsp;<span className="result">Grinning Face</span>
      </div>
      <div className="category-emojis">
        {/* <div className="emoji"><span role="img" aria-label="emoji">😀</span></div> */}
        {emojis.map((emoji) => (
          <div className="emoji" key={emoji}>
            <span role="img" aria-label="emoji">
              {emoji}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
