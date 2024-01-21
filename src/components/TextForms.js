import React, {useState} from 'react'

export default function TextForms(props) {
    const onChangeEventTextarea = (event) =>{
        setText(event.target.value);
    }

    const convertUpperCaseEvent = () => {
        setText(text.toUpperCase());
    }

    const convertLowerCaseEvent = () => {
        setText(text.toLowerCase());
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const removeSpecialCharecter = () => {
        const pattern = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/g;
        const result = text.replace(pattern, '');
        setText(result);
    }
    
    const [text, setText] = useState("Please write something here");

    return (
        <>
            <div className='container'>
                <h3>{props.heading}</h3>
                <div className="form-group">
                    <textarea className="form-control" value={text} id="exampleFormControlTextarea1" onChange={onChangeEventTextarea} rows="3"></textarea>
                </div>
                <div className="form-group">
                    <button className='btn btn-primary my-3' onClick={convertUpperCaseEvent}>Convert To Uppercase</button>
                    <button className='btn btn-primary' onClick={convertLowerCaseEvent}>Convert To Lowercase</button>
                    <button className='btn btn-primary' onClick={speak}>Speak</button>
                    <button className='btn btn-primary' onClick={removeSpecialCharecter}>Remove Special Characters</button>
                </div>
            </div>
            <div className='container'>
                you have written {text.split(" ").length } words and {text.length} charecters
                <br/>
            </div>
            <br/>
            <div className='container'>
                <h3>Preview</h3>
                {text}
            </div>
        </>
    )
}
