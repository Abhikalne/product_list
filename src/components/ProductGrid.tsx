import React from 'react'
import { Product } from '../types/product'
import './productGrid.css'

interface ProductGridProps {
    product: Product
}
const ProductGrid: React.FC<ProductGridProps> = ({ product }) => {
    return <div key={product.id} className='product-view'>
        <div className='image-wrapper'>
            <img src={product.image} alt={product.title} className='productimage' />
        </div>

        <div className='grid-data'>
            <h2>{product.title}</h2>
            <p>Price: 💲 {product.price}</p>
            <p>Rating: {product.rating.rate} ⭐️</p>
        </div>
    </div >
}

export default React.memo(ProductGrid)