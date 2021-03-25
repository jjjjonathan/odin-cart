export default function Cart(props) {
  return (
    <div>
      <h3>Odincart contains:</h3>
      <div className="cart">
        {props.cartItems.map((item) => {
          return (
            <div className="cart-item" key={item.index}>
              <div className="cart-item-total-price">
                ${item.quantityInCart * item.price}
              </div>
              <div className="cart-item-title">{item.title}</div>
              <div className="cart-item-each-price">${item.price} each</div>
              <div className="cart-item-quantity">
                Qty: {item.quantityInCart}
                {/* <label htmlFor="quantity">Qty:</label>
                <select name="quantity" id="quantity">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select> */}
              </div>
            </div>
          );
        })}
        <div className="cart-total">
          Total: $
          {props.cartItems.reduce((accumulator, item) => {
            return accumulator + item.quantityInCart * item.price;
          }, 0)}
          <button type="button">Checkout</button>
        </div>
      </div>
    </div>
  );
}
