import React from "react";

interface CategoryTabsProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const categories = ["All Projects", "Frontend", "Full Stack", "Machine Learning", "Data Science"];

const CategoryTabs: React.FC<CategoryTabsProps> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex justify-center items-center flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mt-4">
      {/* Dropdown for small screens */}
      <div className="sm:hidden w-full px-4">
        <div className="relative w-full">
          <select
            className="w-full px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-blue-600 dark:text-white dark:focus:ring-blue-500 transition ease-in-out shadow-lg appearance-none"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category} className="text-sm">
                {category}
              </option>
            ))}
          </select>

          {/* Custom arrow icon */}
          <div className="absolute top-0 right-0 p-4 text-white pointer-events-none">
            ▼ {/* Custom arrow for visual effect */}
          </div>
        </div>
      </div>

      {/* Tabs for larger screens */}
      <div className="hidden sm:flex justify-center items-center space-x-3">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 
              ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg transform scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
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
