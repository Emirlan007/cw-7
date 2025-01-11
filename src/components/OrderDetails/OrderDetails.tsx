const OrderDetails: React.FC<{ menuItems: Menu[], onRemoveItem: (name: string) => void }> = ({ menuItems, onRemoveItem }) => {

  const filteredItems = menuItems.filter(item => item.count > 0);

  const totalPrice = filteredItems.reduce((total, item) => {
    total += item.price * item.count;
    return total;
  }, 0);

  return (
    <div className="cards">
      <h2>Детали заказа</h2>
      {filteredItems.length === 0 ? (
        <p>Заказов нет! <br /> Пожалуйста, сделайте заказ.</p>
      ) : (
        filteredItems.map(item => (
          <div key={item.name} className="items">
            <p>{item.name} ({item.count}x) - {item.price * item.count} KGS</p>
            <button className="btns" onClick={() => onRemoveItem(item.name)}>Удалить</button>
          </div>
        ))
      )}
      {totalPrice > 0 && <h3>Итого: {totalPrice} KGS</h3>}
    </div>
  );
};

export default OrderDetails;
