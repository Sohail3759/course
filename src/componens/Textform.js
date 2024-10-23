import React, { useState } from 'react'

export default function Textform(props) {
    let [text, setText] = useState('');

    let handleupclick = () => {
        // console.log("uppercasewas clicked")
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to uppercase","success")

    }

    let handlechange = (event) => {
        // console.log("onchange")
        setText(event.target.value)
    }

    let handleloclick = () => {
        // console.log("lowercase was clicked")
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert("converted to lowercse","success")

    }

    let handleclear = () => {
        let newtext = ""
        setText(newtext)
        props.showAlert("Your text has been clear","success")
    }

    let handlecopy = () => {
        let newtext = document.getElementById("mybox");
        newtext.select();
        navigator.clipboard.writeText(newtext.value)
        props.showAlert("copied","success")

    }

    let handleExtraspc = () => {
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "))
        props.showAlert("Removed extra spaces","success")

    }



    return (
        <>
            <div>
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'rgb(6, 36, 67)' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(6, 36, 67)' : 'white', color: props.mode === 'dark' ? 'white' : 'rgb(6, 36, 67)' }} value={text} onChange={handlechange} id="mybox" rows="3"></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleupclick}>Convert to uppercase</button>
                <button className='btn btn-primary ms-3' onClick={handleloclick}>Convert to lowercase</button>
                <button className='btn btn-primary ms-3' onClick={handleclear}>Clear text</button>
                <button className='btn btn-primary ms-3' onClick={handlecopy}>Copy text</button>
                <button className='btn btn-primary ms-3' onClick={handleExtraspc}>Remove extra spaces</button>

            </div>

            <div className="contaner my-3" style={{ color: props.mode === 'dark' ? 'white' : 'rgb(6, 36, 67)' }}>
                <h2>your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} charecters in your sumary</p>
                <p>{0.008 * text.split(" ").length} minutes will take to read the {text.split(" ").length} words summary</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox to preview here"}</p>
            </div>

        </>
    )
}
