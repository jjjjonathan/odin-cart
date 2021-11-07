import React from 'react';
import CartStatus from './CartStatus';

export type ShopItem = {
  title: string;
  description: string;
  price: number;
  quantityInCart: number;
};

type ItemProps = {
  item: ShopItem;
  onAddToCart: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onRemoveFromCart: (event: React.MouseEvent<HTMLButtonElement>) => void;
  index: number;
};

const Item = ({ item, onAddToCart, onRemoveFromCart, index }: ItemProps) => {
  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onAddToCart(event);
  };

  const handleRemoveFromCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    onRemoveFromCart(event);
  };

  return (
    <div className="item-card">
      <h4 className="item-title">{item.title}</h4>
      <p className="item-description">{item.description}</p>
      <p className="price">${item.price}</p>
      <CartStatus
        quantityInCart={item.quantityInCart}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        index={index}
      />
    </div>
  );
};

export default Item;
