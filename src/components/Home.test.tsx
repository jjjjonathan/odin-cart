import Home from './Home';
import renderer from 'react-test-renderer';

describe('Home Component', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
