import React, { useState } from 'react';
import styles from './Product.module.css'

const Product = ({ product }) => {

  return (
    <li  className={styles.productCard}>
        <h2 className={styles.productCardTitle}>{product.name}</h2>
        <p className={styles.productCardPrice}>Price: {product.price}$</p>
        <p className={styles.productCardQuantity}>Quantity: {product.quantity}</p>

        {product.quantity > 0 ? <button className={styles.productCardBtn}>Buy</button> : 'Not of them'}
    </li>
  )
}

export default Product;