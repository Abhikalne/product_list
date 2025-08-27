import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return <div id='home_conatiner'>
        <h1>Product Store</h1>
        <Link to={'/product-list'} aria-label='link_to_product'>Go to Product List</Link>
    </div>
}
export default Home