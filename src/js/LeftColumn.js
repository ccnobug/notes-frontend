import { useState } from "react"
import {Note} from "./Note.js"

function Row(props) {
    let id = props.id;
    let name = props.name;
    let created_date = props.created_date.toString().substring(0, 21);
    let content = props.content;

    let bgColor = props.bgColor;

    let onClickFn= props.onClickFn;


    return (
        
        <div className='note' data-id={id} onClick={onClickFn} style={{backgroundColor: bgColor}}>
             <div className='title' >{name} </div>
             <div className='preview'>{content} </div>
             <div className='created_date'>{created_date} </div>
        </div>
    );    
}

function LeftColumn(props) {
    const activeSate = props.activeSate;
    const setActiveSate = props.setActiveSate;

    const clickActive=props.clickActive;
    
    const notes = props.notes;
    
    return (
      <div className="left">
        <h1>Table of contents</h1>
        {
            notes.map((note, index) => {
                return <Row
                    bgColor={note.id === activeSate? "rgb(216, 229, 238)" :"transparent"}
                    onClickFn={clickActive}
                    key={index}
                    id={note.id} 
                    name={note.name}
                    created_date={note.created_date}
                    content={note.content}

                    />
            })
        }
      </div>
      
    );
}



export default LeftColumn;