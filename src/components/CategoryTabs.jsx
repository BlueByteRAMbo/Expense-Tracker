import { categories } from "../utils/categories";

function CategoryTabs({ activeCategory, setActiveCategory }) {

  const tabs = ["All", ...categories];

  return (
    <div className="category-tabs">

      {tabs.map(cat => (
        <button
          key={cat}
          className={activeCategory === cat ? "active-tab" : ""}
          onClick={() => setActiveCategory(cat)}
        >
          {cat}
        </button>
      ))}

    </div>
  );
}

export default CategoryTabs;