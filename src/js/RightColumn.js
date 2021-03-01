
function ShowNote(props){
    let show =props.shownote;
    let name = props.name;
    let content = props.content;
    let onClickFn = props.onClickFn;
    // let created_date = props.created_date
    if (show==="True"){
        return (
        
            <div className='note-content' onClick={onClickFn}>
                 <div className='note-title' >{name} </div>
                 <div className='note-content'>{content} </div>
                 {/* <div className='created_date'>{created_date} </div> */}
            </div>
        ); 
    }else{
        return <div>

        </div>
    }
     
}
function RightColumn(props) {
    const activeSate = props.activeSate;
    const setActiveSate = props.setActiveSate;

    const clickActive=props.clickActive;
    
    const notes = props.notes;

    return (
        <div className="right">
            <h1>Content</h1>
            {
            notes.map((note, index) => {
                return <ShowNote
                    key={index}
                    shownote = {note.id === activeSate? "True":"False"}
                    onClickFn={clickActive}
                    name={note.name}
                    content={note.content}
                    // created_date={note.created_date}
                    />
            })
            }
        </div>
    );

}

export default RightColumn;