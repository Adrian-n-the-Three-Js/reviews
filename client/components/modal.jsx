import React from 'react';
import ReactDOM from 'react-dom';
import ModalWrapper from './modalWrapper.jsx';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeType: null,
    };
    this.background = React.createRef();
    this.transitionEnd = this.transitionEnd.bind(this);
    this.onEscKeyDown = this.onEscKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onEscKeyDown, false);
    setTimeout(() => this.setState({ fadeType: 'in' }), 0);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.isOpen && prevProps.isOpen) {
      this.setState({ fadeType: 'out' });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscKeyDown, false);
  }

  onEscKeyDown(e) {
    if (e.key !== 'Escape') return;
    this.setState({ fadeType: 'out' });
  }

  transitionEnd(e) {
    if (e.propertyName !== 'opacity' || this.state.fadeType === 'in') return;
    if (this.state.fadeType === 'out') {
      this.props.onClose();
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ fadeType: 'out' });
  }

  render() {
    return ReactDOM.createPortal(
      <ModalWrapper
        id={this.props.id}
        className={`wrapper ${"size-" + this.props.modalSize} fade-${this.state.fadeType}`}
        role='dialog'
        modalSize={this.props.modalSize}
        onTransitionEnd={this.transitionEnd}
      >
        <div className="box-dialog">
          <div className="box-header">
            <h4 className="box-title">Leave a review</h4>
            <button type="submit" onClick={this.handleClick} className="close">×</button>
          </div>

          <div className="box-content">
            <label>
              Your overall rating
              <br />
              <select>
              <option value="null"></option>
                <option value="5">Excellent</option>
                <option value="4">Very good</option>
                <option value="3">Average</option>
                <option value="2">Poor</option>
                <option value="1">Terrible</option>
              </select>
            </label>
            <br />
            <label>
              Your review
              <br/>
              <textarea className="main-review-input" type="text" placeholder="Tell people about your experience: your room, location, amenities?" />
            </label>

            <form className="radio-form">
              What sort of trip was this?
              <br />
              <label>
                <input type="radio" name="name" value="1" />
                Business
              </label>
              <label>
                <input type="radio" name="name" value="2" />
                Couples
              </label>
              <label>
                <input type="radio" name="name" value="3" />
                Family
              </label>
              <label>
                <input type="radio" name="name" value="4" />
                Friends
              </label>
              <label>
                <input type="radio" name="name" value="5" />
                Solo
              </label>
            </form>
          </div>

          <div className="box-footer">
            <button type="submit" onClick={this.handleClick} className="close">
              Submit
            </button>
          </div>
        </div>
        <div
          className={`background`}
          onMouseDown={this.handleClick}
          ref={this.background}
        />
      </ModalWrapper>,
      modalRoot,
    );
  }
}

export default Modal;
