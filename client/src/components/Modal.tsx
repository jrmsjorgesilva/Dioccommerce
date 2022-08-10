import React from "react";

const Modal: React.FC = () => {
  return (
    <form className="modal">
      <div className="modal__header">Modal</div>
      <div className="modal__body">
        <input className="modal__input" type="text" placeholder="value" value="" onChange={() => {}} />
        <input className="modal__input" type="text" placeholder="value" value="" onChange={() => {}} />
        <input className="modal__input" type="text" placeholder="value" value="" onChange={() => {}} />
        <input className="modal__input" type="text" placeholder="value" value="" onChange={() => {}} />
      </div>
      <div className="modal__footer">footer &copy; 2022</div>
    </form>
  );
};

export default Modal;
