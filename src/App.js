import logo from './logo.svg';
import './App.css';
import LeftColumn from './js/LeftColumn';
import RightColumn from './js/RightColumn';
import {Note} from './js/Note';
import { useState } from "react"



function App() {
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


    const [activeSate, setActiveSate] = useState(null);

    const clickActive=(e)=> {
        console.log("click")
        console.log(e)
        console.log(e.currentTarget.dataset.id, typeof(e.currentTarget.dataset.id))
        setActiveSate(parseInt(e.currentTarget.dataset.id));
        console.log("active: ", activeSate, typeof(activeSate))
    }

  return (
    <div className="App">
      <LeftColumn notes = {notes}
      activeSate = {activeSate}
      setActiveSate = {setActiveSate}
      clickActive = {clickActive}/>
      <RightColumn 
        notes = {notes}
        activeSate = {activeSate}
        setActiveSate = {setActiveSate}
        clickActive = {clickActive}
      />
    </div>
  );
}

export default App;
