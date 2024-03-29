import React, { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState(''); // initializing the variable and its state.
    const handleUpClick = () => { //to handle the state of text variable
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }
    const handleLoClick = () => { //to handle the state of text variable
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");

    }
    const handleOnChange = (event) => { //need to create a change event because we wonnt be able to type
        //else, everytime a key clicked-> the older value would be set to text automatically
        setText(event.target.value);
    }
    const handleClearClick = () => {
        setText('');
        props.showAlert('Text cleared','success');
    }
    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Copied','success');
    }
    const handleExtraSpaces = () => {
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces handled','success');
    }
    const handleJSR = () => {
        setText("Jai Shree Ram!!!!");
        props.showAlert('JSR handled','success');
    }

    // we ca change the state only with the declared function.
    //(here, setText)

    // text ="Jai Shree Ram"   //wrong way
    // useEffect(() => {
    //     setText("jfdxgjkdhk");
    //   }, []);
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{
                        backgroundColor: props.mode === 'light' ? 'white' : 'grey',
                        color: props.mode === 'light' ? '#042743' : 'white'
                    }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={handleJSR}>JSR</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in textbox to preview"}</p>
            </div>
        </>
    )
}
