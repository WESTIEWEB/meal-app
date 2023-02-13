import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useAppContext } from '../../Context/context';
import CloseIcon from '@material-ui/icons/Close';


const modalStyles = makeStyles((theme) => ({
  modalContainer: {
    position: 'fixed',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    display: 'grid',
    zIndex: 50,
    fontFamily: 'open sans',
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
  },
  modalData: {
    padding: '1.3em 1.4em',
    '& p': {
      color:'gray',
      fontSize: '0.8em',
      textAlign: 'justify',
    },
    '& h3':{
      letterSpacing: '-0.005em',
    },
  },
  img: {
    width: "100%",
    height: "70%",
    cursor: "pointer",
    leftBorderRadius: '0.2em',
    rightBorderRadius: '0.2em',
  },
  closeIcon: {
    color:'#5c6670', 
    background:'#ffe6e6', 
    // background:'#b32d00',
    cursor:'pointer',
    transition: 'all 0.3s ease',
    '&:hover':{
      color: '#f00',
      transform: 'translateY(+2px)',
      boxShadow: '0 0 5px rgba(0,0,0,0.2)'
    }
  },
  modalFooter: {
    display:'flex', 
    justifyContent:'space-between',
    '& a:hover':{
      color: '#132639'
    },
  }
}));

interface AppContextProps {
  selectedMeal: Record<string, any>;
  closeModal: () => void;
}

const Modal = () => {
  const { closeModal, selectedMeal } = useAppContext() as AppContextProps;
  const {
    strSource: source,strMealThumb:image,idMeal:id, strCategory:category, strInstructions:instructions, strMeal: title 
  } = selectedMeal;
  const classes = modalStyles();
  return (
    <aside className={classes.modalContainer}>
      <div className={classes.modatContent}>
        <img src={image} alt={title} className={classes.img} />
        <div className={classes.modalData}>
          <h2>{title}</h2>
          <h3>Category: <span style={{fontSize:'.8em', letterSpacing:'0.1em'}}>{category}</span></h3>
          <h3>Instructions:</h3>
          <p>{instructions}</p>
            <div className={classes.modalFooter}>
              <a href={source}target='_blank'>
                original source
              </a>
              <CloseIcon className={classes.closeIcon} onClick={closeModal} />
            </div>
        </div>
      </div>
    </aside>
    
  )
}

export default Modal;