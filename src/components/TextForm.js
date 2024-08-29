import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => { 
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => { 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState('');

    // Aesthetic Color Scheme
	const containerStyle = {
        backgroundColor: props.mode === 'dark' ? '#2D2E32' : '#F0F4F8',
        color: props.mode === 'dark' ? '#F0F4F8' : '#2D2E32',
        padding: '20px',
        borderRadius: '8px',
    };

    const textAreaStyle = {
        backgroundColor: props.mode === 'dark' ? '#1E1E22' : '#FFFFFF',
        color: props.mode === 'dark' ? '#F0F4F8' : '#2D2E32',
        borderColor: props.mode === 'dark' ? '#555' : '#DDD',
        borderRadius: '4px',
        padding: '10px',
    };

    const buttonStyle = {
        backgroundColor: '#4A90E2',
        borderColor: '#4A90E2',
        color: '#FFFFFF',
        borderRadius: '4px',
        padding: '10px 15px',
    };

    return (
        <>
            <div className="container" style={containerStyle}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={textAreaStyle} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" style={buttonStyle} onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" style={buttonStyle} onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" style={buttonStyle} onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" style={buttonStyle} onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" style={buttonStyle} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={containerStyle}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
