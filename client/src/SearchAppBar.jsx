import * as React from 'react';
import { useState, useEffect } from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SearchField from "./SearchField.jsx";
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import Button from '@mui/material/InputBase';
import Autocomplete from './Autocomplete.jsx';
//import Autocomplete from './Autocomplete.jsx';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 0, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '50ch',
      },
    },
  },
}));



// const form = document.querySelector('.css-yz9k0d-MuiInputBase-input').value;
//const input = form.querySelector('input[type="text"]');

// form.addEventListener('submit', async (event) => {
//   event.preventDefault();
//   if (event !== null) {
//     const results = await provider.search({ query: input.value });
//     console.log(results); // » [{}, {}, {}, ...]
//   }

// });

export default function SearchAppBar(props) {
  const [search, setSearch] = useState('');
  const [locations, setLocations] = useState([])

  const handleChange = async (event) => {
    const provider = new OpenStreetMapProvider();
    setSearch(event.target.value);
    // function from parent
    const results = await props.jsonLocations(search);
    console.log(results)
    setLocations(results);
    }




  // console.log(search);

  return (<>
  <Box sx={{ flexGrow: props.test }} >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            lineHeight="1"
          >
            Nomad Map
            <br />
            <small style={{margin: "0px", fontSize: "14px"}}>Find communities in the place you're at</small>
          </Typography>
          <div style={{width: "40ch", id: "autofill", gridArea: 1 / 1 / 2 / 2, overflow: "visible"}}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                value={search}
                onChange={handleChange}
                placeholder="enter your search here"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Autocomplete addLocations={locations} />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}
