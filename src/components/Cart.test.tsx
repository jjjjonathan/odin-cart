import renderer from 'react-test-renderer';
import Cart from './Cart';

const MockQuantityChange = jest.fn();
const MockRemoveFromCart = jest.fn();

const items = [
  {
    title: 'Odinfeathers',
    description: 'Faux feathers in pastel gradients',
    price: 595,
    quantityInCart: 3,
  },
  {
    title: 'The Nondescript Odinstone',
    description: 'If you expected description, See above',
    price: 9995,
    quantityInCart: 0,
  },
];

describe('Cart Component', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <Cart
          items={items}
          onQuantityChange={MockQuantityChange}
          onRemoveFromCart={MockRemoveFromCart}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
