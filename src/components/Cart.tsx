import { ShopItem } from './Item';
import { RemoveFromCartHandler } from './CartStatus';

type CartProps = {
  items: ShopItem[];
  onQuantityChange: any; //fix
  onRemoveFromCart: RemoveFromCartHandler;
};

const Cart = ({ items, onQuantityChange, onRemoveFromCart }: CartProps) => {
  const cartItems = items
    .map((item, index) => ({ ...item, storeIndex: index }))
    .filter((item) => item.quantityInCart > 0);

  const cartTotal = () => {
    if (cartItems.length > 0) {
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

  const cartLead = () => {
    if (cartItems.length === 0) {
      return <p className="lead">nothing at the moment, apparently.</p>;
    } else {
      return null;
    }
  };

  return (
    <div>
      <h3>Odincart contains:</h3>
      {cartLead()}
      <div className="cart">
        {cartItems.map((item) => {
          return (
            <div className="cart-item" key={item.storeIndex}>
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
                    onChange={onQuantityChange}
                    data-index={item.storeIndex}
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
                onClick={() => onRemoveFromCart(item.storeIndex)}
              >
                Remove from cart
              </button>
            </div>
          );
        })}
        {cartTotal()}
      </div>
    </div>
  );
};

export default Cart;
