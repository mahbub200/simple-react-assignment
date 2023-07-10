import  { useState } from 'react';
import './Content.css'

const Content = () => {
    const [text, setText] = useState('');
    const [displayedText, setDisplayedText] = useState('');
  
    const handleButtonClick = () => {
      setDisplayedText(text);
    };
  
    const handleTextAreaChange = (event) => {
        
      setText(event.target.value);
    };

    return (
        
        <div id ='text-div'>
            <textarea onChange={handleTextAreaChange}></textarea>
            <br />
      <button onClick={handleButtonClick}>Display Text</button>
     
      <p className='para'>{displayedText}</p>
      

     
        </div>
    );
};

export default Content;