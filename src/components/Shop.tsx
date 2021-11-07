import Item from './Item';

type ShopItem = {
  title: string;
  description: string;
  price: number;
  quantityInCart: number;
};

type ShopProps = {
  items: ShopItem[];
  onAddToCart: () => void;
  onRemoveFromCart: () => number;
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
            title={item.title}
            description={item.description}
            price={item.price}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
            index={index}
            key={index}
            quantityInCart={item.quantityInCart}
          />
        );
      })}
    </div>
  </>
);

export default Shop;
