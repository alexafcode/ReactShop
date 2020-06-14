import React from "react";
import { SystemState } from "../store/system/types"
import { useSelector } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    // inputRoot: {
    //   color: 'inherit',
    // },
    // inputInput: {
    //   padding: theme.spacing(1, 1, 1, 0),
    //   // vertical padding + font size from searchIcon
    //   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    //   transition: theme.transitions.create('width'),
    //   width: '100%',
    //   [theme.breakpoints.up('md')]: {
    //     width: '20ch',
    //   },
    // },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }),
);


const Header: React.FC = () => {

  const { isAuthenticated } = useSelector((state: SystemState) => state);
  const classes = useStyles();
  const menuId = 'primary-search-account-menu';

  const loginMenu = (
    isAuthenticated ? <IconButton
      edge="end"
      aria-label="account of current user"
      aria-controls={menuId}
      aria-haspopup="true"
      // onClick={handleProfileMenuOpen}
      color="inherit"
    >
      <AccountCircle />
    </IconButton> : <Button color="inherit">Login</Button>
  )

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Phones Shop
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            {loginMenu}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
