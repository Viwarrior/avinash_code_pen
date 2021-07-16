
import React, { useState, useEffect } from 'react';
import Editor from './Editor';

function App() {
  const [html, setHtml] = useState('') /* Saves editor's text in index.html */ 
  const [css, setCss] = useState('') /* Saves editor's text in index.css */ 
  const [js, setJs] = useState('') /* Saves editor's text in index.js */ 
  const [srcDoc, setSrcDoc] = useState('') /* Combined document using html, js and css file to give into iframe for output*/
  const [editorVal,setEditorVal] = useState(0) /*to control display of html,css and js code of the user. (for 0,1,2 values respectively).*/
  
  /* to add delay to hot-reload*/
  useEffect(() =>
  {
    /*create source code doc using all the files(js,html,css) after 300 delay timeout*/
    const timeout = setTimeout(() =>{ 
      setSrcDoc(`<html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>
      `)
    }, 300)

    /*to clear timeout*/
    return () => clearTimeout(timeout) 
  },[html,css,js])

  
  
  return(
    <>
  <div className = "file-explorer">
    
    <button onClick = {() => setEditorVal(0)}>index.html</button>
    <button onClick = {() => setEditorVal(1)}>index.css</button>
    <button onClick = {() => setEditorVal(2)} >index.js</button>
  </div>
    <div className = "pane editor">  
    
    {editorVal === 0?<Editor 
    language = "xml"
    fileName = "index.html"
    value = {html}
    onChange = {setHtml}
    />:null}

{editorVal === 1?<Editor 
    language = "css"
    fileName = "index.css"
    value = {css}
    onChange = {setCss}
    />:null}

    {editorVal === 2? <Editor 
    language = "javascript"
    fileName = "index.js"
    value = {js}
    onChange = {setJs}
    />:null}

    </div>
    <div className = "pane">

      <iframe 
      srcDoc = {srcDoc}
      title = "output"
      sandbox  = "allow-scripts" /*sand box for security and restrict access */
      frameBorder = "0"
      width = "100%"
      height = "100%"
      />
      </div>
     
      </>
    )
  }
  



export default App;
