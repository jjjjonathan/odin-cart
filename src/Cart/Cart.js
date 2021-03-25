export default function Cart(props) {
  const cartItems = props.items
    .map((item, index) => {
      item.index = index;
      return item;
    })
    .filter((item) => item.quantityInCart > 0);

  const CartTotal = (props) => {
    if (cartItems.length !== 0) {
      return (
        <div className="cart-total">
          Total: $
          {cartItems.reduce((accumulator, item) => {
            return accumulator + item.quantityInCart * item.price;
          }, 0)}
          <button type="button">Checkout</button>
        </div>
      );
    } else {
      return null;
    }
  };

  const CartLead = (props) => {
    if (cartItems.length === 0) {
      return <p className="lead">nothing at the moment, apparently.</p>;
    } else {
      return null;
    }
  };

  return (
    <div>
      <h3>Odincart contains:</h3>
      <CartLead cartItems={cartItems} />
      <div className="cart">
        {cartItems.map((item) => {
          return (
            <div className="cart-item" key={item.index}>
              <div className="cart-item-total-price">
                ${item.quantityInCart * item.price}
              </div>
              <div className="cart-item-title">{item.title}</div>
              <div className="cart-item-each-price">${item.price} each</div>
              <div className="cart-item-quantity">
                <label htmlFor="quantity">
                  Qty:
                  <select
                    name="quantity"
                    id="quantity"
                    value={item.quantityInCart}
                    onChange={props.onQuantityChange}
                    data-index={item.index}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </label>
              </div>
              <button
                type="button"
                onClick={props.onRemoveFromCart}
                data-index={item.index}
              >
                Remove from cart
              </button>
            </div>
          );
        })}
        <CartTotal cartItems={cartItems} />
      </div>
    </div>
  );
}
