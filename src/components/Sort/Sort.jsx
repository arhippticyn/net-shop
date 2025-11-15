import React from 'react';
import styles from './Sort.module.css';
import { useSelector } from 'react-redux';
import { getSortBy } from '../../redux/constans';


const Sort = () => {
    const sort = useSelector(getSortBy)
  return (
    <ul className={styles.sort}>
        {sort.map((item) => {
            return <li><button>{item}</button></li>
        })}
    </ul>
  )
}

export default Sort;