import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    updateRating,
    updateCategory,
    updateSearchValue,
    clearAllFilters,
  } = props

  const getSearchValue = event => {
    console.log(event.key)
    if (event.key === 'Enter') {
      const val = event.target.value
      updateSearchValue(val)
    }
  }
  const clearFilters = () => {
    clearAllFilters()
  }

  return (
    <div className="filters-group-container">
      <h1>Filters Group</h1>
      <input type="search" onKeyPress={getSearchValue} />
      <div>
        <h1>Category</h1>
        {categoryOptions.map(item => {
          const updateCategoryId = () => {
            updateCategory(item.categoryId.toString())
          }
          return (
            <p key={item.categoryId} onClick={updateCategoryId}>
              {item.name}
            </p>
          )
        })}
      </div>
      <ul>
        {ratingsList.map(item => {
          const updateRatingId = () => {
            updateRating(item.ratingId.toString())
          }
          return (
            <li onClick={updateRatingId} key={item.ratingId}>
              <img src={item.imageUrl} alt={`rating-${item.ratingId}`} />
            </li>
          )
        })}
      </ul>
      <button type="button" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
