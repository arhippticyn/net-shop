import React from 'react';
import styles from './Add.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_PRODUCT } from '../../redux/actions';
import { getCategories } from '../../redux/selectors';

const Add = () => {
    const dispatch = useDispatch()
    const categories = useSelector(getCategories)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.elements.name.value
        const category = form.elements.category.value
        const price = parseInt(form.elements.price.value)
        const quantity = parseInt(form.elements.quantity.value)

        if (!name || !category) return alert('Please enter a name and choose a category')
        if (price < 0) return alert('Price cannot be a negative')
        if (quantity < 0) return alert('Quantity must be 0 or more')

        dispatch(ADD_PRODUCT(name,category,price, quantity))
        form.reset()
    }
  return (
    <form action="" className={styles.Add} onSubmit={handleSubmit}>
        <label htmlFor="name" className={styles.label}>Name:</label>
        <input type="text" name='name' className={styles.input} placeholder='Enter name' />
        
        <label htmlFor="price" className={styles.label}>Price:</label>
        <input type="number" name='price' className={styles.input} placeholder='Enter price' />

        <label className={styles.label}>Category:</label>
            <select name="category" className={styles.input}>
                <option value="">Choose category</option>
                {categories.map((cat, i) => (
                    <option key={i} value={cat}>{cat}</option>
                ))}
            </select>

        <label htmlFor="quantity" className={styles.label}>Quantity:</label>
        <input type="text" name='quantity' className={styles.input} />

        <button type="submit">Add item</button>
    </form>
  )
}

export default Add;