export default function Cart(props) {
  return (
    <div>
      <h3>Odincart contains:</h3>
      <div className="cart">
        {props.cartItems.map((item) => {
          return (
            <div className="cart-item" key={item.index}>
              <div className="cart-item-title">{item.title}</div>
              <div className="cart-item-each-price">${item.price}</div>
              <div className="cart-item-quantity">
                Qty: {item.quantityInCart}
              </div>
              <div className="cart-item-total-price">
                Total: ${item.quantityInCart * item.price}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
