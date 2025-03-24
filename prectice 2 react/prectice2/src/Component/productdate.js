const Productdata = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();
    return (
        <div classname="product-data">
            <div classname="product-data__month">{month}</div>
            <div classname="product-data__year">{year}</div>
            <div classname="product-data__day">{day}</div>
           </div> 
           );
            };
            export default Productdata;