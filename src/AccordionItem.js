import { useEffect, useRef } from "react";
import plusIcon from "./images/plus-icon.svg";

export default function AccordionItem({
  id,
  title,
  content,
  expandedID,
  setExpandedID,
}) {
  const faqContentRef = useRef(null);
  const faqContentContainerRef = useRef(null);

  useEffect(() => {
    if (expandedID === id) {
      const height = faqContentRef.current.getBoundingClientRect().height;
      faqContentContainerRef.current.style.height = `${height + 10}px`;
    } else {
      faqContentContainerRef.current.style.height = 0;
    }
  }, [expandedID]);

  return (
    <li className="accordion-item">
      <button
        className="accordion-title"
        onClick={() => setExpandedID(expandedID !== id ? id : null)}
      >
        {title}
        <img
          className={`icon ${expandedID === id ? "expanded" : ""}`}
          src={plusIcon}
          alt="Plus icon"
        />
      </button>
      <div className="accordion-content-container" ref={faqContentContainerRef}>
        <div className="accordion-content" ref={faqContentRef}>
          {content.map((text, index) => {
            return (
              <p key={index} className="accordion-text">
                {text}
              </p>
            );
          })}
        </div>
      </div>
    </li>
  );
}
