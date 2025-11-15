import React from 'react';
import styles from './Search.module.css'
import { useSelector } from 'react-redux';
import { getSearchQuery } from '../../redux/constans';

const Search = () => {
    const search = useSelector(getSearchQuery)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        form.reset()
    }
  return (
    <form action="" className={styles.search} onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={(e) => e.target.value} className={styles.input} placeholder='Search' />
        <button type="submit" className={styles.button}>Search</button>
    </form>
  )
}

export default Search;