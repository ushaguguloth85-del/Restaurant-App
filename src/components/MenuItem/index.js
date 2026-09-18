import './index.css'

const MenuItem = props => {
  const {dish, quantity, onIncrease, onDecrease} = props

  const isAvailable = dish.dish_Availability === true

  const hasCustomizations =
    Array.isArray(dish.addonCat) && dish.addonCat.length > 0

  return (
    <div className="menu-item">
      <div className="menu-item-details">
        <div className="dish-name-container">
          <span className={dish.dish_Type === 2 ? 'non-veg-icon' : 'veg-icon'}>
            ●
          </span>

          <h2>{dish.dish_name}</h2>
        </div>

        <p className="dish-price">
          {dish.dish_currency} {dish.dish_price}
        </p>

        <p className="dish-description">{dish.dish_description}</p>

        <p className="dish-calories">{dish.dish_calories} Calories</p>

        {!isAvailable && <p className="not-available">Not available</p>}

        {hasCustomizations && (
          <p className="customization">Customizations available</p>
        )}
      </div>

      <div className="dish-image-container">
        <img
          src={dish.dish_image}
          alt={dish.dish_name}
          className="dish-image"
        />

        {isAvailable && (
          <div className="quantity-container">
            <button type="button" onClick={onDecrease}>
              -
            </button>

            <p className="quantity">{quantity}</p>

            <button type="button" onClick={onIncrease}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default MenuItem
