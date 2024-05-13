import React, {FC, useEffect, useState} from 'react';
import {IProductsProps, Product} from "../product/Product";

const Products: FC = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(({products}) => {
                setProducts(products);
            });
    }, []);
    console.log('test')

    return (
        <div>
            {
                products.map(({id, title, price, discountPercentage, rating, description, stock}: IProductsProps) => (
                    <Product key={id} id={id} title={title} price={price} discountPercentage={discountPercentage}
                             rating={rating} description={description} stock={stock}/>))
            }
        </div>
    );
};

export default Products;