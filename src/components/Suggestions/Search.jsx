const Search = () => {
  return (
    <form className="suggestions-search-form">
      <label className="suggestions-search-form__label" htmlFor="search-input">
        <input
          className="suggestions-search-form__input"
          type="search"
          placeholder="Search Twitter"
          id="search-input"
        />
      </label>
    </form>
  );
};

export default Search;
