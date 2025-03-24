import'./heads.css'
function Head(props){
    const day=props.day;
    const month=props.month;
    const year=props.year;
    return(
        <div className="mfg">
            <span>{day}</span>
            <span>{month}</span>
            <span>{year}</span>
        </div>
    
    )
}
export default Head;