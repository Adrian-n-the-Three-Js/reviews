import App from '../client/components/app.jsx';
import renderer from 'react-test-renderer';

describe('App', () => {
  it('renders appropriately', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});