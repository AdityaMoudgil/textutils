import React,{useState} from 'react';

export default function TextForm(props) {

    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = ()=>{
      //console.log("Lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
  }

  const handleClearClick = ()=>{
     //console.log("Text was cleared");
    let newText = '';
    setText(newText);
}

  const handleCopy = () => {
    //console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    // text = "new text"; // Wrong way to change the state
    // setText("New Text"); // Correct way to change the state
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
     <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
     <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
     <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
     <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
     <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    
    </div>

    <div className="container my-3">
        <h2> Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minutes to read </p>

        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
