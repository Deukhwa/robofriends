const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-light-blue"
        onChange={searchChange}
        type="search"
        placeholder="search robots"
      />
    </div>
  )
}

export default SearchBox
