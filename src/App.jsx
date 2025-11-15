import { useState } from 'react'
import './App.css'
import Products from './components/Products/Products'
import Search from './components/Search/Search'
import Categories from './components/Categories/Categories'
import Sort from './components/Sort/Sort'
import Add from './components/Add/Add'

function App() {
  return (
    <div>
      <Add />
      <Search />
      <Categories />
      <Sort />
      <Products />
    </div>
  )
}

export default App
