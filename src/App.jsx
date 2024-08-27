import React, { useState, useEffect } from "react";
import './App.css';
import SearchBar from "./Components/SearchBar.jsx";
import CategoryDropdown from "./Components/CategoryDropdown.jsx";
import PriceSlider from "./Components/PriceSlider.jsx";
import ProductCard from "./Components/ProductCard.jsx";

function App() {
    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(100);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);

    const uniqueCategories = [...new Set(product.map((item) => item.category))];

    let filteredArr = product.filter((data) => {
        return (
            data.title.toLowerCase().includes(search.toLowerCase()) &&
            (category === "" || data.category === category) &&
            data.price <= price
        );
    });

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-center mb-10  text-4xl font-bold text-gray-800 underline">
                Products Catalog
            </h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
                <CategoryDropdown
                    categories={uniqueCategories}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <PriceSlider value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
                {filteredArr.map((data) => (
                    <ProductCard key={data.id} product={data} />
                ))}
            </div>
        </div>
    );
}

export default App;
