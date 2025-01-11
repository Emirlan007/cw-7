import MenuItem from '../MenuItem/MenuItem.tsx';

const Menu: React.FC<{ menuItems: Menu[], onAddItem: (name: string) => void }> = ({ menuItems, onAddItem }) => {
  return (
    <div className="cards">
      <h2>Добавить товары</h2>
      {menuItems.map(item => (
        <MenuItem key={item.name} item={item} onAdd={() => onAddItem(item.name)} />
      ))}
    </div>
  );
};

export default Menu;

