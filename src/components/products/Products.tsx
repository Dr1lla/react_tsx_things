import React, {FC, useEffect, useState} from 'react';
import {Product} from "../product/Product";
import {IProductsProps} from "../models/Product.model";
import {getAllProducts} from "../service/products.api.service";

const Products: FC = () => {

    const [products, setProducts] = useState<IProductsProps[]>([]);

    useEffect(() => {
        getAllProducts().then(value => setProducts(value.data.products));
    }, []);

    console.log('test');

    return (
        <div>
            {
                products.map((value: IProductsProps) => (
                    <Product key={value.id} id={value.id} title={value.title} price={value.price} discountPercentage={value.discountPercentage}
                             rating={value.rating} description={value.description} stock={value.stock}/>))
            }
        </div>
    );
};

export default Products;
