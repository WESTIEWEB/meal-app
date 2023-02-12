import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const modalStyles = makeStyles((theme) => ({
  modalContainer: {
    position: 'fixed',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    display: 'grid',
    zIndex: 50,
    backgroundColor: 'rgba(0,0,0,0.85)',
    // display: 'flex',
    placeItems: 'center',
    transition: 'all 0.3s ease-in-out',

  },
  modatContent: {
    width: '80vw',
    height: '80%',
    overflow: 'scroll',
    borderRadius: '0.2em',
    maxWidth:'800px',
    backgroundColor: '#fff',
    trnsform: 'translate(-50%, -50%)',
  }
}));

const Modal = () => {
  const classes = modalStyles();
  return (
    <aside className={classes.modalContainer}>
      <div className={classes.modatContent}>
        <h1>Modal Container</h1>
      </div>
    </aside>
    
  )
}

export default Modal;