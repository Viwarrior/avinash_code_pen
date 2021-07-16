import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor } from 'react-codemirror2' /* To add controlled editor*/

export default function Editor(props) {
    /*langauge represents language in use*/
    /*fileName displays the filename in use*/
    /*value represents the value (code input from user)*/
    /*onChange is method to set value of html, css and js content.*/
    
    const{
        language, 
        fileName,
        value,
        onChange
    } = props

    /* set css, javascript or html changed value from editor into respective variables*/
    function handleChange(editor, data, value){
        onChange(value)
    }


    return (
        <div className = "editor-container">
            <div className = "editor-title">
            {fileName}
            </div>
            <ControlledEditor
            onBeforeChange = {handleChange}
            value = {value}
            className= "code-mirror-wrapper"
            options = {{
                lineWrapping: true,
                lint: true,
                mode:language,
                theme: 'material',
                lineNumbers: true
            }}

            />
        </div>
    )
}
