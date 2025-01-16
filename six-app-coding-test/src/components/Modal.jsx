export default function Modal({close_modal, children}) {
  return (
    <div className="modal">
      <div className="cart">
        <div className="text-button-close-icon" onClick={close_modal}>X</div>
        {children}

      </div>
    </div>
  )
}