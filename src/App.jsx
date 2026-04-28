
import './App.css'
import ProductList from './components/ProductList'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const products = [
  {
    "id": 1,
    "name": "Laptop",
    "category": "Electronics",
    "price": 899.99,
    "inStock": true
  },
  {
    "id": 2,
    "name": "Smartphone",
    "category": "Electronics",
    "price": 599.99,
    "inStock": true
  },
  {
    "id": 3,
    "name": "Office Chair",
    "category": "Furniture",
    "price": 149.99,
    "inStock": false
  },
  {
    "id": 4,
    "name": "Running Shoes",
    "category": "Sportswear",
    "price": 79.99,
    "inStock": true
  },
  {
    "id": 5,
    "name": "Coffee Maker",
    "category": "Home Appliances",
    "price": 49.99,
    "inStock": true
  }
]
  return (
    <div className='container'>
      <Header />
      <ProductList products={products}/>
      <Footer />
    </div>
  )
}

export default App
