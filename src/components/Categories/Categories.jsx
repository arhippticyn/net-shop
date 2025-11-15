import React from 'react';
import { useSelector } from 'react-redux';
import { getCategories, getselectedCategory } from '../../redux/constans';
import styles from './Categories.module.css'


const Categories = () => {
    const categories = useSelector(getCategories)
    const selectedCategory = useSelector(getselectedCategory)
  return (
    <ul className={styles.categories}>
        <li className={styles.category}><button>{selectedCategory}</button></li>
        {categories.map((category) => {
            return <li className={styles.category}><button>{category}</button></li>
        })}
    </ul>
  )
}

export default Categories;