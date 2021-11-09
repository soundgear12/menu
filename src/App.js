import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCateogries = ['all', ...new Set(items.map((item) => item.category))];


function App() {
  const [menuItems, setMenutItems] = useState(items);
  const [categories, setCategories] = useState(allCateogries);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenutItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenutItems(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </div>

      </section>
    </main>
  );
}

export default App;
