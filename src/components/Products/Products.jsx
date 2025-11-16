import React from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../../redux/selectors';
import styles from './Products.module.css'
import Product from '../Product/Product';

const Products = () => {
    const products = useSelector(getProducts)

  return (
    <ul className={styles.products}>
        {products.map((product) => {
            return <Product product={product} key={product.id} />
        })}
    </ul>
  )
}

export default Products;