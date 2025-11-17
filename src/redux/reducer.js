import { combineReducers } from "redux";

const initialState = {
  products: [
  {
    id: 1,
    name: "Смартфон Samsung A52",
    category: "Електроніка",
    price: 8999,
    quantity: 12
  },
  {
    id: 2,
    name: "Навушники Sony WH-CH510",
    category: "Електроніка",
    price: 1799,
    quantity: 4
  },
  {
    id: 3,
    name: "Футболка Nike Basic",
    category: "Одяг",
    price: 799,
    quantity: 25
  },
  {
    id: 4,
    name: "Кофта Adidas Originals",
    category: "Одяг",
    price: 1599,
    quantity: 7
  },
  {
    id: 5,
    name: "Книга '1984' Джордж Орвелл",
    category: "Книги",
    price: 289,
    quantity: 15
  },
  {
    id: 6,
    name: "Книга 'Гаррі Поттер і Філософський камінь'",
    category: "Книги",
    price: 349,
    quantity: 2
  },
  {
    id: 7,
    name: "Пилосос Philips PowerPro",
    category: "Побутова техніка",
    price: 3299,
    quantity: 6
  },
  {
    id: 8,
    name: "Мікрохвильовка Samsung ME73",
    category: "Побутова техніка",
    price: 2599,
    quantity: 3
  }
],
  categories: ['Електроніка', 'Одяг', 'Книги', 'Побутова техніка'],
  selectedCategory: 'all',
  searchQuery: '',
  sortBy: 'name', // 'name', 'price', 'quantity'
  lowStockThreshold: 5
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'products/ADD_PRODUCT':
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload,
                ]
            };

          case 'products/UPDATE_PRODUCT':
            return {
              ...state,
              products: state.products.map((product) => 
              product.id === action.payload.id ? {...product, ...action.payload.updateData} : product
              )
            };

          case 'products/DELETE_PRODUCT':
            return {
              ...state,
              products: state.products.filter((product) => product.id !== action.payload)
            };

          case 'products/RESTOCK_PRODUCT':
            return {
              ...state,
              products: state.products.map(product => 
                product.id === action.payload.id ? {...product, quantity: product.quantity + action.payload.quantity} : product
              )
            }

        default:
            return state
    }
}

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'categories/SET_CATEGORY_FILTER':
      return {
        ...state,
        selectedCategory: action.payload
      };

    default:
      return state
  }
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'searchQuery/SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload
      };

    default: 
     return state
  }
}

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'sortBy/SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload
      }

    default:
      return state
  }
}

export const rootReducer = combineReducers({
  products: productReducer,
  categories:categoriesReducer,
  searchQuery: searchReducer,
  sortBy: sortReducer
})