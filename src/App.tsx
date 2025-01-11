import './App.css';
import { useState } from 'react';
import Menu from './components/Menu/Menu.tsx';
import OrderDetails from './components/OrderDetails/OrderDetails.tsx';

const MENU_ITEMS: Menu[] = [
  { name: 'Гамбургер', price: 120, count: 0 },
  { name: 'Чизбургер', price: 150, count: 0 },
  { name: 'Фри', price: 80, count: 0 },
  { name: 'Кола', price: 90, count: 0 },
  { name: 'Фанта', price: 90, count: 0 },
  { name: 'Пепси', price: 90, count: 0 },
];

const App: React.FC = () => {
  const [menuItems, setMenuItems] = useState<Menu[]>(MENU_ITEMS);

  const addItem = (itemName: string) => {
    setMenuItems(prevItems =>
      prevItems.map(item => item.name === itemName ? { ...item, count: item.count + 1 } : item)
    );
  };

  const removeItem = (itemName: string) => {
    setMenuItems(prevItems =>
      prevItems.map(item => item.name === itemName && item.count > 0 ? { ...item, count: item.count - 1 } : item)
    );
  };

  return (
    <>
      <h1>FastFood</h1>
      <div className="app-container">
        <OrderDetails menuItems={menuItems} onRemoveItem={removeItem} />
        <hr className="separator" />
        <Menu menuItems={menuItems} onAddItem={addItem} />
      </div>
    </>
  );
};

export default App;
