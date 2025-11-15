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
  sortBy: ['name', 'price', 'quantity'],
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

        default:
            return state
    }
}

export const rootReducer = (state = initialState, action) => {
    return state
}