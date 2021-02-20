import { useState } from "react"

function Row(props) {
    let title = props.title;

    let bgColor = props.bgColor;

    let onClickFn= props.onClickFn;


    return (
        
        <div className='title' onClick={onClickFn} style={{backgroundColor: bgColor}}>
             <div>{title} </div>
             <div className='date'>Date:2021/02/.. </div>
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
        console.log("click")
        console.log(e.target.innerText)
        setActiveSate(e.target.innerText);
    }
    
    return (
      <div className="left">
        <h1>Table of contents</h1>
        {
            titles.map((title, index) => {
                return <Row
                    bgColor={title === activeSate? "rgb(216, 229, 238)" :"transparent"}
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