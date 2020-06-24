import Modal from '../client/components/modal.jsx';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

describe('Modal', () => {

  // const modalRoot = global.document.createElement('div');
  // modalRoot.setAttribute('id', 'modal-root');
  // const body = global.document.querySelector('body');
  // body.appendChild(modalRoot);

  // afterEach(() => {
  //   component.unmount();
  // });


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

  // write test to simulate modal click -- check to see if closed?

});