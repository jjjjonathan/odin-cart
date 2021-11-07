import renderer from 'react-test-renderer';
import CartStatus from './CartStatus';

const MockAddToCart = jest.fn();
const MockRevomeFromCart = jest.fn();

describe('Cart Status Component', () => {
  it('should display success message and remove button when quantity is greater than 0', () => {
    const tree = renderer
      .create(
        <CartStatus
          quantityInCart={3}
          onAddToCart={MockAddToCart}
          onRemoveFromCart={MockRevomeFromCart}
          index={0}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display dropdown of quantity options when quantity is 0', () => {
    const tree = renderer
      .create(
        <CartStatus
          quantityInCart={0}
          onAddToCart={MockAddToCart}
          onRemoveFromCart={MockRevomeFromCart}
          index={0}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
