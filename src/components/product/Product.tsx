import React, {FC} from 'react';
import {IProductsProps} from "../models/Product.model";



type ITypeProductsProps = IProductsProps & { children?: React.ReactNode}
export const Product: FC<ITypeProductsProps> = ({id,
                                                    title,
                                                    price,
                                                    discountPercentage,
                                                    rating,
                                                    description,
                                                    stock,}) => {
    return (
        <div>
            <h2>{id}. {title}</h2>
            <p> <b>Rating - {rating}</b></p>
            <p>Stock - {stock}</p>
            <p>{description}.</p>
            <p> <b>${price}. Discount - -%{discountPercentage}.</b></p>
        </div>
    );
};

export default Product;