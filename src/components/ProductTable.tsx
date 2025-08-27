import React from 'react'
import { Product } from '../types/product'
import './productTable.css'

interface ProductTableProps {
    productData: Product[]
}

const ProductTable: React.FC<ProductTableProps> = ({ productData }) => {
    return <table className='tableView' role='table'>
        <thead>
            <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price ($)</th>
                <th>Rating</th>
            </tr>
        </thead>
        <tbody>
            {productData.map((product: Product) =>
                <tr key={product.id}>
                    <td><img src={product.image} alt={product.title} className='product_image' /></td>
                    <td>{product.title}</td>
                    <td>{product.price}💲</td>
                    <td>{product.rating.rate}⭐️</td>
                </tr>
            )}
        </tbody>
    </table>

}

export default React.memo(ProductTable)