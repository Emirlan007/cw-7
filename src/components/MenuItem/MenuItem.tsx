const MenuItem: React.FC<{ item: Menu, onAdd: () => void }> = ({ item, onAdd }) => {
  return (
    <div className="items">
      <p>{item.name} - {item.price} KGS</p>
      <button className="btns" onClick={onAdd}>Добавить</button>
    </div>
  );
};

export default MenuItem;