import Review from '../client/components/review.jsx';
import renderer from 'react-test-renderer';

describe('Review', () => {

  it('renders without crashing', () => {
    shallow(<Review />);
  });

});