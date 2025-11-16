import React, { useState } from 'react';
import styles from './Product.module.css'
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { DELETE_PRODUCT } from '../../redux/actions';

const Product = ({ product }) => {
  const dispatch = useDispatch()

  const handleDelete = () => dispatch(DELETE_PRODUCT(product.id))
  return (
    <li  className={styles.productCard}>
      <button className={styles.close} onClick={handleDelete}><IoIosCloseCircle /></button>
        <h2 className={styles.productCardTitle}>{product.name}</h2>
        <p className={styles.productCardPrice}>Price: {product.price}$</p>
        <p className={styles.productCardQuantity}>Quantity: {product.quantity}</p>

        {product.quantity > 0 ? <button className={styles.productCardBtn}>Buy</button> : 'Not of them'}
    </li>
  )
}

export default Product;