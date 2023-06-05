import React, { useState } from 'react';

const Accordion = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="accordion">
      <button className={`accordion-toggle ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
        {question}
      </button>
      {isActive && <div className="accordion-content">{answer}</div>}
    </div>
  );
};

export default Accordion;