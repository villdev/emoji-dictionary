import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span
          className="sidebar-header__emoji"
          role="img"
          aria-label="search-emoji"
        >
          😀
        </span>
        <span className="sidebar-header__title">Grinning Face</span>
      </div>
      <div className="sidebar-emoji-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quam
        minima incidunt repellat porro veniam facilis maxime, ipsum quibusdam
        inventore obcaecati esse architecto laboriosam sunt at, adipisci sequi
        distinctio voluptatibus.
      </div>
      <div className="sidebar-emoji-copy">
        <input type="text" name="emoji" value="😀" readOnly />
        <button>Copy</button>
      </div>
    </div>
  );
}
