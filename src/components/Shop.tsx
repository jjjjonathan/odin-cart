import Item, { ShopItem } from './Item';

type ShopProps = {
  items: ShopItem[];
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
};

const Shop = ({ items, onAddToCart, onRemoveFromCart }: ShopProps) => (
  <>
    <div>
      <h3>Look for things to fill your Odincart.</h3>
      <p className="lead">Remember, none of this is real.</p>
    </div>
    <div className="shop">
      {items.map((item, index) => {
        return (
          <Item
            item={item}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
            index={index}
            key={index}
          />
        );
      })}
    </div>
  </>
);

export default Shop;
