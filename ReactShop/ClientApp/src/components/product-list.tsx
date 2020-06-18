import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ProductFilter } from "."

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const ProductList: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={2}>
          <Paper className={classes.paper}><ProductFilter /></Paper>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Paper className={classes.paper}>xs=12 sm=9</Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductList;
