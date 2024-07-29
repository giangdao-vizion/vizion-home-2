import { useState } from 'react';
import BarIcon from '../icons/BarIcon';
import { MENU_TYPE, menuData } from '@/constants/menu';
import ChevronRightIcon from '../icons/ChevronRightIcon';
import Link from 'next/link';

const MenuMobile = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(MENU_TYPE.PRODUCTS);

  const handleOpenCategory = selectedCategory => {
    setCurrentCategory(prevCategory => {
      if (prevCategory === selectedCategory) return null;
      return selectedCategory;
    });
  };

  return (
    <div className="menu-mobile-container mobile-only">
      <button className="btn btn-sm flex flex-align-c menu-toggle-btn" onClick={() => setToggleMenu(val => !val)}>
        <BarIcon className="menu-toggle-icon" />
      </button>
      <div className={`menu-mobile-content${toggleMenu ? ' open' : ''}`}>
        {menuData.map(menuItem => (
          <div className="menu-item-container" key={menuItem.key}>
            <h1
              className={`menu-item-title m-title${menuItem.key === currentCategory ? ' open' : ''}`}
              onClick={() => handleOpenCategory(menuItem.key)}
            >
              {menuItem.title}
              {!!menuItem.categories?.length && <ChevronRightIcon className="icon" />}
            </h1>
            <div className={`menu-item-categories-wrapper${menuItem.key === currentCategory ? ' open' : ''}`}>
              <div className="menu-item-categories">
                {/* categories */}
                {menuItem.categories.map((categoryItem, categoryIndex) => (
                  <div className="category-item" key={categoryIndex}>
                    <h2 className="category-item-title m-title">{categoryItem.title}</h2>
                    <div className="category-item-children">
                      {/* children */}
                      {categoryItem.children.map((item, index) => (
                        <div className="children-item" key={index}>
                          {item.imgUrl ? (
                            <img src={item.imgUrl} alt={item.imgAlt} className="children-item-img" />
                          ) : (
                            <Link className="children-item-title m-title" href={item.link}>
                              <item.icon className="icon" />
                              {item.title}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuMobile;
