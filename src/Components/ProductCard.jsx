function ProductCard({ product }) {
    return (
        <div
            className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
            <img
                className="object-cover w-full h-48 rounded-t-lg"
                src={product.image}
                alt={product.title}
            />
            <div className="p-6">
                <h5 className="text-xl font-bold mb-2 text-gray-800">
                    {product.title}
                </h5>
                <p className="text-sm text-gray-600 mb-4">{product.category}</p>
                {/* <p className="text-gray-700 mb-4">{product.description}</p> */}
                <div className="text-lg font-semibold text-indigo-600">
                    ${product.price}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
