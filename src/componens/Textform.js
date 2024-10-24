import React, { useState } from 'react'

export default function Textform(props) {
    let [text, setText] = useState('');

    let handleupclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to uppercase", "success")

    }

    let handlechange = (event) => {
        setText(event.target.value)
    }

    let handleloclick = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert("converted to lowercse", "success")

    }

    let handleclear = () => {
        let newtext = ""
        setText(newtext)
        props.showAlert("Your text has been clear", "success")
    }

    let handlecopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("copied", "success")

    }

    let handleExtraspc = () => {
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "))
        props.showAlert("Removed extra spaces", "success")

    }

    return (
        <>
            <div>
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'rgb(6, 36, 67)' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(6, 36, 67)' : 'white', color: props.mode === 'dark' ? 'white' : 'rgb(6, 36, 67)' }} value={text} onChange={handlechange} id="mybox" rows="3"></textarea>
                </div>
                <div className="container">
                    <button className='btn btn-primary ms-3 my-2 col-sm-3'disabled ={text.length===0} onClick={handleupclick}>Convert to uppercase</button>
                    <button className='btn btn-primary ms-3 my-2 col-sm-3'disabled ={text.length===0} onClick={handleloclick}>Convert to lowercase</button>
                    <button className='btn btn-primary ms-3 my-2 col-sm-3'disabled ={text.length===0} onClick={handleclear}>Clear text</button>
                    <button className='btn btn-primary ms-3 my-2 col-sm-3'disabled ={text.length===0} onClick={handleExtraspc}>Remove extra spaces</button>
                    <button className='btn btn-primary ms-3 my-2 col-sm-3'disabled ={text.length===0} onClick={handlecopy}>Copy text</button>
                </div>

            </div>

            <div className="contaner my-3" style={{ color: props.mode === 'dark' ? 'white' : 'rgb(6, 36, 67)' }}>
                <h2>your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charecters in your sumary</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes will take to read the {text.split(" ").filter((element)=>{return element.length!==0}).length} words summary</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox to preview here"}</p>
            </div>

        </>
    )
}
