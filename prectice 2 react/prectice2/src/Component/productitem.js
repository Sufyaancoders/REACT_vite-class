import React from 'react';
import Card from './component/card.js';
import Productdata from './component/productdata.js';
import './productitem.css';
const ProductItem = (props) => {
    return (
        <Card className="product-item">
            <Productdata date={props.date} />
            <div className="product-item__description">
                <h2>{props.title}</h2>
                </div>

                </Card>
    );
};
export default ProductItem;
