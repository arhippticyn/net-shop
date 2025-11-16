import React from 'react';
import styles from './Sort.module.css';
import { useSelector } from 'react-redux';
import { getSortBy } from '../../redux/selectors';
import { SortStatus } from '../../redux/constans';


const Sort = () => {
    const sort = useSelector(getSortBy)
  return (
    <ul className={styles.sort}>
      <li><button selected={sort === SortStatus.name}>name</button></li>
      <li><button selected={sort === SortStatus.price}>price</button></li>
      <li><button selected={sort === SortStatus.quantity}>quantity</button></li>
    </ul>
  )
}

export default Sort;