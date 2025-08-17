
import React,{ useState }from "react";


export default function TextForm(props){
   const [text, setText]= useState("")
    const handelUpclick =()=>{
        console.log("Uppecase was clicked")
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Conveted To Uppercase","success")
    }
     const handelloclick =()=>{
        console.log("Uppecase was clicked")
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Conveted To Lowercase","success")
    }
    const handelclrclick =()=>{
        console.log("cccl")
         console.clear();
        setText("")
        props.showAlert("clear the text areia","success")
    }
    
    
    const handelonchange = (event)=>{
        console.log("on change ")
        setText(event.target.value);
    }
    

    return(
        <>
        <div className="container" style ={{color:props.mode=== 'dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" value={text} onChange={handelonchange} style ={{backgroundColor:props.mode=== 'dark'?'grey':'white', color: props.mode=== 'dark'?'white':'#042743'}}rows="3" placeholder="Enter Your Text"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handelUpclick}>Convert to Uppercase</button>
<button className="btn btn-primary" onClick={handelloclick}>Convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handelclrclick}>Clear</button>

</div>
<div className="container my-3" style ={{color:props.mode=== 'dark'?'white':'#042743'}}>
    <h2>text</h2>
    <p>words  {text.split(" ").length} and {text.length}  characters</p>
    <p>{0.008* text.split(" ").length}time to read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"enter somthing in the textbox to preview it here"}</p>


</div>
</>
    )
}
