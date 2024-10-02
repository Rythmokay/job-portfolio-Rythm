import React from "react";

interface CategoryTabsProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const categories = ["All Projects", "Frontend", "Full Stack", "Machine Learning", "Data Science"];

const CategoryTabs: React.FC<CategoryTabsProps> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex justify-center items-center flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
      {/* Dropdown for small screens */}
      <div className="sm:hidden">
        <select
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 transition ease-in-out"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
<br/>
      {/* Buttons for larger screens */}
      <div className="hidden sm:flex justify-center items-center space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2
              ${selectedCategory === category 
                ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-xl'  // Selected state colors with blue gradient
                : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800'}  // Non-selected state with gray gradient
            `}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
          
        ))}

      </div>
      
    </div>
  );
};

export default CategoryTabs;
