import React from 'react';
import styles from './Sort.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getSortBy } from '../../redux/selectors';
import { SortStatus } from '../../redux/constans';
import { SET_SORT_BY } from '../../redux/actions';


const Sort = () => {
    const sort = useSelector(getSortBy)
    const dispatch = useDispatch()

    const handleSort = sort => dispatch(SET_SORT_BY(sort))
  return (
    <ul className={styles.sort}>
      <li><button selected={sort === SortStatus.name} onClick={() => handleSort(SortStatus.name)}>name</button></li>
      <li><button selected={sort === SortStatus.price} onClick={() => handleSort(SortStatus.price)}>price</button></li>
      <li><button selected={sort === SortStatus.quantity} onClick={() => handleSort(SortStatus.quantity)}>quantity</button></li>
    </ul>
  )
}

export default Sort;