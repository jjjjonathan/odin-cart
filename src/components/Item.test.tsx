import renderer from 'react-test-renderer';
import Item from './Item';

describe('Item Component', () => {
  it('should match snapshot', () => {
    const item = {
      title: 'Odinfeathers',
      description: 'Faux feathers in pastel gradients',
      price: 595,
      quantityInCart: 0,
    };

    const MockAddToCart = jest.fn();
    const MockRevomeFromCart = jest.fn();

    const tree = renderer
      .create(
        <Item
          item={item}
          onAddToCart={MockAddToCart}
          onRemoveFromCart={MockRevomeFromCart}
          index={0}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
