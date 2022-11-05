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
//import Button from '@mui/material/InputBase';
import Autocomplete from './Autocomplete.jsx';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';



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



export default function SearchAppBar(props) {
  const [search, setSearch] = useState('');
  const [locations, setLocations] = useState([])
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);



  const handleChange = async (event) => {
    setSearch(event.target.value);
    const provider = new OpenStreetMapProvider();
    // function from parent
    const results = await provider.search({ query: event.target.value });

    setLocations(results);
    }


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
            style={{margin: "5px"}}
            onClick={handleShow}
          >
            <MenuIcon  />
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
            <small style={{margin: "0px", fontSize: "14px"}}>Find community & friends wherever you are</small>
          </Typography>
          <div style={{width: "40ch", id: "autofill", gridArea: 1 / 1 / 2 / 2, overflow: "visible"}}>
            <Search style={{borderRadius: "7px 7px 0px 0px"}}>
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
            <Autocomplete addLocations={locations} locationFunction={props.clickedLocation} />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    <Modal show={show} onHide={handleClose} centered="true">
        <Modal.Header closeButton >
          <Modal.Title style={{fontWeight: "bolder"}}>Nomad Map</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <p>Nomad Map was created to reduce the time to making friends / joining communities when you land in a new place.<br /> <br />  The concept is simple: look up where you're going (or where you're at), find the FB / Chat (Whatsapp, Telegram etc.) and you're off to the races!</p>

          <p>If you have any suggestions or just want to say hi, find me on Twitter: <a href="https://twitter.com/tenzin_rose">@tenzin_rose</a></p>

                  <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Why build this?</Accordion.Header>
                <Accordion.Body>
                  While being a Nomad certiantly is an amazing lifestyle, there is one consistent drawback I see amongst people living it: lonliness.
                  <br /><br />
                  I created this app to contribute to a solution. By providing easy access to communities the hope is people won't feel so isolated when they land in a given location & can make friends more easily.
                  <br /><br />
                  The plan for now is to maintain this as a public utility.
                  <br /><br />
                  If people find this useful I'll continue to build out the product roadmap.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What is this built on?</Accordion.Header>
                <Accordion.Body>
                The data is stored on the blockchain (<a href="https://arbitrum.io/">Arbitrum</a>) providing a public read/write database for the community to continue to add to the project.
                <br /><br />
                Why use a blockchain? 1/ if this is to be a public utility available to all regardless of where they are it needs to be on a neutral, permisionless DB 2/ in order to prevent abuse/spam there needs to be a marginal cost to write to the DB.
                <br /><br />
                This website is deployed to the decentralized web via IPFS (<a href="https://ipfs.tech/">IPFS</a>).
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Roadmap</Accordion.Header>
                <Accordion.Body>
                <ul>
                  <li>Write functionality: create locations & contribute to the project by adding groups/chats</li>
                  <li>Community features: rewards for contributing, Slack/Discord group</li>
                  <li>What would you like to see? DM me on Twitter: <a href="https://twitter.com/tenzin_rose">@tenzin_rose</a></li>
                </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Modal.Body>

      </Modal>
    </>
  );
}
