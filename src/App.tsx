import './App.css';
import { useState } from 'react';

const MENU_ITEMS: Menu[] = [
  { name: 'Гамбургер', price: 120, count: 0 },
  { name: 'Чизбргер', price: 150, count: 0 },
  { name: 'Фри', price: 80, count: 0 },
  { name: 'Кола', price: 90, count: 0 },
  { name: 'Фанта', price: 90, count: 0 },
  { name: 'Пепси', price: 90, count: 0 },
];

const App: React.FC = () => {

  const [menuItems, setMenuItems] = useState<Menu[]>(MENU_ITEMS);

  const addItem = (itemName: string) => {
    setMenuItems(prevItems =>
      prevItems.map(item => {
        if (item.name === itemName) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      })
    );
  };

  const removeItem = (itemName: string) => {
    setMenuItems(prevItems =>
      prevItems.map(item => {
        if (item.name === itemName && item.count > 0) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      })
    );
  };

  const totalPrice = menuItems.reduce((total, item) => total + item.price * item.count, 0);

  return (
    <>
      <h1>FastFood</h1>
      <div className="app-container">
        <div className="cards">
          <h2>Детали заказа</h2>
          {menuItems.filter(item => item.count > 0).length === 0 ? (
            <p>Заказов нет! <br/> Пожалуйста, сделайте заказ.</p>
          ) : (
            menuItems.filter(item => item.count > 0).map(item => (
              <div key={item.name} className="items">
                <p>{item.name} ({item.count}x) - {item.price * item.count} KGS</p>
                <button className="btns" onClick={() => removeItem(item.name)}>Удалить</button>
              </div>
            ))
          )}
          {totalPrice > 0 && <h3>Итого: {totalPrice} KGS</h3>}
        </div>
        <hr className="separator"/>
        <div className="cards">
          <h2>Добавить товары</h2>
          {menuItems.map(item => (
            <div key={item.name} className="items">
              <p>{item.name} - {item.price} KGS</p>
              <button className="btns" onClick={() => addItem(item.name)}>Добавить</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;