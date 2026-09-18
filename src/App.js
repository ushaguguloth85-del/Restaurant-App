import {Component} from 'react'
import Header from './components/Header'
import CategoryTabs from './components/CategoryTabs'
import MenuCategory from './components/MenuCategory'
import './App.css'

const API_URL =
  'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'

class App extends Component {
  state = {
    restaurantData: null,
    activeCategory: '',
    cart: {},
    isLoading: true,
    hasError: false,
  }

  componentDidMount() {
    this.getRestaurantData()
  }

  getRestaurantData = async () => {
    try {
      const response = await fetch(API_URL)

      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }

      const data = await response.json()

      const restaurant = data[0]

      this.setState({
        restaurantData: restaurant,
        activeCategory: restaurant.table_menu_list[0].menu_category_id,
        isLoading: false,
      })
    } catch (error) {
      console.log(error)

      this.setState({
        isLoading: false,
        hasError: true,
      })
    }
  }

  increaseQuantity = dishId => {
    this.setState(previousState => {
      const currentQuantity = previousState.cart[dishId] || 0

      return {
        cart: {
          ...previousState.cart,
          [dishId]: currentQuantity + 1,
        },
      }
    })
  }

  decreaseQuantity = dishId => {
    this.setState(previousState => {
      const currentQuantity = previousState.cart[dishId] || 0

      if (currentQuantity === 0) {
        return null
      }

      return {
        cart: {
          ...previousState.cart,
          [dishId]: currentQuantity - 1,
        },
      }
    })
  }

  changeCategory = categoryId => {
    this.setState({
      activeCategory: categoryId,
    })
  }

  getCartCount = () => {
    const {cart} = this.state

    return Object.values(cart).reduce((total, quantity) => total + quantity, 0)
  }

  render() {
    const {restaurantData, activeCategory, cart, isLoading, hasError} = this.state

    if (isLoading) {
      return (
        <div className="status-container">
          <p>Loading...</p>
        </div>
      )
    }

    if (hasError || restaurantData === null) {
      return (
        <div className="status-container">
          <p>Something went wrong</p>
        </div>
      )
    }

    const categories = restaurantData.table_menu_list

    const selectedCategory = categories.find(
      category => category.menu_category_id === activeCategory,
    )

    return (
      <div className="restaurant-app">
        <Header
          restaurantName={restaurantData.restaurant_name}
          cartCount={this.getCartCount()}
        />

        <div className="restaurant-details">
          <p>{restaurantData.restaurant_location}</p>

          <p className="rating">★ {restaurantData.restaurant_rating}</p>
        </div>

        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={this.changeCategory}
        />

        {selectedCategory && (
          <MenuCategory
            category={selectedCategory}
            cart={cart}
            onIncrease={this.increaseQuantity}
            onDecrease={this.decreaseQuantity}
          />
        )}
      </div>
    )
  }
}

export default App
