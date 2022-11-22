const Modal= ({children})=>  {
    return (
      <div className="modal d-block">
        <div className="modal-dialog">
          <div className="modal-content">
            { children }
          </div>
        </div>
      </div>
    );
  }

  export default Modal;
