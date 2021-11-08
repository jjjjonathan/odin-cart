import React from 'react';
import CartStatus, {
  AddToCartHandler,
  RemoveFromCartHandler,
} from './CartStatus';

export type ShopItem = {
  title: string;
  description: string;
  price: number;
  quantityInCart: number;
};

type ItemProps = {
  item: ShopItem;
  onAddToCart: AddToCartHandler;
  onRemoveFromCart: RemoveFromCartHandler;
  index: number;
};

const Item = ({ item, onAddToCart, onRemoveFromCart, index }: ItemProps) => {
  return (
    <div className="item-card">
      <h4 className="item-title">{item.title}</h4>
      <p className="item-description">{item.description}</p>
      <p className="price">${item.price}</p>
      <CartStatus
        quantityInCart={item.quantityInCart}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
        index={index}
      />
    </div>
  );
};

export default Item;
