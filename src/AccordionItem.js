import { useState } from "react";

export default function AccordionItem({
  num,
  title,
  curOpen,
  onOpen,
  children,
}) {
  const isOpen = num === curOpen;

  function handleToggleItem() {
    onOpen(num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggleItem}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
