import React, { useState, useEffect } from 'react';

const TextChange = () => {
  const texts = ["Hi, I am Zainab Ali","Welcome to my portfolio"];
  
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        setEndValue(prev => prev + 1);

        if (endValue > texts[index].length + 5) {
          setIsForward(false);
        }
      } else {
        setEndValue(prev => prev - 1);

        if (endValue <= 0) {
          setIsForward(true);
          setIndex(prev => (prev + 1) % texts.length);
        }
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index]);

  return (
    <div className='transition ease duration-300 text-green-700 text-5xl font-semibold'>
      {currentText}
    </div>
  );
};

export default TextChange;
