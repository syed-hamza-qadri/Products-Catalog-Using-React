function SearchBar({ value, onChange }) {
    return (
        <input
            placeholder="Search"
            type="search"
            className="border-2 p-3 rounded-lg focus:outline-none focus:border-indigo-500 w-full"
            value={value}
            onChange={onChange}
        />
    );
}

export default SearchBar;
