export default function SearchBar() {
  return (
    <div className="SearchBar">
      <div id="searchContainer" className="row">
        <div className="input-group">
          <input
            id="citySearch"
            type="text"
            className="form-control"
            placeholder="Enter a city..."
            aria-label="City Search"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button
              id="searchButton"
              className="btn btn-outline-secondary"
              type="button"
            >
              SEARCH
            </button>
            <button
              id="currentButton"
              className="btn btn-outline-secondary"
              type="button"
            >
              CURRENT
            </button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
