function PriceSlider({ value, onChange }) {
    return (
        <div className="flex flex-col w-full">
            <label className="font-semibold mb-2">Price Range: ${value}</label>
            <input
                type="range"
                min="0"
                max="1000"
                value={value}
                className="slider accent-indigo-600"
                onChange={onChange}
            />
        </div>
    );
}

export default PriceSlider;
