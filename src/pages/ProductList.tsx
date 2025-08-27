import React, { useEffect, useState } from 'react'
import { Product } from '../types/product';
import ProductGrid from '../components/ProductGrid';
import ProductTable from '../components/ProductTable';
import './productList.css'

const ProductList = () => {
    const [productData, setProductData] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null)
    const [view, setView] = useState<'grid' | 'table'>('grid')
    const [order, setOrder] = useState<'asc' | 'desc' | null>(null)

    const fetchProductData = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setError(null)
            setProductData(data);
        } catch (error: any) {
            setError('Fail to load data')
            console.error("Failed to fetch product data:", error);
        }
    }

    useEffect(() => {
        fetchProductData()
    }, [])

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setView(e.target.value as 'grid' | 'table')
    }

    const handleSort = (order: 'asc' | 'desc') => {
        setOrder(order)
        const sortedData = [...productData].sort((product1, product2) => order === 'asc' ? product1.price - product2.price : product2.price - product1.price)
        setProductData(sortedData)
    }

    return <div className='container'>
        <h1>ProductList</h1>
        {error ? <div aria-label='error_section'>
            <h3>{error}</h3>
            <button onClick={fetchProductData}>Retry</button>
        </div> : <>
            <div className='wrapper'>
                <div className='select-container'>
                    <label htmlFor='view-select'>Current View</label>
                    <select id="view-select" value={view} onChange={handleSelect} className='view-select '>
                        <option value='grid'>Grid View</option>
                        <option value='table'>Table View</option>
                    </select>

                </div>
                <div className='sort-container'>
                    <label htmlFor='sort-order'>Sort Product by price</label>
                    <button onClick={() => handleSort('asc')} className={`sort-button ${order === 'asc' ? 'active' : ''}`} aria-label='sort low to high'>Low to High</button>
                    <button onClick={() => handleSort('desc')} className={`sort-button ${order === 'desc' ? 'active' : ''}`} aria-label='sort high to low'>High to Low</button>
                </div>
            </div>
            {
                productData.length > 0 ? view === 'grid' ? (
                    <div className="grid-container">
                        {
                            productData.map((product: Product) => (
                                <ProductGrid key={product.id} product={product} />
                            ))}
                    </div>) : (<div className='table-container'>
                        <ProductTable productData={productData} />
                    </div>)
                    : <h3 aria-label='loading state'>Loading...</h3>}
        </>}
    </div>

}
export default ProductList;