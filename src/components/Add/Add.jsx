import React from 'react';
import styles from './Add.module.css'
import { useDispatch } from 'react-redux';
import { ADD_PRODUCT } from '../../redux/actions';

const Add = () => {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        dispatch(ADD_PRODUCT)
        form.reset()
    }
  return (
    <form action="" className={styles.Add} onSubmit={handleSubmit}>
        <label htmlFor="name" className={styles.label}>Name:</label>
        <input type="text" name='name' className={styles.input} placeholder='Enter name' />
        
        <label htmlFor="price" className={styles.label}>Price:</label>
        <input type="number" name='price' className={styles.input} placeholder='Enter price' />

        <label htmlFor="quantity" className={styles.label}>Quantity:</label>
        <input type="text" name='quantity' className={styles.input} />

        <button type="submit">Add item</button>
    </form>
  )
}

export default Add;