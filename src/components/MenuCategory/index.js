import MenuItem from '../MenuItem'
import './index.css'

const MenuCategory = props => {
  const {category, cart, onIncrease, onDecrease} = props

  return (
    <section className="menu-category">
      <h2 className="category-title">{category.menu_category}</h2>

      {category.category_dishes.map(dish => (
        <MenuItem
          key={dish.dish_id}
          dish={dish}
          quantity={cart[dish.dish_id] || 0}
          onIncrease={() => onIncrease(dish.dish_id)}
          onDecrease={() => onDecrease(dish.dish_id)}
        />
      ))}
    </section>
  )
}

export default MenuCategory
