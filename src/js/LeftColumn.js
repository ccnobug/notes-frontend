import { useState } from "react"

function Row(props) {
    let title = props.title;

    let bgColor = props.bgColor;

    let onClickFn= props.onClickFn;


    return (
        <div className='title' onClick={onClickFn} style={{backgroundColor: bgColor}}>
             {title} 
        </div>
    );    
}

function LeftColumn() {
    const titles= ['supermarket sfgkdfjgkldfjgklsdjflgkjdflkgjdlfkjgldf','interview',
    'to do list','dfsdfs','sdfsafsdf','sdfasdf','sdfasdfasdf','asdf','dhthjy','asjeiorjge','sflgfdh','sgjdfklgjetoy',
'asgfdfgjdf','elktyioty','eyjeotriyj','eoprtiyhru','erliypetoyi','0ei-0yi39','sojgfoireugt','argioerut','mgsiorugt0',
'djgf'];
    // const [supermarket, interview,todo]=['milk,eggs,wipping cream','instacart,aviva,MS','web code,sleep'];

    const [activeSate, setActiveSate] = useState(null);

    const clickActive=(e)=> {
        setActiveSate(e.target.innerText);
    }
    
    return (
      <div className="left">
        <h1>Table of contents</h1>
        {
            titles.map((title, index) => {
                return <Row
                    bgColor={title === activeSate? "lightslategray":"transparent"}
                    onClickFn={clickActive}
                    key={index} 
                    title={title}
                    />
            })
        }
      </div>
      
    );
}



export default LeftColumn;