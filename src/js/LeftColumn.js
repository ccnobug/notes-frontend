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

function LeftColumn() {
    let note1 = new Note(1,'supermarket sfgkdfjgkldfjgklsdjflgkjdflkgjdlfkjgldf sfgkdfjgkldfjgklsdjflgkjdflkgjdlfkjgldfdfvgfdg', new Date("2021/2/11 14:30"),'milk,eggs,wipping cream');
    let note2 = new Note(2,'interview',new Date("2021/2/01 1:30"),'companyA COMPANY B COMPANY C');
    let note3 = new Note(3,'to do list', new Date("2021/2/05 15:40"),'drink');
    let note4 = new Note(4,'interview', new Date("2021/12/05 8:34"),'Hiring Manager');
    let note5 = new Note(5,'birthday', new Date("2021/12/27 3:27"),'bake cake, sing birthday songs');
    let note6 = new Note(6,'supermarket sfgkdfjgkldfjgklsdjflgkjdflkgjdlfkjgldf',Date("2021/2/11 14:30"),'milk,eggs,wipping cream');
    let note7 = new Note(7,'interview', new Date("2021/2/01 1:30"),'companyA COMPANY B COMPANY C');
    let note8 = new Note(8,'to do list', new Date("2021/2/05 15:40"),'drink');
    let note9 = new Note(9,'interview',new Date("2021/12/05 8:34"),'Hiring Manager');
    let note10 = new Note(10,'birthday', new Date("2021/12/27 3:27"),'bake cake, sing birthday songssdfsfasd fsdg sdfg dfg dshfgdhgdhfg');
    let note11 = new Note(11,'birthday',new Date("2021/12/27 3:27"),'bake cake, sing birthday songs');

    const notes = [note1, note2, note3, note4, note5, note6, note7, note8, note9, note10, note11];
//     const titles= ['supermarket sfgkdfjgkldfjgklsdjflgkjdflkgjdlfkjgldf','interview',
//     'to do list','interview','sdfsafsdf','sdfasdf','sdfasdfasdf','asdf','dhthjy','asjeiorjge','sflgfdh','sgjdfklgjetoy',
// 'asgfdfgjdf','elktyioty','eyjeotriyj','eoprtiyhru','erliypetoyi','0ei-0yi39','sojgfoireugt','argioerut','mgsiorugt0',
// 'djgf'];
    // const [supermarket, interview,todo]=['milk,eggs,wipping cream','instacart,aviva,MS','web code,sleep'];

    const [activeSate, setActiveSate] = useState(null);

    const clickActive=(e)=> {
        console.log("click")
        console.log(e)
        console.log(e.currentTarget.dataset.id, typeof(e.currentTarget.dataset.id))
        setActiveSate(parseInt(e.currentTarget.dataset.id));
        console.log("active: ", activeSate, typeof(activeSate))
    }
    
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