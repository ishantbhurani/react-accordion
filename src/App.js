import { useState } from "react";
import AccordionItem from "./AccordionItem";
import data from "./data";

function App() {
  const [expandedID, setExpandedID] = useState(null);

  return (
    <>
      <div className="container">
        <h1 className="title">frequently asked questions</h1>
        <ul className="accordion">
          {data.map((item) => {
            return (
              <AccordionItem
                key={item.id}
                {...item}
                expandedID={expandedID}
                setExpandedID={setExpandedID}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
