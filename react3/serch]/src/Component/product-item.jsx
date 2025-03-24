import React from 'react';
import './product-item.css';

function ProductItem() {
    return (
        <div className="product-item">
            <from>'
                <div>
                        <label>title</label>
                        <input type="text" />
                  </div>
                   <div>
                        <label>
                            product price</label>
                        <input type="date" min="2022-01-01" max="2022-12-31" />
                        </div>
                        <div>
                            <label>add product</label>
                            <button type="submit">add product</button>
                        </div>
            </from>

        </div>
    )
}
export default ProductItem;