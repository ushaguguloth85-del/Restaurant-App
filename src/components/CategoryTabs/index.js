import './index.css'

const CategoryTabs = props => {
  const {categories, activeCategory, onCategoryChange} = props

  return (
    <div className="category-tabs-container">
      <div className="category-tabs">
        {categories.map(category => (
          <button
            key={category.menu_category_id}
            type="button"
            onClick={() => onCategoryChange(category.menu_category_id)}
            className={
              activeCategory === category.menu_category_id
                ? 'category-button active'
                : 'category-button'
            }
          >
            {category.menu_category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryTabs
