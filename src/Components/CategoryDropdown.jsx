function CategoryDropdown({ categories, value, onChange }) {
    return (
        <select
            className="border-2 p-3 rounded-lg focus:outline-none focus:border-indigo-500 w-full"
            value={value}
            onChange={onChange}
        >
            <option value="">All Categories</option>
            {categories.map((cat, index) => (
                <option key={index} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
            ))}
        </select>
    );
}

export default CategoryDropdown;
