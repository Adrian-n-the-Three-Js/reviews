import Modal from '../client/components/modal.jsx';
import renderer from 'react-test-renderer';

describe('Modal', () => {

  it('renders without crashing', () => {
    shallow(<Modal />);
  });

});