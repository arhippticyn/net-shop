import React from 'react';
import styles from './UpdateProduct.module.css'
import { useDispatch } from 'react-redux';
import { UPDATE_PRODUCT } from '../../redux/actions';

const UpdateProduct = ({ product }) => {
    const dispatch = useDispatch()

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        const updateData = {
            name: form.elements.name.value || product.name,
            price: Number(form.elements.price.value) || product.value,
            quantity: Number(form.elements.quantity.value) || product.quantity
        }
        dispatch(UPDATE_PRODUCT(product.id,updateData))
        form.reset()
    }
  return (
    <form action="" className={styles.UpdateForm}  onSubmit={handleUpdate}>
        <label htmlFor="name" className={styles.UpdateLabel}>name:</label>
        <input type="text" name='name' className={styles.UpdateInput} />

        <label htmlFor="price" className={styles.UpdateLabel}>price:</label>
        <input type="number" name="price" className={styles.UpdateInput} />

        <label htmlFor="quantity" className={styles.UpdateLabel}>quantity:</label>
        <input type="text" className={styles.UpdateInput} name='quantity' />

        <button type="submit" className={styles.UpdateBtn}>Update product</button>
    </form>
  )
}

export default UpdateProduct;