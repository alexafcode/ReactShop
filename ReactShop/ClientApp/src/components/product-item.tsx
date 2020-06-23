import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Paper from "@material-ui/core/Paper";
import { ProductsType } from "./types";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: "70%",
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    price: {
      textAlign: "right",
      fontSize: 22,
    },
  })
);

type ProductItemProps = {
  product: ProductsType;
};

const ProductItem: React.FC<ProductItemProps> = ({
  product,
}: ProductItemProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src={product.image_preview}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={6} sm container direction="row">
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5" color={"primary"}>
                  {product.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution:
                  {`${product.screen_width}X${product.screen_height}`}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Resolution: {product.resolution}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  CPU: {product.cpu_name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  RAM: {product.ram} Gb
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item></Grid>
            </Grid>
          </Grid>
        </Grid>
        <Typography variant="h6" className={classes.price}>
          ${product.price}
        </Typography>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Rating
            name="half-rating"
            defaultValue={product.rating}
            precision={0.5}
            readOnly
          />
          <Button
            variant="contained"
            color="primary"
            endIcon={<AddShoppingCartIcon></AddShoppingCartIcon>}
          >
            Add to Cart
          </Button>
        </Grid>
      </Paper>
    </div>
  );
};

export default ProductItem;
