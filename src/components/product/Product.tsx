import React, {FC} from 'react';

export interface IProductsProps {
    "id"?: number,
    "title"?: string,
    "description"?: string,
    "price"?: number,
    "discountPercentage"?: number,
    "rating"?: number,
    "stock"?: number,
    "brand"?: string,
    "category"?: string,
    "thumbnail"?: string,
    "images"?: string[]
}

type ITypeProductsProps = IProductsProps & { children?: React.ReactNode}
export const Product: FC<ITypeProductsProps> = ({id, title, price, discountPercentage, rating,}) => {
    return (
        <div>
            <h2>{id}. {title}. {price}. {discountPercentage}. {rating}.</h2>
        </div>
    );
};

export default Product;