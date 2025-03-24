import './task1.css';
import Card from '.component/card.js';
import ProductItem from './component/productitem.js';
function Task1(props) {

    return (
       <Card className="task1">
        <ProductItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        />
        <ProductItem
        title={props.item[1].title}
          amount={props.item[1].amount}
        />
        <ProductItem 
        title={props.item[2].title}
        amount={props.item[2].amount}
        />
       </Card>
    );
}

export default Task1;