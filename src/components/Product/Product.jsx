import React, { useState } from 'react';
import styles from './Product.module.css'
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { DELETE_PRODUCT, RESTOCK_PRODUCT } from '../../redux/actions';
import { CiCirclePlus } from "react-icons/ci";
import UpdateProduct from '../UpdateProduct/UpdateProduct';

const Product = ({ product }) => {
  const dispatch = useDispatch()
  const [isOpen, setOpen] = useState(false)
 
  const handleDelete = () => dispatch(DELETE_PRODUCT(product.id))
  const handleAdd = () => dispatch(RESTOCK_PRODUCT(product.id, product.quantity))
  return (
    <li  className={styles.productCard}>
      <button className={styles.UpdateBtn} onClick={() => setOpen(prev => !prev)}>Update</button>
      <button className={styles.close} onClick={handleDelete}><IoIosCloseCircle /></button>
        <h2 className={styles.productCardTitle}>{product.name}</h2>
        <p className={styles.productCardPrice}>Price: {product.price}$</p>
        <p className={styles.productCardQuantity}>Quantity: {product.quantity} <button onClick={handleAdd} className={styles.addQuantity}><CiCirclePlus /></button></p>

        {product.quantity > 0 ? <button className={styles.productCardBtn}>Buy</button> : 'Not of them'}

        {isOpen ? <UpdateProduct product={product} /> : null}
    </li>
  )
}

export default Product;