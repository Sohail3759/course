import React, { useState } from 'react'

export default function Textform(props) {
    let [text, setText] = useState('');

    let handleupclick = () => {
        // console.log("uppercasewas clicked")
        let newtext = text.toUpperCase();
        setText(newtext)
    }

    let handlechange = (event) => {
        // console.log("onchange")
        setText(event.target.value)
    }

    let handleloclick = () => {
        // console.log("lowercase was clicked")
        let newtext = text.toLowerCase()
        setText(newtext)
    }

    let handleclear = () => {
        let newtext =""
        setText(newtext)
    }

    // let handlecopy = () => {
    //     let newtext = text;
    //     newtext.select();
    //     document.execCommand('copy')
    // }


    
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handlechange} id="mybox" rows="3"></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleupclick}>Convert to uppercase</button>
                <button className='btn btn-primary ms-3' onClick={handleloclick}>Convert to lowercase</button>
                <button className='btn btn-primary ms-3' onClick={handleclear}>Clear text</button>
                {/* <button className='btn btn-primary ms-3' onClick={handlecopy}>Copy text</button> */}

            </div>

            <div className="contaner my-3">
                <h2>your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} charecters in your sumary</p>
                <p>{0.008 * text.split(" ").length } minutes will take to read the {text.split(" ").length} words summary</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </>
    )
}
