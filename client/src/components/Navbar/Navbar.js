import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import memoriesLogo from '../../images/memoriesLogo.png';
import memoriesText from '../../images/memoriesText.png';
import nikkiText from '../../images/nikkiText.png';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/');

    setUser(null);
  };

  const post = () => {
    history.push('/posts');
  }

  const memory = () => {
    history.push('/memory');
  }

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img component={Link} to="/" src={nikkiText} alt="icon" height="45px" />
        <img component={Link} to="/" className={classes.image} src={memoriesLogo} alt="icon" height="40px" />
      </Link>
      <Toolbar>
      {user?.result ? (
      <div className={classes.navlinks}>
        <div>
          <span variant="contained" className={classes.link} onClick={post}>Post</span>
          <span variant="contained" className={classes.link} onClick={memory}>Memories</span>
        </div>
      </div>
      ) : (" ")}
      </Toolbar>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
            {/* <Button variant="contained" className={classes.post} color="secondary" onClick={post}>Post</Button> */}
          </div>
        ) : (
          <Button component={Link} to="/auth" className={classes.login} variant="contained" color="secondary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
