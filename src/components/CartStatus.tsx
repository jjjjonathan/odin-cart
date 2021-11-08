import React, { useState, useEffect } from 'react';

export type AddToCartHandler = (index: number, newQuantity: number) => void;
export type RemoveFromCartHandler = (index: number) => void;

type CartStatusProps = {
  quantityInCart: number;
  onAddToCart: AddToCartHandler;
  onRemoveFromCart: RemoveFromCartHandler;
  index: number;
};

const CartStatus = ({
  quantityInCart,
  onAddToCart,
  onRemoveFromCart,
  index,
}: CartStatusProps) => {
  const [selectedQuantity, setSelectedQuantity] = useState<string>('1');

  useEffect(() => {
    if (quantityInCart > 0) setSelectedQuantity(quantityInCart.toString());
  }, [quantityInCart]);

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newQuantity = parseInt(selectedQuantity);
    onAddToCart(index, newQuantity);
  };

  if (quantityInCart === 0) {
    return (
      <div className="item-form">
        <label htmlFor="quantity">Qty:</label>
        <select
          value={selectedQuantity}
          onChange={(e) => setSelectedQuantity(e.target.value)}
          name="quantity"
          id="quantity"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    );
  } else {
    return (
      <div className="item-form">
        <p className="success">Added {quantityInCart} to cart!</p>
        <button type="button" onClick={() => onRemoveFromCart(index)}>
          Remove from cart
        </button>
      </div>
    );
  }
};

export default CartStatus;
