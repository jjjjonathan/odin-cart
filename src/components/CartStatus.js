const CartStatus = (props) => {
  if (props.quantityInCart === 0) {
    return (
      <div className="item-form">
        <form noValidate onSubmit={props.onAddToCart} data-index={props.index}>
          <label htmlFor="quantity">Qty:</label>
          <select name="quantity" id="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <button type="submit">Add to cart</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="item-form">
        <p className="success">Added {props.quantityInCart} to cart!</p>
        <button
          type="button"
          onClick={props.onRemoveFromCart}
          data-index={props.index}
        >
          Remove from cart
        </button>
      </div>
    );
  }
};

export default CartStatus;
