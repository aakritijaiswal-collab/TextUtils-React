import React, {useState} from 'react'

export default function TextForm(props) {
  
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("The text has been converted to uppercase","success");
  }
  const handleDownClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("The text has been converted to lowercase","success");
  }
  const handleClClick = ()=>{
    let newText = ' ';
    setText(newText);
    props.showAlert("The text has been cleared","success");
  }
  const handleOnChange = (event)=>{
    console.log("On Change"); 
    setText(event.target.value);
  }
  const[text, setText] = useState('');
  const [emailsFound, setEmailsFound] = useState([]);
  const handleExClick = ()=>{
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const emails = text.match(emailRegex) || [];

setEmailsFound(emails);
props.showAlert("Email in the text has been extracted","success");
  };

  return (
    <>
    <div className="container" style={{color:props.mode=== 'dark'?'white':'#042743'}}>
<h1>{props.heading}</h1> 
<div className="mb-3">

<textarea className="form-control" value={text} onChange={handleOnChange} style= {{backgroundColor: props.mode=== 'dark'?'grey':'white' , color:props.mode=== 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClClick}>Clear Text</button>
<button className="btn btn-primary my-2" onClick={handleExClick}>Extract the email</button>
</div>
<div className="container my-3" style={{color:props.mode=== 'dark'?'white':'#042743'}}>
  <h2>Your text summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length}Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something in the box to preview it"}</p>
  <h2>Extracted Emails</h2>
  {emailsFound.map((email, index)=>(
    <p key={index}>{email}</p>
  ))}

</div>
    </div>
    </>
  )
}
