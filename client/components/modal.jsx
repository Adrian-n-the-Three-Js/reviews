import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ModalWrapper from './modalwrapper.jsx';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeType: null
    }
    this.background = React.createRef();
    this.transitionEnd = this.transitionEnd.bind(this);
    this.onEscKeyDown = this.onEscKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onEscKeyDown, false);
    setTimeout(() => this.setState({fadeType: 'in'}), 0);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.isOpen && prevProps.isOpen) {
      this.setState({fadeType: 'out'});
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscKeyDown, false);
  }

  transitionEnd(e) {
    if (e.propertyName !== 'opacity' || this.state.fadeType === 'in') return;
    if (this.state.fadeType === 'out') {
      this.props.onClose();
    }
  }

  onEscKeyDown(e) {
    if (e.key !== 'Escape') return;
    this.setState({fadeType: 'out'});
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({fadeType: 'out'});
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
            <button onClick={this.handleClick} className="close">
              ×
            </button>
          </div>

          <div className="box-content">
            <p><input type="text" placeholder="username"/></p>
            <input type="text" placeholder="Tell us about your stay" />
          </div>

          <div className="box-footer">
            <button onClick={this.handleClick} className="close">
              Submit
            </button>
            <button onClick={this.handleClick} className="close">
              Close
            </button>
          </div>
        </div>
        <div
          className={`background`}
          onMouseDown={this.handleClick}
          ref={this.background}
        />
      </ModalWrapper>,
      modalRoot
    );
  }
}

export default Modal;