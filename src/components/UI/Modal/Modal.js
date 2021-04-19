import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {<Backdrop onClick={props.onClose}/>}
      {<ModalOverlay>{props.children}</ModalOverlay>}
    </>
  );
};

export default Modal;