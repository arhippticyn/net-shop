import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getselectedCategory } from '../../redux/selectors';
import styles from './Categories.module.css'
import { SET_CATEGORY_FILTER } from '../../redux/actions';


const Categories = () => {
    const categories = useSelector(getCategories)
    const selectedCategory = useSelector(getselectedCategory)
    const dispatch = useDispatch()

    const handleCategories = (category) => dispatch(SET_CATEGORY_FILTER(category))
  return (
    <ul className={styles.categories}>
        <li className={styles.category}><button onClick={() => handleCategories('all')}>{selectedCategory}</button></li>
        {categories.map((category) => {
            return <li className={styles.category}><button onClick={() => handleCategories(category)}>{category}</button></li>
        })}
    </ul>
  )
}

export default Categories;