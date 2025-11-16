import React from 'react';
import styles from './Search.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getSearchQuery } from '../../redux/selectors';
import { SET_SEARCH_QUERY } from '../../redux/actions'

const Search = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const search = form.elements.search
        dispatch(SET_SEARCH_QUERY(search))
        form.reset()
    }
  return (
    <form action="" className={styles.search} onSubmit={handleSubmit}>
        <input name='search' type="text" className={styles.input} placeholder='Search' />
        <button type="submit" className={styles.button}>Search</button>
    </form>
  )
}

export default Search;