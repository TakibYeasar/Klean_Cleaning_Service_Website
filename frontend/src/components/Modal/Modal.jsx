
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import "./Modal.scss";
import Authenticate from '../../pages/Authenticate/Authenticate';
import Registrations from '../../pages/Registrations/Registrations';

const Modal = ({ isOpen, onClose, formType }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose} className="modal-close">
                    <FaTimes className="text-2xl" />
                </button>
                {formType === 'Authenticate' ? <Authenticate /> : <Registrations />}
            </div>
        </div>
    );
};

export default Modal;
