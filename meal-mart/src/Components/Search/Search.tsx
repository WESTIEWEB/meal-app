import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import {makeStyles} from "@material-ui/core/styles";
import {BsSearch as SearchIcon} from "react-icons/bs";
import { useAppContext } from '../../Context/context';

const useStyles = makeStyles((theme) => ({
  searchInput: {
    margin: `2.3em 0 2.3em 0`,
    // background: '#FFFFFF',
    color: '#000000',
    opacity: '0.44',
    borderRadius: '0.5em',
    width: '20%',
    padding: '0',
    height: '2em',
    display: 'flex',
    flexDirection: 'row',
    '& ::placeHolder' :{
      fontSize: '0.9rem',
      fontWeight: '700 bpold',
      opacity: '0.9',
      fontFamily: 'open sans',
    }
  } ,
  searchContainer : {
    margin: 'auto',
    height: '5em',
    display: 'flex',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    '& form': {
      display: 'flex',
      flexDirection: 'row',
      width: '80%',
      gap: '0.5em',
      margin: '2.5em 0 2.5em 0',
      justifyContent: 'flex-start',
      alignItems: 'center',
      '& button': {
        textTransform: 'none',
        height: '2.3em !important',
      }
      
    }
  } ,
  searchButton_mo: {
    '& hover': {
      cursor: 'pointer',
    }
  },
  '@media (max-width: 768px)': {
    searchContainer: {
      '& Button': {
        fontSize: '0.8rem',
      }
    }
  }
})) 
interface props {
  setSearchTerm: (searchTerm: string) => void;
  getRandomMeal: () => ((url: string) => void);
}
const Search = () => {
  const [text, setText] = React.useState("");
  const {setSearchTerm, getRandomMeal} = useAppContext() as props;
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    console.log(text)
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(text) {
      setSearchTerm(text);
      // setText("");
    }
  }

  const handleRandomSearch = () => {
    setText("");
    setSearchTerm("");
    getRandomMeal();
  }
  
  return (
    <header className={classes.searchContainer}>
      <form onSubmit={handleSubmit}>
      <TextField
        className={`${classes.searchInput} searchInput_mo`}
        id="search-input"
        value={text}
        placeholder="Search for a meal or cuisine"
        onChange={handleChange}
        variant="outlined"
        fullWidth
        InputProps={{
            endAdornment: (
            <InputAdornment position="end">
                <IconButton aria-label="search">
                {/* <SearchIcon /> */}
                {text && <SearchIcon/>}
                </IconButton>
            </InputAdornment>
            ),
        }}
      />
      <Button type={"submit"} variant="contained" color="primary" className={classes.searchButton_mo}>
        Search
      </Button>
      <Button onClick={handleRandomSearch} variant="contained" color="inherit">
        Surprise me!
      </Button>
      </form>
    </header>
  )
}

export default Search;