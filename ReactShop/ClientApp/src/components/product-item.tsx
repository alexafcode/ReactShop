import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Paper from "@material-ui/core/Paper";
import { PhonesType } from "./types";
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
      maxWidth: "65%",
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
  phone: PhonesType;
};

const ProductItem: React.FC<ProductItemProps> = ({
  phone,
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
                src={phone.image_preview}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={6} sm container direction="row">
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5" color={"primary"}>
                  {phone.phone_name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Size: {phone.screen_size} inch Resolution: {phone.resolution}
                  ppx
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution:
                  {`${phone.screen_width}X${phone.screen_height}`}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Resolution: {phone.resolution}ppx
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column">
              <Typography variant="body2" color="textSecondary">
                CPU: {phone.cpu_name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                CPU Core: {phone.cpu_core}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                RAM: {phone.ram} Gb
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Sim card: {phone.sim}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Battery: {phone.battery} mAh
              </Typography>
              <Typography variant="body2" color="textSecondary">
                OS: {phone.os}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Rating
            name="half-rating"
            defaultValue={phone.rating}
            precision={0.5}
            readOnly
          />
          <Typography className={classes.price}>${phone.price}</Typography>
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
