/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import {imagesUrl} from '../../../constants';

// eslint-disable-next-line react/prop-types
const Modal = ({show, onClose, children}) => {
    // todo Render nothing if the "show" prop is false
    if(!show) {
      return null;
    }
    return (
      <div className="backdrop">
        <div className="modal">
           <div className="close-block">
            <img alt="closeImage"
                 className="close-image"
                 src={`${imagesUrl}/close.jpg`}
                 onClick={onClose}
                 />
           </div>
          {children}
        </div>
      </div>
    );
  }

Modal.propTypes = {
   onClose: PropTypes.func.isRequired,
   show: PropTypes.bool,
};

export default Modal;
