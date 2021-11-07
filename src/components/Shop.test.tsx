import Shop from './Shop';
import renderer from 'react-test-renderer';

describe('Shop Component', () => {
  it('should match snapshot', () => {
    const items = [
      {
        title: 'Odinfeathers',
        description: 'Faux feathers in pastel gradients',
        price: 595,
        quantityInCart: 0,
      },
      {
        title: 'The Nondescript Odinstone',
        description: 'If you expected description, See above',
        price: 9995,
        quantityInCart: 0,
      },
    ];

    const MockAddToCart = jest.fn();
    const MockRevomeFromCart = jest.fn();

    const tree = renderer
      .create(
        <Shop
          items={items}
          onAddToCart={MockAddToCart}
          onRemoveFromCart={MockRevomeFromCart}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
