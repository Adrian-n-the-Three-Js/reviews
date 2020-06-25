import Modal from '../client/components/modal.jsx';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

describe('Modal', () => {
  it('renders with given props', () => {
    ReactDOM.createPortal = jest.fn(modal => modal);
    const wrapper = shallow(
      <Modal
      id="modal"
      isOpen={() => {}}
      onClose={() => {}}
      >
      </Modal>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('renders overlay div', () => {
    ReactDOM.createPortal = jest.fn(modal => modal);
    const wrapper = shallow(
      <Modal
      id="modal"
      isOpen={() => {}}
      onClose={() => {}}
      >
      </Modal>
    );
    const overlay = wrapper.find('.box-dialog');
    expect(overlay).toHaveLength(1);
  });

  it('should invoke handleClick upon user click', () => {
    ReactDOM.createPortal = jest.fn(modal => modal);
    const mockOnClose = jest.fn();
    const spy = jest.spyOn(Modal.prototype, 'handleClick');
    const wrapper = shallow(
      <Modal
      id="modal"
      isOpen={() => {}}
      onClose={() => {}}
      >
      </Modal>
    );
    wrapper.find('div.box-header button').simulate('click', { preventDefault: jest.fn() });
    expect(spy).toHaveBeenCalled();
  });

  it('should invoke handleClick upon user click', () => {
    ReactDOM.createPortal = jest.fn(modal => modal);
    const mockOnClose = jest.fn();
    const spy = jest.spyOn(Modal.prototype, 'handleClick');
    const wrapper = shallow(
      <Modal
      id="modal"
      isOpen={() => {}}
      onClose={() => {}}
      >
      </Modal>
    );
    wrapper.find('div.box-footer').first().simulate('click', { preventDefault: jest.fn() });
    expect(spy).toHaveBeenCalled();
  });

});